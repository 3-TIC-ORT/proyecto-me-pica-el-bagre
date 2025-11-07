connect2Server(3000);
let email = document.getElementById("popu");
let contraseña = document.getElementById("acido");
let Usuario = document.getElementById("papu");
let Contra = document.getElementById("papuchines");
let Genero = document.getElementById("pepin");
let Mail = document.getElementById("dobleplaga");
let boton = document.getElementById("botonito")
let botonitofe = document.getElementById("petrus")

boton.addEventListener("click", () =>
    postEvent("papu", {Usuario:Usuario.value, Contra:Contra.value, Genero:Genero.value, Mail:Mail.value}, () => {
    if ({ok:true}){
        console.log("te registraste correctamente")
    }
    else{
        console.log ("usuario ya registrado")
    }
}));
botonitofe.addEventListener("click", () =>
postEvent("loginpapucho"), {email:email.value, contraseña:contraseña.value}, () => {
    if({ok:true}){
console.log("iniciaste sesion correctamente")
    }
    else{
        console.log("incorrecto")
    }
});
