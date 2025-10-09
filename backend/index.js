
import fs, { readFileSync } from "fs";
import { subscribePOSTEvent, startServer } from "soquetic";

let objok = {ok: false};
subscribePOSTEvent("papu", ({nombre, apellido, sede, mail, contra}) => {
  let leer = JSON.parse(readFileSync("data/login.json", "utf-8"))
  let usuarios =  { 
    mail, 
    contra, 
    nombre, 
    apellido, 
    sede 
  }

  leer.push(usuarios)
  fs.writeFileSync("data/login.json", JSON.stringify(leer, null, 2))
  return {ok: true};
objok = {ok: true}
  return {objok}
});

startServer(3000, true);