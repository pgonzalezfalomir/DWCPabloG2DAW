const productos = [
    { nombre: "Teclado", precio: 25 },
    { nombre: "Ratón", precio: 15 },
    { nombre: "Monitor", precio: 180 }
];

const precios = productos.map(productos => productos.precio * 1.21);
console.log(precios);