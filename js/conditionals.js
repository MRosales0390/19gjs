//Condicionales
//Operadores de asignación

let total = 0;
let a = 4;
let b = 5;
let c = 0;

total = a + b;
//suma += 5;
//total -= 3;
//total *= 3;
//total /= 3;
//total %= 3;

console.log(total);

if (2 === 2) {
  console.log("son iguales");
} else {
  console.log("por defecto");
}

let age = parseInt(prompt("Cuál es tu edad?", 17));

switch (age) {
  case 17:
    console.log("Eres menor de edad");
    break;
  case 18:
    console.log("Eres mayor de edad");
    break;
  default:
    console.log("No es una edad válida");
}
