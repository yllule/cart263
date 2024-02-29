/**
Birb boudoir
Catherine Zaloshnja
*/

//notes to self :
//1- make it possible to drag a circle by touching thumb + index
//3- make ui/assets
//3- make it possible to change "settings" (ex:filters, colors) by pointing with index

//2- add different draggable items
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
    size: 25
};

let test = {
    x: undefined,
    y: undefined,
    size: 100
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

let box1 = {
    x:75,
    y:395
};

let box2 = {
    x:135,
    y:395
};

let box3 = {
    x:195,
    y:395
};

let box4 = {
    x:255,
    y:395
};

let box5 = {
    x:315,
    y:395
};

let box6 = {
    x:375,
    y:395
};

let box7 = {
    x:435,
    y:395
};

let box8 = {
    x:495,
    y:395
};

let box9 = {
    x:555,
    y:395
};

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
    createCanvas(640,480);

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
    image(confirmImg, 510, 455);
    pop();

    push();
    imageMode(CENTER);
    image(box1Img, box1.x, box1.y);
    image(box2Img, box2.x, box2.y);
    image(box3Img, box3.x, box3.y);
    image(box4Img, box4.x, box4.y);
    image(box5Img, box5.x, box5.y);
    image(box6Img, box6.x, box6.y);
    image(box7Img, box7.x, box7.y);
    image(box8Img, box8.x, box8.y);
    image(box9Img, box9.x, box9.y);
    pop();

    if(currentFrame === 0) {
        push();
        imageMode(CENTER);
        image(frame1Img, 325, 185);
        pop();
    }
        else if (currentFrame === 1) {
            push();
            imageMode(CENTER);
            image(frame2Img, 325, 185);
            pop();
        }
            else if (currentFrame === 2) {
                push();
                imageMode(CENTER);
                image(frame3Img, 325, 185);
                pop();
            }

    if (currentBirbBg === 0) {
        push();
        imageMode(CENTER);
        image(birbBg1Img, 325, 185);
        pop();
    }
        else if (currentBirbBg === 1) {
            push();
            imageMode(CENTER);
            image(birbBg2Img, 325, 185);
            pop();
        }
            else if (currentBirbBg === 2) {
                push();
                imageMode(CENTER);
                image(birbBg3Img, 325, 185);
                pop();
            }


    if (currentBirb === 0) {
        push();
        imageMode(CENTER);
        image(birb1Img, 340, 185);
        pop();
    }
        else if (currentBirb === 1) {
            push();
            imageMode(CENTER);
            image(birb2Img, 340, 185);
            pop();
        }
            else if (currentBirb === 2) {
                push();
                imageMode(CENTER);
                image(birb3Img, 340, 185);
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
        let dbox1 = dist(indexTipX, indexTipY, box1.x, box1.y);
        let dbox2 = dist(indexTipX, indexTipY, box2.x, box2.y);
        let dbox3 = dist(indexTipX, indexTipY, box3.x, box3.y);
        let dbox4 = dist(indexTipX, indexTipY, box4.x, box4.y);
        let dbox5 = dist(indexTipX, indexTipY, box5.x, box5.y);
        let dbox6 = dist(indexTipX, indexTipY, box6.x, box6.y);
        let dbox7 = dist(indexTipX, indexTipY, box7.x, box7.y);
        let dbox8 = dist(indexTipX, indexTipY, box8.x, box8.y);
        let dbox9 = dist(indexTipX, indexTipY, box9.x, box9.y);
        if (dbox1 < 25) {
            currentBirb = 0;
            if (d < 25) {
                box1.x = indexTipX;
                box1.y = indexTipY;
            }
        }
        if (dbox2 < 25) {
            currentBirb = 1;
            if (d < 25) {
                box2.x = indexTipX;
                box2.y = indexTipY;
            }
        }
        if (dbox3 < 25) {
            currentBirb = 2;
            if (d < 25) {
                box3.x = indexTipX;
                box3.y = indexTipY;
            }
        }
        if (dbox4 < 25) {
            currentBirbBg = 0;
            if (d < 25) {
                box4.x = indexTipX;
                box4.y = indexTipY;
            }
        }
        if (dbox5 < 25) {
            currentBirbBg = 1;
            if (d < 25) {
                box5.x = indexTipX;
                box5.y = indexTipY;
            }
        }
        if (dbox6 < 25) {
            currentBirbBg = 2;
            if (d < 25) {
                box6.x = indexTipX;
                box6.y = indexTipY;
            }
        }
        if (dbox7 < 25) {
            currentFrame = 0;
            if (d < 25) {
                box7.x = indexTipX;
                box7.y = indexTipY;
            }
        }
        if (dbox8 < 25) {
            currentFrame = 1;
            if (d < 25) {
                box8.x = indexTipX;
                box8.y = indexTipY;
            }
        }
        if (dbox9 < 25) {
            currentFrame = 2;
            if (d < 25) {
                box9.x = indexTipX;
                box9.y = indexTipY;
            }
        }
        push();
        noStroke();
        fill(255, 0, 0);
        circle(cursor.x, cursor.y, cursor.size);
        pop();

        fill(0, 0, 255);
        circle(thumbTipX, thumbTipY, 25);
    }

}