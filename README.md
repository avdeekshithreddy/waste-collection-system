# Waste Collection Tracker

An interactive web map that helps people in Bengaluru find where to drop their waste, what each collection centre accepts, and whether it is open right now.

Built as an EVS (Environmental Studies) assignment using plain HTML, CSS and JavaScript, with [Leaflet](https://leafletjs.com/) and OpenStreetMap for the map.

**Live demo:** https://avdeekshithreddy.github.io/waste-collection-system/

## Features

- **Interactive map** with a marker for each collection point
- **Search** by centre name or area
- **Filter by waste type**: E-Waste, Plastic, Paper, Glass, Metal, Organic, Garden Waste, Textile, Batteries, Medical and Construction
- **"Open now only"** toggle that uses the current day and time
- **Live open/closed status** on every card and popup, refreshed every minute
- **Opening hours and days** shown in 12-hour format
- **Click a card** in the list to zoom to that location on the map
- **Open in Google Maps** link for directions
- **Responsive layout** that works on both desktop and mobile
- Map automatically zooms to fit the filtered results

## Project Structure

```
waste-collection-system/
├── index.html   # Page layout and library imports
├── style.css    # Styling and responsive layout
├── script.js    # Map setup, filtering, rendering and open/closed logic
└── data.js      # List of collection points (edit this to add more)
```

## Tech Stack

- HTML5
- CSS3 (flexbox, CSS variables, media queries)
- JavaScript (vanilla, no frameworks)
- [Leaflet 1.9.4](https://leafletjs.com/) for the map
- [OpenStreetMap](https://www.openstreetmap.org/) for map tiles

## How to Run

No installation or build step is needed.

1. Download or clone the repository:
   ```bash
   git clone https://github.com/avdeekshithreddy/waste-collection-system.git
   ```
2. Open `index.html` in any modern web browser.

An internet connection is required to load the Leaflet library and map tiles.

## Adding or Editing Collection Points

All locations live in `data.js`. Each entry looks like this:

```js
{
  id: 21,
  name: "Example Collection Centre",
  address: "Area, Bengaluru",
  lat: 12.9000,
  lng: 77.5800,
  types: ["Plastic", "Paper"],
  open: "09:00",        // 24-hour format
  close: "17:00",
  days: MON_SAT         // ALL_DAYS, WEEKDAYS, MON_SAT, or a custom list like [1, 3, 5]
}
```

Notes:
- `days` uses `0 = Sunday` through `6 = Saturday`.
- To get coordinates, right-click a spot in Google Maps and click the coordinates to copy them.
- You can optionally add a `mapsLink` field to use a specific Google Maps URL instead of the one generated from the coordinates.
- New waste types automatically appear in the filter dropdown.

## Data Disclaimer

The coordinates and timings in `data.js` are approximate sample values for demonstration. Please verify a centre's location and hours before visiting.

## Environmental Purpose

Proper segregation and disposal of waste reduces landfill load, prevents pollution from hazardous items such as e-waste and batteries, and supports recycling and composting. This tool aims to make responsible disposal easier by showing the nearest suitable drop-off point for each type of waste.

## Author

**Avdeeksh Ithreddy** ([@avdeekshithreddy](https://github.com/avdeekshithreddy))
