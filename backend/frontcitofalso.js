import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
import fs from "fs";
PostEvent("papu", {nombre, apellido, sede, mail, contra}, (puchi) => {
if (puchi === true){
    console.log("te registraste correctamente")
}
else{
    console.log ("usuario ya registrado")
}
});
PostEvent("loginpapucho"), {email, contraseña}, (puchi) => {
    if(puchi === true){
console.log("iniciaste sesion correctamente")
    }
    else{
        console.log("incorrecto")
    }
}
connect2Server(3000)