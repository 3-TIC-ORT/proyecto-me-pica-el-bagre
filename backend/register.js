
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
subscribePOSTEvent("loginpapucho",({email, contraseña})=>{
    let pochi = {ok: false};
    let datitos = JSON.parse(fs.readFileSync("backend/login.json", "utf-8"));
    for(let i = 0; i < datitos.length; i++){
        if (datitos[i].mail === email && datitos[i].contra === contraseña ){
        pochi = {ok: true}
        return pochi
    }
        else {
            return pochi
        }
}

})
startServer(3000, true);