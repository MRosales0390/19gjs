//funciones
//let strUser = prompt("Dame una palabra", "str").toLowerCase();
function suMultiplier() {
  let total = 0;
  /**
   * CICLO FOR
   */
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      total += i;
    }
  }
  console.log(`[FOR] La sumatoria de los múltiplos de 3, 5 y 7 es ${total}`);
}

function countLetters() {
  let counter = 0;
  let sentence = prompt(
    "Indicar una oración cualquiera:",
    "Felicidades por completar este reto."
  );

  let stringLen = sentence.length;
  let totalA = 0,
    totalE = 0,
    totalSpaces = 0;

  sentence = sentence.toLowerCase();

  do {
    if (sentence[counter] === "a") totalA++;
    else if (sentence[counter] === "e") totalE++;
    else if (sentence[counter] === " ") totalSpaces++;

    counter++;
  } while (counter < stringLen);
  console.log(
    `[DO-WHILE]\nA -> ${totalA}\nE -> ${totalE}\nEspacios -> ${totalSpaces}`
  );
}

function sumNumbers() {
  let number = parseInt(prompt("Indique un número entre 1 y 100", 50));
  let result = 0;
  let counter = 1;

  while (counter <= number) {
    result += counter;

    counter++;
  }
  alert(`"[WHILE]La sumatoria total del 1 hasta el ${number} es ${result}"`);
}

// Ejercicio
// Realiza una funcion
// Que pida al usuario 3 numeros
// retorne la suma de esos 3 numeros
// los 3 numeros deben pasarse como parametros
function sum(firstNumber, secondNumber, thirdNumber = 4) {
  let total = firstNumber + secondNumber + thirdNumber;

  return total;
}
