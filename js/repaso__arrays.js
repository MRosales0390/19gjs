// -> jorge
const miFuncion = (name, lastName) => {
  // sentencias
  console.log(name);
};

const upperName = (name) => {
  // sentencias
  console.log(name.toUpperCase());
};

const pagarTarjeta = (cash, cuenta) => {};

const hacerCafe = (agua, cafe, cafetera, taza, azucar) => {
  agregarIngredientes(cafe, agua);
  encender(cafetera);
  servirCafe(taza);
  endulzarCafe(taza, azucar);
  mezclarCafe(taza);
};

const bañarse = (boiler, regadera, jabon, agua, toalla, sandalias) => {
  // sentencias
  if (verificarBoiler(boiler)) {
    colocarSandalias(sandalias);
    abrirRegadera(regadera);
    mojarCuerpo(agua);
    enjabonar(jabon);
    enjuagarse(agua);
    cerrarRegadera(regadera);
    secarme(toalla);
  }
};

// [2,3,4]
// obtener los pares

/**
 * recorrer cada numero del arrayDeNumeros
 * En cada recorrido
 * -> Verificar si el numero es par
 * -> si si, imprimirlo
 * -> sino, seguir
 * Terminar recorrido
 */

// recorrerArrayDeNumeros( numero) {

//     if(verificarSiesPar(numero)) {
//         imprimirEnConsola(numero)
//     }
// }

// JS

const obetenerPares = (arrayDeNumeros) => {
  arrayDeNumeros.forEach((numero, index, array) => {
    if (numero % 2 === 0) {
      console.log(` El numero ${numero} es par `);
    }
  });
};
