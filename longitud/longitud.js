let long = parseInt(prompt("Ingrese la longitud en kilomentros, por favor:"));
let conv = parseInt(prompt("seleccione una opcion: 1) hectometro  2) decametro 3) metro 4) centimetro "));
switch (conv) {
    case 1:
        console.log("La longitud ingresada en hectometros es: ", long*10);
        break;
        case 2:
            console.log("La longitud ingresada en decametros es: ", long*100);
            break;
            case 3:
                console.log("La longitud ingresada en metros es: ", long*1000);
                break;            
                case 4:
                    console.log("La longitud ingresada en centimetros es: ", long*1000);
                    break;
    default:
        break;
}


