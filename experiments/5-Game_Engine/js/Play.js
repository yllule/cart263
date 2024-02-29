class Play extends Phaser.Scene {

    constructor() {
        super({
            key: 'play'
        });
    }

    create() {
        this.clown = this.physics.add.image(100, 100, 'clown');
        this.clown.setTint(0xdd3333);
        // this.clown.setVelocityX(100);
        this.clown.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.clown.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.clown.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown) {
            this.clown.setVelocityX(300);
        }

        if (this.cursors.up.isDown) {
            this.clown.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown) {
            this.clown.setVelocityY(300);
        }

    }
}
