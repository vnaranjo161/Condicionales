let nom = prompt("Ingrese su nombre: ");
let est = parseInt(prompt("Ingrese por favor esu estrato socio-economico: "));
let años = parseInt(prompt("Ingrese los años que lleva en la empresa, por favor: "));

if (est>=4){
console.log("Lo siento, " , nom , "usted no tiene derecho a susbsidio");
}else{
    if (años>=8){
    console.log("Felicidades, " , nom , "usted tiene derecho a subsidio.")
    }else{
        console.log("Lo siento, " , nom , "usted no tiene derecho a susbsidio");
    }
}
