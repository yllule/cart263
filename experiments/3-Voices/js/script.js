/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const speechRecognizer = new p5.SpeechRec();
let currentSpeech = '?';


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

    speechRecognizer.onResult = handleSpeechInput;
    speechRecognizer.start();

}


/**
Description of draw()
*/
function draw() {
    background(227, 100, 174);

    textAlign(CENTER, CENTER);
    text(currentSpeech, width/2, height/2);
}

function handleSpeechInput() {
    currentSpeech = speechRecognizer.resultString;
}