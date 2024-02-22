/**
Birb boudoir
Catherine Zaloshnja
*/

//notes to self :
//1- make it possible to drag a circle by touching thumb + index
//2- add different draggable items
//3- make it possible to change "settings" (ex:filters, colors) by pointing with index
//3- make ui/assets
//4- add states (tutorial/customization/confirm)

//asset list
//-5 bg images (simple)
//-base birb body
//-4 different birb colorings
//-3 hats
//-2 bows
//-2 scarfs
//-2 necklace
//-3 shoes
//-2 glasses
//-5 frames/deco (simple)


"use strict";

let video = undefined;
//handpose model
let handpose = undefined;
//current set of predictions
let predictions = [];

//temporary img
// let scissorsImg;

let cursor = {
    x: undefined,
    y: undefined,
    size: 50
};

let test = {
    x: undefined,
    y: undefined,
    size: 200
};

//an array to store all the draggable items   
let items = [
]


/**
Description of preload
*/
function preload() {
    // scissorsImg = loadImage('assets/images/scissors.png');

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

    test.x = 200;
    test.y = 200;
}


/**
Description of draw()
*/
function draw() {
    background(100);

    fill(0);
    circle(test.x, test.y, test.size);

    if (predictions.length > 0) {
        let hand = predictions[0];
        //variables for the index finger
        let index = hand.annotations.indexFinger;
        let indexTip = index[3];
        let indexTipX = indexTip[0];
        let indexTipY = indexTip[1];
        //variables for the thumb
        let thumb = hand.annotations.thumb;
        let thumbTip = thumb[3];
        let thumbTipX = thumbTip[0];
        let thumbTipY = thumbTip[1];
        //distance btw index and thumb and distance between thumb and object
        //(used to check if the thumb and index are touching over the object)
        let d = dist(indexTipX, indexTipY, thumbTipX, thumbTipY);
        let d2 = dist(cursor.x, cursor.y, test.x, test.y);

        //setting the coordinates of the index cursor
        cursor.x = indexTipX;
        cursor.y = indexTipY;
        
        if (d < 25 && d2 < cursor.size + test.size/2) {
            console.log('touching tips');
            test.x = indexTipX;
            test.y = indexTipY;
        }
        push();
        noStroke();
        fill(255, 0, 0);
        circle(cursor.x, cursor.y, cursor.size);
        pop();

        fill(0, 0, 255);
        circle(thumbTipX, thumbTipY, 50);
    }

}