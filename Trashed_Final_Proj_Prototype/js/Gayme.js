class Gayme extends Phaser.Scene {
    constructor() {
        super({
            key: 'gayme'
        });
    }

    create() {

        this.test3 = this.add.image(300, 300, 'acc');

        this.input.once(Phaser.Input.Events.POINTER_DOWN, function ()
        {

            this.scene.switch('play');

        }, this);


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