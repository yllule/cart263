/**
Tiny birb maker
Catherine Zaloshnja
*/

//notes to self :

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

let acc1 = {
    x:50,
    y:50
}

let acc2 = {
    x:575,
    y:50
}

let acc3 = {
    x:100,
    y:125
}

let acc4 = {
    x:550,
    y:135
}

let acc5 = {
    x:50,
    y:225
}

let acc6 = {
    x:575,
    y:230
}

let acc7 = {
    x:90,
    y:315
}

let acc8 = {
    x:530,
    y:325
}

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
let acc1Img;
let acc2Img;
let acc3Img;
let acc4Img;
let acc5Img;
let acc6Img;
let acc7Img;
let acc8Img;



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
    acc1Img = loadImage('assets/images/a1.png');
    acc2Img = loadImage('assets/images/a2.png');
    acc3Img = loadImage('assets/images/a3.png');
    acc4Img = loadImage('assets/images/a4.png');
    acc5Img = loadImage('assets/images/a5.png');
    acc6Img = loadImage('assets/images/a6.png');
    acc7Img = loadImage('assets/images/a7.png');
    acc8Img = loadImage('assets/images/a8.png');
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

        //setting the coordinates of the index cursor
        cursor.x = indexTipX;
        cursor.y = indexTipY;
        
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

        let dacc1 = dist(indexTipX, indexTipY, acc1.x, acc1.y);
        let dacc2 = dist(indexTipX, indexTipY, acc2.x, acc2.y);
        let dacc3 = dist(indexTipX, indexTipY, acc3.x, acc3.y);
        let dacc4 = dist(indexTipX, indexTipY, acc4.x, acc4.y);
        let dacc5 = dist(indexTipX, indexTipY, acc5.x, acc5.y);
        let dacc6 = dist(indexTipX, indexTipY, acc6.x, acc6.y);
        let dacc7 = dist(indexTipX, indexTipY, acc7.x, acc7.y);
        let dacc8 = dist(indexTipX, indexTipY, acc8.x, acc8.y);
        if (d < 25 && dacc1 < 50) {
            acc1.x = indexTipX;
            acc1.y = indexTipY;
        }
        if (d < 25 && dacc2 < 50) {
            acc2.x = indexTipX;
            acc2.y = indexTipY;
        }
        if (d < 25 && dacc3 < 50) {
            acc3.x = indexTipX;
            acc3.y = indexTipY;
        }
        if (d < 25 && dacc4 < 50) {
            acc4.x = indexTipX;
            acc4.y = indexTipY;
        }
        if (d < 25 && dacc5 < 50) {
            acc5.x = indexTipX;
            acc5.y = indexTipY;
        }
        if (d < 25 && dacc6 < 50) {
            acc6.x = indexTipX;
            acc6.y = indexTipY;
        }
        if (d < 25 && dacc7 < 50) {
            acc7.x = indexTipX;
            acc7.y = indexTipY;
        }
        if (d < 25 && dacc8 < 50) {
            acc8.x = indexTipX;
            acc8.y = indexTipY;
        }
        push();
        noStroke();
        fill(255, 0, 0);
        circle(cursor.x, cursor.y, cursor.size);
        pop();

        fill(0, 0, 255);
        circle(thumbTipX, thumbTipY, 25);
    }

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
    image(acc1Img, acc1.x, acc1.y);
    image(acc2Img, acc2.x, acc2.y);
    image(acc3Img, acc3.x, acc3.y);
    image(acc4Img, acc4.x, acc4.y);
    image(acc5Img, acc5.x, acc5.y);
    image(acc6Img, acc6.x, acc6.y);
    image(acc7Img, acc7.x, acc7.y);
    image(acc8Img, acc8.x, acc8.y);
    pop();


}