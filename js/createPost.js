const createPostOnFirebase = (postObject) => {
  const xhttp = new XMLHttpRequest();

  xhttp.open(
    "POST",
    "https://koder19g-default-rtdb.firebaseio.com/posts/.json",
    true
  );
  xhttp.onload = function (data) {
    if (data.target.status >= 200 && data.target.status <= 299) {
      console.log(data);
    }
  };

  xhttp.send(JSON.stringify(postObject));
};

const createPost = () => {
  let title = document.getElementById("titleInput").value;
  let body = document.getElementById("bodyInput").value;
  let date = document.getElementById("dateInput").value;

  const post = {
    title: title,
    body: body,
    date: date,
  };

  //console.log(post);

  createPostOnFirebase(post);

  document.getElementById("postForm").reset();
  alert("Se ha creado el post correctamente");
};

document.getElementById("createBtn").addEventListener("click", createPost);
