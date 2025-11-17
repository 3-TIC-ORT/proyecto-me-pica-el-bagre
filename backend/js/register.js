
  import fs from "fs";
  import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
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
          if (datitos[i].email === email && datitos[i].contraseña === contraseña ){ return {ok: true}}
   
          else {
              return {ok:false}
          }
  }});
  subscribePOSTEvent("acuña",({ usuarioreseña, reseña}) =>{
    let papu = JSON.parse(fs.readFileSync("../json/acuñabar.json", "utf-8"))
    let lista = {
        usuario: usuarioreseña,
        opinion: reseña
    }
    papu.push(lista)
    fs.writeFileSync("../json/acuñabar.json", JSON.stringify(papu, null, 2))
    return null
  })
  subscribePOSTEvent("aieka", ({ usuarioreseña, reseña}) =>{
    let felix = JSON.parse(fs.readFileSync("../json/aieka.json", "utf-8"))
    let po = {
        usuario: usuarioreseña,
        opinion: reseña
    }
    felix.push(po)
    fs.writeFileSync("../json/aieka.json", JSON.stringify (felix, null, 2))
    return null
  })
  subscribePOSTEvent("almacen",({ usuarioreseña, reseña}) =>{
    let franco = JSON.parse(fs.readFileSync("../json/almacen.json", "utf-8"))
    let aleksic = {
        usuario: usuarioreseña,
        opinion: reseña
    }
    franco.push(aleksic)
    fs.writeFileSync("../json/almacen.json", JSON.stringify (franco, null, 2))
    return null
  })
  subscribePOSTEvent("braseria",({ usuarioreseña, reseña}) =>{
    let jose = JSON.parse(fs.readFileSync("../json/braseria.json", "utf-8"))
    let barcelo = {
        usuario: usuarioreseña,
        opinion: reseña
    }
    jose.push(barcelo)
    fs.writeFileSync("../json/braseria.json", JSON.stringify(jose, null, 2))
    return null
  })

  subscribePOSTEvent("damblee",({ usuarioreseña, reseña}) =>{
    let fran = JSON.parse(fs.readFileSync("../json/damblee.json", "utf-8"))
    let ortu = {
        usuario: usuarioreseña,
        opinion: reseña
    }
    fran.push(ortu)
    fs.writeFileSync("../json/damblee.json", JSON.stringify(fran, null, 2))
    return null
  })


  subscribePOSTEvent("elfuelle",({ usuarioreseña, reseña}) =>{
    let lauti = JSON.parse(fs.readFileSync("../json/elfuelle.json", "utf-8"))
    let perezc = {
        usuario: usuarioreseña,
        opinion: reseña
    }
    lauti.push(perezc)
    fs.writeFileSync("../json/elfuelle.json", JSON.stringify(lauti, null, 2))
    return null
  })

  subscribePOSTEvent("elpatiodemingo",({ usuarioreseña, reseña}) =>{
    let lolo = JSON.parse(fs.readFileSync("../json/elpatiodemingo.json", "utf-8"))
    let martelli = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  lolo.push(martelli)
  fs.writeFileSync("../json/elpatiodemingo.json", JSON.stringify(lolo, null, 2))
  return null
  })
  subscribePOSTEvent("empanadastremendas",({ usuarioreseña, reseña}) =>{
    let oki = JSON.parse(fs.readFileSync("../json/empanadastremendas.json", "utf-8"))
    let pez = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  oki.push(pez)
  fs.writeFileSync("../json/empanadastremendas.json", JSON.stringify(oki, null, 2))
  return null
  })
  subscribePOSTEvent("fuoco",({ usuarioreseña, reseña}) =>{
    let agus = JSON.parse(fs.readFileSync("../json/fuoco.json", "utf-8"))
    let mono = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  agus.push(mono)
  fs.writeFileSync("../json/fuoco.json", JSON.stringify(agus, null, 2))
  return null
  })
  subscribePOSTEvent("greendeli",({ usuarioreseña, reseña}) =>{
    let leon = JSON.parse(fs.readFileSync("../json/greendeli.json", "utf-8"))
    let saad = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  leon.push(saad)
  fs.writeFileSync("../json/greendeli.json", JSON.stringify(leon, null, 2))
  return null
  })
  subscribePOSTEvent("juanarotiseria",({ usuarioreseña, reseña}) =>{
    let milo = JSON.parse(fs.readFileSync("../json/juanarotiseria.json", "utf-8"))
    let canti = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  milo.push(canti)
  fs.writeFileSync("../json/juanarotiseria.json", JSON.stringify(milo, null, 2))
  return null
  })
  subscribePOSTEvent("laestanciaalmagro",({ usuarioreseña, reseña}) =>{
    let luki = JSON.parse(fs.readFileSync("../json/laestanciaalmagro.json", "utf-8"))
    let fant = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  luki.push(fant)
  fs.writeFileSync("../json/laestanciaalmagro.json", JSON.stringify(luki, null, 2))
  return null
  })
  subscribePOSTEvent("losorientales",({ usuarioreseña, reseña}) =>{
    let eli = JSON.parse(fs.readFileSync("../json/losorientales.json", "utf-8"))
    let na = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  eli.push(na)
  fs.writeFileSync("../json/losorientales.json", JSON.stringify(eli, null, 2))
  return null
  })
  subscribePOSTEvent("mc",({ usuarioreseña, reseña}) =>{
    let oli = JSON.parse(fs.readFileSync("../json/mc.json", "utf-8"))
    let yo = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  oli.push(yo)
  fs.writeFileSync("../json/mc.json", JSON.stringify(oli, null, 2))
  return null
  })
  subscribePOSTEvent("migusto",({ usuarioreseña, reseña}) =>{
    let dante = JSON.parse(fs.readFileSync("../json/migusto.json", "utf-8"))
    let petrus = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  dante.push(petrus)
  fs.writeFileSync("../json/migusto.json", JSON.stringify(dante, null, 2))
  return null
  })
  subscribePOSTEvent("pancho",({ usuarioreseña, reseña}) =>{
    let manu = JSON.parse(fs.readFileSync("../json/pancho.json", "utf-8"))
    let echa = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  manu.push(echa)
  fs.writeFileSync("../json/pancho.json", JSON.stringify(manu, null, 2))
  return null
  })
  subscribePOSTEvent("parrilla83",({ usuarioreseña, reseña}) =>{
    let anton = JSON.parse(fs.readFileSync("../json/parrilla83.json", "utf-8"))
    let antutis = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  anton.push(antutis)
  fs.writeFileSync("../json/parrilla83.json", JSON.stringify(anton, null, 2))
  return null
  })
  subscribePOSTEvent("tabola",({ usuarioreseña, reseña}) =>{
    let sofi = JSON.parse(fs.readFileSync("../json/tabola.json", "utf-8"))
    let roces = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  sofi.push(roces)
  fs.writeFileSync("../json/tabola.json", JSON.stringify(sofi, null, 2))
  return null
  })
  subscribePOSTEvent("talitas",({ usuarioreseña, reseña}) =>{
    let lu = JSON.parse(fs.readFileSync("../json/talitas.json", "utf-8"))
    let korzan = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  lu.push(korzan)
  fs.writeFileSync("../json/talitas.json", JSON.stringify(lu, null, 2))
  return null
  })
  subscribePOSTEvent("therozz",({ usuarioreseña, reseña}) =>{
    let guada = JSON.parse(fs.readFileSync("../json/therozz.json", "utf-8"))
    let perez = {
        usuario: usuarioreseña,
        opinion: reseña
    }
  guada.push(perez)
  fs.writeFileSync("../json/therozz.json", JSON.stringify(guada, null, 2))
  return null
  })
