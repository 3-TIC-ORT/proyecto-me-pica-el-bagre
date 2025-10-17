
import fs, { readFileSync } from "fs";
import { subscribePOSTEvent, startServer } from "soquetic";

let puchi = {ok: false};
subscribePOSTEvent("papu", ({nombre, apellido, sede, mail, contra}) => {
  let leer = JSON.parse(readFileSync("backend/login.json", "utf-8"))
  let usuarios =  { 
    mail, 
    contra, 
    nombre, 
    apellido, 
    sede 
  }
   let puchi = {ok: false};
    for(let i = 0; i < leer.length; i++){
        if ([i].mail === email ){
return puchi
        }
        else{
  leer.push(usuarios)
  fs.writeFileSync("backend/login.json", JSON.stringify(leer, null, 2))
  puchi = {ok: true}
  return puchi}
}});

startServer(3000, true);