//Declaración de la promesa
const promesa = new Promise ((accept, reject) => {
    accept({value: "Se cumple la promise"})
})

//Forma tradicional de gestionar promesas
promesa
.then(result => console.log("Se cumplió la promesa"))
.catch(error => console.log("Hubo un error"))

//Otra forma
/* promesa.then(
    result => console.log(`Se resolvió bien: ${result.value}`),
    error => console.log(`Hubo un error: ${error.value}`)
) */
