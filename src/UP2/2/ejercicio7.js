let nombreUsuario = "";
let descuentoAplicado = null;

let nombreFinal = nombreUsuario || "Invitado";
let descuentoFinal = descuentoAplicado || 10;

console.log(`Nombre: ${nombreFinal}, Descuento: ${descuentoFinal}%`)

nombreUsuario = "Pablo";
descuentoAplicado = 20;

nombreFinal = nombreUsuario || "Invitado";
descuentoFinal = descuentoAplicado || 10;

console.log(`Nombre: ${nombreFinal}, Descuento: ${descuentoFinal}%`)