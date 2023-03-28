let cont = prompt("Ingrese una contraseña, por favor:").includes(" ") && (length >=8 && length <=15)
switch (cont) {
    case true:
        console.log("Su contraseña es valida.");
        break;

    default:
        console.log("Su contraseña no es valida.");

        break;
}
