

connect2Server(3000);


let Cpopup = document.getElementById('Cpopup');
let Popup = document.getElementById('Popup');
let btnInformacion = document.getElementById("btnInformacion");
let btnMenu = document.getElementById("btnMenu");
let btnOpiniones = document.getElementById("btnOpiniones"); 
let btnPromociones = document.getElementById("btnPromociones"); 
let Mandar = document.getElementById("Mandar")
let reseña = document.getElementById("Escribir")   
let Apopup1 = document.getElementById("Unboton1")
let Apopup2 = document.getElementById("Unboton2")
let Apopup3 = document.getElementById("Unboton3")
let Apopup4 = document.getElementById("Unboton4")
let Apopup5 = document.getElementById("Unboton5")
let Apopup6 = document.getElementById("Unboton6")
let Apopup7 = document.getElementById("Unboton7")
let Apopup8 = document.getElementById("Unboton8")
let Apopup9 = document.getElementById("Unboton9")
let Apopup10 = document.getElementById("Unboton10")
let Apopup11 = document.getElementById("Unboton11")
let Apopup12 = document.getElementById("Unboton12")
let Apopup13 = document.getElementById("Unboton13")
let Apopup14 = document.getElementById("Unboton14")
let Apopup15 = document.getElementById("Unboton15")
let Apopup16 = document.getElementById("Unboton16")
let Apopup17 = document.getElementById("Unboton17")
let Apopup18 = document.getElementById("Unboton18")
let Apopup19 = document.getElementById("Unboton19")
let Apopup20 = document.getElementById("Unboton20")




Apopup1.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup2.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});


Apopup3.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup4.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup5.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup6.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup7.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup8.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup9.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup10.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup11.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup12.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup13.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup14.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup15.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup16.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup17.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup18.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup19.addEventListener('click', () => {
  Popup.style.display = 'flex';
  MostrarS("Informacion"); 
});

