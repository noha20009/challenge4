const prompt = require("prompt-sync")();

const tab = []

for (let i = 0; i<5; i++){

    tab.push(prompt('Enter a number :'))
}
console.log(tab.reverse().join(''))