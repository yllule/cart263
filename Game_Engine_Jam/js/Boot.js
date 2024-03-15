class Boot extends Phaser.Scene {
    constructor() {
        super({
            key: 'boot'
        });
    }

    preload() {
        //load assets here
        this.load.image('bg', 'assets/images/bgtest.png');
        this.load.image('avatar', 'assets/images/clown.png');

        this.load.on('complete', () => {
            this.scene.start(`play`);
        })
    }

    create() {

    }

    update() {

    }
}