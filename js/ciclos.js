let str = "Hola Koders!";
let fin = str.length - 1;

// "Hola Koder"
// Imprimir en consola cada una de las vocales
// ciclos y condicionales
//o a o e

let vocals = "aeiou";

console.log("Con función de string");
for (let i = 0; i < fin; i++) {
  if (vocals.includes(str[i].toLowerCase())) console.log(str[i]);
}

console.log("Sin funciones de string");
for (let i = 0; i < fin; i++) {
  if (
    str[i].toLowerCase() === "a" ||
    str[i].toLowerCase() === "e" ||
    str[i].toLowerCase() === "i" ||
    str[i].toLowerCase() === "o" ||
    str[i].toLowerCase() === "u"
  )
    console.log(str[i]);
}

// "Hola Koders"
// Imprimir en consola cada una de las consonantes
// ciclos y condicionales
console.log("Con función de string");
for (let i = 0; i < fin; i++) {
  if (!vocals.includes(str[i].toLowerCase())) console.log(str[i]);
}

console.log("Sin funciones de string");
for (let i = 0; i < fin; i++) {
  if (
    str[i].toLowerCase() !== "a" &&
    str[i].toLowerCase() !== "e" &&
    str[i].toLowerCase() !== "i" &&
    str[i].toLowerCase() !== "o" &&
    str[i].toLowerCase() !== "u"
  )
    console.log(str[i]);
}

// imprimir cada palabra de un string -> pasar a while
console.log("Imprimir cada letra con While");
let strWhile = "Hola Koder";
let finWhile = strWhile.length;
let counter = 0;

while (counter < finWhile) {
  console.log(strWhile[counter]);

  counter++;
}

/**
 * 'Hola Koder'
 * -> 'redok aloh'
 * Imprimir el string invertido
 *
 *
 */
let auxStr = "";
counter = finWhile - 1;

while (counter >= 0) {
  auxStr += strWhile[counter].toLowerCase();
  counter--;
}

console.log(`${strWhile} -> ${auxStr}`);

/**
 * 'oaoe'
 * Imprimir en consola cada una de las vocales
 *
 */
let vowels = "aeiou";
counter = 0;
auxStr = "";

while (counter < finWhile) {
  if (vowels.includes(strWhile[counter].toLowerCase()))
    auxStr += strWhile[counter].toLowerCase();

  counter++;
}
console.log(`Vowels in string ${strWhile} -> ${auxStr}`);

/**
 * 'HlKdr'
 * Imprimir en consola cada una de las consonantes
 *
 */
strWhileWithoutSpaces = strWhile.replace(" ", "");
finWhile = strWhileWithoutSpaces.length;
counter = 0;
auxStr = "";

while (counter < finWhile) {
  if (!vowels.includes(strWhileWithoutSpaces[counter].toLowerCase()))
    auxStr += strWhileWithoutSpaces[counter].toLowerCase();

  counter++;
}
console.log(`Vowels in string ${strWhile} -> ${auxStr}`);

/**
 * Lo mismo pero con DO WHILE
 * 'Hola Koder'
 * -> 'redok aloh'
 * Imprimir el string invertido
 *
 *
 */

/**
 * 'oaoe'
 * Imprimir en consola cada una de las vocales
 *
 */

/**
 * 'HlKdr'
 * Imprimir en consola cada una de las consonantes
 *
 */
