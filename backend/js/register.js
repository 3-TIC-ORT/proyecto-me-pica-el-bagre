
import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
  subscribePOSTEvent("papu", ({Usuario, Contra, Genero, Mail}) => {
  
  let leer = JSON.parse(fs.readFileSync("backend/json/login.json", "utf-8"))
  let usuarios =  {
    email: Mail, 
    contraseña: Contra, 
    Usuario: Usuario, 
    Genero: Genero
  }
    for(let i = 0; i < leer.length; i++){
        if (leer[i].email === Mail){
return {ok: false}
        }
        else{
  leer.push(usuarios)
  fs.writeFileSync("backend/json/login.json", JSON.stringify(leer, null, 2))
  return {ok: true}
}
}});
subscribePOSTEvent("loginpapucho",({email, contraseña})=>{
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
}});
subscribeGETEvent("acuña"),({ usuario, reseña}) =>{
  let papu = JSON.parse(fs.readFileSync("backend/json/acuñabar.json", "utf-8"))
  let lista = {
      usuario: usuario,
      opinion: reseña
  }
  papu.push(lista)
  fs.writeFileSync("backend/json/acuñabar.json", JSON.stringify(papu, null, 2))
}
subscribeGETEvent("aieka"),({ usuario, reseña}) =>{
  let felix = JSON.parse(fs.readFileSync("backend/json/aieka.json", "utf-8"))
  let po = {
      usuario: usuario,
      opinion: reseña
  }
  felix.push(po)
  fs.writeFileSync("backend/json/aieka.json", JSON.stringify (felix, null, 2))
}
subscribeGETEvent("almacen"),({ usuario, reseña}) =>{
  let franco = JSON.parse(fs.readFileSync("backend/json/almacen.json", "utf-8"))
  let aleksic = {
      usuario: usuario,
      opinion: reseña
  }
  franco.push(aleksic)
  fs.writeFileSync("backend/json/almacen.json", JSON.stringify (franco, null, 2))
}
subscribeGETEvent("braseria"),({ usuario, reseña}) =>{
  let jose = JSON.parse(fs.readFileSync("backend/json/braseria.json", "utf-8"))
  let barcelo = {
      usuario: usuario,
      opinion: reseña
  }
  jose.push(barcelo)
  fs.writeFileSync("backend/json/braseria.json", JSON.stringify(jose, null, 2))
}

subscribeGETEvent("damblee"),({ usuario, reseña}) =>{
  let fran = JSON.parse(fs.readFileSync("backend/json/damblee.json", "utf-8"))
  let ortu = {
      usuario: usuario,
      opinion: reseña
  }
  fran.push(ortu)
  fs.writeFileSync("backend/json/damblee.json", JSON.stringify(fran, null, 2))
}


subscribeGETEvent("elfuelle"),({ usuario, reseña}) =>{
  let lauti = JSON.parse(fs.readFileSync("backend/json/elfuelle.json", "utf-8"))
  let perezc = {
      usuario: usuario,
      opinion: reseña
  }
  lauti.push(perezc)
  fs.writeFileSync("backend/json/elfuelle.json", JSON.stringify(lauti, null, 2))
}

