let salario = parseFloat(prompt("Ingrese su salario, por favor: "));
let categoria = promt("Ingrese su categoria: ");
switch (categoria) {
    case 1:
        console.log("Su aumento es de: ", salario*0.15)
        break;
    case 2:
        console.log("Su aumento es de: ", salario*0.25)
        break;    
    case 3:
    console.log("Su aumento es de: ", salario*0.45)
    break;
    
    default:
    console.log("Ingrese un valor valido")
        break;
}