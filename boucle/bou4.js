const prompt = require("prompt-sync")()
let nb=prompt("entre un entier nmbr ")
//let numbrev = parseInt(nb)
let a, ina=0

while(nb > 0){
  a = nb % 10
   ina = ina* 10 + a
   nb =parseInt(nb/10)
} 
console.log(ina)