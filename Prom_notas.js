// Ejercicio 4 – Promedio de notas
// Crea un programa que: lea las notas de 5 estudiantes. Calcula el promedio de cada uno y
// determina, mediante condicionales, si aprueba (nota ≥ 3.0) o reprueba. Usa ciclos para
// ingresar los datos de manera ordenada.

//ciclo para ingresar las notas de 5 estudiantes
for (let i = 1; i <= 5; i++) {
    alert("Estudiante "+ i);

    //solicitud de notas
    let nota1 = parseInt(prompt("Ingrese la primera nota:"));
    let nota2 = parseInt(prompt("Ingrese la segunda nota:"));
    let nota3 = parseInt(prompt("Ingrese la tercera nota:"));

    //calculo del promedio
    let promedio = (nota1 + nota2 + nota3) / 3;

    //condicional para verificar si aprueba o reprueba
    if (promedio >= 3.0){
        alert("El estudiante " + i + " ha aprobado con un promedio de " + promedio.toFixed(2));
    }else {
        alert("El estudiante " + i + " ha reprobado con un promedio de " + promedio.toFixed(2));
    }
}