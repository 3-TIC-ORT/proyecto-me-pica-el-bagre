
let OrtBelgrano = [-34.5502, -58.45427];

let map = L.map('Mapa').setView(OrtBelgrano, 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker(OrtBelgrano)
  .addTo(map)
  .bindPopup("ORT Belgrano")
