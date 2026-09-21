let usuarioActivo = true;
let tienePermisos = true;
let edad = 19;

if (edad >= 18 && usuarioActivo === true && tienePermisos === true) {
    console.log("Acceso concedido al panel de administración.")
} else {
    console.log("Acceso denegado.")
}