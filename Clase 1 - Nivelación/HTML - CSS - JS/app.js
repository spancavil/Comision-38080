//Agregar algunos personajes más

/* 
Otro comentario
Comentario n

*/

const heroes = ["Wonderwoman", "Superman", "Aquaman", "Flash"]

console.log(heroes[2]);

//Agregar ítems al array
heroes.push("Batman");

// console.log(heroes[4]);

// console.log(heroes[20]);

/* Tipos de variables primitivas*/

const name = "Sebas";

let numeroQuiniela = 22;

numeroQuiniela = 82;

console.log(numeroQuiniela);

const vacunadoCOVID = true;

//vacunadoCOVID = false;

console.log(vacunadoCOVID);

// Null => variable declarada con valor nulo

// Undefined => variable sin declarar

// NaN => Not a number. Por ejemplo 24 /"String"


//Tener acceso a los elementos del DOM
const showButton = document.getElementById("show")
const hideButton = document.getElementById("hide")
const searchInput = document.getElementById("search")
const lista = document.getElementById("list")

//Añadir funcionalidad para mostrar personajes
showButton.addEventListener("click", ()=> {
    let innerContent = "";
    for (const heroe of heroes) {
        innerContent += `<li>${heroe}</li>`
    }
    console.log(innerContent);
    lista.innerHTML = innerContent;
})

//Añadir funcionalidad para ocultar personajes
hideButton.addEventListener("click", ()=> {
    lista.innerHTML = ""
})

//Por último mostrar sólo los filtrados
searchInput.addEventListener("keyup", (e)=> {
    console.log(e.target.value);
    const heroesFiltrados = heroes.filter(heroe => heroe.includes(e.target.value))
    console.log(heroesFiltrados);
    let innerContent = "";
    for (const heroe of heroesFiltrados) {
        innerContent += `<li>${heroe}</li>`
    }
    lista.innerHTML = innerContent;
})