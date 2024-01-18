/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const NUM_CIRCLES = 10;
let circleAlpha = 50;
let circleSizeIncrease = 50;

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

    circleAlpha = map(mouseX, 0, width, 10, 100);
    circleSizeIncrease = map(mouseY, 0, height, 10, 100);

    for (let i = 0; i < NUM_CIRCLES; i++) {
        push();
        fill(255, circleAlpha);
        ellipse(width/2, height/2, i * circleSizeIncrease);
        pop();
    }

}