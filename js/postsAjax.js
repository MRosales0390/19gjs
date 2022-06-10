const xmlHttpRequestObj = new XMLHttpRequest();
let posts = [];

xmlHttpRequestObj.onload = (response) => {
  // Here you can use the Data
  if (response.target.status >= 200 && response.target.status <= 299) {
    // la respuesta fue satisfactoria
    if (response.target.responseText != "") {
      let responseJSON = JSON.parse(response.target.responseText);
      posts = responseJSON;

      console.log(posts);
    }
    //printUsers(users);
  }
};

// Send a request
// GET, POST, DELETE, PATCH, PUT
xmlHttpRequestObj.open(
  "GET",
  "https://jsonplaceholder.typicode.com/posts",
  false
);
// console.log(primerPeticion)
xmlHttpRequestObj.send();

const createGroupItemTemplate = (postsArray) => {
  let template = "";

  if (postsArray) {
    postsArray.forEach((post) => {
      template += `
        <div class="col-12 col-sm-6 col-md-4 mb-4">
            <div class="card h-100">
                <img src="https://via.placeholder.com/150x100" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                    <p class="card-text"><small class="text-muted">${post.id}</small></p>
                </div>
            </div>
        </div>
        `;
    });
  }

  document.querySelector("#posts__group").innerHTML = template;
};

document.addEventListener("DOMContentLoaded", () =>
  createGroupItemTemplate(posts)
);
