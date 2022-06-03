/**
 * Ejercicio 1
 * <ul id="menu" class="menu">
        <li class="item__menu">Home</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */
let itemsArray = ["Home", "Products", "About Us"];

let unorderedList = document.createElement("ul");
unorderedList.setAttribute("id", "menu");
unorderedList.setAttribute("class", "menu");

itemsArray.forEach((item) => {
  let itemList = document.createElement("li");

  itemList.textContent = item;
  itemList.setAttribute("class", "item__menu");
  unorderedList.appendChild(itemList);
});
document.querySelector(".content").appendChild(unorderedList);

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

let kodersUl = document.createElement("ul");
kodersUl.setAttribute("class", "koders");

koders.forEach((item) => {
  let koder = document.createElement("li");

  koder.textContent = `${item.name} ${item.lastName}`;
  koder.setAttribute("class", "item__koder");
  kodersUl.appendChild(koder);
});
document.querySelector(".koder-section").appendChild(kodersUl);

/**
 * Opcional
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
let kodersTable = document.createElement("table");
let nameHeader = document.createElement("th");
let ageHeader = document.createElement("th");
let generationHeader = document.createElement("th");
let modulesHeader = document.createElement("th");
let row = document.createElement("tr");

nameHeader.textContent = "Nombre completo";
ageHeader.textContent = "Edad";
generationHeader.textContent = "Generación";
modulesHeader.textContent = "Módulos cursados";

row.appendChild(nameHeader);
row.appendChild(ageHeader);
row.appendChild(generationHeader);
row.appendChild(modulesHeader);
kodersTable.appendChild(row);

koders.forEach((item) => {
  let koderRow = document.createElement("tr");
  let nameColumn = document.createElement("td");
  let ageColumn = document.createElement("td");
  let generationColumn = document.createElement("td");
  let modulesColumn = document.createElement("td");

  nameColumn.textContent = `${item.name} ${item.lastName}`;
  ageColumn.textContent = `${item.age}`;
  generationColumn.textContent = `${item.generation}`;
  modulesColumn.textContent = `${item.modulos
    .reduce((modules, currentModule) => (modules += `${currentModule}, `), "")
    .slice(0, -2)}`;

  koderRow.appendChild(nameColumn);
  koderRow.appendChild(ageColumn);
  koderRow.appendChild(generationColumn);
  koderRow.appendChild(modulesColumn);

  kodersTable.appendChild(koderRow);
});
document.querySelector(".koder-section").appendChild(kodersTable);
