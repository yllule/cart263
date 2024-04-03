class Play extends Phaser.Scene {
    constructor() {
        super({
            key: 'play'
        });
    }

    create() {
        this.test = this.add.image(400, 400, 'test');
        this.test.setInteractive();

        this.test2 = this.add.image(200, 200, 'test');
        this.test2.setInteractive();

        //when you click on test img, switches to scene called game
        this.test.on('pointerdown', () => this.scene.switch('game'))

        // this.events.on(Phaser.Scenes.Events.WAKE, function ()
        // {
        //     this.wake(this.input, this.scene);
        // }, this);


        this.test2.on('pointerdown', () => this.scene.switch('game'))

        // this.events.on(Phaser.Scenes.Events.WAKE, function ()
        // {
        //     this.wake(this.input, this.scene);
        // }, this);

    }

    //makes it possible to 'save' where previous state was when switching states
    // wake (input, scene)
    // {
    //     input.once(Phaser.Input.Events.POINTER_DOWN, () =>
    //     {
    //         scene.switch('game');

    //     }, this);
    // }

    update() {
        
    }

    handleInput() {

    }
}