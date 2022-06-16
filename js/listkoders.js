// Listar todos los koders
console.log("SU codigo para ver todos los koders");

// crear conexion
const xhttp = new XMLHttpRequest();
xhttp.open(
  "GET",
  `https://koders19gjs-default-rtdb.firebaseio.com/koders/.json`,
  true
);
xhttp.onload = function (data) {
  if (data.target.status >= 200 && data.target.status <= 399) {
    let koders = JSON.parse(data.target.response);
    let template = "";
    for (key in koders) {
      console.log(koders[key]);
      let { bootcamp, name, age, biography } = koders[key];

      // console.log(name, age, biography, bootcamp)
      template += `
          <div class="col-12 col-sm-4 col-md-3 mb-4 ">
              <div class="card shadow rounded">
                <div class="card-body p-4">
                    <h4 class="card-title"> ${name}  </h4>
                    <p class="card-text">Edad: ${age} años</p>
                    <p class="card-text">${biography.slice(0, 30)}...</p>
                    <a href="/interior.html?koderkey=${key}" class="btn btn-link ps-0">Ver koder</a>
                    <a href="/updatekoder.html?koderkey=${key}" class="btn btn-link">Editar</a>
                </div>
              </div>
          </div>
        `;
    }

    document.querySelector(".all__posts").innerHTML = template;
  }
};
xhttp.send();
