/**
Duck customization (hard mode)
Catherine Zaloshnja
*/

//notes to self :
//1- make it possible to drag a circle by touching thumb + index
//2- add different draggable items
//3- make it possible to change "settings" (ex:filters, colors) by pointing with index
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

let cursor = {
    x: undefined,
    y: undefined
}

let test = {
    x: undefined,
    y: undefined
}


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

    test.x = 500;
    test.y = 500;
}


/**
Description of draw()
*/
function draw() {
    background(255);

    if (predictions.length > 0) {
        let hand = predictions[0];
        let index = hand.annotations.indexFinger;
        let indexTip = index[3];
        let indexTipX = indexTip[0];
        let indexTipY = indexTip[1];
        let thumb = hand.annotations.thumb;
        let thumbTip = thumb[3];
        let thumbTipX = thumbTip[0];
        let thumbTipY = thumbTip[1];
        let d = dist(indexTipX, indexTipY, thumbTipX, thumbTipY);
        cursor.x = indexTipX;
        cursor.y = indexTipY;
        if (d < 25) {
            test.x = indexTipX;
            test.y = indexTipY;
        }
        push();
        noStroke();
        fill(255, 0, 0);
        circle(cursor.x, cursor.y, 50);
        pop();

        fill(0, 0, 255);
        circle(thumbTipX, thumbTipY, 50);
    }


    fill(0);
    circle(test.x, test.y, 200);

}