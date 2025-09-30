import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
connect2Server(3000)
let nombre = document.getElementById("nombre-registrar");
let apellido = document.getElementById("apellido-registrar");
let sede = document.getElementById("Sede registro");
let mail = document.getElementById("gmail-registrar");
let contra = document.getElementById("contraseña-registrar");
let boton = document.getElementById("boton");

function register() {
  let user = {
    nombre: nombre.value,
    apellido: apellido.value,
    sede: sede.value,
    mail: mail.value,
    contra: contra.value,
  };

  postEvent("papu", user,{

    }
  });
}

boton.addEventListener("click", register);
