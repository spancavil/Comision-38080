//Declaración de la promesa
const promesa = new Promise ((accept, reject) => {
    //Hay un posible procsamiento interno
    reject({value: "Hubo un error en la promise"})
})

//Forma tradicional de gestionar promesas
promesa
.then(result => console.log(result))
.catch(error => console.log(error))

//Otra forma
/* promesa.then(
    result => console.log(`Se resolvió bien: ${result.value}`),
    error => console.log(`Hubo un error: ${error.value}`)
) */
