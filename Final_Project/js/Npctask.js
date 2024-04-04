class Npctask extends Phaser.Scene {
    constructor() {
        super({
            key: 'npctask'
        });
    }

    create() {

        this.test = this.add.image(500, 500, 'test');

        this.input.once(Phaser.Input.Events.POINTER_DOWN, function ()
        {

            this.scene.switch('play');

        }, this);


        this.events.on(Phaser.Scenes.Events.WAKE, function ()
        {
            this.wake(this.input, this.scene);
        }, this);

    }

    wake (input, scene)
    {
        input.once(Phaser.Input.Events.POINTER_DOWN, event =>
        {
            scene.switch('play');
        }, this);
    }

    update() {
        
    }

    handleInput() {

    }
}