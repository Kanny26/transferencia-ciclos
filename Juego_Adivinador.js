// Ejercicio 6 – Juego del adivinador
// Crea un programa que: genere un número aleatorio entre 1 y 20. El usuario intentará
// adivinarlo y el ciclo repetirá los intentos hasta que lo logre. Cada vez que falle, el
// programa debe indicar si el número buscado es mayor o menor que el ingresado.


let numeroSecreto = 18;
let adivinador = false;

// Generar número aleatorio entre 1 y 20
while(!adivinador){
    let intento = parseInt(prompt("Adivina el número secreto (entre 1 y 20):"));    

    //verificar si el intento es igual, mayor o menor al número secreto
    if (intento === numeroSecreto){
        alert("¡Felicidades! Has adivinado el número secreto.");
        //detener el ciclo
        adivinador = true;
    }else if (intento < numeroSecreto){
        alert("El número secreto es mayor que " + intento + ". Intenta de nuevo.");
    }else {
        alert("El número secreto es menor que " + intento + ". Intenta de nuevo.");
    }
}