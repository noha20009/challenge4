const prompt = require("prompt-sync")();
const tab = []
for (let i = 0; i<10; i++){
    tab.push(prompt('Enter a NUMBER :'))
}
const  array = tab.map((num)=>num * num)
console.log(array)