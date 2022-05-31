/**
 * Escribir una funcion que reciba como parametro un correo electronico
 * y que retorne lo siguiente
 * -> maskEmail('jlcc170@gmail.com') -> *******@gmail.com
 *
 * Implementar soluciones con
 * .split()
 */
let email = "jlcc170@gmail.com";

const maskEmail = (email) => {
  let strArray = email.split("@");
  return "*".repeat(strArray[0].length) + "@" + strArray[1];
};

console.log(`${email} -> ${maskEmail(email)}`);

/**
 * Escribir una funcion, Que dado un string, 
 * retorne si el string inicia y termina con una vocal
 * p.ej. 
 * isVowelSandwich("cat") ➞ true
 * isVowelSandwich("ear") ➞ false
 * isVowelSandwich("bake") ➞ false
 * isVowelSandwich("dog") ➞ true

 * Implementar soluciones con
 * .slice()
 * .substring()
 * .charAt()
 * 
 */
let word = "dog";
let vowels = "aeiou";

/** Slice */
const isVowelSandwichSlice = (word) => {
  let lowerCaseWord = word.toLowerCase();

  if (
    !vowels.includes(lowerCaseWord.slice(0, 1)) &&
    !vowels.includes(lowerCaseWord.slice(-1))
  )
    return true;
  else return false;
};
console.log(`isVowelSandwichSlice(${word}) -> ${isVowelSandwichSlice(word)}`);

/** Substring */
const isVowelSandwichSubstring = (word) => {
  let lowerCaseWord = word.toLowerCase();

  if (
    !vowels.includes(lowerCaseWord.substring(0, 1)) &&
    !vowels.includes(lowerCaseWord.substring(lowerCaseWord.length - 1))
  )
    return true;
  else return false;
};
console.log(
  `isVowelSandwichSubstring(${word}) -> ${isVowelSandwichSubstring(word)}`
);

/** charAt */
const isVowelSandwichCharAt = (word) => {
  let lowerCaseWord = word.toLowerCase();

  if (
    vowels.includes(lowerCaseWord.charAt(0)) ||
    vowels.includes(lowerCaseWord.charAt(lowerCaseWord.length - 1))
  )
    return false;
  else return true;
};

console.log(`isVowelSandwichCharAt(${word}) -> ${isVowelSandwichCharAt(word)}`);
/**
 * Escribir una funcion, Que dado un string, 
 * retorne si el string solo contiene letras y espacio
 * p.ej. 
 * lettersOnly("JAVAscript") ➞ true
 * lettersOnly("12321313") ➞ false
 * lettersOnly("i have spaces") ➞ true
 * lettersOnly("i have spaces!!!") ➞ false

 * Implementar soluciones con
 * .test()
 * .match()
 * 
 */

//let testWord = "i have spaces";
let testWord = "i have spaces!!!";
//let testWord = "12321313";
//let testWord = "JAVAscript";

/** Test */
const lettersOnlyWithTest = (word) => {
  let regExp = /^[a-zA-Z\s]*$/g;

  if (regExp.test(word)) return true;
  else return false;
};
console.log(
  `lettersOnlyWithTest(${testWord}) -> ${lettersOnlyWithTest(testWord)}`
);

/** Match */
const lettersOnlyWithMatch = (word) => {
  let regExp = /^[a-zA-Z\s]*$/g;

  if (word.match(regExp)) return true;
  else return false;
};
console.log(
  `lettersOnlyWithMatch(${testWord}) -> ${lettersOnlyWithMatch(testWord)}`
);

/**
 * Escribir una funcion que convierta un string en formato camel case
 * p.ej
 * -> camelize("JavaScript Exercises") -> "JavaScriptExercises"
 *
 * Implementar soluciones con:
 * .join()
 */
let stringToCamelize = "JavaScript exercises hola Mundo";

