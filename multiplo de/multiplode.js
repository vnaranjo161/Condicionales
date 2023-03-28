let num = parseFloat(prompt("Quiero saber si: "));
let num2 = parseFloat(prompt("Es multiplo de: "));

if (num%num2 == 0) {
    console.log("si es multiplo");
}else{
    console.log("no es multiplo");
}