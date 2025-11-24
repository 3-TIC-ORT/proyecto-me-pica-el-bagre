
connect2Server(3000);


let Cpopup = document.getElementById('Cpopup');
let Popup = document.getElementById('Popup');
let btnInformacion = document.getElementById("btnInformacion");
let btnMenu = document.getElementById("btnMenu");
let btnOpiniones = document.getElementById("btnOpiniones"); 
let btnPromociones = document.getElementById("btnPromociones"); 
let Mandar = document.getElementById("Mandar")
let reseña = document.getElementById("Escribir")   


let Datos = [
  { Nombre: "Acuña bar ", Direccion: "Direccion", FL1: "Fotos/AcuñabarL1.png", FL2: "Fotos/AcuñabarL2.png", FL3: "Fotos/AcuñabarL3.png", FL4: "Fotos/AcuñabarL4.png", FM1: "Fotos/AcuñabarM1.png", FM2: "Fotos/AcuñabarM2.png", FM3: "Fotos/AcuñabarM3.png", FM4: "Fotos/AcuñabarM4.png", FM5: "Fotos/AcuñabarM5.png", FM6: "Fotos/AcuñabarM6.png", FM7: "Fotos/AcuñabarM7.png", FM8: "Fotos/AcuñabarM8.png", FP1: "Fotos/AcuñabarP1.png", FP2: "Fotos/AcuñabarP2.png", Ntiti: "acuña", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.60866642108984, lng: -58.423193433037405, NB:"Unboton1", NTitiPER:"acuñare",},  
  { Nombre: "Aieka", Direccion: "Direccion 2", FL1: "img2.jpg", FL2: "img3.jpg", FL3: "img3.jpg", FL4: "img3.jpg", FM1: "img3.jpg", FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg", FP2: "img3.jpg", Ntiti: "aieka", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.549775931085875, lng: -58.454834818870204, NB:"Unboton2", NTitiPER:"aiekare",},   
  { Nombre: "Almacen de pizzas", Direccion: "Av. del Libertador 6700", FL1: "Fotos/AlmacendepizzasL1.png", FL2: "Fotos/AlmacendepizzasL2.png", FL3: "Fotos/AlmacendepizzasL3.png", FL4: "Fotos/AlmacendepizzasL4.png", FM1: "Fotos/AlmacendepizzasM1.png", FM2: "Fotos/AlmacendepizzasM2.png", FM3: "Fotos/AlmacendepizzasM3.png", FM4: "Fotos/AlmacendepizzasM4.png", FM5: "Fotos/AlmacendepizzasM5.png", FM6: "Fotos/AlmacendepizzasM6.png", FM7: "Fotos/AlmacendepizzasM7.png", FM8: "Fotos/AlmacendepizzasM8.png", FP1: "Fotos/AlmacendepizzasP1.png", FP2: "Fotos/AlmacendepizzasP2.png", Ntiti: "almacen", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.550737026077265, lng: -58.45313581193346, NB:"Unboton3", NTitiPER: "Almacen",},  
  { Nombre: "Braseria", Direccion: "Quesada 1701", FL1: "Fotos/BraseriaL1.png", FL2: "Fotos/BraseriaL2.png", FL3: "Fotos/BraseriaL3.png", FL4: "Fotos/BraseriaL4.png", FM1: "Fotos/BraseriaM1.png", FM2: "Fotos/BraseriaM2.png", FM3: "Fotos/BraseriaM3.png", FM4: "Fotos/BraseriaM4.png", FM5: "Fotos/BraseriaM5.png", FM6: "Fotos/BraseriaM6.png", FM7: "Fotos/BraseriaM7.png", FM8: "Fotos/BraseriaM8.png", FP1: "Fotos/BraseriaP1.png", FP2: "Fotos/BraseriaP2.png", Ntiti: "braseria", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.55065844912234, lng: -58.456682703373396, NB:"Unboton4", NTitiPER:"braseriare",}, 
  { Nombre: "Damblee", Direccion: "Direccion 3", FL1: "Fotos/DambleeL1.png", FL2: "Fotos/DambleeL2.png", FL3: "Fotos/DambleeL3.png", FL4: "Fotos/DambleeL4.png", FM1: "Fotos/DambleeM1.png", FM2: "Fotos/DambleeM2.png", FM3: "Fotos/DambleeM3.png", FM4: "Fotos/DambleeM4.png", FM5: "Fotos/DambleeM5.png", FM6: "Fotos/DambleeM6.png", FM7: "Fotos/DambleeM7.png", FM8: "Fotos/DambleeM8.png", FP1: "Fotos/DambleeP1.png", FP2: "Fotos/DambleeP2.png", Ntiti: "damblee", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.61058508244066, lng: -58.41460500420109, NB:"Unboton5", NTitiPER:"dambleere",},
  { Nombre: "El fuelle", Direccion: "Direccion 3", FL1: "Fotos/ElfuelleL1.png", FL2: "Fotos/ElfuelleL2.png", FL3: "Fotos/ElfuelleL3.png", FL4: "Fotos/ElfuelleL4.png", FM1: "Fotos/ElfuelleM1.png", FM2: "Fotos/ElfuelleM2.png", FM3: "Fotos/ElfuelleM3.png", FM4: "Fotos/ElfuelleM4.png", FM5: "Fotos/ElfuelleM5.png", FM6: "Fotos/ElfuelleM6.png", FM7: "Fotos/ElfuelleM7.png", FM8: "Fotos/ElfuelleM8.png", FP1: "Fotos/ElfuelleP1.png", FP2: "Fotos/ElfuelleP2.png", Ntiti: "elfuelle", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.610008803175695, lng: -58.4210896465288, NB:"Unboton6", NTitiPER:"elfuellere",},
  { Nombre: "El patio de Mingo", Direccion: "Direccion 3", FL1: "Fotos/ElpatiodemingolL1.png", FL2: "Fotos/ElpatiodemingolL2.png", FL3: "Fotos/ElpatiodemingolL3.png", FL4: "Fotos/ElpatiodemingolL4.png", FM1: "Fotos/ElpatiodemingolM1.png", FM2: "Fotos/ElpatiodemingolM2.png", FM3: "Fotos/ElpatiodemingolM3.png", FM4: "Fotos/ElpatiodemingolM4.png", FM5: "Fotos/ElpatiodemingolM5.png", FM6: "Fotos/ElpatiodemingolM6.png", FM7: "Fotos/ElpatiodemingolM7.png", FM8: "Fotos/ElpatiodemingolM8.png", FP1: "Fotos/ElpatiodemingolP1.png", FP2: "Fotos/ElpatiodemingolP2.png", Ntiti: "elpatiodemingo", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.610016003174856, lng: -58.42263557536491, NB:"Unboton7", NTitiPER:"elpatiodemingore",},
  { Nombre: "Empanadas tremendas", Direccion: "Quesada 1625", FL1: "Fotos/EmpanadastremendasL1.png", FL2: "Fotos/EmpanadastremendasL2.png", FL3: "Fotos/EmpanadastremendasL3.png", FL4: "Fotos/EmpanadastremendasL4.png", FM1: "Fotos/EmpanadastremendasM1.png", FM2: "Fotos/EmpanadastremendasM2.png", FM3: "Fotos/EmpanadastremendasM3.png", FM4: "Fotos/EmpanadastremendasM4.png", FM5: "Fotos/EmpanadastremendasM5.png", FM6: "Fotos/EmpanadastremendasM6.png", FM7: "Fotos/EmpanadastremendasM7.png", FM8: "Fotos/EmpanadastremendasM8.png", FP1: "Fotos/EmpanadastremendasP1.png", FP2: "Fotos/EmpanadastremendasP2.png", Ntiti: "empanadastremendas", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.550301109542644, lng: -58.455694546532214, NB:"Unboton8", NTitiPER:"empanadastremendasre",},
  { Nombre: "Fuoco", Direccion: "Quesada 1605", FL1: "Fotos/FuocoL1.png", FL2: "Fotos/FuocoL2.png", FL3: "Fotos/FuocoL3.png", FL4: "Fotos/FuocoL4.png", FM1: "Fotos/FuocoM1.png", FM2: "Fotos/FuocoM2.png", FM3: "Fotos/FuocoM3.png", FM4: "Fotos/FuocoM4.png", FM5: "Fotos/FuocoM5.png", FM6: "Fotos/FuocoM6.png", FM7: "Fotos/FuocoM7.png", FM8: "Fotos/FuocoM8.png", FP1: "Fotos/FuocoP1.png", FP2: "Fotos/FuocoP2.png", Ntiti: "fuoco", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.55019561932309, lng: -58.45544704653218, NB:"Unboton9", NTitiPER:"fuocore",},
  { Nombre: "Green deli", Direccion: "Direccion 3", FL1: "Fotos/GreendeliL1.png", FL2: "Fotos/GreendeliL2.png", FL3: "Fotos/GreendeliL3.png", FL4: "Fotos/GreendeliL4.png", FM1: "Fotos/GreendeliM1.png", FM2: "Fotos/GreendeliM2.png", FM3: "Fotos/GreendeliM3.png", FM4: "Fotos/GreendeliM4.png", FM5: "Fotos/GreendeliM5.png", FM6: "Fotos/GreendeliM6.png", FM7: "Fotos/GreendeliM7.png", FM8: "Fotos/GreendeliM8.png", FP1: "Fotos/GreendeliP1.png", FP2: "Fotos/GreendeliP2.png", Ntiti: "greendeli", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.6085472033316, lng: -58.430601517692736, NB:"Unboton10", NTitiPER:"greendelire",},   
  { Nombre: "Juan rotiseria", Direccion: "Direccion 3", FL1: "Fotos/JuanrotiseriaL1.png", FL2: "Fotos/JuanrotiseriaL2.png", FL3: "Fotos/JuanrotiseriaL3.png", FL4: "Fotos/JuanrotiseriaL4.png", FM1: "Fotos/JuanrotiseriaM1.png", FM2: "Fotos/JuanrotiseriaM2.png", FM3: "Fotos/JuanrotiseriaM3.png", FM4: "Fotos/JuanrotiseriaM4.png", FM5: "Fotos/JuanrotiseriaM5.png", FM6: "Fotos/JuanrotiseriaM6.png", FM7: "Fotos/JuanrotiseriaM7.png", FM8: "Fotos/JuanrotiseriaM8.png", FP1: "Fotos/JuanrotiseriaP1.png", FP2: "Fotos/JuanrotiseriaP2.png", Ntiti: "juanarotiseria", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.60695359793014, lng: -58.41770432063886, NB:"Unboton11", NTitiPER:"juanarotiseriare", }, 
  { Nombre: "Parilla La estancia almagro", Direccion: "Direccion 3", FL1: "Fotos/ParillaLaestanciaalmagroL1.png", FL2: "Fotos/ParillaLaestanciaalmagroL2.png", FL3: "Fotos/ParillaLaestanciaalmagroL3.png", FL4: "Fotos/ParillaLaestanciaalmagroL4.png", FM1: "Fotos/ParillaLaestanciaalmagroM1.png", FM2: "Fotos/ParillaLaestanciaalmagroM2.png", FM3: "Fotos/ParillaLaestanciaalmagroM3.png", FM4: "Fotos/ParillaLaestanciaalmagroM4.png", FM5: "Fotos/ParillaLaestanciaalmagroM5.png", FM6: "Fotos/ParillaLaestanciaalmagroM6.png", FM7: "Fotos/ParillaLaestanciaalmagroM7.png", FM8: "Fotos/ParillaLaestanciaalmagroM8.png", FP1: "Fotos/ParillaLaestanciaalmagroP1.png", FP2: "Fotos/ParillaLaestanciaalmagroP2.png", Ntiti: "laestanciaalmagro", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.60765116200893, lng: -58.424562139609364, NB:"Unboton12", NTitiPER:"laestanciaalmagrore"},
  { Nombre: "Los orientales ", Direccion: "Direccion 3", FL1: "Fotos/LosorientalesL1.png", FL2: "Fotos/LosorientalesL2.png", FL3: "Fotos/LosorientalesL3.png", FL4: "Fotos/LosorientalesL4.png", FM1: "Fotos/LosorientalesM1.png", FM2: "Fotos/LosorientalesM2.png", FM3: "Fotos/LosorientalesM3.png", FM4: "Fotos/LosorientalesM4.png", FM5: "Fotos/LosorientalesM5.png", FM6: "Fotos/LosorientalesM6.png", FM7: "Fotos/LosorientalesM7.png", FM8: "Fotos/LosorientalesM8.png", FP1: "Fotos/LosorientalesP1.png", FP2: "Fotos/LosorientalesP2.png", Ntiti: "losorientales", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.611751102989665, lng: -58.42216740420105, NB:"Unboton13", NTitiPER:"losorientalesre",},
  { Nombre: " McDonald's", Direccion: "Av. del Libertador 7112", FL1: "Fotos/McL1.png", FL2: "Fotos/McL2.png", FL3: "Fotos/McL3.png", FL4: "Fotos/McL4.png", FM1: "Fotos/McM1.png", FM2: "Fotos/McM2.png", FM3: "Fotos/McM3.png", FM4: "Fotos/McM4.png", FM5: "Fotos/McM5.png", FM6: "Fotos/McM6.png", FM7: "Fotos/McM7.png", FM8: "Fotos/McM8.png", FP1: "Fotos/McP1.png", FP2: "Fotos/McP2.png", Ntiti: "mc", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.54733936960643, lng:-58.457202774887115, NB:"Unboton14", NTitiPER:"mcre",},
  { Nombre: "Mi gusto", Direccion: "Av. Monroe 1801", FL1: "Fotos/MigustoL1.png", FL2: "Fotos/MigustoL2.png", FL3: "Fotos/MigustoL3.png", FL4: "Fotos/MigustoL4.png", FM1: "Fotos/MigustoM1.png", FM2: "Fotos/MigustoM2.png", FM3: "Fotos/MigustoM3.png", FM4: "Fotos/MigustoM4.png", FM5: "Fotos/MigustoM5.png", FM6: "Fotos/MigustoM6.png", FM7: "Fotos/MigustoM7.png", FM8: "Fotos/MigustoM8.png", FP1: "Fotos/MigustoP1.png", FP2: "Fotos/MigustoP2.png", Ntiti: "migusto", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.55386492853309, lng:-58.45453130816713, NB:"Unboton15", NTitiPER:"migustore",} ,
  { Nombre: "Pancho 25", Direccion: "Montañeses 2494", FL1: "Fotos/Pancho25L1.png", FL2: "Fotos/Pancho25L2.png", FL3: "Fotos/Pancho25L3.png", FL4: "Fotos/Pancho25L4.png", FM1: "Fotos/Pancho25M1.png", FM2: "Fotos/Pancho25M2.png", FM3: "Fotos/Pancho25M3.png", FM4: "Fotos/Pancho25M4.png", FM5: "Fotos/Pancho25M5.png", FM6: "Fotos/Pancho25M6.png", FM7: "Fotos/Pancho25M7.png", FM8: "Fotos/Pancho25M8.png", FP1: "Fotos/Pancho25P1.png", FP2: "Fotos/Pancho25P2.png", Ntiti: "pancho", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.55391815383139 , lng: -58.45207373236616, NB:"Unboton16", NTitiPER:"panchore",},
  { Nombre: "Parilla 83", Direccion: "Direccion 3", FL1: "Fotos/Parilla83L1.png", FL2: "Fotos/Parilla83L2.png", FL3: "Fotos/Parilla83L3.png", FL4: "Fotos/Parilla83L4.png", FM1: "Fotos/Parilla83M1.png", FM2: "Fotos/Parilla83M2.png", FM3: "Fotos/Parilla83M3.png", FM4: "Fotos/Parilla83M4.png", FM5: "Fotos/Parilla83M5.png", FM6: "Fotos/Parilla83M6.png", FM7: "Fotos/Parilla83M7.png", FM8: "Fotos/Parilla83M8.png", FP1: "Fotos/Parilla83P1.png", FP2: "Fotos/Parilla83P2.png", Ntiti: "parrilla83", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.60856264985912, lng: -58.427567475473225 , NB:"Unboton17", NTitiPER:"parrilla83re",}, 
  { Nombre: "La Tabola", Direccion: "Congreso 1599", FL1: "Fotos/LatabolaL1.png", FL2: "Fotos/LatabolaL2.png", FL3: "Fotos/LatabolaL3.png", FL4: "Fotos/LatabolaL4.png", FM1: "Fotos/LatabolaM1.png", FM2: "Fotos/LatabolaM2.png", FM3: "Fotos/LatabolaM3.png", FM4: "Fotos/LatabolaM4.png", FM5: "Fotos/LatabolaM5.png", FM6: "Fotos/LatabolaM6.png", FM7: "Fotos/LatabolaM7.png", FM8: "Fotos/LatabolaM8.png", FP1: "Fotos/LatabolaP1.png", FP2: "Fotos/LatabolaP2.png", Ntiti: "tabola", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.550985965880265 , lng: -58.454237919228646 , NB:"Unboton18", NTitiPER:"tabola",},  
  { Nombre: "Talitas", Direccion: "Av. Monroe 1707", FL1: "Fotos/TalitasL1.png", FL2: "Fotos/TalitasL2.png", FL3: "Fotos/TalitasL3.png", FL4: "Fotos/TalitasL4.png", FM1: "Fotos/TalitasM1.png", FM2: "Fotos/TalitasM2.png", FM3: "Fotos/TalitasM3.png", FM4: "Fotos/TalitasM4.png", FM5: "Fotos/TalitasM5.png", FM6: "Fotos/TalitasM6.png", FM7: "Fotos/TalitasM7.png", FM8: "Fotos/TalitasM8.png", FP1: "Fotos/TalitasP1.png", FP2: "Fotos/TalitasP2.png", Ntiti: "talitas", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.55428908438388 , lng: -58.45349121095627, NB:"Unboton19", NTitiPER:"talitasre",},
  { Nombre: "The Rozz", Direccion: "Direccion 3", FL1: "Fotos/TherozzL1.png", FL2: "Fotos/TherozzL2.png", FL3: "Fotos/TherozzL3.png", FL4: "Fotos/TherozzL4.png", FM1: "Fotos/TherozzM1.png", FM2: "Fotos/TherozzM2.png", FM3: "Fotos/TherozzM3.png", FM4: "Fotos/TherozzM4.png", FM5: "Fotos/TherozzM5.png", FM6: "Fotos/TherozzM6.png", FM7: "Fotos/TherozzM7.png", FM8: "Fotos/TherozzM8.png", FP1: "Fotos/TherozzP1.png", FP2: "Fotos/TherozzP2.png", Ntiti: "therozz", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.60915243402376, lng: -58.42153795452309, NB:"Unboton20", NTitiPER:"therozzre",}, 
];

Datos.forEach(Africa =>{ 
  let NumeroBoton = document.getElementById(Africa.NB)


NumeroBoton.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});
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


let botones = document.querySelectorAll(".Unboton");



let Ractual = ""

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", () => {
    let Mariano = Datos[i]; 
    Ractual = i;
    document.getElementById("Nombre").textContent = Mariano.Nombre;
   document.getElementById("Direccion").textContent = Mariano.Direccion;
   document.getElementById("FL1").src = Mariano.FL1;
   document.getElementById("FL2").src = Mariano.FL2;
   document.getElementById("FL3").src = Mariano.FL3;
   document.getElementById("FL4").src = Mariano.FL4;
   document.getElementById("FM1").src = Mariano.FM1;
   document.getElementById("FM2").src = Mariano.FM2;
   document.getElementById("FM3").src = Mariano.FM3;
   document.getElementById("FM4").src = Mariano.FM4;
   document.getElementById("FM5").src = Mariano.FM5;
   document.getElementById("FM6").src = Mariano.FM6;
   document.getElementById("FM7").src = Mariano.FM7;
   document.getElementById("FM8").src = Mariano.FM8;
   document.getElementById("FP1").src = Mariano.FP1;
   document.getElementById("FP2").src = Mariano.FP2;
  });
}




  
        Mandar.addEventListener("click", () =>{
     let UsuarioR = JSON.parse(localStorage.getItem("usuarioActual"));
     let Info = Datos[Ractual];
    postEvent(Info.Ntiti, Info.Parametros(UsuarioR.Usuario, reseña.value), (response) => {
    console.log("reseña enviada")
    document.getElementById("Escribir").value = "";
      
        
    });
        });
 
 

 let MapaL = L.map("MapaL").setView([-34.57901800065002, -58.44157935309309], 14);   

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19
}).addTo(MapaL);


