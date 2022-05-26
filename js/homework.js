/**
 * Funcion que reciba una palabra
 * Retorne la palabra invertida
 *
 * reverseStr('hola mundo')
 * -> 'odnum aloh'
 *
 * Usar solo metodos de str y array
 */
const reverseStr = (phrase) => {
  if (phrase) {
    let strArray = phrase.split("");
    let reversedArray = strArray.reverse();
    let reversedStr = reversedArray.join("");

    return reversedStr;
  } else {
    return "Valor inválido";
  }
};

let phrase = "Hola mundo";

console.log(reverseStr(phrase));

/**
 * Funcion que reciba un array de numeros
 * y devuelva el promedio de todos los elementos
 *
 * getAverage( [10, 8, 9, 7] )
 * -> 8.5
 */
const getAverage = (numbersArray) => {
  let sum = 0;

  if (numbersArray) {
    let arraySize = numbersArray.length;

    numbersArray.forEach((number) => (sum += number));
    sum /= arraySize;
  }

  return sum;
};

let numArray = [10, 8, 9, 7];

console.log(getAverage());
/**
 * Funcion que reciba un array de strings
 * y devuelva un array indicando si son palindromos o no
 *
 * arePalindrome( ['oso','juan', 'seres'] )
 * -> [true, false, true]
 */
const arePalindrome = (stringArray) => {
  if (stringArray) {
    let arePalindromes = stringArray.map((word) => {
      word = word.replaceAll(" ", "");
      let splittedWord = word.split("");
      let reversedWord = splittedWord.reverse().join("");

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== reversedWord[i]) return false;
      }

      return true;
    });

    return arePalindromes;
  } else {
    return "Valor inválido";
  }
};

let palindromesArray = ["oso", "juan", "seres"];

console.log(arePalindrome(palindromesArray));

/**
 * Estudiar los métodos de array
 * .filter()
 * .reduce()
 */

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
 *  array.reduce()
 *  returns a new array
 */
console.log("**** Array.reduce() ****");
const getAverageWithReduce = (numbersArray) => {
  let sum = 0;

  if (numbersArray) {
    let arraySize = numbersArray.length;

    sum =
      numbersArray.reduce((accumulator, number) => accumulator + number) /
      arraySize;
  }

  return sum;
};

let numArrayForReduce = [10, 8, 9, 7];
console.log(getAverageWithReduce(numArrayForReduce));