Apopup20.addEventListener('click', () => {
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



let botones = document.querySelectorAll(".Unboton");

let datos = [
  { Nombre: "Acuña bar ",           Direccion: "Direccion",   FL1: "Fotos/Ejemplolugar.webp", FL2: "Fotos/Ejemplolugar.webp", FL3: "Fotos/Ejemplolugar.webp" ,   FL4: "Fotos/Ejemplolugar.webp",   FM1: "Fotos/Ejemplolugar.webp" , FM2: "Fotos/Ejemplolugar.webp", FM3: "Fotos/Ejemplolugar.webp", FM4: "Fotos/Ejemplolugar.webp", FM5: "Fotos/Ejemplolugar.webp", FM6: "Fotos/Ejemplolugar.webp", FM7: "Fotos/Ejemplolugar.webp", FM8: "Fotos/Ejemplolugar.webp", FP1: "Fotos/Ejemplolugar.webp" , FP2: "Fotos/Ejemplolugar.webp",  Ntiti: "acuña", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }), lat: 60856045654413, lng: -58.423204160829535,},  
  { Nombre: "Aieka",                Direccion: "Direccion 2", FL1: "img2.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg", Ntiti: "aieka", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.549775931085875, lng: -58.454834818870204, },   
  { Nombre: "Almacen de pizzas",    Direccion: "Av. del Libertador 6700", FL1: "Fotos/AlmacendepizzasL1.png", FL2: "Fotos/AlmacendepizzasL2.png", FL3: "Fotos/AlmacendepizzasL3.png",    FL4: "Fotos/AlmacendepizzasL4.png",   FM1: "Fotos/AlmacendepizzasM1.png" , FM2: "Fotos/AlmacendepizzasM2.png", FM3: "Fotos/AlmacendepizzasM3.png", FM4: "Fotos/AlmacendepizzasM4.png", FM5: "Fotos/AlmacendepizzasM5.png", FM6: "Fotos/AlmacendepizzasM6.png", FM7: "Fotos/AlmacendepizzasM7.png", FM8: "Fotos/AlmacendepizzasM8.png", FP1: "Fotos/AlmacendepizzasP1.png" , FP2: "Fotos/AlmacendepizzasP2.png",Ntiti: "almacen", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.550737026077265, lng: -58.45313581193346,},  
  { Nombre: "Braseria",             Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg", Ntiti: "braseria", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.55065844912234, lng: -58.456682703373396,},
  { Nombre: "Damblee",              Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg", Ntiti: "damblee", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.6105762522731, lng: -58.414583545489755,}, 
  { Nombre: "El fuelle",            Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg", Ntiti: "elfuelle", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.60989401010079, lng: -58.42114328966437,},
  { Nombre: "El patio de Mingo",    Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg" ,FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg", Ntiti: "elpatiodemingo", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.6105762522731, lng: -58.414583545489755,}, 
  { Nombre: "Empanadas tremendas",  Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg",Ntiti: "empanadastremendas", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.55024802037174 , lng: -58.45570529185439,},
  { Nombre: "Fuoco",                Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "fuoco", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.608511881782185 , lng: -58.430633703159764,},
  { Nombre: "Green deli",           Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg",Ntiti: "greendeli", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.550146399618825 , lng:-58.45546925748705,},
  { Nombre: "Juan rotiseria",       Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "juanarotiseria", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.6067276639753 , lng: -58.41784497603822,},
  { Nombre: "Parilla La estancia almagro",  Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "laestanciaalmagro", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.60768136109108, lng: -58.424496853663406,},
  { Nombre: "Los orientales ",      Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "losorientales", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.61160099208646 , lng: -58.42217813199449,},
  { Nombre: " McDonald's",          Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "mc", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.547365880293654 , lng: -58.45717385797,},
  { Nombre: "Mi gusto",             Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "migusto", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.55493214103256 , lng: -58.454515714951754,},
  { Nombre: "Pancho 25",            Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "pancho", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.55385634080305 , lng: -58.45206685831121,},
  { Nombre: "Parilla 83",           Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "parrilla83", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.60847279060055 , lng: -58.427600589664316,},
  { Nombre: "La Tabola",               Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "tabola", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.55095613319102 , lng: -58.4542620472688,},
  { Nombre: "Talitas",              Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"   ,Ntiti: "talitas", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.554347144144344, lng:-58.45350101187575,},
  { Nombre: "The Rozz",             Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" ,Ntiti: "therozz", Parametros: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña }),lat: -34.60908570002628, lng: -58.421513274324845,},
];



let Ractual = ""

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", () => {
    let Mariano = datos[i]; 
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
     let Info = datos[Ractual];
    postEvent(Info.Ntiti, Info.Parametros(UsuarioR.Usuario, reseña.value), (response) => {
    console.log("reseña enviada")
        document.getElementById("Escribir").value = "";
      
        
    });
        });
 
 






 let MapaL = L.map("MapaL").setView([-34.57901800065002, -58.44157935309309], 14);   

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19
}).addTo(MapaL);



Apopup1.addEventListener("click", () => {
  postEvent("acuñare", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup2.addEventListener("click", () => {
  postEvent("aiekare", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});



Apopup3.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});


Apopup4.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup5.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup6.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup7.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup8.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup9.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup10.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup11.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup12.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup13.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});


Apopup14.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup15.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopu16.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup17.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup18.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup19.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});

Apopup20.addEventListener("click", () => {
  postEvent("Almacen", {}, (Aure) => {
    let contenedor = document.getElementById("Leer");
    contenedor.innerHTML = "";

    Aure.forEach((r) => {
      let div = document.createElement("div");
      div.classList.add("reseña");

      let user = document.createElement("div");
      user.classList.add("usuario");
      user.textContent = r.usuario;

      let op = document.createElement("div");
      op.classList.add("opinion");
      op.textContent = r.opinion;

      div.appendChild(user);
      div.appendChild(op);
      contenedor.appendChild(div);
    });
  });
});




