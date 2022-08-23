let number1 = 40;

//Falsy "", 0, NaN, undefined, null

/* if (number1 < 30) {
    console.log("El número es menor a 30")
} else {
    console.log("El número es mayor o igual a 30");
} */

//Operador ternario: 1) condición, 2) lo que devuelve si la condición se verdadera, 3) lo que devuelve si la condición es false

const stringDevuelto = number1 < 30 ? "El número es menor a 30" : "El número es mayor o igual a 30"; 

console.log(stringDevuelto);

console.log(number1++);