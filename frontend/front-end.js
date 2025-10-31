
connect2Server(3000)

let Usuario = document.getElementById("Usuario").value;
let Contraseña = document.getElementById("Contraseña").value;
let Genero = document.getElementById("Genero").value;
let Mail = document.getElementById("Mail").value;


postEvent("GuardarUsuario"), (Usuario, Contraseña, Genero, Mail), (puchi) => {
    if (puchi === true){
        console.log("te registraste correctamente")
    }
    else{
        console.log ("usuario ya registrado")
    }
};

postEvent("loginpapucho"), {email, contraseña}, (pochi) => {
    if(pochi === true){
console.log("iniciaste sesion correctamente")
    }
    else{
        console.log("incorrecto")
    }
}