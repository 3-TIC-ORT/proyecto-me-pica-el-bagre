

connect2Server(3000);

let Apopup = document.getElementById('Apopup');
let Cpopup = document.getElementById('Cpopup');
let Popup = document.getElementById('Popup');
let btnInformacion = document.getElementById("btnInformacion");
let btnMenu = document.getElementById("btnMenu");
let btnOpiniones = document.getElementById("btnOpiniones"); 
let btnPromociones = document.getElementById("btnPromociones"); 
let Mandar = document.getElementById("Mandar")
let reseña = document.getElementById("Escribir")

       






const Rinformacion = {
  "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
    "Acuña bar": { 
    endpoint: "acuña",
    params: (usuario, reseña) => ({ usuarioreseña: usuario, reseña: reseña })
  },
  
  
  
 
};












        Mandar.addEventListener("click", () =>{
     let UsuarioR = JSON.parse(localStorage.getItem("usuarioActual"));
    postEvent("acuña", {usuarioreseña:UsuarioR.Usuario, reseña:reseña.value}, (response) => {
    console.log("reseña enviada")
        document.getElementById("Escribir").value = "";
      
        
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



let botones = document.querySelectorAll(".Unboton");

let datos = [
  { Nombre: "Acuña bar ",           Direccion: "Direccion",   FL1: "img1.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"},
  { Nombre: "Aieka",                Direccion: "Direccion 2", FL1: "img2.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"},
  { Nombre: "Almacen de pizzas",    Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"},
  { Nombre: "Braseria",             Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"},
  { Nombre: "Damblee",              Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"},
  { Nombre: "El fuelle",            Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"},
  { Nombre: "El patio de Mingo",    Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg" ,FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"},
  { Nombre: "Empanadas tremendas",  Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"},
  { Nombre: "Fuoco",                Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"},
  { Nombre: "Green deli",           Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"},
  { Nombre: "Juan rotiseria",       Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"},
  { Nombre: "La estancia almagro",  Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"},
  { Nombre: "Los orientales ",      Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"},
  { Nombre: " McDonald's",          Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" },
  { Nombre: "Mi gusto",             Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" },
  { Nombre: "Pancho 25",            Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg" ,   FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" },
  { Nombre: "Parilla 83",           Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" },
  { Nombre: "Tabola",               Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg" ,  FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" },
  { Nombre: "Talitas",              Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg"  },
  { Nombre: "The rozz",             Direccion: "Direccion 3", FL1: "img3.jpg", FL2: "img3.jpg", FL3: "img3.jpg",    FL4: "img3.jpg",   FM1: "img3.jpg" , FM2: "img3.jpg", FM3: "img3.jpg", FM4: "img3.jpg", FM5: "img3.jpg", FM6: "img3.jpg", FM7: "img3.jpg", FM8: "img3.jpg", FP1: "img3.jpg" , FP2: "img3.jpg" },
];

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", () => {
    let Mariano = datos[i]; 
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




//getEvent("leerResenasAcuña", (reseñas) => {
 // console.log("Reseñas de Acuña:", reseñas);

 // let contenedor = document.getElementById("Leer");
  //contenedor.innerHTML = ""; 

  //reseñas.forEach((r) => {
   // let div = document.createElement("div");
   // div.textContent = `${r.usuario}: ${r.opinion}`;
   // contenedor.appendChild(div);
  //});
//});