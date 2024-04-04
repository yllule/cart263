class Play extends Phaser.Scene {
    constructor() {
        super({
            key: 'play'
        });
    }

    create() {

        this.width = 1920;
        this.height = 1080;

        this.bg = this.add.image(this.width/2, this.height/2, 'bg');
        this.npc = this.add.image(this.width/2-200, this.height/2+100, 'npc');
        this.plant1 = this.add.image(400, 400, 'plant1');
        this.plant2 = this.add.image(200, 200, 'plant2');
        this.plant3 = this.add.image(600, 600, 'plant3');

        this.npc.setInteractive();
        this.plant1.setInteractive();
        this.plant2.setInteractive();
        this.plant3.setInteractive();

        //when you click on npc img, switches to scene called npctask
        this.npc.on('pointerdown', () => this.scene.switch('npctask'))

        // this.events.on(Phaser.Scenes.Events.WAKE, function ()
        // {
        //     this.wake(this.input, this.scene);
        // }, this);


        this.plant1.on('pointerdown', () => this.scene.switch('plant1task'))

        // this.events.on(Phaser.Scenes.Events.WAKE, function ()
        // {
        //     this.wake(this.input, this.scene);
        // }, this);

        //everyday there are 6 tasks
        this.plantTasks = [
            'water',
            'fertilize',
            'repot',
            'pest',
            'prune'
        ];

        //everyday there are 6 customers
        this.customers = [
            'love bouquet', //cirrus
            'houseplant safe for cat', //malna? or biscotte
            'houseplant low light', //melanie
            'flower friendship', //child...ennea?
            'sibling LORE',
            'houseplant for cooking', //amenda
            'flower for spells', //mia..?
            'medicinal plant for sick relative', //teen
            'witch LORE + funeral bouquet',
            'plant/flower for dye' //idk artist
        ];

    }

    //makes it possible to 'save' where previous state was when switching states
    // wake (input, scene)
    // {
    //     input.once(Phaser.Input.Events.POINTER_DOWN, () =>
    //     {
    //         scene.switch('npctask');

    //     }, this);
    // }

    update() {
        
    }

    handleInput() {

    }
}