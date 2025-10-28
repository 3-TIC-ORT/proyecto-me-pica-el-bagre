import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
import fs from "fs";
let nombre = document.getElementById("nombre-registrar").value;
let apellido = document.getElementById("apellido-registrar").value;
let sede = document.getElementById("Sede registro").value;
let mail = document.getElementById("gmail-registrar").value;
let contra = document.getElementById("contraseña-registrar").value;
let email = document.getElementById("mail-login").value;
let contraseña = document.getElementById("contraseña-login").value;

PostEvent("papu", {nombre, apellido, sede, mail, contra}, (puchi) => {
if (puchi === true){
    console.log("te registraste correctamente")
}
else{
    console.log ("usuario ya registrado")
}
});
PostEvent("loginpapucho"), {email, contraseña}, (pochi) => {
    if(pochi === true){
console.log("iniciaste sesion correctamente")
    }
    else{
        console.log("incorrecto")
    }
}
connect2Server(3000)