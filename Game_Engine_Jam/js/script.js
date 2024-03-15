/**
Title of Project
Catherine Zaloshnja

*/

"use strict";

let config = {
    type : Phaser.AUTO,
    width: 1500,
    height: 250,
    physics: {
        default: `arcade`
    },
    scene: [Boot, Play]
};

let game = new Phaser.Game(config);