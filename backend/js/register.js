
import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
let puchi = {ok: false};
subscribePOSTEvent("papu"), ({nombre, apellido, sede, mail, contra}) => {
  let leer = JSON.parse(readFileSync("backend/json/login.json", "utf-8"))
  let usuarios =  { 
    email: mail, 
    contraseña: contra, 
    nombre: nombre, 
    apellido: apellido, 
    sede:sede
  }
   let puchi = {ok: false};
    for(let i = 0; i < leer.length; i++){
        if ([i].mail === email ){
return puchi
        }
        else{
  leer.push(usuarios)
  fs.writeFileSync("backend/json/login.json", JSON.stringify(leer, null, 2))
  puchi = {ok: true}
  return puchi}
}};
subscribePOSTEvent("loginpapucho"),({email, contraseña})=>{
    let pochi = {ok: false};
    let datitos = JSON.parse(fs.readFileSync("backend/json/login.json", "utf-8"));
    for(let i = 0; i < datitos.length; i++){
        if (datitos[i].email === email && datitos[i].contraseña === contraseña ){
        pochi = {ok: true}
        return pochi
    }
        else {
            return pochi
        }
}}
startServer(3000, true);