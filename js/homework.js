// Ejercicios

/**
 * Ejercicio 1
 * Escribir un programa de arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 * Resolver con For, While y do While
 */
let multiplier = parseInt(
  prompt("Indique un múltiplo de los siguientes: 3, 5 ó 7", 3)
);
let total = 0,
  counter = 1;

if (multiplier === 3 || multiplier === 5 || multiplier === 7) {
  /**
   * CICLO FOR
   */
  for (let i = 1; i <= 100; i++) {
    if (i % multiplier === 0) total += i;
  }
  console.log(
    `[FOR] La sumatoria de los múltiplos de ${multiplier} es ${total}`
  );

  /**
   * CICLO WHILE
   */
  total = 0;

  while (counter <= 100) {
    if (counter % multiplier === 0) total += counter;

    counter++;
  }
  console.log(
    `[WHILE] La sumatoria de los múltiplos de ${multiplier} es ${total}`
  );

  /**
   * CICLO DO WHILE
   */
  total = 0;
  counter = 1;

  do {
    if (counter % multiplier === 0) total += counter;

    counter++;
  } while (counter <= 100);
  console.log(
    `[DO-WHILE] La sumatoria de los múltiplos de ${multiplier} es ${total}`
  );
} else {
  console.log(`El valor ${multiplier} es inválido.`);
}

/**
 * Ejercicio 2
 * Pedir el usuario 1 numero entre 1 y 100
 * sumar todos los numeros entre el 1 y este numero
 * Mandar un alert con el  total
 * Resolver con For, While y do While
 * p.ej. 5
 * ->  15
 */
let number = parseInt(prompt("Indique un número entre 1 y 100", 50));
let result = 0;

if (number >= 1 && number <= 100) {
  /**
   * CICLO FOR
   * */
  for (let i = 1; i <= number; i++) {
    result += i;
  }
  alert(`"[FOR]La sumatoria total del 1 hasta el ${number} es ${result}"`);

  /**
   * CICLO WHILE
   * */
  let counter = 1;
  result = 0;
  while (counter <= number) {
    result += counter;

    counter++;
  }
  alert(`"[WHILE]La sumatoria total del 1 hasta el ${number} es ${result}"`);

  /**
   * CICLO DO WHILE
   * */
  counter = 1;
  result = 0;
  do {
    result += counter;

    counter++;
  } while (counter <= number);
  alert(`"[DO-WHILE]La sumatoria total del 1 hasta el ${number} es ${result}"`);
} else {
  console.log(`El valor ${number} es inválido.`);
}

/**
 * Ejercicio 3
 * pedir una oracion al usuario
 * Contar las letras "a" y "e" y espacios,
 * Resolver con For, While y do While
 *
 * p.ej. 'hola kodErs'
 * ->  A -> 1
 * ->  E -> 1
 * ->  Espacios -> 1
 */
let sentence = prompt(
  "Indicar una oración cualquiera:",
  "Felicidades por completar este reto."
);

let stringLen = sentence.length;
let totalA = 0,
  totalE = 0,
  totalSpaces = 0;

sentence = sentence.toLowerCase();

if (sentence.trim().length >= 1) {
  /**
   * CICLO FOR
   * */
  for (let i = 0; i < stringLen; i++) {
    if (sentence[i] === "a") totalA++;
    else if (sentence[i] === "e") totalE++;
    else if (sentence[i] === " ") totalSpaces++;
  }
  console.log(
    `[FOR]\nA -> ${totalA}\nE -> ${totalE}\nEspacios -> ${totalSpaces}`
  );

  /**
   * CICLO WHILE
   * */
  totalA = 0;
  totalE = 0;
  totalSpaces = 0;
  let counter = 0;

  while (counter < stringLen) {
    if (sentence[counter] === "a") totalA++;
    else if (sentence[counter] === "e") totalE++;
    else if (sentence[counter] === " ") totalSpaces++;

    counter++;
  }
  console.log(
    `[WHILE]\nA -> ${totalA}\nE -> ${totalE}\nEspacios -> ${totalSpaces}`
  );

  /**
   * CICLO DO WHILE
   * */
  totalA = 0;
  totalE = 0;
  totalSpaces = 0;
  counter = 0;

  while (counter < stringLen) {
    if (sentence[counter] === "a") totalA++;
    else if (sentence[counter] === "e") totalE++;
    else if (sentence[counter] === " ") totalSpaces++;

    counter++;
  }
  console.log(
    `[DO-WHILE]\nA -> ${totalA}\nE -> ${totalE}\nEspacios -> ${totalSpaces}`
  );
} else {
  console.log("El valor introducido es una cadena inválida");
}
/**
 * Ejercicio 4
 * Estudiar acerca del tema Funciones
 * ¿Qué son?
 * Parametros y argumentos de una funcion
 * Parametros de una funcion
 * Parametros opcionales
 * Parametros por defecto (default)
 *
 * Referencias
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
 * https://www.programiz.com/javascript/function
 *
 */
