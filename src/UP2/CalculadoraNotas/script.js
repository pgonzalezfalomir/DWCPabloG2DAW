// 1. Captura los elementos del formulario con document.getElementById
let nota1 = document.getElementById("nota1")
let nota2 = document.getElementById("nota2")
let nota3 = document.getElementById("nota3")
let resultado = document.getElementById("resultado")
let boton = document.getElementById("calcularBtn")

// 2. Añade un evento al botón
boton.addEventListener("click", function() {
    // Convierte los valores de los inputs a números
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)

    // 3. Calcula la media con variables
    let media = (n1 + n2 + n3) / 3

    // MODO IFS
    if (media < 5) {
        resultado.textContent = "Suspenso (" + media.toFixed(2) + ")"
    } else if (media >= 5 && media < 7) {
        resultado.textContent =  "Aprobado (" + media.toFixed(2) + ")"
    } else if (media >= 7 && media < 9) {
        resultado.textContent = "Notable (" + media.toFixed(2) + ")"
    } else {
        resultado.textContent = "Sobresaliente (" + media.toFixed(2) + ")"
    }

    // MODO OPTIMIZADO
    let mediaFormateada = media.toFixed(2);
    let calificacion;

    (media < 5) && (calificacion = "Suspenso");
    (media >= 5 && media < 7) && (calificacion = "Aprobado");
    (media >= 7 &&  media < 9) && (calificacion = "Notable");
    (media >= 9) && (calificacion = "Sobresaliente");
    resultado.textContent = `${calificacion}: ` + mediaFormateada;
})