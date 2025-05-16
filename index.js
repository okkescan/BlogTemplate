var imageDiv = document.getElementById('image');
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');
var title = document.getElementById('title');
var comment = document.getElementById('comment');


var count = 0;
var images = ['/img/forest.jpg', '/img/duck.jpg', '/img/mountain.jpg', '/img/penguin.jpg'];
var titles = ["FOREST", "DUCK", "MOUNTAIN", "PENGUIN"];
var comments = ["The peaceful forest was filled with birdsong, tall trees, and soft rays of sunlight.", "A small duck floated gently across the quiet lake, leaving ripples in its peaceful wake."
    , "Snow-covered mountains stood tall against the sky, offering breathtaking views and a sense of wonder.", "The penguin waddled across the icy landscape, flapping its wings and calling to its curious friends."
];

function backgr() {
    imageDiv.style.backgroundImage = `url(${images[count]})`
}
function nextImage() {
    if (count < images.length - 1) {
        count++;
        backgr();
        changeTitle();
        changeComment();
    }
}
function prevImage() {
    if (count > 0) {
        count--;
        backgr();
        changeTitle();
        changeComment();
    }
}

function changeTitle() {
    title.innerText = `${titles[count]}`;
    title.classList.remove('visible');

    setTimeout(() => {
        title.classList.add('visible');
    }, 500);
}
function changeComment() {
    comment.innerText = `${comments[count]}`
    comment.classList.remove('visible');

    setTimeout(() => {
        comment.classList.add('visible');
    }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.getElementById('menuButton');
    var links = document.getElementById('links');

    function sidebar() {
        if (!links.classList.contains("open")) {
            links.classList.toggle("open");
            console.log("Aktif");

        } else {
            links.classList.remove("open");
            console.log("Aktif değil");

        }
    }
    menuButton.addEventListener("click", sidebar);


});




prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);
backgr();
changeTitle();
changeComment();


