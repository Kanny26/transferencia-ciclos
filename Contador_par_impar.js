// Ejercicio 7 – Contador de pares e impares
// Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos
// fueron pares y cuántos impares.


//declaracion de variables
let pares = 0;
let impares = 0;

//ciclo para solicitar 10 numeros y contar pares e impares
for(let i = 1; i <= 10; i++){
    let numero = parseInt(prompt("Ingrese el número " + i + ":"));
    
    if (numero % 2 === 0){
        pares++;
    }else{
        impares++;
    }
}

alert("Cantidad de números pares: " + pares + "\nCantidad de números impares: " + impares);