/**
 * Escribir una funcion, Que dado una array de numeros y strings,
 * retorne un array con solo los que son de tipo string
 * filterArray([1, 2, "a", "b"])
 * -> ["a", "b"]
 *
 * Implementar soluciones con
 * .forEach()
 * .filter()
 * .reduce()
 *
 */
let itemsArray = [1, 2, "a", "b"];

/** forEach */
const filterArrayWithForEach = (array) => {
  let items = [];

  array.forEach((item) => {
    if (typeof item === "string") items.push(item);
  });

  return items;
};
console.log(`filterArrayWithForEach: ${filterArrayWithForEach(itemsArray)}`);

/** Filter */
const filterArrayWithFilter = (array) => {
  return array.filter((currentItem) => {
    if (typeof currentItem === "string") return true;
    else return false;
  });
};
console.log(`filterArrayWithFilter: ${filterArrayWithFilter(itemsArray)}`);

/** Reduce */
const filterArrayWithReduce = (array) => {
  return array.reduce((items, currentItem) => {
    if (typeof currentItem === "string") {
      items.push(currentItem);
    }

    return items;
  }, []);
};
console.log(`filterArrayWithReduce: ${filterArrayWithReduce(itemsArray)}`);
