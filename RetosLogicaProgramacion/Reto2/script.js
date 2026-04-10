// =============================================
// Ejercicio de Lógica de Programación 2
// =============================================

// Pedir al usuario que ingrese la temperatura en grados Celsius
var celsius = Number(prompt("Ingresa el valor de la temperatura en grados Celsius (sin el símbolo °): "));

    if (isNaN(celsius)) {
        alert("Por favor, ingresa un número válido para la temperatura en grados Celsius.");
    } else {
        
        // Convertir la temperatura a Fahrenheit usando la fórmula: F = (C * 9/5) + 32
        var fahrenheit = (celsius * (9 / 5)) + 32;

        // Convertir la temperatura a Kelvin usando la fórmula: K = C + 273.15
        var kelvin = celsius + 273.15;

        // Mostrar el resultado en la consola y en un alert para que lo vea en la página
        alert("Temperatura ingresada: " + celsius + " °C" + "\n" + celsius + " °C es igual a " + fahrenheit + "°F" + "\n" + celsius + " °C es igual a " + kelvin + " K");
        console.log("Temperatura ingresada: " + celsius + "°C" + " es igual a " + fahrenheit + "°F" + " y " + kelvin + " K");

        }// llave del else

