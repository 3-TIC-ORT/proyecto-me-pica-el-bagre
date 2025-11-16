let Apopup = document.getElementById('Apopup');
let Cpopup = document.getElementById('Cpopup');
let Popup = document.getElementById('Popup');
let btnInformacion = document.getElementById("btnInformacion");
let btnMenu = document.getElementById("btnMenu");
let btnOpiniones = document.getElementById("btnOpiniones"); 
let btnPromociones = document.getElementById("btnPromociones"); 

let Mandar = document.getElementById("Mandar")
let reseña = document.getElementById("Escribir")

Mandar.addEventListener("click", () => {
    getEvent("usuarioActual", (user) => {

       
        Escribir.addEventListener("click", () =>
    postEvent("acuña", {Usuario:usuario.value, reseña:reseña.value}, (response) => {
        
    }));

    });
});






Apopup.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});


Cpopup.addEventListener('click', () => {
  Popup.style.display = 'none';
});

btnPromociones.addEventListener("click", () => {
  MostrarS("Promociones");
});

btnInformacion.addEventListener("click", () => {
  MostrarS("Informacion");
});

btnMenu.addEventListener("click", () => {
  MostrarS("Menu");
});

btnOpiniones.addEventListener("click", () => {
  MostrarS("Opiniones");
});

function MostrarS(pipi) {
  document.querySelectorAll(".Secciones").forEach(papuu => {
    papuu.classList.remove("Mostrada");
  });

  document.getElementById(pipi).classList.add("Mostrada");
}