class Npctask extends Phaser.Scene {
    constructor() {
        super({
            key: 'npctask'
        });
    }

    create() {

        this.test = this.add.image(500, 500, 'test');
        this.test.setInteractive();

        //checks if the sprite has been dragged, which marks the task as complete
        this.complete = false;

        //makes sprite draggable
        this.input.setDraggable(this.test);

        this.input.on('drag', function (pointer, obj, dragX, dragY) {
            obj.x = dragX;
            obj.y = dragY;
            // if (dragX > 950) {
            //     this.complete === true;
            // };
         });

        // if (this.complete) {
        //     this.button = this.add.image(800, 800, 'test');
        // }

        console.log(this.complete);

        
        

        // this.input.once(Phaser.Input.Events.POINTER_DOWN, function ()
        // {

        //     this.scene.switch('play');

        // }, this);


        // this.events.on(Phaser.Scenes.Events.WAKE, function ()
        // {
        //     this.wake(this.input, this.scene);
        // }, this);

    }

    // wake (input, scene)
    // {
    //     input.once(Phaser.Input.Events.POINTER_DOWN, event =>
    //     {
    //         scene.switch('play');
    //     }, this);
    // }

    update() {
        
    }

    handleInput() {

    }
}