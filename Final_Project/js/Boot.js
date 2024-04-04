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
        this.load.image('bg', 'assets/images/bg.png');
        this.load.image('npc', 'assets/images/npc.png');
        this.load.image('plant1', 'assets/images/plant1.png');
        this.load.image('plant2', 'assets/images/plant2.png');
        this.load.image('plant3', 'assets/images/plant3.png');
        

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