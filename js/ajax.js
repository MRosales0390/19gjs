const ajaxXHR = (callback, url, method = "GET", obj = {}) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    method,
    `https://koders19gjs-default-rtdb.firebaseio.com${url}`,
    true
  );
  xhttp.onload = function (data) {
    if (data.target.status >= 200 && data.target.status <= 399) {
      let response = JSON.parse(data.target.response);
      callback(response);
    }
  };
  if (method === "GET" || method === "DELETE") {
    xhttp.send();
  } else {
    xhttp.send(JSON.stringify(obj));
  }
};

// destructuracion de objetos
let persona = {
  name: "jorge",
  age: 20,
  bootcamp: "js",
};

// let nombre = persona.name
// let edad = persona.age

let { name: nombre, age: edad, bootcamp } = persona;

console.log(persona);
console.log(nombre);
console.log(edad);
console.log(bootcamp);
