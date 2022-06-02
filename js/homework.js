/*
// Object Creation 
let newSealedObject = {
  name: "Marco",
  age: 32,
};

let newNonSealedObject = {
  name: "Marco",
  age: 32,
};

// Object.is( firstValue, secondValue )
console.log(
  "Are newNonSealedObject and newSealedObject equal?",
  Object.is(newNonSealedObject, newSealedObject)
);

console.log("Are 0 and 0 equal?", Object.is(0, 0));

// Object.seal( obj )
// Object seal 
Object.seal(newSealedObject);

// Object.isSealed 
console.log(`Is newSealedObject sealed? ${Object.isSealed(newSealedObject)}`);
console.log(
  `Is newNonSealedObject sealed? ${Object.isSealed(newNonSealedObject)}`
);

console.log("newSealedObject", newSealedObject);
console.log("newNonSealedObject", newNonSealedObject);

// Object extension 
newSealedObject.gender = "Male"; //Sealed object silently denies object extension
newNonSealedObject.gender = "Male"; //Unsealed object allows object extension

console.log("newSealedObject", newSealedObject);
console.log("newNonSealedObject", newNonSealedObject);

newSealedObject.age = 33; //Sealed object allows property value modification
newNonSealedObject.age = 33; //Unsealed object allows property value modification

console.log("newSealedObject", newSealedObject);
console.log("newNonSealedObject", newNonSealedObject);

// Freeze
// Object Creation 
let newFrozenObject = {
  name: "Marco",
  age: 32,
};

let newNonFrozenObject = {
  name: "Marco",
  age: 32,
};

Object.freeze(newFrozenObject);

// Object.isFrozen 
console.log(`Is newFrozenObject frozen? ${Object.isFrozen(newFrozenObject)}`);
console.log(
  `Is newNonFrozenObject frozen? ${Object.isFrozen(newNonFrozenObject)}`
);

console.log("newFrozenObject", newFrozenObject);
console.log("newNonFrozenObject", newNonFrozenObject);

// Object extension 
newFrozenObject.gender = "Male"; //Frozen object silently denies object extension
newNonFrozenObject.gender = "Male"; //Unfrozen object allows object extension

console.log("newFrozenObject", newFrozenObject);
console.log("newNonFrozenObject", newNonFrozenObject);

newFrozenObject.age = 33; //Sealed object allows property value modification
newNonFrozenObject.age = 33; //Unfrozen object allows property value modification

console.log("newFrozenObject", newFrozenObject);
console.log("newNonFrozenObject", newNonFrozenObject);
*/

/**
 * Dado un array de objetos koders
 * Imprimir en consola, todos los nombres de cada koder
 *
 * 'jorge luis Camarillo tiene 30 años y es de la generacion 6'
 * 'Erik Gutierrez tiene 30 años y es de la generacion 16'
 * ....
 *
 */

let koders = [
  {
    name: "jorge luis",
    lastName: "Camarillo",
    age: 30,
    generation: 6,
    modulos: ["js", "node js", "cloud"],
  },
  {
    name: "Erik",
    lastName: "Gutierrez",
    age: 20,
    generation: 15,
    modulos: ["js"],
  },
  {
    name: "Sara",
    lastName: "Reveles",
    age: 24,
    generation: 12,
    modulos: ["js"],
  },
];

const printKodersName = (kodersArray) => {
  if (kodersArray) {
    kodersArray.forEach((object) =>
      console.log(
        `${object.name} ${object.lastName} tiene ${object.age} años y es de la generación ${object.generation}`
      )
    );
  }
  return;
};

printKodersName(koders);

/**
 * Del mismo array de koders
 * Obtener la suma de todas las edades
 *
 */
const printAgesSum = (kodersArray) => {
  if (kodersArray) {
    return kodersArray.reduce((total, koder) => {
      return (total += koder["age"]);
    }, 0);
  }
  return;
};

console.log(`printAgesSum(koders) -> ${printAgesSum(koders)}`);
/**
 * Del objeto library
 * 1. Obtener el numero de libros que se estan leyendo
 * 2. Obtener una lista de todos los autores
 * 3. Obtener una lista de todos los Libros
 *
 */
let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// 1
const getBooksRead = (booksArray) => {
  if (booksArray) {
    //return booksArray
    //  .filter((book) => book.readingStatus === true)
    //  .reduce((booksRead) => (booksRead += 1), 0);

    return booksArray.filter((book) => book.readingStatus).length;
  }
};
console.log(`Número de libros leídos -> ${getBooksRead(library)}`);

// 2
const getAuthorsList = (booksArray) => {
  if (booksArray) {
    return booksArray.reduce((authors, currentBook) => {
      if (authors.indexOf(currentBook["author"]) === -1)
        authors.push(currentBook.author);

      return authors;
    }, []);
  }
};
console.log(`Lista de autores -> ${getAuthorsList(library)}`);

// 3
const getBooksList = (booksArray) => {
  if (booksArray) {
    return booksArray.reduce((books, currentBook) => {
      if (books.indexOf(currentBook.title) === -1)
        books.push(currentBook["title"]);

      return books;
    }, []);
  }
};
console.log(`Lista de autores -> ${getBooksList(library)}`);
