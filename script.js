const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// ---------- Map setup ----------
const map = L.map("map").setView([12.89, 77.57], 12);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const markers = {};
let markerLayer = L.layerGroup().addTo(map);

// ---------- Helpers ----------
function toMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function format12h(t) {
  let [h, m] = t.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${String(m).padStart(2, "0")} ${ampm}`;
}

function isOpenNow(loc) {
  const now = new Date();
  if (!loc.days.includes(now.getDay())) return false;
  const mins = now.getHours() * 60 + now.getMinutes();
  return mins >= toMinutes(loc.open) && mins < toMinutes(loc.close);
}

function daysText(days) {
  if (days.length === 7) return "Every day";
  return days.map(d => DAY_NAMES[d]).join(", ");
}

// Google Maps link: uses l.mapsLink if you add one in data.js, otherwise builds it from lat/lng
function mapsUrl(l) {
  return l.mapsLink || `https://www.google.com/maps/search/?api=1&query=${l.lat},${l.lng}`;
}

// ---------- Filters ----------
const typeFilter = document.getElementById("typeFilter");
const searchBox = document.getElementById("search");
const openNowBox = document.getElementById("openNow");

const allTypes = [...new Set(locations.flatMap(l => l.types))].sort();
typeFilter.innerHTML =
  `<option value="">All types</option>` +
  allTypes.map(t => `<option value="${t}">${t}</option>`).join("");

function getFiltered() {
  const q = searchBox.value.trim().toLowerCase();
  return locations.filter(l => {
    const matchText = !q || (l.name + " " + l.address).toLowerCase().includes(q);
    const matchType = !typeFilter.value || l.types.includes(typeFilter.value);
    const matchOpen = !openNowBox.checked || isOpenNow(l);
    return matchText && matchType && matchOpen;
  });
}

// ---------- Rendering ----------
function popupHtml(l) {
  const open = isOpenNow(l);
  return `
    <strong>${l.name}</strong><br>
    ${l.address}<br>
    <span class="status ${open ? "open" : "closed"}">${open ? "Open now" : "Closed"}</span><br>
    ${format12h(l.open)} to ${format12h(l.close)} (${daysText(l.days)})<br>
    Accepts: ${l.types.join(", ")}<br>
    <a class="maps-link" href="${mapsUrl(l)}" target="_blank" rel="noopener">Open in Google Maps</a>`;
}

function render() {
  const results = getFiltered();
  const list = document.getElementById("list");
  markerLayer.clearLayers();
  list.innerHTML = "";

  document.getElementById("count").textContent =
    `${results.length} collection point${results.length === 1 ? "" : "s"} found`;

  if (results.length === 0) {
    list.innerHTML = `<li class="empty">No matches. Try a different waste type or turn off "Open now only".</li>`;
    return;
  }

  results.forEach(l => {
    const open = isOpenNow(l);

    const marker = L.marker([l.lat, l.lng]).bindPopup(popupHtml(l));
    marker.addTo(markerLayer);
    markers[l.id] = marker;

    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${l.name}</h3>
      <p class="addr">${l.address}</p>
      <span class="status ${open ? "open" : "closed"}">${open ? "Open now" : "Closed"}</span>
      <p class="hours">${format12h(l.open)} to ${format12h(l.close)} &middot; ${daysText(l.days)}</p>
      <div class="tags">${l.types.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <a class="maps-link" href="${mapsUrl(l)}" target="_blank" rel="noopener">Open in Google Maps</a>`;
    li.querySelector(".maps-link").addEventListener("click", e => e.stopPropagation());
    li.addEventListener("click", () => {
      document.querySelectorAll("#list li").forEach(x => x.classList.remove("active"));
      li.classList.add("active");
      map.setView([l.lat, l.lng], 15);
      marker.openPopup();
    });
    list.appendChild(li);
  });

  const group = L.featureGroup(results.map(l => markers[l.id]));
  map.fitBounds(group.getBounds().pad(0.2));
}

[searchBox, typeFilter, openNowBox].forEach(el => el.addEventListener("input", render));
render();
setInterval(render, 60000); // refresh open/closed status every minute