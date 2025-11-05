



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


let Mail = document.getElementById("Mail").value
let Usuario = document.getElementById("Usuario").value
let Contraseña = document.getElementById("Contraseña").value
let Genero = document.getElementById("Genero").value





document.getElementById("RegistrarseB").addEventListener("click", function(){


    postEvent("Registrarse", {Mail, Contraseña, Usuario, Genero }, (pochi) => {
        if(pochi === true){
    console.log("Se ha registrado correctamente")

        window.location.href = "Home.html"

        
    }else{
            console.log("Cuenta ya registrada")
        }
    });
});

  



