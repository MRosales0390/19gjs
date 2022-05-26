/**
 * Ejercicio 1 *Obligatorio
 * Realizar una funcion que reciba como parametro 1 array
 * Y devuelva un array con solo los elementos Pares de ese array
 * p.ej.
 * -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
 * -> evenOnly( [10, 2, 5] ) -> [10,2]
 * -> evenOnly() -> 'Se necesita un array'
 *
 */
evenOnly = (numbersArray) => {
  let onlyEvenNumbers = [];

  if (numbersArray) {
    let arrayLenght = numbersArray.length;

    for (let i = 0; i < arrayLenght; i++) {
      if (numbersArray[i] % 2 === 0) {
        onlyEvenNumbers.push(numbersArray[i]);
      }
    }

    return onlyEvenNumbers;
  } else {
    return "Se necesita un array";
  }
};

/**
 * Ejercicio 2 *Opcional
 * Funcion que reciba como parametro una array de strings
 * y devuelva el primer y ultimo caracter de cada string
 * p.ej.
 * -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
 */
firstAndLast = (strArray) => {
  let lettersArray = [];

  if (strArray) {
    let strArraySize = strArray.length;

    for (let i = 0; i < strArraySize; i++) {
      lettersArray.push(strArray[i].substring(0, 1) + strArray[i].slice(-1));
    }

    return lettersArray;
  } else {
    return "Se necesita un array";
  }
};

/**
 * Ejercicio 3
 * Estudiar todos los métodos de Array
 * https://www.w3schools.com/jsref/jsref_obj_array.asp
 * https://www.programiz.com/javascript/library/array
 *
 */

/**
 * array.forEach()
 */
console.log("**** Array.forEach() ****");
let strTestArray = ["Hola", "Mundos", "Koder", "Javascript"];

const printValue = (element, index) => {
  console.log(`El elemento actual es ${element} en la posición ${index}`);
};

strTestArray.forEach(printValue);

/**
 * array.reduce()
 */
console.log("**** Array.reduce() ****");
const joinStrings = (accumulator, currentValue) => {
  return accumulator + currentValue;
};

let joinedString = strTestArray.reduce(joinStrings);
console.log(joinedString);

/**
 *  array.filter()
 *  returns a new array
 */
console.log("**** Array.filter() ****");
const checkEven = (number) => {
  if (number % 2 == 0) return true;
  else return false;
};

let numbersArrayFilter = [1, 2, 3, 4, 18];
let evenNumbers = numbersArrayFilter.filter(checkEven);

console.log(evenNumbers);

/**
 * Sort
 * Modifies the current array
 */
console.log("**** Array.sort() ****");

const sortArray = (a, b) => {
  return a.length - b.length;
};

strTestArray.sort();
console.log(strTestArray);

strTestArray.sort(sortArray);
console.log(strTestArray);
