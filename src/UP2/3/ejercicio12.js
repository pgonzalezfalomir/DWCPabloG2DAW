const emailBD = "usuario@dominio.com";
const emailInupt = " USUARIO@DOMINIO.COM ";

let emailInputArreglado = emailInupt.toLowerCase().trim()
console.log(emailInputArreglado);

if (emailBD === emailInputArreglado) {
    console.log("Login correcto.")
} else {
    console.log("Login incorrecto.")
}