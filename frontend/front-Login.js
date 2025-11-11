let Login =  document.getElementById("Login");

Login.addEventListener("click", () =>
    postEvent("loginpapucho", {Contra:Contra.value, Mail:Mail.value}, () => {
   if (puchi === true){
        console.log("te registraste correctamente")
         window.location.href = "Home.html"
    }
    else{
        console.log ("usuario ya registrado")
    }
}));


