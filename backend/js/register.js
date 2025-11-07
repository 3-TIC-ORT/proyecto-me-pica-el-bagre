
import fs from "fs";
import { subscribeGETEvent as subscribePOSTEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
  subscribePOSTEvent("papu", ({Usuario, Contra, Genero, Mail}) => {
  let leer = JSON.parse(fs.readFileSync("../json/login.json", "utf-8"))
  let usuarios =  {
    email: Mail, 
    contraseña: Contra, 
    Usuario: Usuario, 
    Genero: Genero
  }
    for(let i = 0; i < leer.length; i++){
        if (leer[i].email === Mail)  return {ok: false}
      }
      leer.push(usuarios)
      fs.writeFileSync("../json/login.json", JSON.stringify(leer, null, 2))
      return {ok: true}
});
subscribePOSTEvent("loginpapucho", ({email, contraseña}) => {
    let datitos = JSON.parse(fs.readFileSync("../json/login.json", "utf-8"));
    for(let i = 0; i < datitos.length; i++){
        if (datitos[i].email === email && datitos[i].contraseña === contraseña ) return {ok: true}
  
        else {
            return {ok:false}
        }
}});
subscribePOSTEvent("acuña",({ usuario, reseña}) =>{
  let papu = JSON.parse(fs.readFileSync("../json/acuñabar.json", "utf-8"))
  let lista = {
      usuario: usuario,
      opinion: reseña
  }
  papu.push(lista)
  fs.writeFileSync("../json/acuñabar.json", JSON.stringify(papu, null, 2))
  return null
})
subscribePOSTEvent("aieka"),({ usuario, reseña}) =>{
  let felix = JSON.parse(fs.readFileSync("../json/aieka.json", "utf-8"))
  let po = {
      usuario: usuario,
      opinion: reseña
  }
  felix.push(po)
  fs.writeFileSync("../json/aieka.json", JSON.stringify (felix, null, 2))
  return null
}
subscribePOSTEvent("almacen"),({ usuario, reseña}) =>{
  let franco = JSON.parse(fs.readFileSync("../json/almacen.json", "utf-8"))
  let aleksic = {
      usuario: usuario,
      opinion: reseña
  }
  franco.push(aleksic)
  fs.writeFileSync("../json/almacen.json", JSON.stringify (franco, null, 2))
  return null
}
subscribePOSTEvent("braseria"),({ usuario, reseña}) =>{
  let jose = JSON.parse(fs.readFileSync("../json/braseria.json", "utf-8"))
  let barcelo = {
      usuario: usuario,
      opinion: reseña
  }
  jose.push(barcelo)
  fs.writeFileSync("../json/braseria.json", JSON.stringify(jose, null, 2))
  return null
}

subscribePOSTEvent("damblee"),({ usuario, reseña}) =>{
  let fran = JSON.parse(fs.readFileSync("../json/damblee.json", "utf-8"))
  let ortu = {
      usuario: usuario,
      opinion: reseña
  }
  fran.push(ortu)
  fs.writeFileSync("../json/damblee.json", JSON.stringify(fran, null, 2))
  return null
}


subscribePOSTEvent("elfuelle"),({ usuario, reseña}) =>{
  let lauti = JSON.parse(fs.readFileSync("../json/elfuelle.json", "utf-8"))
  let perezc = {
      usuario: usuario,
      opinion: reseña
  }
  lauti.push(perezc)
  fs.writeFileSync("../json/elfuelle.json", JSON.stringify(lauti, null, 2))
  return null
}

subscribePOSTEvent("elpatiodemingo"),({ usuario, reseña}) =>{
  let lolo = JSON.parse(fs.readFileSync("../json/elpatiodemingo.json", "utf-8"))
  let martelli = {
      usuario: usuario,
      opinion: reseña
  }
lolo.push(martelli)
fs.writeFileSync("../json/elpatiodemingo.json", JSON.stringify(lolo, null, 2))
return null
}
subscribePOSTEvent("empanadastremendas"),({ usuario, reseña}) =>{
  let oki = JSON.parse(fs.readFileSync("../json/empanadastremendas.json", "utf-8"))
  let pez = {
      usuario: usuario,
      opinion: reseña
  }
oki.push(pez)
fs.writeFileSync("../json/empanadastremendas.json", JSON.stringify(oki, null, 2))
return null
}
subscribePOSTEvent("fuoco"),({ usuario, reseña}) =>{
  let agus = JSON.parse(fs.readFileSync("../json/fuoco.json", "utf-8"))
  let mono = {
      usuario: usuario,
      opinion: reseña
  }
agus.push(mono)
fs.writeFileSync("../json/fuoco.json", JSON.stringify(agus, null, 2))
return null
}
subscribePOSTEvent("greendeli"),({ usuario, reseña}) =>{
  let leon = JSON.parse(fs.readFileSync("../json/greendeli.json", "utf-8"))
  let saad = {
      usuario: usuario,
      opinion: reseña
  }
leon.push(saad)
fs.writeFileSync("../json/greendeli.json", JSON.stringify(leon, null, 2))
return null
}
subscribePOSTEvent("juanarotiseria"),({ usuario, reseña}) =>{
  let milo = JSON.parse(fs.readFileSync("../json/juanarotiseria.json", "utf-8"))
  let canti = {
      usuario: usuario,
      opinion: reseña
  }
milo.push(canti)
fs.writeFileSync("../json/juanarotiseria.json", JSON.stringify(milo, null, 2))
return null
}
subscribePOSTEvent("laestanciaalmagro"),({ usuario, reseña}) =>{
  let luki = JSON.parse(fs.readFileSync("../json/laestanciaalmagro.json", "utf-8"))
  let fant = {
      usuario: usuario,
      opinion: reseña
  }
luki.push(fant)
fs.writeFileSync("../json/laestanciaalmagro.json", JSON.stringify(luki, null, 2))
return null
}
subscribePOSTEvent("losorientales"),({ usuario, reseña}) =>{
  let eli = JSON.parse(fs.readFileSync("../json/losorientales.json", "utf-8"))
  let na = {
      usuario: usuario,
      opinion: reseña
  }
eli.push(na)
fs.writeFileSync("../json/losorientales.json", JSON.stringify(eli, null, 2))
return null
}
subscribePOSTEvent("mc"),({ usuario, reseña}) =>{
  let oli = JSON.parse(fs.readFileSync("../json/mc.json", "utf-8"))
  let yo = {
      usuario: usuario,
      opinion: reseña
  }
oli.push(yo)
fs.writeFileSync("../json/mc.json", JSON.stringify(oli, null, 2))
return null
}
subscribePOSTEvent("migusto"),({ usuario, reseña}) =>{
  let dante = JSON.parse(fs.readFileSync("../json/migusto.json", "utf-8"))
  let petrus = {
      usuario: usuario,
      opinion: reseña
  }
dante.push(petrus)
fs.writeFileSync("../json/migusto.json", JSON.stringify(dante, null, 2))
return null
}
subscribePOSTEvent("pancho"),({ usuario, reseña}) =>{
  let manu = JSON.parse(fs.readFileSync("../json/pancho.json", "utf-8"))
  let echa = {
      usuario: usuario,
      opinion: reseña
  }
manu.push(echa)
fs.writeFileSync("../json/pancho.json", JSON.stringify(manu, null, 2))
return null
}
subscribePOSTEvent("parrilla83"),({ usuario, reseña}) =>{
  let anton = JSON.parse(fs.readFileSync("../json/parrilla83.json", "utf-8"))
  let antutis = {
      usuario: usuario,
      opinion: reseña
  }
anton.push(antutis)
fs.writeFileSync("../json/parrilla83.json", JSON.stringify(anton, null, 2))
return null
}
subscribePOSTEvent("tabola"),({ usuario, reseña}) =>{
  let sofi = JSON.parse(fs.readFileSync("../json/tabola.json", "utf-8"))
  let roces = {
      usuario: usuario,
      opinion: reseña
  }
sofi.push(roces)
fs.writeFileSync("../json/tabola.json", JSON.stringify(sofi, null, 2))
return null
}
subscribePOSTEvent("talitas"),({ usuario, reseña}) =>{
  let lu = JSON.parse(fs.readFileSync("../json/talitas.json", "utf-8"))
  let korzan = {
      usuario: usuario,
      opinion: reseña
  }
lu.push(korzan)
fs.writeFileSync("../json/talitas.json", JSON.stringify(lu, null, 2))
return null
}
subscribePOSTEvent("empanadastremendas"),({ usuario, reseña}) =>{
  let guada = JSON.parse(fs.readFileSync("../json/empanadastremendas.json", "utf-8"))
  let perez = {
      usuario: usuario,
      opinion: reseña
  }
guada.push(perez)
fs.writeFileSync("../json/empanadastremendas.json", JSON.stringify(guada, null, 2))
return null
}
startServer(3000, true);