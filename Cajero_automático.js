// Ejercicio 3 – Cajero automático
// Crea un programa que: simule un cajero automático. El usuario inicia con un saldo
// definido en una variable constante. Podrá retirar dinero varias veces mientras tenga
// fondos suficientes. Si intenta retirar más de lo que tiene, debe aparecer un mensaje de
// error y no permitir la transacción.


//declaracion de variable
const Saldo_inicial = 1000000;
let saldo = Saldo_inicial;
let continuar = "SI";

//ciclo para permitir varios retiros mientras haya saldo disponible
while(continuar === "SI"){
    let retiro = parseInt(prompt("Tu saldo actual es de $" + saldo + "\n¿Cuánto dinero deseas retirar?"));

    if(retiro <= 0){
        alert("Ingresa un monto válido para retirar.");
    }else if(retiro > saldo){
        alert("Fondos insuficientes. Tu saldo actual es de $" + saldo);
    }else{
        saldo = saldo - retiro;
        alert ("Has retirado $" + retiro + ". Tu nuevo saldo es de $" + saldo);
    }

    if (saldo === 0) {
        alert("Tu saldo es $0. No puedes realizar más retiros.");
        break;
    }

    continuar = prompt("¿Quieres realizar otro retiro? (si/no)").toUpperCase();

}

alert("Gracias por usar el cajero automático. Tu saldo final es de $" + saldo);