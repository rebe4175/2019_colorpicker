"use strict";

// 🎁 Here you go! 🎁

window.addEventListener("DOMContentLoaded", init);


let pixelIndex;

const ctx = document.getElementById("imageCanvas").getContext("2d");
const canvas = document.getElementById("imageCanvas");

const w = ctx.canvas.width;
const h = ctx.canvas.height;

let imageData = [];

const MAX_MOVEMENT = 10;


function init() {

    console.log("hello");

    imageLoaded();

}

function imageLoaded() {


    let img = new Image();

    img.onload = function () {

        //draws the new image

        ctx.drawImage(img, 0, 0);
        //gets the image data from canvas
        imageData = ctx.getImageData(0, 0, w, h);
    };

    img.src = "cat.jpg";
    //applies eventlistener "mousemove", when the mouse moves on the canvas
    canvas.addEventListener("mousemove", registerMouseMoving);
}

function registerMouseMoving(){

    let x = event.offsetX;
    let y = event.offsetY;

    console.log(`X${x}, y${y}`);

    drawRectangle(x, y);
  

}


function drawRectangle(x, y) {

    //draws the rectangle around the mouse, and puts in imagedata
    //stroke is x, y, w, h 
    //substract with 5 to get the mousepointer at the center

    ctx.putImageData(imageData, 0, 0);
    ctx.strokeRect(x - 5, y - 5, 10, 10);
    ctx.strokeStyle = "red";
  
    //sends parameters to getPixelInfo


    let ratioX = (x / w)*2-1;
    let ratioY = (y / h)*2-1;

    console.log("X", ratioX);
    console.log("Y", ratioY);

    document.querySelector("#ratioX").textContent = ratioX;
    document.querySelector("#ratioY").textContent = ratioY;

    let displacementX = ratioX * MAX_MOVEMENT;
    let displacementY = ratioY * MAX_MOVEMENT;

    console.log("PLACEMENT", displacementX, displacementY);

    
    ctx.putImageData(imageData, 0, 0);
    ctx.strokeRect(displacementX + MAX_MOVEMENT, displacementY + MAX_MOVEMENT, w - MAX_MOVEMENT * 2, h - MAX_MOVEMENT * 2);

    ctx.strokeRect(displacementX + MAX_MOVEMENT, displacementY + MAX_MOVEMENT, w - MAX_MOVEMENT * 2, h - MAX_MOVEMENT * 2);
    ctx.strokeRect(x - 5, y - 5, 10, 10);



    ctx.strokeStyle = "red";
    
}