/**
 * Tarea
 * REalizar los siguientes 3 ejercicios
 *
 */

/**
 * 1. funcion con .reduce()
 * capitalizeNames( ['jorge','lUis', 'marcOs', 'mario'] )
 * -> ['Jorge','Luis', 'Marcos', 'Mario']
 */
let namesList = ["jorge", "lUis", "marcOs", "mario"];

const capitalizeName = (names) => {
  let capitalizedArray = [];

  capitalizedArray = names.reduce((namesContainer, nextName) => {
    namesContainer.push(
      nextName.charAt(0).toUpperCase() + nextName.slice(1).toLowerCase()
    );
    return namesContainer;
  }, []);

  return capitalizedArray;
};

console.log(
  `Original array: ${namesList}; \nCapitilized array: ${capitalizeName(
    namesList
  )}`
);

//Smaller version
const capilizeNameSmaller = (names) => {
  return names.reduce((namesContainer, nextName) => {
    namesContainer.push(
      nextName.charAt(0).toUpperCase() + nextName.slice(1).toLowerCase()
    );
    return namesContainer;
  }, []);
};

console.log(
  `Original array: ${namesList}; \nCapitilized array: ${capilizeNameSmaller(
    namesList
  )}`
);

/**
 * 2. funcion con .reduce()
 * Dado un array de numeros, filtras solo los pares
 * filterEvens( [2,3,4,5] )
 * -> [2,4]
 */
let numbersArray = [2, 3, 4, 5, 7, 8, 10, 12, 13, 15, 18];

const filterEvens = (numbers) => {
  return numbers.reduce((numbersList, nextNumber) => {
    if (nextNumber % 2 === 0) numbersList.push(nextNumber);

    return numbersList;
  }, []);
};

console.log(`Even numbers list: ${filterEvens(numbersArray)}`);
/**
 * 3. funcion con .reduce()
 * Dado un array de numeros, obtener la suma de solo los elementos positivos
 * addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
 * -> 42
 */
let numArray = [1, -4, 12, 0, -3, 29, -150];

const addAllPositives = (numbers) => {
  return numbers.reduce(
    (sum, nextNumber) => sum + (nextNumber > 0 ? nextNumber : 0),
    0
  );
};

console.log(`Sum total: ${addAllPositives(numArray)}`);

/**
 * 4. Estudiar Objetos y métodos de objetos
 *
 */

/**
 * Opcional
 * funcion con .reduce()
 * Dado un array de palabras, filtras las que son palindromos
 * onlyPalindrome( ['oso','pedro', 'jorge', 'seres'] )
 * -> ['oso','seres']
 */
let words = ["oso", "pedro", "jorge", "seres"];

const onlyPalindrome = (wordList) => {
  return wordList.reduce((wordArray, nextWord) => {
    let reversedWord = nextWord.split("").reverse().join("");

    if (nextWord === reversedWord) wordArray.push(nextWord);

    return wordArray;
  }, []);
};

console.log(onlyPalindrome(words));
