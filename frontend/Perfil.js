let Mail = JSON.parse(localStorage.getItem("Mail"))
let Sede = JSON.parse(localStorage.getItem("sedeOrt"))
let Genero = JSON.parse(localStorage.getItem("Genero"))
let Usuario = JSON.parse(localStorage.getItem("usuarioActual"))


document.getElementById("SMail").textContent = "Email: " + Mail.Mail;
document.getElementById("SSede").textContent  = "Sede: " + Sede.Sede;
document.getElementById("SGenero").textContent = "Género: " + Genero.Genero;
document.getElementById("SUsuario").textContent = "Usuario: " + Usuario.Usuario;