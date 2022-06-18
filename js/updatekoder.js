// Update Koder
console.log("SU codigo para Actualizar un koder aquí");
// Obtener id
let idKoder = window.location.search.substring(10);
// TRaer informacion de ese koder
/*
const xhttp = new XMLHttpRequest();
xhttp.open(
  "GET",
  `https://koder19g-default-rtdb.firebaseio.com/koders/${idKoder}.json`,
  true
);
xhttp.onload = function (data) {
  if (data.target.status >= 200 && data.target.status <= 399) {
    let response = JSON.parse(data.target.response);
    if (response) {
      let { name, age, biography, bootcamp } = response;
      // pintar esa informacion en el formulario
      document.querySelector("#nombre").value = name;
      document.querySelector("#edad").value = age;
      document.querySelector("#bootcamp").value = bootcamp;
      document.querySelector("#biografia").value = biography;
    } else {
      alert("Usuario no existente");
    }
  }
};
xhttp.send();*/

fetch(`https://koder19g-default-rtdb.firebaseio.com/koders/${idKoder}.json`, {
  method: "GET",
  headers: { "Content-type": "application/json;charset=UTF-8" },
})
  .then((response) => {
    return response.json();
  })
  .then((koder) => {
    console.log(koder);
    let { name, age, biography, bootcamp } = koder;
    // pintar esa informacion en el formulario
    document.querySelector("#nombre").value = name;
    document.querySelector("#edad").value = age;
    document.querySelector("#bootcamp").value = bootcamp;
    document.querySelector("#biografia").value = biography;
  })
  .catch((err) => alert("Usuario no existe"));

let btnActualizar = document.getElementById("updateKoder");
btnActualizar.addEventListener("click", () => {
  // obtener la data
  let name = document.getElementById("nombre").value;
  let age = document.getElementById("edad").value;
  let biography = document.getElementById("biografia").value;
  let bootcamp = document.getElementById("bootcamp").value;

  // validar la data
  if (name === "" || age === "" || biography === "" || bootcamp === "") {
    alert("Campos vacios");
  } else {
    // formar el nuevo koder
    let newKoder = {
      name: name,
      age: age,
      biography: biography,
      bootcamp: bootcamp,
    };

    console.log(newKoder);

    // hacer el envio
    /*const httpXHR = new XMLHttpRequest();
    httpXHR.onload = (response) => {
      if (response.target.status >= 200 && response.target.status <= 399) {
        let responseFirebase = JSON.parse(response.target.response);
        console.log(responseFirebase);
        alert(`Koder actualizado correctamente. `);
      }
    };
    httpXHR.open(
      "PATCH",
      `https://koder19g-default-rtdb.firebaseio.com/koders/${idKoder}.json`,
      true
    );

    // enviar
    // texto plano con NOtación de JSON
    // console.log(JSON.stringify(newKoder))
    httpXHR.send(JSON.stringify(newKoder));*/
    fetch(
      `https://koder19g-default-rtdb.firebaseio.com/koders/${idKoder}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(newKoder),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((finalResponse) => {
        console.log(finalResponse);
        alert("Se ha actualizado el koder correctamente.");
      });
  }
});

/**
 * Eliminar koder
 */

let btnEliminar = document.getElementById("deleteKoder");
btnEliminar.addEventListener("click", () => {
  // hacer el envio
  /* const httpXHR = new XMLHttpRequest();
  httpXHR.onload = (response) => {
    console.log(response);
    if (response.target.status >= 200 && response.target.status <= 399) {
      let responseFirebase = JSON.parse(response.target.response);
      console.log(responseFirebase);
      alert(`Koder eliminado exitosamente. `);
    }
  };
  httpXHR.open(
    "DELETE",
    `https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`,
    true
  );
  httpXHR.send();*/

  //let idKoder = "-N4e434aFia41K6ZYzts";
  fetch(`https://koder19g-default-rtdb.firebaseio.com/koders/${idKoder}.json`, {
    method: "DELETE",
  })
    .then((response) => {
      // comprobamos que el estatus de la respuesta es falso
      if (!response.ok) {
        // si si, lanzamos un error con un mensaje
        let err = new Error(
          `Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`
        );
        throw err;
      } else {
        // sino, retornamos la respuesta al siguiente then
        return response.json();
      }
    })
    .then((response) => {
      console.log(response);

      window.location.pathname = "./index.html";
    })
    .catch((err) => {
      console.log(err);
    });
});
