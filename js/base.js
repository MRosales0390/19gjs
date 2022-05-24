//countLetters();
//sumMultipliers();
//sumNumbers();
// let firstNumber = parseInt(prompt("Ingresa el primer número", 5));
// let secondNumber = parseInt(prompt("Ingresa el segundo número", 5));
// let thirdNumber = parseInt(prompt("Ingresa el tercer número", 5));

// console.log(sum(firstNumber, secondNumber, thirdNumber));

/**
 * Ejercicio 1
 */
let userWord = prompt("Por favor indique una palabra a invertir:", "Lokoder");
alert(reversedString(userWord));

/**
 * Ejercicio 2
 */
let firstNumber = 5;
let secondNumber = 10;
let thirdNumber = 8;

console.log(
  `addThreeNumbers(${firstNumber}, ${secondNumber}, ${thirdNumber})-> ${addThreeNumbers(
    firstNumber,
    secondNumber,
    thirdNumber
  )}`
);
console.log(
  `addThreeNumbers(${firstNumber}, ${secondNumber})-> ${addThreeNumbers(
    firstNumber,
    secondNumber
  )}`
);
console.log(
  `addThreeNumbers(undefined, ${secondNumber})-> ${addThreeNumbers(
    undefined,
    secondNumber
  )}`
);

console.log(
  `addThreeNumbers(${firstNumber})-> ${addThreeNumbers(firstNumber)}`
);

/**
 * Ejercicio 3
 */
let degrees = parseInt(
  prompt("Ingresa la tempera actual de tu localidad en °C: ", 35)
);

alert(`convertTemp(${degrees}) -> ${convertTemp(degrees)}`);
alert(`convertTemp() -> ${convertTemp()}`);

/**
 * Ejercicio 4
 */
timesTable(3);
timesTable();
timesTable(11);

/**
 * Ejercicio 5
 */
console.log(`addNumberLimit() -> ${addNumberLimit()}`);
console.log(`addNumberLimit(4) -> ${addNumberLimit(4)}`);
console.log(`addNumberLimit(5) -> ${addNumberLimit(5)}`);
console.log(`addNumberLimit(101) -> ${addNumberLimit(101)}`);
