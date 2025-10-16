import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
import fs from "fs"
import { on } from "events";
subscribePOSTEvent("loginpapucho",({email, contraseña})=>{
    let puchi = {ok: false};
    let datitos = JSON.parse(fs.readFileSync("backend/login.json", "utf-8"));
    for(let i = 0; i < datitos.length; i++){
        if (datitos[i].mail === email && datitos[i].contra === contraseña ){
        puchi = {ok: true}
        return puchi
    }
        else {
            return puchi
        }
}

})