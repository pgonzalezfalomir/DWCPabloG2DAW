let totalSegundos = 3725;

const horas = totalSegundos / 3600;
const horasMath = Math.floor(totalSegundos / 3600);

const minutos = totalSegundos / 60;
const minutosMath = Math.floor((totalSegundos % 3600 / 60));

const segundosRestantes = totalSegundos % 60;
const segundosRestatesMath= Math.floor(totalSegundos % 60 )

console.log(`${totalSegundos} segundos son ${horasMath} horas, ${minutosMath} minutos y ${segundosRestatesMath} segundos.`);