let OrtBelgrano = [-34.54965800893943, -58.454123598904076];
let OrtAlmagro = [-34.60959730083125, -58.428702612107365];

let Hamburguesas1 = [-34.55072465631671, -58.45312543137052]


var map = L.map('map').setView([-34.58285, -58.443585], 13); // Coordenadas iniciales

// Cargar mapa desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Datos de los "botones marcadores"
var markers = [
  {
    lat: -34.60959730083125,
    lng: -58.428702612107365,
    name: "Lugar 1",
    description: "Descripción del lugar 1",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Red_dot.svg/1024px-Red_dot.svg.png" // Imagen del marcador
  },
  {
    lat: -34.60959730083125,
    lng: -58.428702612107365,
    name: "Lugar 2",
    description: "Descripción del lugar 2",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Red_dot.svg/1024px-Red_dot.svg.png"
  }
];

// Crear un botón para cada marcador
markers.forEach(function(marker) {
  var button = document.createElement('button');
  button.classList.add('custom-button');
  button.innerHTML = `<img src="${marker.image}" alt="Marker">`;
  
  // Crear un marcador en el mapa usando el botón como un icono
  var markerPosition = L.latLng(marker.lat, marker.lng);
  
  // Usamos el botón como icono del marcador
  var customIcon = L.divIcon({
    className: 'custom-icon',
    html: button.outerHTML,
    iconSize: [40, 40] // Tamaño del botón
  });

  var mapMarker = L.marker(markerPosition, { icon: customIcon }).addTo(map);

  // Evento de clic en el "botón marcador"
  mapMarker.on('click', function () {
    var infoBox = document.getElementById('info-box');
    document.getElementById('place-name').innerText = marker.name;
    document.getElementById('place-description').innerText = marker.description;

    // Convertir la posición del marcador a píxeles para posicionar el div correctamente
    var point = map.latLngToContainerPoint(markerPosition);

    infoBox.style.left = point.x + 'px';
    infoBox.style.top = point.y - 50 + 'px'; // Ajuste de la posición

    infoBox.style.display = 'block'; // Mostrar el div
  });
});