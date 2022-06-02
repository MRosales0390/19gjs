/**
 *
 * Estudiar el tema de Objetos
 * https://www.programiz.com/javascript/object
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
 * https://www.freecodecamp.org/espanol/news/javascript-crear-objecto-como-definir-objetos-en-js/
 * https://www.w3schools.com/js/js_objects.asp
 *
 */
//CRUD
/*
// Create
let objectCar = {
  model: "jetta",
  doors: 4,
  year: 2022,
  cilindraje: 2,
  color: "rojo",
};

let arrKeys = [];
for (propiedad in objectCar) {
  arrKeys.push(propiedad);
}
console.log(arrKeys);

// Object.keys(obj)
let llaves = Object.keys(objectCar);
console.log(llaves);

// Read
console.log(objectCar.model);

//Update
objectCar.color = "verde";

//Delete
console.log(objectCar);
delete objectCar.cilindraje;
console.log(objectCar);

let employees = {
  Jorge: 1000,
  Carlos: 2000,
  Manuel: 3000,
};

//let totalEmpleados = employees.keys().
*/
/**
 * Ejercicio 1.
 * Realizar una funcion que tome como parametro un objeto
 * y devuelva un array de arrays con la siguiente estructura
 * [ [key, value], [key, value] ]
 * makePairs( { a: 1, b: 2 } )
 * => [ ['a', 1], ['b', 2]]
 *
 *
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * Se tiene que realizar 2 soluciones,
 * 1 con Object.entries() y
 *  Otra con .map()
 */
let pairs = { a: 1, b: 2 };
// solución con .entries()
const makePairs = (object) => {
  let pairsArray;
  if (object) pairsArray = Object.entries(object);

  return pairsArray;
};

console.log("makePairs -> ", makePairs(pairs));

// solución con .map()
const makePairsMap = (object) => {
  if (object) {
    let keys = Object.keys(object);
    //let values = Object.values(object);

    //return keys.map((key, index) => [key, values[index]]);
    return keys.map((key, index) => [key, object[key]]);
  }
};

console.log("makePairsMap -> ", makePairsMap(pairs));
/**
 * Dado un objeto de salarios
 * Crear una funcion que retorne una lista
 * con los salarios ordenados de menor a mayor
 * orderSalary( salarios)
 * -> [4000, 5000, 7000]
 */
let salarios = {
  juan: 7000,
  Albert: 4000,
  jorge: 5000,
};

const orderSalary = (object) => {
  if (object) {
    return Object.values(object).sort();
    /* return Object.values(object).sort((a, b) => {
      return a - b;
    });*/
  }
};

console.log("Ordered Salaries -> ", orderSalary(salarios));
