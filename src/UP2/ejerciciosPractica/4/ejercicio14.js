let auxclave = ""

while (auxclave !== "vivaYO") {
  auxclave = prompt("Introduce la clave", "claveSecreta")
  console.log("Clave incorrrecta, prueba de nuevo")
}
console.log("Has acertado la clave")