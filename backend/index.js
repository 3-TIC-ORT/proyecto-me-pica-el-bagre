
import fs, { readFileSync } from "fs";
import { subscribePOSTEvent, startServer } from "soquetic";


function leerUsuarios() {
  let data = fs.readFileSync("login.json", "utf8");
  return JSON.parse(data);
}
function guardarUsuarios(usuarios) {
  fs.writeFileSync("login.json", JSON.stringify(usuarios, null, 2));
  usuarios.push(data)
}

let objok = {ok: false};
subscribePOSTEvent("papu", ({nombre, apellido, sede, mail, contra}) => {
  let leer = JSON.parse(readFileSync("data/login.json", "utf-8"))
  leer.push(favoras)
  let usuarios =  { 
    mail, 
    contra, 
    nombre, 
    apellido, 
    sede 
  }

objok = {ok: true}
  return {objok}
});

startServer(3000, true);