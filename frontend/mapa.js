let OrtBelgrano = [-34.54965800893943, -58.454123598904076];
let OrtAlmagro = [-34.60959730083125, -58.428702612107365];
let CentroMapa = [-34.58285, -58.443585];
let Hamburguesas1 = [-34.55072465631671, -58.45312543137052]


let map = L.map('Mapa').setView(CentroMapa, 16);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


L.marker(OrtBelgrano)
  .addTo(map)
  .bindPopup("ORT Belgrano")




  L.marker(OrtAlmagro)
  .addTo(map)
  .bindPopup("Ort Almagro")



let Hamburguesas1_Div = `
 <div id="Hamburguesas1" class="Hamburguesas1">
      <main class="MainMapa"></main>
      <footer class="FooterM">
        <button  id="menu" class="btnmapa"> Menu</button>
        <button  id="promociones" class="btnmapa">Promociones</button>
        <button id="opiniones" class="btnmapa">Opiniones</button>
      </footer>`;;




L.marker(Hamburguesas1)
.addTo(map)
.bindPopup(Hamburguesas1_Div)