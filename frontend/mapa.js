
let OrtBelgrano = [-34.54965800893943, -58.454123598904076];
let OrtAlmagro = [-34.60959730083125, -58.428702612107365];
let CentroMapa = [-34.58285, -58.443585];
-34.58285
let map = L.map('Mapa').setView(CentroMapa, 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker(OrtBelgrano)
  .addTo(map)
  .bindPopup("ORT Belgrano")


  L.marker(OrtAlmagro)
  .addTo(map)
  .bindPopup("ORT Almagro")