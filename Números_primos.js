// Ejercicio 1 – Números primos
// Crea un programa que: muestre todos los números primos entre 1 y 50. Utiliza ciclos y
// condicionales para verificar qué números cumplen la condición de ser primos.

//declaración de variables
let numero;
let divisor; 
let total = ""

//ciclo para verificar los números primos entre 1 y 50
for (numero = 1; numero <= 50; numero++){
    //se verifica si el número es primo
    let numeroprimo = true;
    //ciclo para verificar si el número tiene divisores
    for (divisor = 2; divisor < numero; divisor++)
        //si el número es divisible por algún número entre 2 y él mismo, no es primo
        if (numero % divisor === 0){
            //se cambia el valor de la variable numeroprimo a false
            numeroprimo = false;
            break;
        }
        //si el número es primo, se agrega a la lista de números primos
    if (numeroprimo) {
        total += numero + " ";
    }
}
alert("Los números primos entre 1 y 50 son: " + total);