// Ejercicio 2 – Tabla de multiplicar personalizada
// Crea un programa que: dado un número ingresado por el usuario, muestre su tabla de
// multiplicar hasta el 12. El ciclo debe permitir repetir el proceso si el usuario desea
// consultar otra tabla.

//declaracion de variable
let consultar = "SI";

//ciclo para repetir el proceso de solicitar numero y mostrar su tabla de multiplicar
while(consultar === "SI"){
    //solicitar un numero para mostrar su tabla de multiplicar
    let numero = parseInt(prompt("Ingrese un numero para obtener su tabla de multiplicar:"));
    let resultado = "Tabla de multiplicar de " + numero + ":\n";

    //ciclo para generar la tabla de multiplicar del numero ingresado
    for (let i = 1; i <= 12; i++){
        resultado += numero + " X " + i + " = " + (numero * i) + "\n";
    }

    //mostrar la tabla de multiplicar generada
    alert(resultado);
    consultar = prompt("¿Desea consultar otra tabla? (si/no)").toUpperCase();
}
