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
