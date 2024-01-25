/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const speechSynthesizer = new p5.Speech();

let showSubtitle = false;


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

    //synthesis settings
    console.log(speechSynthesizer.listVoices());
    speechSynthesizer.setPitch(1);
    speechSynthesizer.setRate(1);
    speechSynthesizer.setVoice('Whisper');

    speechSynthesizer.onStart = speechStarted;
    speechSynthesizer.onEnd = speechEnded;

}


/**
Description of draw()
*/
function draw() {
    background(227, 200, 174);

    if (showSubtitle) {
        textSize(36);
        text('hello world!', 100, 100);
    }

}

function mousePressed() {
    speechSynthesizer.speak('hello world!');
}

function speechStarted() {
    showSubtitle = true;
}

function speechEnded() {
    showSubtitle = false;
}