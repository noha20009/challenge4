const prompt = require("prompt-sync")()
let som=0
let max=0
const tab = []
const nmbr=prompt("entrer un nmbr")
 console.log(`n sini ${nmbr}`)
 while(nmbr<100){
    if(nmbr==0){
        break
    }
    else if (nmbr>=100)
    console.log("nmbr ignoré")
 }if (0 < nmbr < 100){
        console.log("Som des valeurs valides :", sum(nmbr))
        console.log("Maxdes valeurs valides :", max(nmbr))
 }
    else
        console.log("Aucune valeur valide saisie.")
        