// =============================================
// Ejercicio de Lógica de Programación 1
// =============================================

// 1. Pedir los 3 números al usuario y convertirlos a número
var numero1 = Number(prompt("Ingresa el primer número:"));
var numero2 = Number(prompt("Ingresa el segundo número:"));
var numero3 = Number(prompt("Ingresa el tercer número:"));

// 2. Guardar los números en un arreglo para poder trabajarlos juntos
var numeros = [numero1, numero2, numero3];

// 3. Verificar si los tres números son iguales
if (numero1 == numero2 && numero2 == numero3) {

  // Si los tres son iguales, mostramos un mensaje especial
  console.log("Los tres números son iguales: " + numero1);
  document.getElementById("resultado").innerHTML =
    "<p>Los tres números son iguales: <strong>" + numero1 + "</strong></p>";

} else {

  // 4. Ordenar los números de MAYOR a MENOR usando un ciclo for (método burbuja)
  //    La idea es: comparar dos números uno al lado del otro,
  //    y si el primero es menor que el segundo, los intercambiamos.
  //    Hacemos esto varias veces hasta que queden ordenados.

  for (var i = 0; i < numeros.length; i++) {
    for (var j = 0; j < numeros.length - 1; j++) {

      // Si el número de la izquierda es menor que el de la derecha...
      if (numeros[j] < numeros[j + 1]) {

        // ...los intercambiamos usando una variable temporal
        var temporal = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temporal;
      }
    }
  }

  // 5. Ahora el arreglo está ordenado de MAYOR a MENOR
  //    Por ejemplo: [4, 4, 2]
  var mayorAMenor = numeros[0] + ", " + numeros[1] + ", " + numeros[2];

  // 6. Para ver de MENOR a MAYOR, leemos el arreglo al revés
  var menorAMayor = numeros[2] + ", " + numeros[1] + ", " + numeros[0];

  // 7. Mostrar resultados en la consola
  console.log("De mayor a menor: " + mayorAMenor);
  console.log("De menor a mayor: " + menorAMayor);

  // 8. Mostrar resultados en el DOM (la página web)
  document.getElementById("resultado").innerHTML =
    "<p><strong>Números ingresados:</strong> " + numero1 + ", " + numero2 + ", " + numero3 + "</p>" +
    "<p><strong>De mayor a menor:</strong> " + mayorAMenor + "</p>" +
    "<p><strong>De menor a mayor:</strong> " + menorAMayor + "</p>";
}
