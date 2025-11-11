



connect2Server(3000);



//boton.addEventListener("click", () =>
  //  postEvent("papu", {Usuario:Usuario.value, Contra:Contra.value, Genero:Genero.value, Mail:Mail.value}, (puchi) => {
    //if (puchi === true){
      //  console.log("te registraste correctamente")
    //}
    //else{
      //  console.log ("usuario ya registrado")
    //}
//}));


let Mail = document.getElementById("Mail");
let Usuario = document.getElementById("Usuario");
let Contra = document.getElementById("Contraseña");
let Genero = document.getElementById("Genero");
let RegistrarseB = document.getElementById("RegistrarseB")



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

  



