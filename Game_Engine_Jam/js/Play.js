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
        //add lights to bg
        this.bg.setPipeline('Light2D');

        //enable lights (create spotlight) and set a dark ambient color
        this.light = this.lights.addLight(100,80,200).setColor(0xffffff).setIntensity(3);
        this.lights.enable().setAmbientColor(0x555555);

        //add camera
        this.cameras.main.setBounds(0, 0, this.cameras.main, this.cameras.main);

        this.physics.world.setBounds(0, 0, 5000, 5000);

        //creating the minimap (first 2 variables are x+y positions)
        this.minimap = this.cameras.add(0, 0, 0, 0).setZoom(0.04).setName('mini');

        //adding the collectibles
            this.book = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'book').setInteractive(),
            this.diamond = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'diamond').setInteractive(),
            this.fishing = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'fishing').setInteractive(),
            this.flower = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'flower').setInteractive(),
            this.fossil = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'fossil').setInteractive(),
            this.ghost = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'ghost').setInteractive(),
            this.glove = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'glove').setInteractive(),
            this.gun = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'gun').setInteractive(),
            this.jar = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'jar').setInteractive(),
            this.mushroom = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'mushroom').setInteractive(),
            this.necklace = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'necklace').setInteractive(),
            this.note = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'note').setInteractive(),
            this.photo = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'photo').setInteractive(),
            this.potion = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'potion').setInteractive(),
            this.rock = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'rock').setInteractive(),
            this.shard = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'shard').setInteractive(),
            this.sheep = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'sheep').setInteractive(),
            this.skull = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'skull').setInteractive(),
            this.sword = this.physics.add.sprite(Math.random() * 5000, Math.random() * 5000, 'sword').setInteractive()

        //when items are clicked on they disappear
        this.book.on("pointerdown", collect)
        this.diamond.on("pointerdown", collect)
        this.fishing.on("pointerdown", collect)
        this.flower.on("pointerdown", collect)
        this.fossil.on("pointerdown", collect)
        this.ghost.on("pointerdown", collect)
        this.glove.on("pointerdown", collect)
        this.gun.on("pointerdown", collect)
        this.jar.on("pointerdown", collect)
        this.mushroom.on("pointerdown", collect)
        this.necklace.on("pointerdown", collect)
        this.note.on("pointerdown", collect)
        this.photo.on("pointerdown", collect)
        this.potion.on("pointerdown", collect)
        this.rock.on("pointerdown", collect)
        this.shard.on("pointerdown", collect)
        this.sheep.on("pointerdown", collect)
        this.skull.on("pointerdown", collect)
        this.sword.on("pointerdown", collect)

        //makes the items disappear
        function collect() {
            this.setAlpha(0);
        }
        
        //create the avatar
        this.avatar = this.physics.add.sprite(this.width/2, this.height/2, 'avatar');
        this.avatar.setCollideWorldBounds(true);

        //make the camera follow the avatar
        this.cameras.main.startFollow(this.avatar, true);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        //makes the avatar move
        this.handleInput();
        
        //light follows the avatar
        this.light.x = this.avatar.x;
        this.light.y = this.avatar.y;
    }

  handleInput() {

    //starts off at 0
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