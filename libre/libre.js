
let fig = parseInt(prompt("seleccione una opcion para calcular el area: 1) triangulo  2) cuadrado 3) rectangulo 4) circulo "));
switch (fig) {

        case 1:
            let baset = parseInt(prompt("Ingrese la base, por favor:"));
            let alturat = parseInt(prompt("Ingrese la base, por favor:"));
            console.log((baset*alturat)/2);
        break;

        case 2:
        case 3:
            let base = parseInt(prompt("Ingrese la base, por favor:"));
            let altura = parseInt(prompt("Ingrese la base, por favor:"));
            console.log(base*altura);

        break;

        case 4:
            let diametro = parseInt(prompt("Ingrese el diametro, por favor:"));
            let radio = diametro/2
            console.log(3.14*radio**2);

        break;

    default:
        break;
}