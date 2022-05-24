/**
 * Funcion que pida una palabra al usuario
 * Invierta la palabra
 * y la retorne en un alert
 * reversedString('hola') -> 'aloh'
 */
function reversedString(word) {
  let result = "";
  let wordLength = word.length;
  if (wordLength > 0) {
    for (let i = wordLength - 1; i >= 0; i--) {
      result += word[i];
    }
  } else {
    result = "El dato introducido es inválido";
  }

  return result;
}
/**
 * Funcion que pida 3 numeros como parametro
 * 2 numeros obligatorios y 1 opcional con valor de 3
 * Arroje la suma de esos 3 numeros
 * Posibles resultados
 * -> addThreeNumbers(3,4,5) -> 12
 * -> addThreeNumbers(3,4) -> 10
 * -> addThreeNumbers(3) -> 'Faltan datos'
 * -> addThreeNumbers() -> 'Faltan datos'
 */
function addThreeNumbers(firstNumber = 3, secondNumber, thirdNumber) {
  let result;

  if (firstNumber >= 0 && (secondNumber >= 0 || thirdNumber >= 0)) {
    result = 0;

    if (firstNumber >= 0) result += firstNumber;

    if (secondNumber >= 0) result += secondNumber;

    if (thirdNumber >= 0) result += thirdNumber;
  } else {
    result = "Faltan datos.";
  }

  return result;
}

/**
 * Funcion que pida al usuario los grados Centigrados en su localidad
 * Convertirlos a grados fahrenheit
 * Arrojar un alert con el resultado
 * -> convertTemp(25) -> La temperatura es de 77 ºF
 * -> convertTemp() -> 'Faltan datos'
 */
function convertTemp(degrees) {
  let result;

  if (degrees >= 0) {
    result = `La temperatura es de ${degrees * (9 / 5) + 32} ºF`;
  } else {
    result = "Faltan datos.";
  }

  return result;
}

/**
 * Funcion que imprima las tablas del 1 al 10
 */
function timesTable(number) {
  if (number >= 1 && number <= 10) {
    console.log(`Tabla de multiplicar del ${number}`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${number} x ${j} = ${number * j}`);
    }
  } else if (number < 1 || number > 10) {
    console.log("El valor indicado está fuera del rango.");
  } else {
    for (let i = 1; i <= 10; i++) {
      console.log(`Tabla de multiplicar del ${i}`);
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
      }
    }
  }
}

/**
 * Funcion que pida al usuario un numero (N) entre 1 y 100
 * Mandar un alert con suma de 1 a N
 * Valor por defecto 3
 * addNumberLimit() -> 6
 * addNumberLimit(4) -> 10
 * addNumberLimit(5) -> 15
 */
function addNumberLimit(number = 3) {
  let result;
  let counter = 1;

  if (number >= 1 && number <= 100) {
    result = 0;

    while (counter <= number) {
      result += counter;

      counter++;
    }
  } else {
    result = "Valor inválido.";
  }

  return result;
}
