// Ejercicio 5 – Tienda de productos
// Crea un programa que: simule la venta de productos. El usuario podrá registrar la compra
// de varios artículos hasta que decida no comprar más. Se debe calcular el total de la
// compra y aplicar un descuento del 10% si el valor supera los $100.000.

let totalcompra = 0;
let comprar = "si";

while(comprar === "si"){
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseFloat(prompt("Ingrese la cantidad del producto:"));

    let subtotal = precio * cantidad;
    totalcompra += subtotal;

    alert("Has agregado " + cantidad + " unidades de " + nombre + " al carrito. Subtotal: $" + subtotal.toFixed(2) + "\nTotal acumulado: $" + totalcompra.toFixed(2));

    comprar = prompt("¿Desea agregar otro producto? (si/no)").toLowerCase();

}

if (totalcompra > 100000){
    let descuento = totalcompra * 0.10;
    totalcompra -= descuento;
    alert("Se ha aplicado un descuento del 10%. Total a pagar: $" + totalcompra.toFixed(2));
}

alert("Gracias por su compra. Total a pagar: $" + totalcompra.toFixed(2));