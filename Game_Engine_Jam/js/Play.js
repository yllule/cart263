class Play extends Phaser.Scene {
    constructor() {
        super({
            key: 'play'
        });
    }

    create() {

        //width + height variables
        this.width = this.game.canvas.width;
        this.height = this.game.canvas.height;

        //add background image
        this.bg = this.add.image(this.width/2, this.height/2, 'bg');
        this.physics.world.setBounds(0, 0, this.width, this.height);

        // // create the avatar
        this.avatar = this.physics.add.sprite(this.width/2, this.height/2, 'avatar');
        this.avatar.setCollideWorldBounds(true);

        //  The miniCam is 400px wide, so can display the whole world at a zoom of 0.2
        this.minimap = this.cameras.add(200, 10, 400, 100).setZoom(0.2).setName('mini');
        this.minimap.setBackgroundColor(0x002244);
        this.minimap.scrollX = 1600;
        this.minimap.scrollY = 300;
    }

    update() {
        // this.handleInput();

    
    }

    handleInput() {

    }
}