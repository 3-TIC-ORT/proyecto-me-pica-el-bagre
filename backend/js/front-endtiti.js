connect2Server(3000);
let email = document.getElementById("UsuarioL");
let contraseña = document.getElementById("contraseña-login");
let Usuario = document.getElementById("papu");
let Contra = document.getElementById("papuchines");
let Genero = document.getElementById("pepin");
let Mail = document.getElementById("dobleplaga");
let boton = document.getElementById("botonito")
let botonitofe = document.getElementById("petrus")

boton.addEventListener("click", () =>
    postEvent("papu", {Usuario:Usuario.value, Contra:Contra.value, Genero:Genero.value, Mail:Mail.value}, (puchi) => {
    if (puchi === true){
        console.log("te registraste correctamente")
    }
    else{
        console.log ("usuario ya registrado")
    }
}));
botonitofe.addEventListener("click", () =>
postEvent("loginpapucho"), {email, contraseña}, (pochi) => {
    if(pochi === true){
console.log("iniciaste sesion correctamente")
    }
    else{
        console.log("incorrecto")
    }
});
