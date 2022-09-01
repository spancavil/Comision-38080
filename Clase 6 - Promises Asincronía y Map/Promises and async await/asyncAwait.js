//IIFE
(async () => {

    //Defino la promise
    const obtenerProductos = new Promise((accept, reject) => {
        console.log("Hola en promise");
        const aceptor = Math.random();
        if (aceptor > 0.5) {
            accept({ value: "Listado de productos" })
        }
        reject({ message: "No te devuelvo nada" })
    })

    //Bloque try-catch
    try {
        const response = await obtenerProductos;
        console.log(response)
    } catch (error) {
        console.log("Hubo un error")
        console.log(error)
    }

    console.log("Continua la ejecución del programa")
    
})()