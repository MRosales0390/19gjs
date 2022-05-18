let koderExample = "Marco";
let concatenado = "Hola " + koderExample;
console.log(concatenado);

const AGE = 32;
console.log(`Tienes ${AGE + 5} años`);
/*
let nombreKoder = prompt("Dame tu nombre", "Marco");
if (nombreKoder === null) {
  console.log("Nombre vacío");
} else {
  console.log(nombreKoder);
}
*/

let ageKoder = prompt("Dame tu edad", 30);
console.log(ageKoder);
let newAgeKoder = parseInt(ageKoder);
console.log(newAgeKoder);

//pedir al usuario los grados celsius en su localidad
//convertir °C a °F

let gradosLocalidadKoder = prompt("Dame los °C de tu localidad", 15);
console.log(gradosLocalidadKoder);
let gradosLocalidadKoderInt = parseInt(gradosLocalidadKoder);
let gradosCelsiusAFarenheit = gradosLocalidadKoderInt * (9 / 5) + 32;
console.log(gradosCelsiusAFarenheit, "°F");
