class Boot extends Phaser.Scene {
    constructor() {
        super({
            key: 'boot'
        });
    }

    preload() {
        //load assets
        this.load.image('bg', 'assets/images/bgtest.png');
        this.load.image('avatar', 'assets/images/clown.png');
        this.load.image('book', 'assets/images/book.png');
        this.load.image('diamond', 'assets/images/diamond.png');
        this.load.image('fishing', 'assets/images/fishing.png');
        this.load.image('flower', 'assets/images/flower.png');
        this.load.image('fossil', 'assets/images/fossil.png');
        this.load.image('ghost', 'assets/images/ghost.png');
        this.load.image('glove', 'assets/images/glove.png');
        this.load.image('gun', 'assets/images/gun.png');
        this.load.image('jar', 'assets/images/jar.png');
        this.load.image('mushroom', 'assets/images/mushroom.png');
        this.load.image('necklace', 'assets/images/necklace.png');
        this.load.image('note', 'assets/images/note.png');
        this.load.image('photo', 'assets/images/photo.png');
        this.load.image('potion', 'assets/images/potion.png');
        this.load.image('rock', 'assets/images/rock.png');
        this.load.image('shard', 'assets/images/shard.png');
        this.load.image('sheep', 'assets/images/sheep.png');
        this.load.image('skull', 'assets/images/skull.png');
        this.load.image('sword', 'assets/images/sword.png');
        

        //start intro when everything has loaded
        this.load.on('complete', () => {
            this.scene.start(`intro`);
        })
    }

    create() {

    }

    update() {

    }
}