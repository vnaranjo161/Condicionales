let nom = prompt("Ingrese su nombre: ");
let est = parseInt(prompt("Ingrese por favor esu estrato socio-economico: "));
let años = parseInt(prompt("Ingrese los años que lleva en la empresa, por favor: "));

switch (est<4 && años>=8) {
    case true:
        console.log("Felicidades, " , nom , "usted tiene derecho a subsidio.")
        break;

    default:
        console.log("Lo siento, " , nom , "usted no tiene derecho a susbsidio");
        break;
}