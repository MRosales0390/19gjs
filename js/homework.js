// Ejercicio 1
// investigar while, y do while
let number = parseInt(
  prompt(
    "Indique un número entre 1 y 10 para imprimir la tabla de multiplicar",
    5
  )
);

if (number >= 1 && number <= 10) {
  console.log(`Se imprimirá la tabla del ${number} con ciclo while`);
  let i = 1;
  while (i <= 10) {
    console.log(`${i} x ${number} = ${i * number}`);
    i++;
  }
} else {
  console.log("Se introdujo un valor inválido");
}

// Utilizar Condicionales, Ciclo for, Metodos de string

/**
 * Ejercicio 2
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 3
 * 3 x 1 = 3
 * 3 x 2 = 6
 * ....
 * 3 x 10 = 30
 */

if (number >= 1 && number <= 10) {
  console.log(`Se imprimirá la tabla del ${number} con ciclo for`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${number} = ${i * number}`);
  }
} else {
  console.log("Se introdujo un valor inválido");
}

/**
 * Ejercicio 3
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * p.ej. "Hola mundo"
 * Consonantes -> hlmnd
 * Vocales -> oauo
 */
let phrase = prompt("Indicar una oración cualquiera", "Hola Mundo");
let vowels = "aeiou";
let onlyVowels = "",
  onlyConsonants = "";

if (phrase.length > 0) {
  phrase = phrase.replaceAll(" ", "").toLocaleLowerCase();

  for (let i = 0; i < phrase.length; i++) {
    if (vowels.includes(phrase[i])) {
      onlyVowels += phrase[i];
    } else {
      onlyConsonants += phrase[i];
    }
  }

  console.log(`Consonantes -> ${onlyConsonants}`);
  console.log(`Vocales -> ${onlyVowels}`);
}

/**
 *
 * Ejercicio 4
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 * p.ej. 12 -> 2,4,6,8,10,12
 *
 */
let evenNumberTestValue = parseInt(
  prompt("Indique un valor entre 10 y 100", 50)
);
let valuesList = "";

if (evenNumberTestValue >= 10 && evenNumberTestValue <= 100) {
  for (let i = 1; i <= evenNumberTestValue; i++) {
    if (i % 2 === 0) {
      valuesList += `${i},`;
    }
  }
  console.log(
    `${evenNumberTestValue} -> ${valuesList.substring(
      0,
      valuesList.length - 1
    )}`
  );
}

/**
 *
 * Ejercicio 5. Opcional
 * Pedir el usuario una palabra
 * Invertir esa palabra e imprimirla en consola
 * p.ej. 'Hola' -> 'aloh'
 *
 */
let inputdWord = prompt("Indica la palabra que será invertida", "Palabrota");
let reversedWord = "";

if (inputdWord.length > 0) {
  console.log(`Palabra ingresada ${inputdWord}`);

  for (let i = inputdWord.length - 1; i >= 0; i--) {
    reversedWord += inputdWord[i].toLowerCase();
  }

  console.log(`${inputdWord} -> ${reversedWord}`);
}
