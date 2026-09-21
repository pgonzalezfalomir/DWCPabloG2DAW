/**
 * ==============================================================================
 * EJERCICIOS PRÁCTICOS: BUCLES EN JAVASCRIPT (for...of, for...in, forEach)
 * ==============================================================================
 */

// ==============================================================================
// EJERCICIO 1: Recorrer una lista de objetos con `for...of`
// ==============================================================================
const tareas = [
  { id: 1, titulo: "Configurar servidor AWS", urgente: true },
  { id: 2, titulo: "Actualizar documentación del proyecto", urgente: false },
  { id: 3, titulo: "Corregir bug en el módulo de login", urgente: true }
];

console.log("--- EJERCICIO 1: Tareas Urgentes ---");

for (const tarea of tareas) {
  if (tarea.urgente) {
    console.log(`[URGENTE] -> Tarea: ${tarea.titulo}`);
  }
}

// ==============================================================================
// EJERCICIO 2: Inspeccionar propiedades de un objeto con `for...in`
// ==============================================================================
const fileMetadata = {
  nombreOriginal: "proyecto_final.pdf",
  tamano: "2.4 MB",
  formato: "application/pdf",
  autor: "Estudiante DAW/DAM"
};

console.log("\n--- EJERCICIO 2: Metadatos del Archivo ---");

for (const clave in fileMetadata) {
  const valor = fileMetadata[clave];
  console.log(`Propiedad: ${clave} | Valor: ${valor}`);
}

// ==============================================================================
// EJERCICIO 3: Procesar un array con el método funcional `forEach()`
// ==============================================================================
const servicios = [
  { nombre: "Base de Datos RDS", latenciaMs: 12 },
  { nombre: "API Gateway", latenciaMs: 450 },
  { nombre: "Servidor Web Nginx", latenciaMs: 85 }
];

console.log("\n--- EJERCICIO 3: Monitor de Servicios ---");

servicios.forEach((servicio) => {
  const esEstadoOptimo = servicio.latenciaMs < 100;
  const estadoTexto = esEstadoOptimo ? "ÓPTIMO" : "CRÍTICO";
  console.log(`Servicio: ${servicio.nombre} | Latencia: ${servicio.latenciaMs}ms | Estado: ${estadoTexto}`);
});