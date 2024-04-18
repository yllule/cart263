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
        //plants
        this.plant1a = this.add.image(this.width/2-75, 335, 'p1a');
        this.plant2a = this.add.image(this.width/2+50, 315, 'p2a');
        this.plant3a = this.add.image(this.width/2+170, 300, 'p3a');
        this.plant4a = this.add.image(this.width/2+275, 325, 'p4a');
        this.plant5a = this.add.image(this.width/2+400, 305, 'p5a');
        this.plant6a = this.add.image(this.width/2+495, 310, 'p6a');
        this.plant7a = this.add.image(1635, 490, 'p7a');
        this.plant8a = this.add.image(1710, 540, 'p8a');
        this.plant9a = this.add.image(1760, 660, 'p9a');
        this.plant10a = this.add.image(1800, 810, 'p10a');
        this.plant11a = this.add.image(1850, 950, 'p11a');
        this.plant12a = this.add.image(370, 450, 'p12a');
        this.plant13a = this.add.image(290, 460, 'p13a');
        this.plant14a = this.add.image(210, 625, 'p14a');
        this.plant15a = this.add.image(130, 725, 'p15a');
        this.plant16a = this.add.image(50, 825, 'p16a');

        //npcs
        this.npc1 = this.add.image(450, this.height/2, 'npc1');
        this.npc6 = this.add.image(this.width/2, this.height/2-50, 'npc6');
        this.npc2 = this.add.image(1550, this.height/2, 'npc2');
        this.npc3 = this.add.image(this.width/2, 805, 'npc3');
        this.npc4 = this.add.image(this.width/2+350, 655, 'npc4');
        this.npc5 = this.add.image(280, 900, 'npc5');
        this.npc7 = this.add.image(1650, 930, 'npc7');
        this.npc8 = this.add.image(700, 700, 'npc8');

        //delete later
        this.plant1 = this.add.image(400, 400, 'plant1');
        this.plant2 = this.add.image(200, 200, 'plant2');
        this.plant3 = this.add.image(600, 600, 'plant3');


        this.npc1.setInteractive();
        this.plant1.setInteractive();
        this.plant2.setInteractive();
        this.plant3.setInteractive();

        //when you click on npc img, switches to scene called npctask
        this.npc1.on('pointerdown', () => this.scene.switch('npctask'))

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