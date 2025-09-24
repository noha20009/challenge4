const prompt = require("prompt-sync")();
const tab = []
for (let i = 0; i<10; i++){
    tab.push(Number(prompt('Enter a number :')))
}
let sum = 0;
for (let i of tab){
    sum += i
}
console.log(sum)
console.log(sum / tab.length)