
let  nom = prompt("Ingrese su nombre, por favor")
let  dir = prompt("Ingrese su direccion, por favor")
let  num = prompt("Ingrese su numero de celular, por favor")
let  estc = prompt("Ingrese su estado civil, por favor")
let  id = prompt("Ingrese su identificacion, por favor")


let opc = parseInt(prompt("Seleccione una opcion:  1)Visializacion 2)Edicion"))


if (opc==1) {
    console.log("Datos: ", nom , dir , num , estc , id);
} else {
    if (opc==2) {
        nom = prompt("Ingrese su nombre, por favor")
        dir = prompt("Ingrese su direccion, por favor")
        num = prompt("Ingrese su numero de celular, por favor")
        estc = prompt("Ingrese su estado civil, por favor")
        id = prompt("Ingrese su identificacion, por favor")
        console.log("Datos modificados: ", nom , dir , num , estc , id);

    } else {
       console.log("Digite una opcion valida."); 
    }
 }




