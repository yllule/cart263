class Npctask extends Phaser.Scene {
    constructor() {
        super({
            key: 'npctask'
        });
    }

    create() {

        this.test = this.add.image(500, 500, 'test');
        this.test.setInteractive();

        //makes sprite draggable
        this.input.setDraggable(this.test);

    }

    update() {

        this.input.on('drag', function (pointer, obj, dragX, dragY) {
            obj.x = dragX;
            obj.y = dragY;
         });

        //if img is dragged over half of the canvas, task is considered 'complete' and the button to move to main scene appears
        if (this.test.x > 950) {
            this.button = this.add.image(800, 800, 'test');
            this.button.setInteractive();
            this.button.on('pointerdown', () => this.scene.switch('play'))

        }
        
    }

    handleInput() {

    }
}