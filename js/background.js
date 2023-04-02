const images = [
    "randbg1.png",
    "randbg3.png",
    "randbg2.png",
    "randbg4.jpg",
    "randbg5.jpg"
];

// const chosenImage = images[Math.floor(Math.random()*images.length)];

// const image = new Image();
// image.src = `img/${chosenImage}`
// image.classList.add("bgImage");
// body.appendChild(image);

// document.body.style.background = `url(${chosenImage}) no-repeat right top`;

const randomImg = document.querySelector("#rand-img");
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

randomImg.appendChild(bgImage); // add HTML to <body></body>\

const Image = document.querySelector("img");

Image.classList.add("rand-img");