subscribeGETEvent("elpatiodemingo"),({ usuario, reseña}) =>{
  let lolo = JSON.parse(fs.readFileSync("backend/json/elpatiodemingo.json", "utf-8"))
  let martelli = {
      usuario: usuario,
      opinion: reseña
  }
lolo.push(martelli)
fs.writeFileSync("backend/json/elpatiodemingo.json", JSON.stringify(lolo, null, 2))
}
subscribeGETEvent("empanadastremendas"),({ usuario, reseña}) =>{
  let oki = JSON.parse(fs.readFileSync("backend/json/empanadastremendas.json", "utf-8"))
  let pez = {
      usuario: usuario,
      opinion: reseña
  }
oki.push(pez)
fs.writeFileSync("backend/json/empanadastremendas.json", JSON.stringify(oki, null, 2))
}
subscribeGETEvent("fuoco"),({ usuario, reseña}) =>{
  let agus = JSON.parse(fs.readFileSync("backend/json/fuoco.json", "utf-8"))
  let mono = {
      usuario: usuario,
      opinion: reseña
  }
agus.push(mono)
fs.writeFileSync("backend/json/fuoco.json", JSON.stringify(agus, null, 2))
}
subscribeGETEvent("greendeli"),({ usuario, reseña}) =>{
  let leon = JSON.parse(fs.readFileSync("backend/json/greendeli.json", "utf-8"))
  let saad = {
      usuario: usuario,
      opinion: reseña
  }
leon.push(saad)
fs.writeFileSync("backend/json/greendeli.json", JSON.stringify(leon, null, 2))
}
subscribeGETEvent("juanarotiseria"),({ usuario, reseña}) =>{
  let milo = JSON.parse(fs.readFileSync("backend/json/juanarotiseria.json", "utf-8"))
  let canti = {
      usuario: usuario,
      opinion: reseña
  }
milo.push(canti)
fs.writeFileSync("backend/json/juanarotiseria.json", JSON.stringify(milo, null, 2))
}
subscribeGETEvent("laestanciaalmagro"),({ usuario, reseña}) =>{
  let luki = JSON.parse(fs.readFileSync("backend/json/laestanciaalmagro.json", "utf-8"))
  let fant = {
      usuario: usuario,
      opinion: reseña
  }
luki.push(fant)
fs.writeFileSync("backend/json/laestanciaalmagro.json", JSON.stringify(luki, null, 2))
}
subscribeGETEvent("losorientales"),({ usuario, reseña}) =>{
  let eli = JSON.parse(fs.readFileSync("backend/json/losorientales.json", "utf-8"))
  let na = {
      usuario: usuario,
      opinion: reseña
  }
eli.push(na)
fs.writeFileSync("backend/json/losorientales.json", JSON.stringify(eli, null, 2))
}
subscribeGETEvent("mc"),({ usuario, reseña}) =>{
  let oli = JSON.parse(fs.readFileSync("backend/json/mc.json", "utf-8"))
  let yo = {
      usuario: usuario,
      opinion: reseña
  }
oli.push(yo)
fs.writeFileSync("backend/json/mc.json", JSON.stringify(oli, null, 2))
}
subscribeGETEvent("migusto"),({ usuario, reseña}) =>{
  let dante = JSON.parse(fs.readFileSync("backend/json/migusto.json", "utf-8"))
  let petrus = {
      usuario: usuario,
      opinion: reseña
  }
dante.push(petrus)
fs.writeFileSync("backend/json/migusto.json", JSON.stringify(dante, null, 2))
}
subscribeGETEvent("pancho"),({ usuario, reseña}) =>{
  let manu = JSON.parse(fs.readFileSync("backend/json/pancho.json", "utf-8"))
  let echa = {
      usuario: usuario,
      opinion: reseña
  }
manu.push(echa)
fs.writeFileSync("backend/json/pancho.json", JSON.stringify(manu, null, 2))
}
subscribeGETEvent("parrilla83"),({ usuario, reseña}) =>{
  let anton = JSON.parse(fs.readFileSync("backend/json/parrilla83.json", "utf-8"))
  let antutis = {
      usuario: usuario,
      opinion: reseña
  }
anton.push(antutis)
fs.writeFileSync("backend/json/parrilla83.json", JSON.stringify(anton, null, 2))
}
subscribeGETEvent("tabola"),({ usuario, reseña}) =>{
  let sofi = JSON.parse(fs.readFileSync("backend/json/tabola.json", "utf-8"))
  let roces = {
      usuario: usuario,
      opinion: reseña
  }
sofi.push(roces)
fs.writeFileSync("backend/json/tabola.json", JSON.stringify(sofi, null, 2))
}
subscribeGETEvent("talitas"),({ usuario, reseña}) =>{
  let lu = JSON.parse(fs.readFileSync("backend/json/talitas.json", "utf-8"))
  let korzan = {
      usuario: usuario,
      opinion: reseña
  }
lu.push(korzan)
fs.writeFileSync("backend/json/talitas.json", JSON.stringify(lu, null, 2))
}
subscribeGETEvent("empanadastremendas"),({ usuario, reseña}) =>{
  let guada = JSON.parse(fs.readFileSync("backend/json/empanadastremendas.json", "utf-8"))
  let perez = {
      usuario: usuario,
      opinion: reseña
  }
guada.push(perez)
fs.writeFileSync("backend/json/empanadastremendas.json", JSON.stringify(guada, null, 2))
}
startServer(3000, true);