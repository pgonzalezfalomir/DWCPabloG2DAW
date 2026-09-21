// Seleccionamos elementos del DOM
const inputNombre = document.getElementById("nombreAlumno");
const inputNota = document.getElementById("notaAlumno");
const btnAgregar = document.getElementById("agregarBtn");
const btnPromedio = document.getElementById("promedioBtn");
const divResultado = document.getElementById("resultado");
const divPromedio = document.getElementById("promedio");
//...AGREGA AQUÍ EL RESTO DE ELEMENTOS DEL DOM

// Arrays separados para nombres y notas
let nombres = [];
let notas = [];
//...CREA UN ARRAY LLAMADO notas PARA ALMACENAR LAS NOTAS

// Función para mostrar la lista de alumnos
function mostrarAlumnos() {
    divResultado.innerHTML = ""; // Limpiar div
    for (let i = 0; i < nombres.length; i++) {
        divResultado.innerHTML += `${i + 1}. ${nombres[i]} - Nota: ${notas[i]} <br>`;
    }
}

// Agregar alumno
btnAgregar.addEventListener("click", function() {
    const nombre = inputNombre.value.trim();
    const nota = Number(inputNota.value);

    /*...CONDICIONAL QUE MUESTRE ERROR SI
    EL NOMBRE ESTÁ VACÍO
    LA NOTA NO ES UN NÚMERO
    LA NOTA ES MENOR QUE 0 O MAYOR QUE 10
    QUE DETENGA LA EJECUCIÓN DE LA FUNCIÓN Y SALGA DE ELLA
     */

    //... AÑADE LOS DATOS A LOS DOS ARRAYS CON EL MÉTODO PUSH
    if (nombre === "" || isNaN(nota) || nota < 0 || nota > 10) {
        alert("Error: El nombre no puede estar vacío y la nota debe ser un número entre 0 y 10.");
        return;
    }

    // Limpiar inputs
    nombres.push(nombre);
    notas.push(nota);

    // Limpiar inputs
    inputNombre.value = "";
    inputNota.value = "";

    // Mostrar lista actualizada
    mostrarAlumnos();
});


// Calcular promedio
btnPromedio.addEventListener("click", function() {
    //...SI NO HAY ELEMENTOS EN EL ARRAY DE NOTAS, QUE DETENGA LA FUNCIÓN Y SALGA DE ELLA
    //...MOSTRANDO ALGÚN MENSAJE DE ERROR

    //...EXTRAER EL CONTENIDO DEL ARRAY NOTAS
    //...CALCULAR EL PROMEDIO Y PONERLO EN LA VARIABLE promedio
    if (notas.length === 0) {
        alert("Error: No hay notas registradas para calcular el promedio.");
        return;
    }

    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    const promedio = suma / notas.length;

    divPromedio.textContent = `Promedio de notas: ${promedio.toFixed(2)}`;
});