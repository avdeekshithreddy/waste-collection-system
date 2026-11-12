// Edit this file to add or change collection points.
// Hours use 24-hour format "HH:MM". "days" uses 0 = Sunday ... 6 = Saturday.
// NOTE: coordinates and timings are approximate / sample values.
// Verify them (Google Maps: right-click a spot, click the coordinates to copy lat, lng).

const ALL_DAYS = [0, 1, 2, 3, 4, 5, 6];
const WEEKDAYS = [1, 2, 3, 4, 5];
const MON_SAT = [1, 2, 3, 4, 5, 6];

const locations = [
  // ---------- South Bengaluru (near RVITM) ----------
  { id: 1, name: "RVITM Campus E-Waste Bin", address: "RV Institute of Technology and Management, JP Nagar",
    lat: 12.8626, lng: 77.5330, types: ["E-Waste", "Batteries"], open: "09:00", close: "17:00", days: MON_SAT },
  { id: 2, name: "JP Nagar Dry Waste Collection Centre", address: "24th Main Road, JP Nagar 6th Phase",
    lat: 12.8930, lng: 77.5850, types: ["Plastic", "Paper", "Glass", "Metal"], open: "07:00", close: "19:00", days: ALL_DAYS },
  { id: 3, name: "Kanakapura Road Bio-Waste Unit", address: "Kanakapura Main Road",
    lat: 12.8760, lng: 77.5620, types: ["Organic", "Garden Waste"], open: "06:00", close: "14:00", days: ALL_DAYS },
  { id: 4, name: "Banashankari Textile Drop Point", address: "Banashankari 2nd Stage",
    lat: 12.9150, lng: 77.5560, types: ["Textile", "Paper"], open: "10:00", close: "18:00", days: WEEKDAYS },
  { id: 5, name: "Jayanagar Medical Waste Point", address: "Jayanagar 4th Block",
    lat: 12.9250, lng: 77.5830, types: ["Medical", "Batteries"], open: "08:00", close: "16:00", days: WEEKDAYS },
  { id: 6, name: "Jayanagar Dry Waste Centre", address: "Jayanagar 9th Block",
    lat: 12.9170, lng: 77.5930, types: ["Plastic", "Paper", "Glass"], open: "08:00", close: "18:00", days: MON_SAT },
  { id: 7, name: "Bangalore One E-Waste Box, JP Nagar", address: "Bangalore One Centre, JP Nagar",
    lat: 12.9060, lng: 77.5850, types: ["E-Waste"], open: "09:00", close: "17:00", days: ALL_DAYS },
  { id: 8, name: "BTM Layout Composting Yard", address: "BTM 2nd Stage",
    lat: 12.9166, lng: 77.6101, types: ["Organic", "Garden Waste"], open: "06:00", close: "13:00", days: ALL_DAYS },
  { id: 9, name: "Bannerghatta Road Recycling Hub", address: "Bannerghatta Main Road",
    lat: 12.8890, lng: 77.5970, types: ["Plastic", "Metal", "Paper", "Glass"], open: "09:00", close: "18:00", days: MON_SAT },

  // ---------- Central and East ----------
  { id: 10, name: "Indiranagar Public E-Waste Bin", address: "CMH Road, Indiranagar",
    lat: 12.9784, lng: 77.6408, types: ["E-Waste"], open: "00:00", close: "23:59", days: ALL_DAYS },
  { id: 11, name: "Koramangala Dry Waste Collection Centre", address: "Koramangala 5th Block",
    lat: 12.9352, lng: 77.6245, types: ["Plastic", "Paper", "Glass", "Textile"], open: "08:00", close: "18:00", days: MON_SAT },
  { id: 12, name: "HSR Layout Waste Collection Point", address: "HSR Layout Sector 2",
    lat: 12.9116, lng: 77.6389, types: ["Plastic", "Paper", "Metal", "Organic"], open: "07:00", close: "17:00", days: ALL_DAYS },
  { id: 13, name: "MG Road Battery Collection Counter", address: "MG Road",
    lat: 12.9756, lng: 77.6070, types: ["Batteries", "E-Waste"], open: "10:00", close: "19:00", days: MON_SAT },

  // ---------- North, West and outskirts ----------
  { id: 14, name: "E-Parisaraa Recycling Facility", address: "Peenya Industrial Estate, 3rd Stage",
    lat: 13.0285, lng: 77.5197, types: ["E-Waste", "Batteries", "Metal"], open: "09:30", close: "17:30", days: MON_SAT },
  { id: 15, name: "Yeshwanthpur Construction Debris Yard", address: "Yeshwanthpur Industrial Area",
    lat: 13.0230, lng: 77.5500, types: ["Construction", "Metal"], open: "07:00", close: "17:00", days: MON_SAT },
  { id: 16, name: "Malleshwaram Dry Waste Centre", address: "Malleshwaram 8th Cross",
    lat: 13.0035, lng: 77.5710, types: ["Plastic", "Paper", "Glass"], open: "08:00", close: "18:00", days: MON_SAT },
  { id: 17, name: "Whitefield E-Waste Collection Centre", address: "ITPL Main Road, Whitefield",
    lat: 12.9850, lng: 77.7280, types: ["E-Waste", "Batteries"], open: "09:00", close: "18:00", days: WEEKDAYS },
  { id: 18, name: "Electronic City Recycling Point", address: "Electronic City Phase 1",
    lat: 12.8450, lng: 77.6600, types: ["E-Waste", "Plastic", "Metal"], open: "09:00", close: "18:00", days: MON_SAT },
  { id: 19, name: "Hebbal Garden Waste Unit", address: "Hebbal",
    lat: 13.0358, lng: 77.5970, types: ["Garden Waste", "Organic"], open: "06:00", close: "14:00", days: ALL_DAYS },
  { id: 20, name: "Rajajinagar Textile and Clothes Bank", address: "Rajajinagar 2nd Block",
    lat: 12.9910, lng: 77.5530, types: ["Textile"], open: "10:00", close: "18:00", days: WEEKDAYS }
];