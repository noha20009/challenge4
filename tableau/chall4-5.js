const prompt = require("prompt-sync")();
const tab=[]
for (let i = 0; i<7; i++){
    tab.push(prompt('Enter a number :'))
}
let min = table[0]
let max = table[0]
for (let i of tab){
    if ( i > max){
        max = i
    }
    if ( min > i){
        min = i
    }
}
console.log(max)
console.log(min)