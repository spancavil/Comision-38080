//Destructuring de objetos
const persona = {
    nombre: "Roberto",
    lastName: "González",
    edad: 19
}

// console.log(persona.lastName);

const {nombre, edad} = persona;

// console.log(nombre, edad);

//Destructuring de arrays
const personajes = ["Teemo", "Garen", "Camille", "Viego"]

console.log(personajes[2])

const [personaje1, personaje2, ...restoPersonajes] = personajes;

console.log(restoPersonajes);

//Spread operator
//Desparramar las propiedades o métodos de un objeto

const personaExtended = {
    ...persona,
    puesto: "Front developer"
}

//Copia exacta de persona PERO en una nueva posición de memoria
const personaCopia = {...persona}

//console.log(personaExtended);

//Función map, find
//Map es una función de arrays y procesar el array y devuelve un nuevo array

const personajesProcesados = personajes.map(personaje => {
    return `<p>${personaje}</p>`
})

console.log(personajesProcesados);

const personajeEncontrado = personajes.find(personaje => personaje === "Sebas");

console.log(personajeEncontrado);