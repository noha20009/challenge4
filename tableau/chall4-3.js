const prompt = require("prompt-sync")();
const table = []
for (let i = 0; i<8; i++){
    table.push(prompt('Enter a number :'))
}
const valeur = prompt('Enter une valuer pour rechercher :')
for (let i in table){
    if (table[i] == valeur){
        console.log(valeur, 'exist dans Index ', i)
        break
    }
    if (i == table.length -1 && table[i] != valeur){
        console.log('value noT exist')
    }
}