// Métodos de string
// Funciones
// str.nombreMetodo(p1, p2, pN)
// prompt(mensaje, defaultValue)
// .toUpperCase()
// .toLowerCase()
// .substring(start, end)
// .slice(start, end)
// .includes(searchElement, fromIndex)
/*
const p =
  "El ágil zorro café salta sobre el perro perezoso. Sí el perro reaccionó, realmente es perezoso?";

console.log(p.split("."));
//Cadena dividida por punto

console.log(p.split(" "));
//Cadena dividia por espacio

console.log("Cadena original:\n", p);

let pos = 5;
let char = p.charAt(pos);
console.log(`El caracter ${char} está en la posición ${pos}`);

//startsWith
let testValue = "El agil";
console.log(
  `El siguiente texto "${p}" \n${
    p.startsWith(testValue) ? "Sí" : "No"
  } empieza con "${testValue}"`
);

//indexOf()
let lookupValue = "tortuga";
console.log(
  `La palabra ${lookupValue} ${
    p.includes(lookupValue) ? "sí" : "no"
  } se encuentra en el texto.`
);*/

/**
 * 'Hola koders'
 * Cuántas vocales existen
 */

let testString = "Hola kodEers";
console.log(
  `Existen ${
    testString.match(/[aeiouAEIOU]/g).length
  } vocales en la cadena ${testString}`
);

/**
 * 'Hola koders'
 * Cuántos caracteres son
 */
console.log(`La cadena ${testString} tiene ${testString.length} caracteres`);

/**
 * 'Hola koders'
 * Cortar el string en 2 strings
 * -> "hola" "koders"
 */
console.log(testString.split(" "));

/**
 * 'Hola Koders'
 * Reemplazar todas las Vocales por *
 * -> "h*l* k*d*rs"
 */
console.log(testString.replace(/[aeiouAEIOU]/g, "*"));
