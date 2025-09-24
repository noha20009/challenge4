const prompt = require("prompt-sync")()
 let nmbr=prompt("entrer un nmbrn");

 for(let i=0;i<=10;i++){
    let a=i*nmbr
    console.log(" tableau de multiplication de i")
    console.log(nmbr + " * "+i +"= "+a)
 }


