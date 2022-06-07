/**
 * Ejercicio 1
 * 
    <ul id="menu" class="menu">
        <li class="item__menu">Inicio</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */

const tarea1 = () => {
  const contenedor = document.querySelector(".ejerciciouno");
  contenedor.innerHTML = `<ul class="lista" id="lista"></ul>`;
  // const lista = document.createElement('ul')
  // lista.setAttribute('id', 'lista')
  // // setear clases
  // // mediante atirbutos
  // lista.setAttribute('class', 'lista lista3')
  // // mediante metodos add/remove
  // lista.classList.add('lista2')
  // lista.classList.remove('lista2')
  // contenedor.appendChild(lista)

  let menus = ["Home", "Products", "About Us"];

  let listItems = "";
  menus.forEach((menu) => {
    listItems += ` <li class="item__menu">${menu}</li>`;
  });

  console.log(listItems);
  document.querySelector(".lista").innerHTML = listItems;
};

/**
 * Dado un arreglo de koders
 * 1. Generar una lista con la clase koders
 * 2. Agregar a cada koder en esa lista
 * 3. A todos los koders agregarles la clase 'item koder'
 */

let koders = [
  {
    name: "jorge luis",
    lastName: "Camarillo",
    age: 30,
    generation: 6,
    modulos: ["js", "node js", "cloud"],
  },
  {
    name: "Erik",
    lastName: "Gutierrez",
    age: 20,
    generation: 15,
    modulos: ["Node"],
  },
  {
    name: "Sara",
    lastName: "Reveles",
    age: 24,
    generation: 12,
    modulos: ["js"],
  },
];

/**
 * Ejercicio 3
 * Del mismo arreglo de koders
 * 1. Generar una tabla de koders con las columnas
 *   - Nombre completo
 *   - Edad
 *   - Generación
 *
 *   Opcional -Modulos cursados
 *
 * Referencia: https://slack-files.com/TCRFJBKB6-F03J4CBCBA7-8b1c39e7bc
 *
 */

const tarea3 = () => {
  console.log("Ejecutando tarea 3");
  let tbody = document.querySelector("tbody");
  koders.forEach((koder, index, arr) => {
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    tdName.textContent = koder.name;
    tr.appendChild(tdName);
    let tdAge = document.createElement("td");
    tdAge.textContent = koder.age;
    tr.appendChild(tdAge);
    let tdGen = document.createElement("td");
    tdGen.textContent = koder.generation;
    tr.appendChild(tdGen);
    console.log(tr);
    tbody.appendChild(tr);
  });
};

/**
 * Tareas
 * 1. Optimizar todos los ejericios con innerHTML
 * 2. Resolver el siguiente ejercicio
 */

/**
 * Ejercicio
 * Dado un array de álbumes
 * Imprimir en un grid de cards con los álbumes
 * Cada card debe tener
 * Id, Titulo e imagen del album
 *
 * Referencia
 * https://getbootstrap.com/docs/5.2/components/card/#grid-cards
 */

const albumes = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
  },
  {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f",
  },
  {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97",
  },
  {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14",
  },
];

const buildCards = (albumList) => {
  const container = document.querySelector(".cardCollection");
  container.innerHTML = `<div class="row row-cols-1 row-cols-md-2 g-4 cardContainer"></div>`;

  let cardList = "";

  albumList.forEach((album) => {
    cardList += `
    <div class="col">
        <div class="card">
        <img src="${album.url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${album.id}</h5>
            <p class="card-text">${album.title}</p>
        </div>
        </div>
    </div>
  `;
  });

  document.querySelector(".cardContainer").innerHTML = cardList;
};

const tarea2 = () => {
  buildCards(albumes);
};
/**
 * Tarea
 * Estudiar el tema JavaScript HTML DOM EventListener
 * https://www.w3schools.com/js/js_htmldom_eventlistener.asp
 * https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
 * https://www.freecodecamp.org/news/javascript-addeventlistener-example-code/
 */
