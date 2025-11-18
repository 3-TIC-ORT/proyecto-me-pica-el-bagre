

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
  { Nombre: "Acuña bar ",           Direccion: "Direccion",   FL1: "Fotos/Ejemplolugar.webp", FL2: "Fotos/Ejemplolugar.webp", FL3: "Fotos/Ejemplolugar.webp" ,   FL4: "Fotos/Ejemplolugar.webp",   FM1: "Fotos/Ejemplolugar.webp" , FM2: "Fotos/Ejemplolugar.webp", FM3: "Fotos/Ejemplolugar.webp", FM4: "Fotos/Ejemplolugar.webp", FM5: "Fotos/Ejemplolugar.webp", FM6: "Fotos/Ejemplolugar.webp", FM7: "Fotos/Ejemplolugar.webp", FM8: "Fotos/Ejemplolugar.webp", FP1: "Fotos/Ejemplolugar.webp" , FP2: "Fotos/Ejemplolugar.webp",  Ntiti: "acuña", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: -34.60866642108984, lng: -58.423193433037405,NB:"Unboton1",NTitiPER:"acuñare",},  
  { Nombre: "Aieka",                Direccion: "Direccion 2", FL1: "img2.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg", Ntiti: "aieka", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.549775931085875, lng: -58.454834818870204,NB:"Unboton2",NTitiPER:"aiekare",},   
  { Nombre: "Almacen de pizzas",    Direccion: "Av. del Libertador 6700", FL1: "Fotos/AlmacendepizzasL1.png", FL2: "Fotos/AlmacendepizzasL2.png", FL3: "Fotos/AlmacendepizzasL3.png",    FL4: "Fotos/AlmacendepizzasL4.png",   FM1: "Fotos/AlmacendepizzasM1.png" , FM2: "Fotos/AlmacendepizzasM2.png", FM3: "Fotos/AlmacendepizzasM3.png", FM4: "Fotos/AlmacendepizzasM4.png", FM5: "Fotos/AlmacendepizzasM5.png", FM6: "Fotos/AlmacendepizzasM6.png", FM7: "Fotos/AlmacendepizzasM7.png", FM8: "Fotos/AlmacendepizzasM8.png", FP1: "Fotos/AlmacendepizzasP1.png" , FP2: "Fotos/AlmacendepizzasP2.png",Ntiti: "almacen", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.550737026077265, lng: -58.45313581193346,NB:"Unboton3",NTitiPER: "Almacen",},  
  { Nombre: "Braseria",             Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg", Ntiti: "braseria", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.55065844912234, lng: -58.456682703373396,NB:"Unboton4",NTitiPER:"braseriare",}, 
  { Nombre: "Damblee",              Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg", Ntiti: "damblee", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.61058508244066, lng: -58.41460500420109,NB:"Unboton5",NTitiPER:"dambleere",},
  { Nombre: "El fuelle",            Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg", Ntiti: "elfuelle", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.610008803175695, lng: -58.4210896465288,NB:"Unboton6",NTitiPER:"elfuellere",},
  { Nombre: "El patio de Mingo",    Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg" ,FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg", Ntiti: "elpatiodemingo", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.610016003174856, lng:  -58.42263557536491,NB:"Unboton7",NTitiPER:"elpatiodemingore",},
  { Nombre: "Empanadas tremendas",  Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg",Ntiti: "empanadastremendas", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.550301109542644, lng: -58.455694546532214,NB:"Unboton8",NTitiPER:"empanadastremendasre",},
  { Nombre: "Fuoco",                Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "fuoco", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.55019561932309, lng: -58.45544704653218,NB:"Unboton9",NTitiPER:"fuocore",},
  { Nombre: "Green deli",           Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg",Ntiti: "greendeli", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.6085472033316 , lng: -58.430601517692736,NB:"Unboton10",NTitiPER:"greendelire",},   
  { Nombre: "Juan rotiseria",       Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "juanarotiseria", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.60695359793014, lng: -58.41770432063886,NB:"Unboton11",NTitiPER:"juanarotiseriare", }, 
  { Nombre: "Parilla La estancia almagro",  Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "laestanciaalmagro", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.60765116200893, lng: -58.424562139609364, NB:"Unboton12",NTitiPER:"laestanciaalmagrore"},
  { Nombre: "Los orientales ",      Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "losorientales", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.611751102989665  , lng: -58.42216740420105 ,NB:"Unboton13",NTitiPER:"losorientalesre",},
  { Nombre: " McDonald's",          Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "mc", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.54733936960643, lng:-58.457202774887115,NB:"Unboton14",NTitiPER:"mcre",}, 
  { Nombre: "Mi gusto",             Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "migusto", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.55386492853309, lng:-58.45453130816713,NB:"Unboton15",NTitiPER:"migustore",} ,
  { Nombre: "Pancho 25",            Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "pancho", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.55391815383139 , lng: -58.45207373236616, NB:"Unboton16",NTitiPER:"panchore",},
  { Nombre: "Parilla 83",           Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "parrilla83", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.60856264985912, lng: -58.427567475473225 , NB:"Unboton17",NTitiPER:"parrilla83re",}, 
  { Nombre: "La Tabola",               Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "tabola", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.550985965880265 , lng: -58.454237919228646 ,  NB:"Unboton18", NTitiPER:"tabola",},  
  { Nombre: "Talitas",              Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"   ,Ntiti: "talitas", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat:  -34.55428908438388 , lng: -58.45349121095627,NB:"Unboton19",NTitiPER:"talitasre",},
  { Nombre: "The Rozz",             Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "therozz", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.60915243402376, lng: -58.42153795452309,NB:"Unboton20",NTitiPER:"therozzre",}, 
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