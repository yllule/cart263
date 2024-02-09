class Intro {
    constructor() {

    }

    draw() {

        //images
        push();
        imageMode(CENTER);
        image(frontDoorImg, width/2, height/2);
        image(msTulipImg, width/2, height-250);
        pop();

        //dialogue box
        push();
        noStroke();
        rectMode(CENTER);
        fill(200);
        rect(width/2, height-100, 450, 70, 20, 20, 20, 20);
        pop();

        //text
        push();
        fill(255);
        textSize(30);
        textAlign(CENTER);
        textFont('Georgia');
        text('Click to continue', width/2, height-25);
        pop();

        //text
        push();
        fill(0);
        textSize(15);
        textAlign(CENTER);
        textFont('Georgia');
        text(tulipTextStart[currentIndex], width/2, height-95);
        pop();
    }

    mousePressed() {
        currentIndex = currentIndex + 1;

        if (currentIndex === 9) {
            currentState = new Tutorial;
        }
    }
}