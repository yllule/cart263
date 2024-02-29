class Play extends Phaser.Scene {

    constructor() {
        super({
            key: 'play'
        });
    }

    create() {
        let style = {
            fontFamily: 'sans-serif',
            fontSize: '40px',
            color:'#00ff00'
        };

        let gameDescription = 'Think of a number...wrong.';
        this.add.text(100,100, gameDescription, style);

    }

    update() {

    }
}
