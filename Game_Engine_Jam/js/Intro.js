class Intro extends Phaser.Scene {
    constructor() {
        super({
            key: 'intro'
        });
    }

    create() {

        //width + height variables
        this.width = this.game.canvas.width;
        this.height = this.game.canvas.height;

        //add background image
        this.bg = this.add.image(2500, 2500, 'bg').setInteractive();

        //text
        this.add.text(this.width/2-200, this.height/2-50, 'Trinket Collector ',{ fontFamily: 'Verdana, "Times New Roman", Tahoma, serif', fontSize : '50px' });
        this.add.text(this.width/2-275, this.height/2+10, 'Find all the items! Arrow keys to move, click to collect. ',{ fontFamily: 'Verdana, "Times New Roman", Tahoma, serif', fontSize : '20px' });
        this.add.text(this.width/2-50, this.height/2+50, 'Click to start ',{ fontFamily: 'Verdana, "Times New Roman", Tahoma, serif', fontSize : '15px' });

        //game starts when you click the screen
        this.bg.on("pointerdown", () => {
            this.scene.start('play');
        })
    }

    update() {

    }
}