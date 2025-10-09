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
  };}

  postEvent("papu", data, (respuesta) => {
    if (respuesta.ok) {
      resultado.innerText = "✅ Registro exitoso.";
      resultado.style.color = "green";
    } else {
      resultado.innerText = "❌ Error al registrarse.";
      resultado.style.color = "red";
    }
  });


boton.addEventListener("click", register);
