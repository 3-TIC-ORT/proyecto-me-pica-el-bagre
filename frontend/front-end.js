import{ subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
let mail = document.getElementById("gmail-registrar")
let contra = document.getElementById("contraseña-registrar")
let boton = document.getElementById("boton")
function register(){
postEvent ("papu", contra, mail, () => {

});
}
boton.addEventListener("click", register)
