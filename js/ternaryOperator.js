let firstNumber = parseInt(prompt("Indica el primero número", 1));
let secondNumber = parseInt(prompt("Indica el segundo número", 1));

let result =
  firstNumber === secondNumber
    ? "Ambos valores son iguales"
    : firstNumber < secondNumber
    ? `${firstNumber} es menor que ${secondNumber}`
    : `${secondNumber} es menor que ${firstNumber}`;

console.log(result);
