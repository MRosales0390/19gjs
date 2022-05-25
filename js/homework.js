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
