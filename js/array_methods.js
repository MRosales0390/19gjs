// [1,2,3].filter(callback)
let newArr = [10, 20, 30, 41];

// -> [10,20,30]

let soloPares = newArr.filter((currentValue, index, copiaArrOriginal) => {
  // condicion
  if (currentValue % 2 === 0) {
    // console.log(index, currentValue)
    return currentValue;
  }
});

console.log(soloPares);

let arrMultiple = [1, 2, 4, "México", "Perú", "España", 3];
/**
 * Escribir una funcion que
 * Filtrar solo las ciudades
 * filterCities( [1,2,4, 'México', 'Perú', 'España', 3] )
 * -> ['México', 'Perú', 'España']
 *  .filter()
 *  .forEach()
 */

let soloPaises = arrMultiple.filter((value) => {
  if (typeof value === "string") {
    return value;
  }
});

console.log(soloPaises);
let soloPaisesArr = [];

arrMultiple.forEach((value) => {
  if (typeof value === "string") {
    soloPaisesArr.push(value);
  }
});

console.log(soloPaisesArr);
