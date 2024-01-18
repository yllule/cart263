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

    for (let i = 0; i < 10; i++) {
        push();
        fill(255,50);
        ellipse(width/2, height/2, i * 50);
        pop();
    }

}