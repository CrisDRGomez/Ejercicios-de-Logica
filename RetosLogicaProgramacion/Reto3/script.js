// =============================================
// SA-PLD3 - Ejercicio de Lógica de Programación 3
// =============================================

function calcular() {
    var valor = document.getElementById("inputNumero").value;
    var numero = Number(valor);
    var resultado = document.getElementById("resultado");

    if (valor === "" || isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
    resultado.className = "resultado error";
    resultado.textContent = "⚠ Ingresa un número entero válido (0 o mayor).";
    return;
    }

    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
    factorial *= i;
    }

    resultado.className = "resultado exito";
    resultado.textContent = numero + "! = " + factorial;
}

document.getElementById("inputNumero").addEventListener("keydown", function(e) {
    
});