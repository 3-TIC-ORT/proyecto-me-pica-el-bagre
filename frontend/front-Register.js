



connect2Server(3000);






let Mail = document.getElementById("Mail");
let Usuario = document.getElementById("Usuario");
let Contra = document.getElementById("Contraseña");
let Genero = document.getElementById("Genero");
let RegistrarseB = document.getElementById("RegistrarseB");



RegistrarseB.addEventListener("click", () => {
    postEvent("papu", {Mail:Mail.value, Contra:Contra.value, Usuario:Usuario.value, Genero:Genero.value }, (response) => {
    
            if (response && response.ok === true) {
    console.log("Se ha registrado correctamente");


      localStorage.setItem("usuarioActual", JSON.stringify({ Usuario: Usuario.value }));
        window.location.href = "Home.html";
        
    }else if ({ok:false}) {
        console.log("Cuenta ya registrada");
    
    }
});
});

