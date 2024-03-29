class Play extends Phaser.Scene {
    constructor() {
        super({
            key: 'play'
        });
    }

    create() {
        this.test = this.add.image(400, 400, 'test');
        this.test.setInteractive();

        //when you click on test img, starts new scene called game
        this.test.on('pointerdown', () => this.scene.start('game'))


    }

    update() {
        
    }

    handleInput() {

    }
}