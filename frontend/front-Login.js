connect2Server(3000);


let Login =  document.getElementById("Login");
let email =  document.getElementById("Mail");
let contraseña =  document.getElementById("Contra");






Login.addEventListener("click", () =>
    postEvent("loginpapucho", {contraseña:contraseña.value, email:email.value}, (response) => {
        if (response && response.ok === true) {
        console.log("te registraste correctamente")
         window.location.href = "Home.html"
    }
    else{
        console.log ("usuario no registrado")
    }
}));