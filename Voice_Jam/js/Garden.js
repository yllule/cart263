class Garden {
    constructor() {

        //variables for transition
        this.fade = 0;
        this.fadeSpeed = 2;

        //boolean to make ms tulip appear + dialogue
        this.mstulip = false;
        this.dialogue = false;

        //boolean for ending transition
        this.end = false;
        this.fade2 = 0;
        this.fade2Speed = 5;

    }

    draw() {
        //images

        push();
        imageMode(CENTER);
        tint(255, this.fade);
        if (this.fade < 255) {
          this.fade = this.fade + this.fadeSpeed; 
        }
        image(backyardImg, width/2, height/2);
        pop();

        push();
        imageMode(CENTER);
        if(spiritBoxOn) {
            image(handImg, width-50, height/2+100);
            image(notesImg, 75, height/2+100);
        }
        pop();

        if (this.mstulip) {
            push();
            imageMode(CENTER);
            image(msTulip2Img, width/2, height-250);
            pop();
        }

        if (this.dialogue) {
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
            textSize(15);
            textAlign(CENTER);
            textFont('Georgia');
            text(tulipTextEnd, width/2, height-95);
            pop();
        }
        if (this.end) {
            //fade to red
            push();
            imageMode(CENTER);
            tint(255, this.fade2);
            if (this.fade2 < 255) {
                this.fade2 = this.fade2 + this.fade2Speed; 
            }
            image(redImg, width/2, height/2);
            pop();

            if (this.fade2 === 255) {
                currentState = new Ending;
            }
        }
    }

    mousePressed() {
        this.mstulip = true;
    }

    mouseReleased() {
        this.dialogue = true;
        this.end = true;
    }
}