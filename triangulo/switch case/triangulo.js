let num = parseFloat(prompt("ingrese el primer aungulo del triangulo: "));
let num2 = parseFloat(prompt("ingrese el segundo aungulo del triangulo: "));
let num3 = parseFloat(prompt("ingrese el tercer aungulo del triangulo: "));

switch (num+num2+num3 == 180) {
    case true:
    console.log("los angulos corresponden a un triangulo");
        break;
    
    
    default:
    console.log("los angulos no corresponden a un triangulo");
        break;
}