/**
Trinket Collector
Catherine Zaloshnja

For this project I wanted to make something with a minimap and a 'flashlight' but I had a hard time finding an interesting idea for it so...in the end it's just a simple point and click collector.
I struggled with using phaser 3 since it's different from p5js and because of that and the fact I misunderstood the deadline for this project and rushed it, I'm not too happy with this but it is what it is.

Things I would have liked to add but didn't bcz reasons :
-score counter
-inventory
-lore?? / item descriptions
-not randomized locations for trinkets
-make trinkets interact with light + blend in the bg better
-nicer visuals

*/

"use strict";

let config = {
    type : Phaser.AUTO,
    width: 700,
    height: 700,
    physics: {
        default: `arcade`
    },
    scene: [Boot, Intro, Play]
};

let game = new Phaser.Game(config);