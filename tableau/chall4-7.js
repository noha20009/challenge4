const prompt = require("prompt-sync")();
const string = prompt('Enter a chaine de character :')
let compteur = 0
string.split('').forEach((char)=>{
    const c = char.toLocaleLowerCase()
    if (/[aeyuoi]/.test(c)){
        compteur++
    }
})
console.log("Nomber de voyelle ",compteur)