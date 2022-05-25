// /**
//  * Ejercicio 1
//  */
// let userWord = prompt("Por favor indique una palabra a invertir:", "Lokoder");
// alert(reversedString(userWord));

// /**
//  * Ejercicio 2
//  */
// let firstNumber = 5;
// let secondNumber = 10;
// let thirdNumber = 8;

// console.log(
//   `addThreeNumbers(${firstNumber}, ${secondNumber}, ${thirdNumber})-> ${addThreeNumbers(
//     firstNumber,
//     secondNumber,
//     thirdNumber
//   )}`
// );
// console.log(
//   `addThreeNumbers(${firstNumber}, ${secondNumber})-> ${addThreeNumbers(
//     firstNumber,
//     secondNumber
//   )}`
// );
// console.log(
//   `addThreeNumbers(undefined, ${secondNumber})-> ${addThreeNumbers(
//     undefined,
//     secondNumber
//   )}`
// );

// console.log(
//   `addThreeNumbers(${firstNumber})-> ${addThreeNumbers(firstNumber)}`
// );

// /**
//  * Ejercicio 3
//  */
// let degrees = parseInt(
//   prompt("Ingresa la tempera actual de tu localidad en °C: ", 35)
// );

// alert(`convertTemp(${degrees}) -> ${convertTemp(degrees)}`);
// alert(`convertTemp() -> ${convertTemp()}`);

// /**
//  * Ejercicio 4
//  */
// timesTable(3);
// timesTable();
// timesTable(11);

// /**
//  * Ejercicio 5
//  */
// console.log(`addNumberLimit() -> ${addNumberLimit()}`);
// console.log(`addNumberLimit(4) -> ${addNumberLimit(4)}`);
// console.log(`addNumberLimit(5) -> ${addNumberLimit(5)}`);
// console.log(`addNumberLimit(101) -> ${addNumberLimit(101)}`);

let palindrome = "Anita lava la tin";
palindrome = "Lavan esa base naval";
//palindrome = "Sometamos o matemos"

console.log(
  `¿"${palindrome}" es palíndromo?: ${
    isPalindrome(palindrome) === true ? "Sí" : "No"
  }`
);

/**
 * Ejercicio 1
 */

let numbersArray = [1, 2, 3, 4, 18];
console.log(evenOnly(numbersArray));

numbersArray = [10, 2, 5];
console.log(evenOnly(numbersArray));

console.log(evenOnly());

/**
 * Ejercicio 2
 */
console.log(firstAndLast(["hola", "mundo"]));
console.log(firstAndLast(["hola", "mundo", "koder", "javascript"]));
console.log(firstAndLast());
