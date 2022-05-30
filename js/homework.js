// Ejercicios Obligatorios

/**
 * Dado el sigueinte arreglo de ciudades
 *   ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']
 * Generar una funcion que capitalize cada elemento del array
 * => Se puede resolver con .forEach() o .map()
 */
let cities = ["méXicO", "PErÚ", "eSpAña", "inGlaterrA"];

const capitilize = (cities) => {
  return cities.map((city) => {
    return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  });
};

console.log(
  `Arreglo original: ${cities}; \nNuevo arreglo: ${capitilize(cities)}`
);
/**
 * Dado un arreglo con nombres de personas,
 * Funcion que devuele un arreglo con los nombres de las personas que empiezan con vocales y además capitalizados
 *
 * onlyNamesVowels( ['jorge','ana','ivan','sergio','oscar' ] )
 * -> ['Ana','Ivan','Oscar']
 *
 * => Se puede resolver con .forEach() o .filter()
 */
let namesList = ["jorge", "ana", "ivan", "sergio", "oscar"];

const onlyNamesVowels = (names) => {
  let vowels = "aeiou";
  let capitalizedNamesList = [];

  capitalizedNamesList = names
    .filter((name) => {
      if (vowels.includes(name.charAt(0).toLowerCase())) {
        return true;
      } else return false;
    })
    .map((name) => {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });

  return capitalizedNamesList;
};

console.log(onlyNamesVowels(namesList));

/**
 *
 * Dado una arreglo compuesto por arreglos,
 * crea una funcion que calcule la suma de los arreglos
 *
 * additionMultiArr(  [	[1,2,3] , [1,3,2] , [3,2,1] ] )
 * -> 18
 */
let numbersMultiArray = [
  [1, 2, 3],
  [1, 3, 2],
  [3, 2, 1],
];

const additionMultiArr = (arregloDeArreglos) => {
  let counter = 0;
  arregloDeArreglos.forEach((arreglo) => {
    arreglo.forEach((numero) => {
      counter += numero;
    });
  });

  return counter;
};

console.log(additionMultiArr(numbersMultiArray));

/**
 *
 * Estudiar el  metodo reduce
 * https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce
 * https://dataquarium.io/little-bits-reduce/
 * https://www.programiz.com/javascript/library/array/reduce
 */

/**
 *
 * Estudiar el tema de Objetos
 * https://www.programiz.com/javascript/object
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
 * https://www.freecodecamp.org/espanol/news/javascript-crear-objecto-como-definir-objetos-en-js/
 * https://www.w3schools.com/js/js_objects.asp
 *
 */

// Ejercicios opcionales

/**
* 
  En un array con pedidos de un restaurant
  la estructura por cada pedido es:
  ['entrada','principal','postre','precio'],

  let pedidos = [
      ['ensalada de pepinos','paella','platano', 100'],
      ['ensalada de tomates','pescado','helado', 120],
      ['ensalada simple','paella','yogurt', 80],
      ['ensalada simple','enchiladas','yogurt', 80],
      ['ensalada cesar','salmón','platano', 100],
  ]

  Crear: 

  Funcion que devuelve el total de pedidos que tienen como plato principal "paella"
  => Se puede resolver con .forEach() o .filter()

  Funcion que devuelve los pedidos que tienen como postre "platano" o "helado" 
  => Se puede resolver con .forEach() o .filter()

  Funcion que devuelve los pedidos que tienen un precio superior a 90 
  => Se puede resolver con .forEach() o .filter()
  
*/

let pedidos = [
  ["ensalada de pepinos", "paella", "platano", 100],
  ["ensalada de tomates", "pescado", "helado", 120],
  ["ensalada simple", "paella", "yogurt", 80],
  ["ensalada simple", "enchiladas", "yogurt", 80],
  ["ensalada cesar", "salmón", "platano", 100],
];

const ordersFilter = (orders, filterField, filterValue) => {
  return orders.filter((order) => {
    if (filterField === "mainCourse" && order[1] === filterValue) return true;
    else if (filterField === "desert" && filterValue.includes(order[2]))
      return true;
    else if (filterField === "price" && order[3] > filterValue) return true;
    else return false;
  });
};

console.log(ordersFilter(pedidos, "mainCourse", "paella"));
console.log(ordersFilter(pedidos, "desert", "platano|helado"));
console.log(ordersFilter(pedidos, "price", "90"));

let ingredientes = ["chile", "jitomate", "cebolla", "ajo"];

const asar = (ingrediente) => {
  return ingrediente + "Asado";
};
ingredientes.map(asar);
//-> [chileCocido, jitomateCocido, cebollaCocida, ajoCocido]