let Rojo = new L.Icon({ 
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
   });

   L.marker([-34.60997244301027, -58.42915456484405]).addTo(MapaL)
    L.marker([-34.54982508571096, -58.45404101513356]).addTo(MapaL)
let sedeData = JSON.parse(localStorage.getItem("sedeOrt"))

if (sedeData && sedeData.Sede === "Almagro"){
  MapaL.setView([-34.60997244301027, -58.42915456484405],15)
}
else if (sedeData && sedeData.Sede === "Belgrano"){
  MapaL.setView([-34.54982508571096, -58.45404101513356],15)
}






Datos.forEach(LugarInfo =>{
  let MarcadorM = L.marker([LugarInfo.lat, LugarInfo.lng],{ icon: Rojo }).addTo(MapaL)
 
  let BotonardoL = document.getElementById(LugarInfo.NB)

 if (BotonardoL) {
  MarcadorM.on("click", () => {
    BotonardoL.click();
 
  });
}
});






Datos.forEach(Victoria =>{ 
  let BotonM = document.getElementById(Victoria.NB)

BotonM.addEventListener("click", () => {
  postEvent(Victoria.NTitiPER, {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((Probando) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let Usuario112233 = document.createElement("div");
     Usuario112233.classList.add("Usuario112233");
     Usuario112233.textContent = Probando.usuario;

      let Opinion112233 = document.createElement("div");
      Opinion112233.classList.add("Opinion112233");
      Opinion112233.textContent = Probando.opinion;

      div.appendChild(Usuario112233);
      div.appendChild(Opinion112233);
      contenedor.appendChild(div);
    });
  });
});
});