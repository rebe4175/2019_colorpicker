"use strict";

// 🎁 Here you go! 🎁
function showColorInfo( rgb ) {

    document.querySelector("#r").textContent = rgb.r;
    document.querySelector("#g").textContent = rgb.g;
    document.querySelector("#b").textContent = rgb.b;

    const hex = "#"+rgb.r.toString(16).padStart(2,"0")
                   +rgb.g.toString(16).padStart(2,"0")
                   +rgb.b.toString(16).padStart(2,"0");

    document.querySelector("#hex").textContent = hex;

    document.querySelector("#colorbox").style.backgroundColor = hex;
}