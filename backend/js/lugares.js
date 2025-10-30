import fs from "fs"
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
import { json } from "stream/consumers";
subscribePOSTEvent("acuña"),({ usuario, reseña}) =>{
    let papu = JSON.parse(fs.readFileSync("backend/json/acuñabar.json", "utf-8"))
    let lista = {
        usuario: usuario,
        opinion: reseña
    }
papu.push(lista)
fs.writeFileSync("backend/json/acuñabar.json", JSON.stringify(papu, null, 2))
return null
}
subscribePOSTEvent("aieka"),({ usuario, reseña}) =>{
    let felix = JSON.parse(fs.readFileSync("backend/json/aieka.json", "utf-8"))
    let po = {
        usuario: usuario,
        opinion: reseña
    }
felix.push(po)
fs.writeFileSync("backend/json/aieka.json", JSON.stringify (felix, null, 2))
return null
}
subscribePOSTEvent("almacen"),({ usuario, reseña}) =>{
    let franco = JSON.parse(fs.readFileSync("backend/json/almacen.json", "utf-8"))
    let aleksic = {
        usuario: usuario,
        opinion: reseña
    }
franco.push(aleksic)
fs.writeFileSync("backend/json/almacen.json", JSON.stringify (franco, null, 2))
return null
}
subscribePOSTEvent("braseria"),({ usuario, reseña}) =>{
    let jose = JSON.parse(fs.readFileSync("backend/json/braseria.json", "utf-8"))
    let barcelo = {
        usuario: usuario,
        opinion: reseña
    }
jose.push(barcelo)
fs.writeFileSync("backend/json/braseria.json", JSON.stringify(jose, null, 2))
return null
}