subscribePOSTEvent("Almacen", ({}) => {
let Aure = JSON.parse(fs.readFileSync("../json/almacen.json"))
return Aure
})
subscribePOSTEvent("acuñare", ({}) => {
  let popis = JSON.parse(fs.readFileSync("../json/acuñabar.json"))
  return popis
  })
  subscribePOSTEvent("aiekare", ({}) => {
    let pochito = JSON.parse(fs.readFileSync("../json/aieka.json"))
    return pochito
    })
    subscribePOSTEvent("braseriare", ({}) => {
      let pochi = JSON.parse(fs.readFileSync("../json/braseria.json"))
      return pochi
      })
      subscribePOSTEvent("dambleere", ({}) => {
        let puchi = JSON.parse(fs.readFileSync("../json/damblee.json"))
        return puchi
        })
 subscribePOSTEvent("elfuellere", ({}) => {
let ana = JSON.parse(fs.readFileSync("../json/elfuelle.json"))
return ana
})
subscribePOSTEvent("elpatiodemingore", ({}) => {
  let suri = JSON.parse(fs.readFileSync("../json/elpatiodemingo.json"))
  return suri
  })
  subscribePOSTEvent("empanadastremendasre", ({}) => {
    let elija = JSON.parse(fs.readFileSync("../json/empanadastremendas.json"))
    return elija
    })
    subscribePOSTEvent("fuocore", ({}) => {
      let papuchin = JSON.parse(fs.readFileSync("../json/fuocore.json"))
      return papuchin
      })
      subscribePOSTEvent("greendelire", ({}) => {
        let pipi = JSON.parse(fs.readFileSync("../json/greendelire.json"))
        return pipi
        })
        subscribePOSTEvent("juanarotiseriare", ({}) => {
          let pipu = JSON.parse(fs.readFileSync("../json/juanarotiseria.json"))
          return pipu
          })
          subscribePOSTEvent("laestanciaalmagrore", ({}) => {
            let pepu = JSON.parse(fs.readFileSync("../json/laestanciaalmagro.json"))
            return pepu
            })
            subscribePOSTEvent("losorientalesre", ({}) => {
              let budincito = JSON.parse(fs.readFileSync("../json/losorientales.json"))
              return budincito
              })
              subscribePOSTEvent("mcre", ({}) => {
                let marmolado = JSON.parse(fs.readFileSync("../json/mc.json"))
                return marmolado
                })
                subscribePOSTEvent("migustore", ({}) => {
                  let delimon = JSON.parse(fs.readFileSync("../json/migusto.json"))
                  return delimon
                  })
                  subscribePOSTEvent("panchore", ({}) => {
                    let abejita = JSON.parse(fs.readFileSync("../json/pancho.json"))
                    return abejita
                    })
                    subscribePOSTEvent("parrilla83re", ({}) => {
                      let wiii = JSON.parse(fs.readFileSync("../json/parrilla83.json"))
                      return wiii
                      })
                      subscribePOSTEvent("tabola", ({}) => {
                        let pachita = JSON.parse(fs.readFileSync("../json/tabola.json"))
                        return pachita
                        })
  startServer(3000, true);