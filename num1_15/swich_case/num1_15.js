let num = parseInt(prompt("Ingrese por favor el numero que desea sabes si es primo: "));
switch (num>15) {
    case true:
    console.log("el numero debe ser entre 1 y 15");
        break;

    default:
    switch (num) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 13:
                console.log("El numero es primo");
            break;
            
    
        default:
            console.log("El numero no es primo");
            break;
    }

        break;
}