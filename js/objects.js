/**
 *
 * Estudiar el tema de Objetos
 * https://www.programiz.com/javascript/object
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
 * https://www.freecodecamp.org/espanol/news/javascript-crear-objecto-como-definir-objetos-en-js/
 * https://www.w3schools.com/js/js_objects.asp
 *
 */
let koderObj = {
  firstName: "marco",
  lastName: "rosales",
  age: 32,
  gender: "male",
  nationality: "mexican",
  birthDate: "1990-03-02",
  bootcamp_data: {
    generation: 19,
    skill: "js",
    profile: "fullstack developer",
    schedule_days: "mon - fri",
    schedule_time: "19:00 - 22:00",
    isActive: true,
  },
};

const getIntroductionMessage = (koder) => {
  let message = `
      Hola! mi nombre es ${koder.firstName} ${koder.lastName}. 
      Actualmente tengo ${koder.age} años y soy alumno de la generación 
      número ${koder.bootcamp_data.generation} del bootcamp 
      de ${koder.bootcamp_data.skill}, del cual saldremos con un 
      perfil ${koder.bootcamp_data.profile}`;

  return message;
};

console.log(getIntroductionMessage(koderObj));

let newKoderObject = {};

newKoderObject.firstName = "marco";
newKoderObject.lastName = "rosales";
newKoderObject.age = 32;
newKoderObject.gender = "male";
newKoderObject.nationality = "mexican";
newKoderObject.birthDate = "1990-03-02";
newKoderObject.bootcamp_data = {
  generation: 19,
  skill: "js",
  profile: "fullstack developer",
  schedule_days: "mon - fri",
  schedule_time: "19:00 - 22:00",
  isActive: true,
};

newKoderObject.bootcamp_data.score = 90;

console.log(newKoderObject);

let newKoderObject2 = {};

newKoderObject2["firstName"] = "marco";
newKoderObject2["lastName"] = "rosales";
newKoderObject2["age"] = 32;
newKoderObject2["gender"] = "male";
newKoderObject2["nationality"] = "mexican";
newKoderObject2["birthDate"] = "1990-03-02";
newKoderObject2["bootcamp_data"] = {};
newKoderObject2["bootcamp_data"]["generation"] = 19;
newKoderObject2["bootcamp_data"]["skill"] = "js";
newKoderObject2["bootcamp_data"]["profile"] = "fullstack developer";
newKoderObject2["bootcamp_data"]["schedule_days"] = "mon - fri";
newKoderObject2["bootcamp_data"]["schedule_time"] = "19:00 - 22:00";
newKoderObject2["bootcamp_data"]["isActive"] = true;

console.log(newKoderObject2);

let objSalarios = {
  lenny: "30000",
  Ernesto: "20000",
  jorge: "20000",
  Kike: "25000",
};

/**
 * Ejercicio 1:
 * Calcular el total de salarios
 * -> 95000
 */
//const getTotal = (salaryObject) => {
let total = 0;
for (item in objSalarios) {
  total += parseInt(objSalarios[item]);
}
//return total;
//};

console.log(`Salario total = ${total}`);
/**
 * Ejercicio 2:
 * Pasar el ejercicio 1 a función flecha
 * Debe recibir 1 parametro
 * Objeto de salarios
 */
const getTotal = (salaryObject) => {
  let total = 0;
  for (item in salaryObject) {
    total += parseInt(salaryObject[item]);
  }
  return total;
};

console.log(`Salario total con función = ${getTotal(objSalarios)}`);
/**
 * Ejercicio 3:
 * Escribir una funcion que reciba un parametro
 * Verificar si el parametro es un objeto
 * o si es un array
 * p.ej.
 * ·> isAnObjectOrArray( [1,2,3] )
 * -> 'Es un array'
 * ·> isAnObjectOrArray( {key:'value'} )
 * -> 'Es un Objeto'
 * ·> isAnObjectOrArray( 'Hola mundo' )
 * -> 'No es un array ni un objeto'
 *
 *
 * @params {Object}, [Array] ,'string' - Estructura que se quiere validar
 * @return 'String' - mensaje de respuesta
 *
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 *
 */
let arrayEx = [1, 2, 3];
let string = "";
const isAnObjectOrArray = (element) => {
  if (Array.isArray(element)) {
    return `Es un array`;
  } else if (typeof element === "object") {
    return `Es un objeto`;
  } else {
    return `No es un array ni un objeto`;
  }
};

console.log(isAnObjectOrArray(objSalarios), objSalarios);
console.log(isAnObjectOrArray(arrayEx), arrayEx);
console.log(isAnObjectOrArray(string), string);

//CRUD

// Create
let objectCar = {
  model: "jetta",
  doors: 4,
  year: 2022,
  cilindraje: 2,
  color: "rojo",
};

// Read
console.log(objectCar.model);

//Update
objectCar.color = "verde";

//Delete
console.log(objectCar);
delete objectCar.cilindraje;
console.log(objectCar);
