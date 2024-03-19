/**
Title of Project
Catherine Zaloshnja

*/

"use strict";

let config = {
    type : Phaser.AUTO,
    width: 700,
    height: 700,
    physics: {
        default: `arcade`
    },
    scene: [Boot, Play]
};

let game = new Phaser.Game(config);