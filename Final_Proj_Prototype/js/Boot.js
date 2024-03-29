class Boot extends Phaser.Scene {
    constructor() {
        super({
            key: 'boot'
        });
    }

    preload() {
        //load assets
        

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