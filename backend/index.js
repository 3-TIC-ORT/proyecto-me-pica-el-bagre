
import fs from "fs";
import { subscribePOSTEvent, startServer } from "soquetic";


function leerUsuarios() {
  let data = fs.readFileSync("login.json", "utf8");
  return JSON.parse(data);
}

function guardarUsuarios(usuarios) {
  fs.writeFileSync("login.json", JSON.stringify(usuarios, null, 2));
}
let objok = {ok: false};
subscribePOSTEvent("papu", (data) => {
  let { mail, contra, nombre, apellido, sede } = data;

  let usuarios = leerUsuarios();

  if (usuarios[mail]) {
    return { ok: false, msg: "El mail ya está registrado" };
  }

  usuarios[mail] = { 
    mail, 
    contra, 
    nombre, 
    apellido, 
    sede 
  };

  guardarUsuarios(usuarios);
objok = {ok: true}
  return {objok};
});

startServer(3000, true); 