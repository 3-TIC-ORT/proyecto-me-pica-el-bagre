connect2Server();
let email = document.getElementById("UsuarioL");
let contraseña = document.getElementById("contraseña-login");
let Usuario = document.getElementById("Usuario");
let Contra = document.getElementById("contraseña");
let Genero = document.getElementById("Genero");
let Mail = document.getElementById("Mail");
let boton = document.getElementById("boton")

boton.addEventListener("click", () =>
    postEvent("papu"), {Usuario, Contra, Genero, Mail}, (puchi) => {
    if (puchi === true){
        console.log("te registraste correctamente")
    }
    else{
        console.log ("usuario ya registrado")
    }
});
postEvent("loginpapucho"), {email, contraseña}, (pochi) => {
    if(pochi === true){
console.log("iniciaste sesion correctamente")
    }
    else{
        console.log("incorrecto")
    }
}
