class Boot extends Phaser.Scene {
    constructor() {
        super({
            key: 'boot'
        });
    }

    preload() {
        //load assets
        this.load.image('test', 'assets/images/clown.png');
        this.load.image('acc', 'assets/images/a6.png');
        

        //start intro when everything has loaded
        this.load.on('complete', () => {
            this.scene.start(`play`);
        })
    }

    create() {

    }

    update() {

    }
}