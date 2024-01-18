/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(500, 500);

}


/**
Description of draw()
*/
function draw() {
    background(0);

    let config = {
        x: 250,
        y: 250,
        width: 200,
        height: 200,
        fillColor: {
            r: 255,
            g: 255,
            b: 0
        },
        mode: CENTER
    };

    drawFancyRect(config);

}

function drawFancyRect( { x, y, width, height, fillColor, mode }) {
    push();
    fill(fillColor.r, fillColor.g, fillColor.b);
    rectMode(mode);
    rect(x, y, width, height);
    pop();
}