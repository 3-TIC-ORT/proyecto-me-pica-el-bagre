
connect2Server(3000)

let Usuario = document.getElementById("Usuario");
let Contraseña = document.getElementById("Contraseña");
let Genero = document.getElementById("Genero");




function guardar() {

    let generoSeleccionado = "";

    if (document.getElementById("Mujer").checked) {
        generoSeleccionado = "Mujer";
    } else if (document.getElementById("Hombre").checked) {
        generoSeleccionado = "Hombre";
    } else if (document.getElementById("Otro").checked) {
        generoSeleccionado = "Otro";

    let usuarioCompleto = {
        usuario: Usuario,
        contraseña: Contraseña,
        genero: Genero,
    }
    return(usuarioCompleto);
    
}}

console.log(usuarioCompleto);

postEvent("guardarUsuario", (usuarioCompleto) => guardar) 