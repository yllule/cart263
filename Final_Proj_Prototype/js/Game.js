class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'game'
        });
    }

    create() {

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
            scene.switch('sceneA');
        }, this);
    }

    update() {
        
    }

    handleInput() {

    }
}