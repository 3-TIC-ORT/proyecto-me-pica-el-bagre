import fs from "fs"
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
let nuevousuario =
subscribePOSTEvent ("papu", data => {
let contra = data.contra
let mail = data.mail
if(!usuarios[mail]){
    fs.writeFileSync("login.json",mail)
}
})