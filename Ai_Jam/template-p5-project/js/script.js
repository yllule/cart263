/**
Rock Paper Scissors
Catherine Zaloshnja

Play rock paper scissors with the computer
*/

//notes to self :
//1-make it recognize all the hand poses (rock, paper, scissors) add easter eggs like gun + heart?
//2-make the comp choose btw rock paper scissors randomly
//3-make game outcome (win/lose/tie/play again (if no hand pose is detected?))
//4-make game visuals (click to start, countdown to 3 then reveal poses, game outcome)


"use strict";

let video = undefined;
//handpose model
let handpose = undefined;
//current set of predictions
let predictions = [];

//temporary img
let clownImg;


/**
Description of preload
*/
function preload() {
    clownImg = loadImage('assets/images/clown.png');

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
        let baseX = base[0];
        let baseY = base[1];
        image(clownImg, tipX, tipY);
        image(clownImg, baseX, baseY);
    }

}