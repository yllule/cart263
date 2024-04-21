class Npctask1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'npctask1'
        });
    }

    create() {

        this.width = 1920;
        this.height = 1080;
        this.bg = this.add.image(this.width/2, this.height/2, 'bg2');
        //add sprites for draggable tools
        //all the code that is commented out that is related to the tools is bcz I wanted to add plant tasks like watering and fertilizing but ran out of time to add those
        //i still want to keep them here in case i ever come back to this project
        this.add.image(this.width/2, 875, 'bgtools');
        this.fertilizer = this.add.image(300, 900, 'fertilizer');
        this.insecticide = this.add.image(950, 850, 'insecticide');
        this.scissors = this.add.image(1150, 950, 'scissors');
        this.shovel = this.add.image(1400, 935, 'shovel');
        this.soil = this.add.image(1700, 850, 'soil');
        this.water = this.add.image(700, 925, 'water');

        //add sprites for selectable plants
        this.plant2 = this.add.image(this.width/3, 350, 'p2a');
        this.plant10 = this.add.image(this.width/2+50, 350, 'p10a');
        this.plant14 = this.add.image(this.width/2+400, 400, 'p14a');

        //making the sprites 1.5x bigger...looks pixelated but idk the original size is too small
        this.plant2.setScale(1.5);
        this.plant10.setScale(1.5);
        this.plant14.setScale(1.5);

        //makes plant sprites interactible
        this.plant2.setInteractive();
        this.plant10.setInteractive();
        this.plant14.setInteractive();

        this.input.setDraggable(this.plant2);
        this.input.setDraggable(this.plant10);
        this.input.setDraggable(this.plant14);

        // this.fertilizer.setInteractive();
        // this.insecticide.setInteractive();
        // this.scissors.setInteractive();
        // this.shovel.setInteractive();
        // this.soil.setInteractive();
        // this.water.setInteractive();

        //makes sprite draggable
        // this.input.setDraggable(this.fertilizer);
        // this.input.setDraggable(this.insecticide);
        // this.input.setDraggable(this.scissors);
        // this.input.setDraggable(this.shovel);
        // this.input.setDraggable(this.soil);
        // this.input.setDraggable(this.water);

    }

    update() {

        this.input.on('drag', function (pointer, obj, dragX, dragY) {
            obj.x = dragX;
            obj.y = dragY;
         });

         //if plant 2, 10 or 14 is dragged over the counter (to hand over to customer) the task is deemed complete and the button to return to the main scene appears
         if (this.plant2.y < 200 || this.plant10.y < 200 || this.plant14.y < 200) {
            this.button = this.add.image(800, 800, 'test');
            this.button.setInteractive();
            this.button.on('pointerdown', () => this.scene.switch('play'))
         }

        // //if img is dragged over half of the canvas, task is considered 'complete' and the button to move to main scene appears
        // if (this.fertilizer.x > 950) {
        //     this.button = this.add.image(800, 800, 'test');
        //     this.button.setInteractive();
        //     this.button.on('pointerdown', () => this.scene.switch('play'))

        // }
        
    }

    handleInput() {

    }
}