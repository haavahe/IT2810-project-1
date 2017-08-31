var gImages = ["images/31efa5e14ba4472113b861c77a779147.jpg",
    "images/d48488fdfa843c615c88607674f30223.jpg",
    "images/download.jpg",
    "images/pannekakebilde.jpg",
    "images/download1.jpg",
    "images/img_8146.jpg",
    "images/large.jpg",
    "images/lg.png"],
    gImageIndex = Math.floor(Math.random() * (gImages.length - 1)); // Randomized first image.

// Initializes the img
var img = document.createElement("img");
img.setAttribute("id", "image");
document.getElementById("image-surround").appendChild(img);
set_image(gImageIndex);


function prev_image() {
    if ((gImageIndex - 1) >= 0) {
        set_image(--gImageIndex);
    } else {
        gImageIndex = gImages.length - 1;
        set_image(gImageIndex);
    }
}

function next_image() {
    if ((gImageIndex + 1) < gImages.length) {
        set_image(++gImageIndex);
    } else {
        gImageIndex = 0;
        set_image(gImageIndex);
    }
}

function set_image(pImageIndex) {
    document.getElementById("image").src = gImages[pImageIndex];
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        prev_image(); // left arrow.
    } else if (e.keyCode == '39') {
        next_image(); // right arrow.
    }
}
