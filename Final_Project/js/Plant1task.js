class Plant1task extends Phaser.Scene {
    constructor() {
        super({
            key: 'plant1task'
        });
    }

    create() {

        this.test = this.add.image(300, 300, 'acc');
        this.test.setInteractive();

        this.test.on('pointerdown', () => this.scene.switch('play'))

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