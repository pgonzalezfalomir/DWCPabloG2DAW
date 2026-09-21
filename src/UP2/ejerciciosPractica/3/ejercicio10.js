const codigo = "FP-2026-JS-DEV";

let primerCaracter = codigo.at(0)
let ultimoCaracter = codigo.at(-1)
console.log(primerCaracter)
console.log(ultimoCaracter)

let subcadena = codigo.slice(3, 7)
console.log(subcadena)

let esJS = codigo.includes("JS");
console.log(esJS);