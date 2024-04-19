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

        //checks if tasks associated to plants/npcs have been complete
        this.plant1done = false;

        //plants
        if (!this.plant1done) {
            this.plant1 = this.add.image(this.width/2-75, 335, 'p1a');
            this.plant1.setInteractive();
        }
        else {
            this.plant1 = this.add.image(this.width/2-75, 335, 'p1b');
        }
        this.plant2 = this.add.image(this.width/2+50, 315, 'p2a');
        this.plant3 = this.add.image(this.width/2+170, 300, 'p3a');
        this.plant4 = this.add.image(this.width/2+275, 325, 'p4a');
        this.plant5 = this.add.image(this.width/2+400, 305, 'p5a');
        this.plant6 = this.add.image(this.width/2+495, 310, 'p6a');
        this.plant7 = this.add.image(1635, 490, 'p7a');
        this.plant8 = this.add.image(1710, 540, 'p8a');
        this.plant9 = this.add.image(1760, 660, 'p9a');
        this.plant10 = this.add.image(1800, 810, 'p10a');
        this.plant11 = this.add.image(1850, 950, 'p11a');
        this.plant12 = this.add.image(370, 450, 'p12a');
        this.plant13 = this.add.image(290, 460, 'p13a');
        this.plant14 = this.add.image(210, 625, 'p14a');
        this.plant15 = this.add.image(130, 725, 'p15a');
        this.plant16 = this.add.image(50, 825, 'p16a');


        //npcs
        this.customers = [
        this.npc1 = this.add.image(450, this.height/2, 'npc1'),
        this.npc6 = this.add.image(this.width/2, this.height/2-50, 'npc6'),
        this.npc2 = this.add.image(1550, this.height/2, 'npc2'),
        this.npc3 = this.add.image(this.width/2, 805, 'npc3'),
        this.npc4 = this.add.image(this.width/2+350, 655, 'npc4'),
        this.npc5 = this.add.image(280, 900, 'npc5'),
        this.npc7 = this.add.image(1650, 930, 'npc7'),
        this.npc8 = this.add.image(700, 700, 'npc8'),
        ]

        this.npc1.setInteractive();

        //when you click on npc img, switches to scene called npctask
        this.npc1.on('pointerdown', () => this.scene.switch('npctask1'))

        this.plant1.on('pointerdown', () => this.scene.switch('plant1task'))

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