



connect2Server(3000);






let Mail = document.getElementById("Mail");
let Usuario = document.getElementById("Usuario");
let Contra = document.getElementById("Contraseña");
let Genero = document.getElementById("Genero");
let RegistrarseB = document.getElementById("RegistrarseB");



RegistrarseB.addEventListener("click", () => {
    postEvent("papu", {Mail:Mail.value, Contra:Contra.value, Usuario:Usuario.value, Genero:Genero.value }, () => {
        if({ok:true}){
    console.log("Se ha registrado correctamente")

        window.location.href = "Home.html"

        
    }else{
            console.log("Cuenta ya registrada")
        }
    });
});

  
