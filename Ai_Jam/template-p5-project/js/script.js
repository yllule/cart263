/**
Birb boudoir
Catherine Zaloshnja
*/

//notes to self :
//1- make it possible to drag a circle by touching thumb + index
//3- make ui/assets

//2- add different draggable items
//3- make it possible to change "settings" (ex:filters, colors) by pointing with index
//4- add states (tutorial/customization/confirm)


"use strict";

let video = undefined;
//handpose model
let handpose = undefined;
//current set of predictions
let predictions = [];

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


//list of accessories + draggable elements
let accessories = [
    'sunglasses',
    'glasses',
    'necklace',
    'tie',
    'bow',
    'scarf',
    'hat',
    'sprout',
    'box1',
    'box2',
    'box3',
    'box4',
    'box5',
    'box6',
    'box7',
    'box8',
    'box9'
]

//birb types to choose from
let birb = [
    'sparrow',
    'canary',
    'finch'
]
//keeps track of what the birb shown is
let currentBirb = 0;

//backgrounds to choose from
let birbBg = [
    'winter',
    'summer',
    'sunset'
]

//keeps track of what the current bg is
let currentBirbBg = 0;

//image frames to choose from
let frame = [
    'black',
    'brown',
    'pink'
]

//keeps track of the current frame chosen
let currentFrame = 0;

//ui assets
let box1Img;
let box2Img;
let box3Img;
let box4Img;
let box5Img;
let box6Img;
let box7Img;
let box8Img;
let box9Img;
let bgImg;
let confirmImg;
let birb1Img;
let birb2Img;
let birb3Img;
let birbBg1Img;
let birbBg2Img;
let birbBg3Img;
let frame1Img;
let frame2Img;
let frame3Img;



/**
Description of preload
*/
function preload() {

    bgImg = loadImage('assets/images/bg.png');
    confirmImg = loadImage('assets/images/confirm.png');
    box1Img = loadImage('assets/images/b1.png');
    box2Img = loadImage('assets/images/b2.png');
    box3Img = loadImage('assets/images/b3.png');
    box4Img = loadImage('assets/images/b4.png');
    box5Img = loadImage('assets/images/b5.png');
    box6Img = loadImage('assets/images/b6.png');
    box7Img = loadImage('assets/images/b7.png');
    box8Img = loadImage('assets/images/b8.png');
    box9Img = loadImage('assets/images/b9.png');
    birb1Img = loadImage('assets/images/bi1.png');
    birb2Img = loadImage('assets/images/bi2.png');
    birb3Img = loadImage('assets/images/bi3.png');
    birbBg1Img = loadImage('assets/images/bg1.png');
    birbBg2Img = loadImage('assets/images/bg2.png');
    birbBg3Img = loadImage('assets/images/bg3.png');
    frame1Img = loadImage('assets/images/f1.png');
    frame2Img = loadImage('assets/images/f2.png');
    frame3Img = loadImage('assets/images/f3.png');
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

    push();
    imageMode(CENTER);
    image(bgImg, width/2, height/2);
    image(confirmImg, 800, 950);
    pop();

    push();
    imageMode(CENTER);
    image(box1Img, 100, 825);
    image(box2Img, 200, 825);
    image(box3Img, 300, 825);
    image(box4Img, 400, 825);
    image(box5Img, 500, 825);
    image(box6Img, 600, 825);
    image(box7Img, 700, 825);
    image(box8Img, 800, 825);
    image(box9Img, 900, 825);
    pop();

    if(currentFrame === 0) {
        push();
        imageMode(CENTER);
        image(frame1Img, 510, 385);
        pop();
    }

    if (currentBirbBg === 0) {
        push();
        imageMode(CENTER);
        image(birbBg1Img, 510, 385);
        pop();
    }

    if (currentBirb === 0) {
        push();
        imageMode(CENTER);
        image(birb1Img, 545, 400);
        pop();
    }

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