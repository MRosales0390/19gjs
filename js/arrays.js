// Métodos de array
// .forEach()
// .map()
// .filter()
// .reduce()
// .find()

// let array = [1, 2, 3, 4];

// array.forEach((currentValue, index, returnArray) => {

// })

/**
 * Escribir una funcion
 * Reciba como parametro Un array de ciudades
 * Retornar las ciudades capitaslizadas
 * capitalize(['méxicO','RIo', 'Los AngelEs'])
 * -> ['México','Rio', 'Los Angeles']
 *
 */
let arrCities = ["méxicO", "RIo de janeiro", "Los AngelEs"];

const capitalize = (strArray) => {
  let newArray = [];

  strArray.forEach((currentValue) => {
    let innerArray = currentValue.split(" ");

    if (innerArray.length > 1) {
      let newConcatStr = "";

      innerArray.forEach((currentValue) => {
        newConcatStr += `${currentValue[0].toUpperCase()}${currentValue
          .slice(1)
          .toLowerCase()} `;
      });

      newArray.push(newConcatStr.trim());
    } else {
      newArray.push(
        `${currentValue[0].toUpperCase()}${currentValue.slice(1).toLowerCase()}`
      );
    }
  });

  return newArray;
};

console.log(capitalize(arrCities));

/**
 * .map()
 * [1,2,3,4]
 * -> [2,4,6,8]
 */

let mapArr = [1, 2, 3, 4];
let doubleArr = mapArr.map((cv, index, array) => {
  let transformado = cv * 2;

  return transformado;
});

console.log(mapArr);
console.log(doubleArr);

const capitalizeMap = (array) => {
  //   let capCities = array.map((city) => {
  //     let innerCitiesArray = city.split(" ");
  //     return `${city[0].toUpperCase()}${city.slice(1).toLowerCase()}`;
  //   });

  //   return capCities;
  return array.map((city) => {
    return `${city[0].toUpperCase()}${city.slice(1).toLowerCase()}`;
  });
};

console.log(capitalizeMap(arrCities));

let arrStr = ["hola", "mundo"];

/**
 * Funcion
 * getFirstLast(arrStr)
 * output -> ["ha", "mo"]
 * .map()
 */

const getFirstLast = (wordList) => {
  return wordList.map((word) => {
    return `${word.slice(0, 1)}${word.slice(-1)}`;
  });
};

console.log(getFirstLast(arrStr));
