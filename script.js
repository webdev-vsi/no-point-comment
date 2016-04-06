var parrent = document.querySelector('.comments');
var kittyDiv = document.createElement("div");
    kittyDiv.style.textAlign="center";
var kittyImg = document.createElement("img");
    kittyImg.setAttribute("src", "http://placekitten.com/200/300");


document.querySelector('#comments-placeholder').style.display = 'none';
parrent.appendChild(kittyDiv).appendChild(kittyImg);
