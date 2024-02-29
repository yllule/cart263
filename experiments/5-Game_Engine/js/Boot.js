class Boot extends Phaser.Scene {

    constructor() {
        super({
            key:'boot'
        });
    }

    preload() {
        this.load.image('clown', 'assets/images/clown.png');

        this.load.on('complete', () => {
            this.scene.start('play');
        })
    }

    create() {
        let style = {
            fontFamily: 'sans-serif',
            fontSize: '40px',
            color:'#00ff00'
        };

        let loadingString = 'Loading...';
        this.add.text(100,100, loadingString, style);
    }

    update() {
        
    }
}