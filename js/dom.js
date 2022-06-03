// DOM

//  1. Selecionar por ID
document.getElementById("title");
// seleccionar por tagname
document.getElementsByTagName("h1")[0];
// seleccion por clase
document.getElementsByClassName("item");

// selecciona elementos por tag, class, id
// seleccionar la primer coincidencia
document.querySelector(".item");
document.querySelector("#title");
document.querySelector("h1");

// selecciona elementos por tag, class, id
// seleccionar todas las coincidencias
let todosLosMenus = document.querySelectorAll(".item");

// 2. Setear/agregar, obtener, comprobar atributos

// selecionar el elemento a cambiar
let titulo = document.querySelector(".title");
titulo.setAttribute("data-id", 100);

// element.getAttribute('')
let atrirbutoP = titulo.getAttribute("data-id");
console.log(atrirbutoP);

// comprobar si existe un atributo
titulo.hasAttribute("data-id");

// eliminar atributos
// element.removeAttribute(attrName)
// document.querySelector('.title').removeAttribute('id')
titulo.removeAttribute("id");

// document.createElement('ul')
// ulElement.appendChild(liFirst)w
// element.textContent = 'test'

/**
 * Ejercicio
 * 1. A nuestro elemento ul agregar clase 'lista' y id 'lista'
 * 2. Quitar a todos los elementos de la lista la clase item
 * 3. Todos los elementos de la lista, agregar la clase  'list__item'
 */
// 1
let lista = document.getElementsByTagName("ul");
console.log(lista);

lista[0].setAttribute("class", "lista");
lista[0].setAttribute("id", "lista");
console.log(lista);

//2
let items = document.querySelectorAll(".item");
console.log(items);

items.forEach((item) => {
  item.removeAttribute("class");
});
console.log(items);

//3
items.forEach((item) => {
  item.setAttribute("class", "list__item");
});
console.log(items);

/**
 * Ejercicio
 * 1. A nuestro elemento ul agregar clase 'lista' y id 'lista'
 * 2. Quitar a todos los elementos de la lista la clase item
 * 3. Todos los elementos de la lista, agregar la clase  'list__item'
 */

const listWrap = document.querySelector("ul");
const allOptions = document.querySelectorAll(".item");

// 1
listWrap.setAttribute("id", "lista");
listWrap.setAttribute("class", "lista");

// 2
allOptions.forEach((item) => {
  item.removeAttribute("class");
});

// 3
allOptions.forEach((item) => {
  item.setAttribute("class", "list__item");
});

/**
 * Crear elementos html
 */

// CREAR
/* 
    <ul>
        <li>item 1</li>
        <li>item 2</li>
    </ul> 
*/
// Paso a paso
// let listaDos = document.createElement('ul')
// let item1 = document.createElement('li')
// let body = document.querySelector('body')

// let item2 = document.createElement('li')

// item1.textContent = 'item 1'
// item2.textContent = 'item 2'

// listaDos.appendChild(item1 )
// listaDos.appendChild( item2)

// body.appendChild( listaDos )

// dinamica
const listaDos = document.createElement("ul");

for (i = 1; i <= 40; i++) {
  let item = document.createElement("li");
  item.textContent = `item ${i}`;
  listaDos.appendChild(item);
}

let parent = document.querySelector(".content");
// parent.appendChild( listaDos )

// AGREGAR texto a un elemento
// item1.textContent = 'item 1'

// AGREGAR dentro de otro elemento (al final)
// parentElement.appendChild( child )
// listaDos.appendChild(item1)
// document.querySelector('body').appendChild(listaDos)

// AGREGAR dentro de otro elemento (referenciado)
// parentNode.insertBefore(newNode, referenceNode);

let reference = document.querySelector(".subtitle2");
document.querySelector(".content").insertBefore(listaDos, reference);

/**
 * DOM
 * Como seleccionar elementos
 * Agregar / remover atributos
 * Crear Elementos
 * AGregar elementos al dOM
 */
