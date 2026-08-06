// Función para ingresar el dato
function fngeo() {

    // Capturar el dato del input
    let dato = document.getElementById("txtdato").value;

    // Mostrar el dato en el párrafo
    document.getElementById("pfosalida").innerHTML =
        "Dato ingresado: " + dato;
}


// Función para calcular
function fncalcularider() {

    // Capturar los números
    let num1 = parseFloat(document.getElementById("txtnum1").value);
    let num2 = parseFloat(document.getElementById("txtnum2").value);

    // Validar que sean números
    if (isNaN(num1) || isNaN(num2)) {
        alert("Ingrese números válidos.");
        return;
    }


    // Operaciones
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;
    let residuo = num1 % num2;
    



    // Mostrar resultados

    document.getElementById("divsalidasuma").innerHTML =
        "La suma es: " + suma;

    document.querySelector(".divsalidaresta").innerHTML =
        "La resta es: " + resta;

    document.querySelector(".divsalidamultiplica").innerHTML =
        "La multiplicación es: " + multiplicacion;

    document.querySelector(".divsalidadivision").innerHTML =
        "La division es: " + division;

    document.querySelector(".divsalidadivresiduo").innerHTML =
        "El residuo es: " + residuo;

}