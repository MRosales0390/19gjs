// .forEach( (currentValue, currentIndex, array) => {} )
// .map(     (currentValue, currentIndex, array) => {} )
// .filter(  (currentValue, currentIndex, array) => {} )

// .reduce( (previousValue, currentValue, currentIndex, array) => {}, initialValue)
// Estudiar Objetos

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

// console.log(soloPares)

let arrMultiple = [1, 2, 4, "México", "Perú", "España", 3];
/**
 * Escribir una funcion que
 * Filtrar solo las ciudades
 * filterCities( [1,2,4, 'México', 'Perú', 'España', 3] )
 * -> ['México', 'Perú', 'España']
 *  .filter()
 *  .forEach()
 */

const filterCities = (arrRandom) => {
  let onlycities = [];
  onlycities = arrRandom.filter((element) => {
    // condicion
    if (typeof element === "string") {
      return element;
    }
  });

  return onlycities;
};

const filterCitiesReduced = (arrRandom) => {
  let onlycities = arrRandom.filter((element) => {
    typeof element === "string" ? element : null;
  });
  return onlycities;
};

const filterCitiesMostReduced = (arrRandom) => {
  return arrRandom.filter((element) => {
    return typeof element === "string";
  });
};

// invoke
// filterCities( [1,2,4, 'México', 'Perú', 'España', 3] )
// filterCitiesReduced( [1,2,4, 'México', 'Perú', 'España', 3] )
// filterCitiesMostReduced( [1,2,4, 'México', 'Perú', 'España', 3] )

let arrTwoDimensions = [
  [1, 2, 4, 5],
  [3, 4],
];

let newArray = [];
arrTwoDimensions.forEach((arrInterior) => {
  console.log(arrInterior);
  let newArrInterior = arrInterior.map((cv) => {
    console.log(cv);
    return cv * 2;
  });
  newArray.push(newArrInterior);
});

console.log(newArray);

"string".toLowerCase().slice(2);

let nombres = ["jorge", "ana", "ivan", "sergio", "oscar"];
// filtrar .filter()
// capitalizar .map() .forEach()
let filtrados = nombres
  .filter((nombre, index, arr) => {
    if (
      nombre.charAt(0) === "a" ||
      nombre.charAt(0) === "e" ||
      nombre.charAt(0) === "i" ||
      nombre.charAt(0) === "o" ||
      nombre.charAt(0) === "u"
    ) {
      return nombre;
    }
  })
  .map((nameFiltered) => {
    let firstletter = nameFiltered.charAt(0).toUpperCase();
    let restName = nameFiltered.substring(1).toLowerCase();

    return firstletter + restName;
  })
  .reverse()
  .join("/");

console.log(filtrados);
