const getAllPosts = (fillPostsSection = 0) => {
  const xmlHttpRequestObj = new XMLHttpRequest();
  let posts = [];

  xmlHttpRequestObj.onload = (response) => {
    // Here you can use the Data
    if (response.target.status >= 200 && response.target.status <= 299) {
      // la respuesta fue satisfactoria
      if (response.target.responseText != "") {
        let responseJSON = JSON.parse(response.target.responseText);
        posts = responseJSON;

        if (fillPostsSection === 1) createGroupItemTemplate(posts);
      }
    }
  };

  xmlHttpRequestObj.open(
    "GET",
    //"https://jsonplaceholder.typicode.com/posts",
    "https://koder19g-default-rtdb.firebaseio.com/posts/.json",
    true
  );

  xmlHttpRequestObj.send();

  return posts;
};

const createGroupItemTemplate = (postsArray) => {
  let template = "";
  console.log("Create", typeof postsArray);
  if (postsArray) {
    let counter = 1;
    for (post in postsArray) {
      template += `
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading${counter}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${counter}" aria-expanded="true" aria-controls="collapse${counter}">
                ${postsArray[post].title}
                </button>
            </h2>
            <div id="collapse${counter}" class="accordion-collapse collapse" aria-labelledby="heading${counter}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${postsArray[post].body}
                </div>
                <small class="text-muted"> ${postsArray[post].date.replaceAll(
                  '"',
                  ""
                )}</small>
            </div>
        </div>
        `;

      counter++;
    }
  }

  document.querySelector("#posts__group").innerHTML = template;
};

/** Post Creation */
const createPosts = (postToCreate) => {
  const xhrCreate = new XMLHttpRequest();

  xhrCreate.open(
    "POST",
    "https://koder19g-default-rtdb.firebaseio.com/posts/.json",
    true
  );

  xhrCreate.onload = function (response) {
    if (response.target.status >= 200 && response.target.status <= 399) {
    }
  };

  xhrCreate.send(JSON.stringify(postToCreate));
};

const populatePosts = () => {
  let posts = getAllPosts();

  for (post in posts) {
    let newPost = {
      title: `"${posts[post].title}"`,
      body: `"${posts[post].body}"`,
      date: `"06/01/2022"`,
    };

    createPosts(newPost);
  }
};

//populatePosts();
document.querySelector("#load__posts").addEventListener("click", () => {
  getAllPosts(1);
});
