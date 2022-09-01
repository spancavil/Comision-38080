const imprimeMensaje = () => {
    console.log("Se imprime el mensaje luego de 3 segundos");
}

setTimeout(imprimeMensaje, 0)

console.log("Hola fuera del timeout");

console.log("Hola");

console.log("Otro hola")