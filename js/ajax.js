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

/** POST */
const createUser = (objectUser) => {
  const xhttp = new XMLHttpRequest();

  xhttp.open(
    "POST",
    "https://koder19g-default-rtdb.firebaseio.com/users/.json",
    true
  );
  xhttp.onload = function (data) {
    if (data.target.status >= 200 && data.target.status <= 299) {
      console.log(data);
    }
  };

  xhttp.send(JSON.stringify(objectUser));
};

let user = {
  name: "Lucky",
  lastName: "Rosales",
  age: 8,
};

//createUser(user);
/** PATCH */
const updateUser = (userToUpdate) => {
  const updateXHR = new XMLHttpRequest();
  updateXHR.open(
    "PATCH",
    "https://koder19g-default-rtdb.firebaseio.com/users/-N4AJrnAGxHp5JKmMg6a.json",
    true
  );

  updateXHR.onload = (response) => {
    if (response.target.status >= 200 && response.target.status <= 299) {
    }
  };
  updateXHR.send(JSON.stringify(userToUpdate));
};

let updatedUser = {
  name: "Marco Antonio",
};

//updateUser(updatedUser);

/** PUT */
const updateUserPUT = (userToUpdate) => {
  const updateXHR = new XMLHttpRequest();

  updateXHR.open(
    "PUT",
    "https://koder19g-default-rtdb.firebaseio.com/users/-N4AJrnAGxHp5JKmMg6a.json",
    true
  );

  updateXHR.onload = (response) => {
    if (response.target.status >= 200 && response.target.status <= 299) {
      console.log(response.target.response);
    }
  };

  updateXHR.send(JSON.stringify(userToUpdate));
};

let updatedUserPUT = {
  name: "Marco Antonio",
  lastName: "Rosales Contreras",
  age: 32,
};

//updateUserPUT(updatedUserPUT);

/** DELETE */
const deleteUser = (idUser) => {
  const deletexhr = new XMLHttpRequest();
  deletexhr.open(
    "DELETE",
    `https://koder19g-default-rtdb.firebaseio.com/users/${idUser}.json`,
    true
  );
  deletexhr.onload = (response) => {
    if (response.target.status >= 200 && response.target.status <= 399) {
      console.log(response.target);
      console.log(response.target.response);
    }
  };
  deletexhr.send();
};

//deleteUser("-N4AGjt5C671BcB1NQO_");

const getUsers = (callback) => {
  const getxhr = new XMLHttpRequest();

  getxhr.open(
    "GET",
    "https://koder19g-default-rtdb.firebaseio.com/users/.json",
    true
  );

  getxhr.onload = (response) => {
    if (response.target.status >= 200 && response.target.status <= 399) {
      let users = JSON.parse(response.target.response);

      callback(users);
    }
  };
  getxhr.send();
};

const printUsers = (users) => {
  for (user in users) {
    //console.log(users);

    console.log(users[user].name);
  }
};

getUsers(printUsers);
