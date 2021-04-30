var rover_height = 100, rover_width = 90, roverX = 10, roverY = 10;
ctx = document.getElementById("myCanvas").getContext("2d");

roverIMG = "rover.png"
marsIMG = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']

imgMars = Math.floor(Math.random() * 7)

function add() {
    BGimg = new Image();
    BGimg.onload = uploadBG;
    BGimg.src = marsIMG[imgMars];

    rovrimg = new Image();
    rovrimg.onload = uploadRVR;
    rovrimg.src = roverIMG;
}

function uploadBG() {
    ctx.drawImage(BGimg, 0, 0, 800, 600)
}

function uploadRVR() {
    ctx.drawImage(rovrimg, roverX, roverY, rover_width, rover_height);
}

window.addEventListener("keydown", keypress)

function keypress(e) {
    var keypressed = e.keyCode
    if (keypressed == '37') {
        left();
        console.log(`left`);
    }
    if (keypressed == '38') {
        up();
        console.log(`up`);
    }
    if (keypressed == '39') {
        right();
        console.log(`right`);
    }
    if (keypressed == '40') {
        down();
        console.log(`down`);
    }
}

function up() {
    if (roverY >= 0) {
        roverY = roverY - 10
        uploadBG();
        uploadRVR();
    }
    else {
        window.alert("Y is 0 already!")
        console.log("Y is 0 already!")
    }
}

function down() {
    if (roverY <= 500) {
        roverY = roverY + 10

        uploadBG();
        uploadRVR();
    }
    else {
        window.alert("Y is 500 already!")
        console.log("Y is 500 already!")
    }
}

function left() {
    if (roverX >= 0) {
        roverX = roverX - 10
        uploadBG();
        uploadRVR();
    }
    else {
        window.alert("X is 0 already!")
        console.log("X is 0 already!")
    }
}

function right() {
    if (roverX <= 700) {
        roverX = roverX + 10
        uploadBG();
        uploadRVR();
    }
    else {
        window.alert("X is 700 already!")
        console.log("X is 700 already!")
    }
}

/* function rotater() {
    roverIMG.rotate(90*Math.PI/180);
} */