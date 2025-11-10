// Ejercicio 7 – Contador de pares e impares
// Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos
// fueron pares y cuántos impares.


//declaracion de variables
let pares = 0;
let impares = 0;

//ciclo para solicitar 10 numeros y contar pares e impares
for(let i = 1; i <= 10; i++){
    let numero = parseInt(prompt("Ingrese el número " + i + ":"));
    
    //verificar si el numero es par o impar
    if (numero % 2 === 0){
        pares++; //si es par, incrementar el contador de pares
    }else{
        impares++; //si es impar, incrementar el contador de impares
    }
}

alert("Cantidad de números pares: " + pares + "\nCantidad de números impares: " + impares);