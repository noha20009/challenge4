const prompt = require("prompt-sync")()
let a=prompt("entrer une valeur de a:")
const tab=[a]
compteur=0

do{
    nmbr=prompt("entrer un nmbr")
if (nmbr <= 1)
  console.log("nmbr n'est pas un nombre premier.")
if(nmbr==2){
    console.log("nmbr est premier")
}
let impair = true
const a=Math.sqrt(nmbr)
for(i=2;i<=a;i++){
    if(nmbr%i==0){
        impair = false 
        break
    }
}

if (impair){
            console.log("nmbr premier")
}else{
            console.log("nmbr impremier")

}
     tab.push(prompt('Enter a number :'))
}while(compteur<a)
     