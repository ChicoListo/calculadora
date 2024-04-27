// Declaración de una variable llamada "resultado" que almacena el elemento con id "resultado" del Document Object Model (DOM).

let resultado = document.getElementById("resultado");



// Definición de una función llamada "agregarCaracter" que toma un parámetro "caracter" y agrega ese caracter al contenido del elemento "resultado" del DOM.

function agregarCaracter(caracter) {

    resultado.innerHTML += caracter;

}



// Definición de una función llamada "calcularResultado" que evalúa la expresión almacenada en el elemento "resultado" del DOM utilizando la función "eval()", y establece el resultado como el contenido del elemento "resultado" del DOM.

function calcularResultado() {

    let expresion = resultado.innerHTML;

    if (expresion) {
        // Reemplazar "sin" y "cos" con sus equivalentes en JavaScript antes de evaluar la expresión
        expresion = expresion.replace("sin", "Math.sin");
        expresion = expresion.replace("cos", "Math.cos");
        resultado.innerHTML = eval(expresion);

    }

}



// Definición de una función llamada "limpiarPantalla" que establece el contenido del elemento "resultado" del DOM como una cadena vacía.

function limpiarPantalla() {

    resultado.innerHTML = "";

}

function calcularSeno() {
    let numero = parseFloat(resultado.innerHTML);
    if (!isNaN(numero)) {
        resultado.innerHTML = "sin(" + numero + ")";
    }
}

function calcularCoseno() {
    let numero = parseFloat(resultado.innerHTML);
    if (!isNaN(numero)) {
        resultado.innerHTML = "cos(" + numero + ")";
    }
}