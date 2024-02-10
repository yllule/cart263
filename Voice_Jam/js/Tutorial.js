class Tutorial {
    constructor() {

    }

    draw() {
        //images
        push();
        imageMode(CENTER);
        image(livingRoomImg, width/2, height/2);
        image(handImg, width-50, height/2+100);
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
        fill(0);
        textSize(11);
        textAlign(CENTER);
        textFont('Georgia');
        text(tutText[currentIndexTut], width/2, height-95);
        pop();
    }

    mousePressed() {
        currentIndexTut = currentIndexTut + 1;

        if (currentIndexTut === 5) {
            currentState = new Livingroom;
        }
    }

    mouseReleased() {

    }
}