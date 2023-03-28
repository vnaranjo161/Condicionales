let num = parseInt(prompt("Ingrese el año, por favor:"));
if (num%4==0 && num%100 !=0||num%400==0) {
    console.log("El año es bisiesto");
} else {
    console.log("El año no es bisiesto");

}