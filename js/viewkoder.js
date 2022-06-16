// url
// http://127.0.0.1:5500/interior.html?koderkey=-N4TJNibKM9OvZbWSB_R

// window.location.search
// "?koderkey=-N4TJNibKM9OvZbWSB_R"
//

let idKoder = window.location.search.substring(10);
console.log(idKoder);

// Hacer una peticion al server

// crear conexion
const xhttp = new XMLHttpRequest();
xhttp.open(
  "GET",
  `https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`,
  true
);
xhttp.onload = function (data) {
  if (data.target.status >= 200 && data.target.status <= 399) {
    let response = JSON.parse(data.target.response);
    let { name, age, biography, bootcamp } = response;

    let template = `
            <div class="col-12 col-sm-4 ">
                <div class="card shadow rounded">
                    <div class="card-body">
                        <h4 class="card-title">${name} </h4>
                        <p class="card-text"><b>${age} años</b></p>
                        <p class="card-text">${biography}</p>
                        <p class="card-text">Bootcamp: ${bootcamp}</p>
                    </div>
                </div>
            </div>
        `;
    document.querySelector(".wrap__koder").innerHTML = template;
  }
};
xhttp.send();

// cuando el response este listo
// pintar la informacion del koder en un card
