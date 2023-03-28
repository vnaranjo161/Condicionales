let num = parseFloat(prompt("ingrese el primer aungulo del triangulo: "));
let num2 = parseFloat(prompt("ingrese el segundo aungulo del triangulo: "));
let num3 = parseFloat(prompt("ingrese el tercer aungulo del triangulo: "));


if (num+num2+num3 == 180) {
    console.log("los angulos corresponden a un triangulo");
}else{
    console.log("los angulos no corresponden a un triangulo");
}