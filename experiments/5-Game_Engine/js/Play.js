class Play extends Phaser.Scene {

    constructor() {
        super({
            key: 'play'
        });
    }

    create() {
        this.clown = this.add.image(100, 100, 'clown');
        this.clown.setTint(0xdd3333);

    }

    update() {

    }
}
