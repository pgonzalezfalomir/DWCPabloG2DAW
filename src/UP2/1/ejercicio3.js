function calcularPromedio(materia, ...notas) {
    const suma = notas.reduce((acumulador, notas) => acumulador + notas, 0);
    const resultado = suma / notas.length;

    return `La nota media en ${materia} es ${resultado}`;
}
console.log(calcularPromedio("Desarrollo Cliente",7 ,5, 6, 4, 3));