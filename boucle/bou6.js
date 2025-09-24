const prompt = require("prompt-sync")()
const utulisateur = prompt("entrer un nombre de base ")
const bas= parseInt(utilisateur)
const uterpui = prompt("entrer exposant ")
const exposant= parseInt(uterpui)
if(isNaN(bas) || isNaN(exposant)){
    console.log("entree les nombres valide")
}else{
    let result =1
    let count =0
    while(count <  exposant){
        result = result * bas
        count++
    }
    console.log(${bas} à la puissance ${exposant} est : ${result})