const camelize = (phrase) => {
  let stringArray = phrase.split(" ");

  return stringArray
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

console.log(`camelize(${stringToCamelize}) -> ${camelize(stringToCamelize)}`);
/**
 * Escribir una funcion que convierta de formato camel case a formato normal
 * p.ej
 * -> uncamelize("helloWorld") -> "hello world"
 *
 * Implementar soluciones con:
 * .forEach()
 */
let stringToUncamelize = "helloWorldHolaMundo";

const uncamelize = (phrase) => {
  let finalWord = "";
  let splittedPhrase = phrase.split(/(?=[A-Z])/g);

  splittedPhrase.forEach((word) => {
    finalWord += `${word.toLowerCase()} `;
  });

  return finalWord;
};

console.log(
  `uncamelize(${stringToUncamelize}) -> ${uncamelize(stringToUncamelize)}`
);

/**
 * Escribir una funcion que replique un string N veces
 * p.ej
 * -> repeat('Ha!') -> "Ha!"
 * -> repeat('Ha!', 2) -> "Ha!Ha!"
 * -> repeat('Ha!', 3) -> "Ha!Ha!Ha!"
 *
 * Implementar soluciones con:
 * .repeat()
 * .forEach()
 */
let stringToRepeat = "Ha!";
let repetitions = 3;

/** Repeat */
const repeat = (word, repetitionsNumber) => {
  return word.repeat(repetitionsNumber);
};
console.log(
  `repeat(${stringToRepeat}, ${repetitions}) -> ${repeat(
    stringToRepeat,
    repetitions
  )}`
);

/** ForEach */
const repeatForEach = (word, repetitionsNumber) => {
  let finalPhrase = "";
  let wordArray = Array(repetitionsNumber).fill(word);

  wordArray.forEach((word) => (finalPhrase += `${word}`));

  return finalPhrase;
};
console.log(
  `repeatForEach(${stringToRepeat}, ${repetitions}) -> ${repeatForEach(
    stringToRepeat,
    repetitions
  )}`
);

/**
 * Escribir una funcion que cuente las veces que aparece
 * una palabra en una oración
 * p.ej
 * -> countWord('Hola mundo', 'mundo') -> 1
 * -> countWord('The quick brown fox jumps over the lazy dog', 'the') -> 2
 *
 * Implementar soluciones con:
 * .repeat()
 * .forEach()
 */
//let phrase = "The quick brown fox jumps over the lazy dog";
//let wordToLook = "the";
let phrase = "Hola mundo";
let wordToLook = "mundo";
let counter = 0;

const countWord = (phrase, lookupWord) => {
  phrase
    .toLowerCase()
    .split(" ")
    .forEach((word) => {
      if (word === lookupWord) counter++;
    });

  return counter;
};

console.log(
  `countWord(${phrase}, ${wordToLook}) -> ${countWord(phrase, wordToLook)}`
);

/**
 * Generar una funcion
 * que a partir de un string devuelva solo las iniciales de ese string
 * getInitialLetters('Hola koders')
 * -> 'Hk'
 *
 * Implementar soluciones con:
 * .forEach()
 * .map()
 * .reduce()
 * for()
 *
 */
let phraseToTest = "Hola koders";

/** ForEach */
const getInitialLettersForEach = (phrase) => {
  let initials = "";

  phrase
    .toLowerCase()
    .split(" ")
    .forEach((word) => (initials += `${word.charAt(0)}`));

  return initials;
};
console.log(
  `getInitialLettersForEach(${phraseToTest}) -> ${getInitialLettersForEach(
    phraseToTest
  )}`
);

/** Map */
const getInitialLettersMap = (phrase) => {
  let initials = "";

  phrase
    .toLowerCase()
    .split(" ")
    .map((word) => (initials += `${word.charAt(0)}`));

  return initials;
};
console.log(
  `getInitialLettersMap(${phraseToTest}) -> ${getInitialLettersMap(
    phraseToTest
  )}`
);

/** Map */
const getInitialLettersReduce = (phrase) => {
  return phrase
    .toLowerCase()
    .split(" ")
    .reduce((finalWord, word) => (finalWord += `${word.charAt(0)}`), "");
};
console.log(
  `getInitialLettersReduce(${phraseToTest}) -> ${getInitialLettersReduce(
    phraseToTest
  )}`
);

/** For */
const getInitialLettersFor = (phrase) => {
  let initials = "";
  let wordsArray = phrase.toLowerCase().split(" ");

  for (let i = 0; i < wordsArray.length; i++) {
    initials += `${wordsArray[i].charAt(0)}`;
  }

  return initials;
};
console.log(
  `getInitialLettersFor(${phraseToTest}) -> ${getInitialLettersFor(
    phraseToTest
  )}`
);
/**
 * Escribir una funcion, Que dado una oracion,
 * convierta cada 2 palabras en mayusculas o minusculass
 * p.ej
 * swapCase('hola mundo, hola koders')
 * -> 'hola MUNDO, hola KODERS'
 *
 * Implementar soluciones con:
 * .map()
 * .reduce()
 * .forEach()
 * for()
 */
let words = "hola mundo, hola koders";

/** Map */
const swapCaseMap = (wordList) => {
  return wordList
    .split(" ")
    .map((word, index) => {
      if (index % 2 === 0) return word.toLowerCase();
      else return word.toUpperCase();
    })
    .join(" ");
};
console.log(`swapCaseMap(${words}) -> ${swapCaseMap(words)}`);

/** Reduce */
const swapCaseReduce = (wordList) => {
  return wordList
    .split(" ")
    .reduce((wordAcc, currentWord, index) => {
      if (index % 2 === 0) wordAcc.push(currentWord.toLowerCase());
      else wordAcc.push(currentWord.toUpperCase());

      return wordAcc;
    }, [])
    .join(" ");
};
console.log(`swapCaseReduce(${words}) -> ${swapCaseReduce(words)}`);

/** ForEach */
const swapCaseForEach = (wordList) => {
  let finalPhrase = "";

  wordList.split(" ").forEach((word, index) => {
    if (index % 2 === 0) finalPhrase += `${word.toLowerCase()} `;
    else finalPhrase += `${word.toUpperCase()} `;
  });

  return finalPhrase;
};
console.log(`swapCaseForEach(${words}) -> ${swapCaseForEach(words)}`);

/** For */
const swapCaseFor = (wordList) => {
  let finalPhrase = "";
  let wordsArray = wordList.split(" ");

  for (let i = 0; i < wordsArray.length; i++) {
    if (i % 2 === 0) finalPhrase += `${wordsArray[i].toLowerCase()} `;
    else finalPhrase += `${wordsArray[i].toUpperCase()} `;
  }

  return finalPhrase;
};
console.log(`swapCaseFor(${words}) -> ${swapCaseFor(words)}`);
/**
 * Escribir una funcion, Que dado una array de numeros,
 * Encuentre el numero mas pequeño
 * getSmallNumber( [1,5, 7] )
 * -> 1
 *
 * Implementar soluciones con
 * for()
 * .forEach()
 * .reduce()
 */
let numberArray = [5, 7, 10, 25, 1, 4, 0, 2, 3];

/** For */
const getSmallestNumberFor = (numbers) => {
  let smallerNumber = 0;

  for (let i = 0; i < numberArray.length; i++) {
    if (
      smallerNumber === 0 ||
      (numberArray[i] !== 0 && numberArray[i] < smallerNumber)
    )
      smallerNumber = numberArray[i];
  }

  return smallerNumber;
};
console.log(
  `getSmallestNumberFor(${numberArray}) -> ${getSmallestNumberFor(numberArray)}`
);

/** ForEach */
const getSmallerNumbestForEach = (numbers) => {
  let smallestNumber = 0;

  numbers.forEach((number) => {
    if (smallestNumber === 0 || (number !== 0 && number < smallestNumber))
      smallestNumber = number;
  });

  return smallestNumber;
};
console.log(
  `getSmallerNumbestForEach(${numberArray}) -> ${getSmallerNumbestForEach(
    numberArray
  )}`
);

/** Reduce */
const getSmallestNumberReduce = (numbers) => {
  return numbers.reduce((numberAcc, currentNumber) => {
    if (numberAcc === 0 || (currentNumber !== 0 && currentNumber < numberAcc))
      numberAcc = currentNumber;

    return numberAcc;
  }, 0);
};

console.log(
  `getSmallestNumberReduce(${numberArray}) -> ${getSmallestNumberReduce(
    numberArray
  )}`
);
/**
 * Escribir una funcion, Que dado una array de  10 numeros entre 0 y 9,
 * retorne un string en formato telefonico
 * formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
 * -> "(123) 456-7890"
 *
 * Implementar soluciones con
 * for()
 * .forEach()
 * .reduce()
 */
let phoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

/** For */
const formatPhoneNumberFor = (phoneNumbers) => {
  let finalPhoneNumber = "";

  for (let i = 0; i < phoneNumbers.length; i++) {
    if (phoneNumbers[i] < 0 || phoneNumbers[i] > 9) {
      finalPhoneNumber = `Hay un valor inválido en el arreglo, favor de revisar: index: ${i} - valor ${phoneNumbers[i]}`;

      break;
    } else {
      if (i === 0) finalPhoneNumber += `(${phoneNumbers[i]}`;
      else if (i >= 1 && i <= 2) finalPhoneNumber += `${phoneNumbers[i]}`;
      else if (i === 3) finalPhoneNumber += `) ${phoneNumbers[i]}`;
      else if (i >= 4 && i <= 5) finalPhoneNumber += `${phoneNumbers[i]}`;
      else if (i === 6) finalPhoneNumber += `-${phoneNumbers[i]}`;
      else finalPhoneNumber += `${phoneNumbers[i]}`;
    }
  }

  return finalPhoneNumber;
};
console.log(
  `formatPhoneNumberFor(${phoneNumberArray}) -> ${formatPhoneNumberFor(
    phoneNumberArray
  )}`
);

/** ForEach */
const formatPhoneNumberForEach = (phoneNumbers) => {
  let finalPhoneNumber = "";
  let skip = false;

  phoneNumbers.forEach((number, index) => {
    if (number < 0 || number > 9) {
      finalPhoneNumber = `Hay un valor inválido en el arreglo, favor de revisar: index: ${index} - valor ${number}`;
      skip = true;
    } else if (!skip) {
      if (index === 0) finalPhoneNumber += `(${number}`;
      else if (index >= 1 && index <= 2) finalPhoneNumber += `${number}`;
      else if (index === 3) finalPhoneNumber += `) ${number}`;
      else if (index >= 4 && index <= 5) finalPhoneNumber += `${number}`;
      else if (index === 6) finalPhoneNumber += `-${number}`;
      else finalPhoneNumber += `${number}`;
    }
  });

  return finalPhoneNumber;
};
console.log(
  `formatPhoneNumberForEach(${phoneNumberArray}) -> ${formatPhoneNumberForEach(
    phoneNumberArray
  )}`
);

/** Reduce */
const formatPhoneNumberReduce = (phoneNumbers) => {
  let skip = false;

  return phoneNumbers.reduce((numberAcc, currentNumber, index) => {
    if (currentNumber < 0 || currentNumber > 9) {
      numberAcc = `Hay un valor inválido en el arreglo, favor de revisar: index: ${index} - valor ${currentNumber}`;
      skip = true;
    } else if (!skip) {
      if (index === 0) numberAcc += `(${currentNumber}`;
      else if (index >= 1 && index <= 2) numberAcc += `${currentNumber}`;
      else if (index === 3) numberAcc += `) ${currentNumber}`;
      else if (index >= 4 && index <= 5) numberAcc += `${currentNumber}`;
      else if (index === 6) numberAcc += `-${currentNumber}`;
      else numberAcc += `${currentNumber}`;
    }

    return numberAcc;
  }, "");
};
console.log(
  `formatPhoneNumberReduce(${phoneNumberArray}) -> ${formatPhoneNumberReduce(
    phoneNumberArray
  )}`
);
