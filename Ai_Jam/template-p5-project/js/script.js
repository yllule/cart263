/**
Character customization
Catherine Zaloshnja
*/

//notes to self :
//1-make it possible to drag a circle by touching thumb + index
//2- add different draggable items
//3- make ui/assets
//4- add states (tutorial/customization/confirm)


"use strict";

let video = undefined;
//handpose model
let handpose = undefined;
//current set of predictions
let predictions = [];

//temporary img
let scissorsImg;


/**
Description of preload
*/
function preload() {
    scissorsImg = loadImage('assets/images/scissors.png');

}


/**
Description of setup
*/
function setup() {
    createCanvas(1000,1000);

    //access the user's webcam
    video = createCapture(VIDEO);
    video.hide();

    //load the handpose model
    handpose = ml5.handpose(video, {
        flipHorizontal: true
    }, function () {
        console.log('Model loaded');
    });

    //listen for predictions
    handpose.on(`predict`, function (results) {
        console.log(results);
        predictions = results;
    })
}


/**
Description of draw()
*/
function draw() {
    background(0);

    if (predictions.length > 0) {
        let hand = predictions[0];
        let index = hand.annotations.indexFinger;
        let tip = index[3];
        let base = index[0];
        let tipX = tip[0];
        let tipY = tip[1];
        // let baseX = base[0];
        // let baseY = base[1];
        image(scissorsImg, tipX, tipY, 200, 200);
    }

}