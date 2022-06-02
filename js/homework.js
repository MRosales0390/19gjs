// Ejercicio
/**
 * Del siguiente objeto
 * Realizar una función que
 * 1. Calcule el numero de empleados
 * 2. Obtenga el total a pagar
 * employesAndTotal( { 'Albert': 50000, 'jorge': 50000 })
 * -> Son 3 empleados y el total es 100000
 */

let salarios = {
  juan: 30000,
  Albert: 50000,
  jorge: 50000,
};

const employesAndTotal = (obj) => {
  let totals = {
    employeesNumber: 0,
    totalSalary: 0,
  };

  for (employee in obj) {
    let currentKey = employee;
    let employees = obj;

    totals.employeesNumber += 1;
    totals.totalSalary += obj[employee];
  }

  return totals;
};

let totals = employesAndTotal(salarios);

console.log(
  `Son ${totals.employeesNumber} y el total es ${totals.totalSalary}`
);

/**
 * Ejercicio 2.
 * Dado un objeto inicial, hacer los siguientes puntos
 *
 * 1. Agregar el lenguaje 'Go' a la lista de lenguajes
 * 2. Cambiar el nivel a 4
 * 3. Eliminar la propiedad avatar
 * 4. Agregar una nueva propiedad de edad y poner el valor de 30
 * 5. Imprimir en consola todos los lenguajes dominados
 * 6. Clonar el objeto en uno nuevo
 * 7. Imprimir en consola el nuevo objeto
 *
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

let koder = {
  languages: ["JavaScript", "Python", "Ruby"],
  isMentor: true,
  level: 3,
  avatar: "https://picsum.photos/200/300",
};
console.log(koder);

//1
koder["languages"].push("Go");
//2
koder.level = 4;
//3
delete koder.avatar;
//4
koder.age = 30;
//5
console.log(`Lenguajes dominados: ${koder.languages}`);
//6
let clonedKoderObject = Object.assign({}, koder);
//7
console.log("clonedKoderObject", clonedKoderObject);

console.log("Original object: ", koder);

/**
 * Estudiar los metodos de objetos
 * https://www.w3schools.com/js/js_object_methods.asp
 * https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript
 * https://www.programiz.com/javascript/library/object/assign
 *
 */

// is
let firstObject = window;
let secondObject = window;

console.log(
  `${firstObject} es igual a ${secondObject} = ${Object.is(
    firstObject,
    secondObject
  )}`
);

// seal
let newObject = {
  name: "Marco",
  age: 32,
};

let newSealedObject = Object.seal(newObject);

console.log(newObject === newSealedObject);

newSealedObject.lastName = "Rosales";
console.log(newSealedObject);
console.log(`newObject is sealed: ${Object.isSealed(newObject)}`);
console.log(`newSealedObject is sealed: ${Object.isSealed(newSealedObject)}`);
