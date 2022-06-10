// Ajax
// Asyncronic JavaScaript And XML
// XMLHttpRequest

/**
    Holds the status of the XMLHttpRequest.
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
 */

// formar request
// enviar request
// esperar respuesta
// recibir response
// procesar el response

// Create an XMLHttpRequest object
const primerPeticion = new XMLHttpRequest();

let users = [];

// Define a callback function
primerPeticion.onload = (response) => {
  // Here you can use the Data
  console.log("REspuesta lista");
  console.log(response.target);

  if (response.target.status >= 200 && response.target.status <= 299) {
    // la respuesta fue satisfactoria
    if (response.target.responseText != "") {
      console.log(response.target.responseText);
      // JSON
      // metodos
      // .parse( text - Object )
      // .stringify( obj - text)

      let responseJSON = JSON.parse(response.target.responseText);
      users = responseJSON;
    }
    //printUsers(users);
  }
};

// Send a request
// GET, POST, DELETE, PATCH, PUT
primerPeticion.open("GET", "https://jsonplaceholder.typicode.com/users", false);
// console.log(primerPeticion)
primerPeticion.send();
// console.log(primerPeticion)

/**
 * Ejercicio 2
 * Generar una funcion que reciba como parametro un string
 * y filtre solo los objetos que
 * tengan en el name, username o email dicho string
 * .filter()
 * .forEach()
 */

const filterUsers = (usersArray, strToFilter) => {
  let lowerCaseTerm = strToFilter ? strToFilter.toLowerCase() : "";

  let usersList = document.getElementById("lista__users");

  usersList.innerHTML = createGroupItemTemplate(
    usersArray.filter((user) => {
      return (
        user.name.toLowerCase().includes(lowerCaseTerm) ||
        user.email.toLowerCase().includes(lowerCaseTerm) ||
        user.username.toLowerCase().includes(lowerCaseTerm)
      );
    })
  );
};

const createGroupItemTemplate = (usersArray) => {
  let template = "";

  if (usersArray) {
    usersArray.forEach((user, index) => {
      template += `
          <a href="#" class="list-group-item list-group-item-action" aria-current="true">
              <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">${user.name}</h5>
              <small>${index + 1} days ago</small>
              </div>
              <p class="mb-1">${user.email}</p>
              <small>${user.phone}</small>
          </a>
        `;
    });
  }

  return template;
};

let searchBox = document.getElementById("filter__user");
searchBox.addEventListener("keyup", () => filterUsers(users, searchBox.value));
