// Ejercicio 8 – Control de acceso
// Crea un programa que: solicite un usuario y contraseña. El programa debe permitir hasta
// 3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. Si
// acierta, mostrar “Bienvenido”.

const usuarioCorrecto = "admin";
const contraseña = "1234";

let intento = 0;
let accesoConcedido = false;

//poder ingresar 3 veces el usuario y la contraseña
while(intento <3 && !accesoConcedido){
    let usuario = prompt("Ingrese su usuario:");
    let clave = prompt("Ingrese su contraseña:");

    //verificar si el usuario y la contraseña son correctos
    if (usuario === usuarioCorrecto && clave === contraseña){
        alert("¡Bienvenido!");
        accesoConcedido = true;
    }else{
        intento++;
        alert("Usuario o contraseña incorrectos. Intento " + intento + " de 3.");
    }
}

//si se exceden los intentos, mostrar mensaje de acceso denegado
if (!accesoConcedido){
    alert("Acceso denegado. Has excedido el número de intentos.");
}