// Ejercicio 1 – Números primos
// Crea un programa que: muestre todos los números primos entre 1 y 50. Utiliza ciclos y
// condicionales para verificar qué números cumplen la condición de ser primos.

//declaración de variables
let numero;
let divisor; 
let total = ""

//ciclo para verificar los números primos entre 1 y 50
for (numero = 1; numero <= 50; numero++){
    let numeroprimo = true;
    for (divisor = 2; divisor < numero; divisor++)
        if (numero % divisor === 0){
            numeroprimo = false;
            break;
        }
    if (numeroprimo) {
        total += numero + " ";
    }
}
alert("Los números primos entre 1 y 50 son: " + total);