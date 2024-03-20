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
        this.bg = this.add.image(2500, 2500, 'bg')
        this.bg.setPipeline('Light2D');

        //enable lights (create spotlight) and set a dark ambient color
        this.light = this.lights.addLight(100,80,200).setColor(0xffffff).setIntensity(3);
        this.lights.enable().setAmbientColor(0x555555);

        this.cameras.main.setBounds(0, 0, this.cameras.main, this.cameras.main);
        this.physics.world.setBounds(0, 0, 5000, 5000);

        //creating the minimap (first 2 variables are x+y positions)
        this.minimap = this.cameras.add(0, 0, 0, 0).setZoom(0.04).setName('mini');

        //create the avatar
        this.avatar = this.physics.add.sprite(this.width/2, 0, 'avatar');
        this.avatar.setCollideWorldBounds(true);

        this.trinkets = [
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'book'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'diamond'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'fishing'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'flower'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'fossil'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'ghost'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'glove'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'gun'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'jar'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'mushroom'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'necklace'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'note'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'photo'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'potion'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'rock'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'shard'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'sheep'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'skull'),
            this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'sword')
        ];

        //make the camera follow the avatar
        this.cameras.main.startFollow(this.avatar, true);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.handleInput();
        
        //light follows the avatar
        this.light.x = this.avatar.x;
        this.light.y = this.avatar.y;
    
    }

  handleInput() {

    this.avatar.setVelocity(0);

    //moves the avatar left if left key is down
    if (this.cursors.left.isDown) {
        this.avatar.setVelocityX(-400);
    }

    //same thing with other arrow keys
    else if (this.cursors.right.isDown) {
        this.avatar.setVelocityX(400);
    }

    if (this.cursors.up.isDown) {
        this.avatar.setVelocityY(-400);
    }

    else if (this.cursors.down.isDown) {
        this.avatar.setVelocityY(400);
    }
  }
}