let num = parseFloat(prompt("Ingrese por favor el numero que desea sabes si es par: "));
switch (num%5 == 0) {
    case true:
    console.log("el numero es divisible entre 5");
        break;

    default:
    console.log("El numero no es divisible entre 5");

        break;
}