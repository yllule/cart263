/**
Catherine Zaloshnja
Final Project
*/

"use strict";


let config = {
    type : Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: `arcade`
    },
    scene: [Boot, Play, Npctask, Plant1task]
};

let game = new Phaser.Game(config);