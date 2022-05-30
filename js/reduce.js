let nombres = ["jorge", "luis", "camarillo", "cristobal"];

// let iniciales = nombres.reduce((acc, cv, index, array) => {
//   return acc + cv.slice(0, 1);
// }, "");

// console.log(iniciales);

let iniciales = nombres.reduce((acc, cv, index, array) => {
  return (acc += cv.charAt(0));
}, "");

console.log(iniciales);

//const getInitialLettersSmall = nombres.reduces()
let numbers = [8, 14, 18];
const getDoubleNumbers = (arr) => {
  let doubleNumbersArr = [];
  doubleNumbersArr = arr.reduce((acc, elemento) => {
    //console.log(acc, elemento);
    acc.push(elemento * 2);

    return acc;
  }, []);

  return doubleNumbersArr;
};

console.log(getDoubleNumbers([8, 14, 18]));

/**
 * Función
 * getAverage([1,2,3,4])
 * -> 2.5
 *   */

const getAverage = (arr) => {
  //     let promedio = 0;

  //   promedio = arr.reduce((acc, cv) => {
  //     return acc + cv;
  //   }, 0);

  //   return promedio / arr.length;

  /** Smaller */
  //   return (
  //     arr.reduce((acc, cv) => {
  //       return acc + cv;
  //     }, 0) / arr.length
  //   );

  /**Smallest */
  return arr.reduce((acc, cv) => acc + cv, 0) / arr.length;
};

console.log(getAverage([1, 2, 3, 4]));

const hacerJugo = (cajafrutas) => {
  let jugo = "";
  cajafrutas.forEach((fruta) => {
    jugo = jugo + fruta;
  });
  return jugo;
};

// let frutas = ['naranja','naranja', 'naranja']
// let recipiente = hacerJugo(frutas)
// console.log(recipiente)

// reduce
// .map( callback)
// .foreach( callback)
// .filter( callback)

// .reduce(callback, initialValue)

// let frutas = ['naranja','naranja', 'naranja']

// frutas.forEach( (fruta, index, arr ) => {

// }, '')
let numeros = [1, 2, 3];
let totalSuma = numeros.reduce((total, cv, index, arr) => {
  return (total += cv);
}, 100);
console.log(totalSuma);

let frutas = ["naranja", "naranja", "zanahoria"];
let vaso = frutas.reduce((recipiente, fruta, index, arr) => {
  return recipiente + fruta;
}, "");
console.log(vaso);

/**
 * funcion con .reduce()
 * getInitialLetters( ['jorge','luis', 'camarillo', 'cristobal'] )
 * -> 'jlcc'
 */

const getInitialLetters = (arr) => {
  let onlyInitialLetters = "";
  onlyInitialLetters = arr.reduce(
    (previousValue, currentValue, currentIndex, array) => {
      return (previousValue += currentValue.charAt(0));
    },
    ""
  );
  return onlyInitialLetters;
};

const getInitialLettersSmall = (arr) =>
  arr.reduce((acc, cv) => (acc += cv.charAt(0)), "");

// let arrow = () =>{

//     return  [].map( () => {
//         return algo
//     })

// }

// let arrowSmall = () => 1 + 5
