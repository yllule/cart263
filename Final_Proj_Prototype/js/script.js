/**
Catherine Zaloshnja
Final Project
*/

"use strict";


let config = {
    type : Phaser.AUTO,
    width: 700,
    height: 700,
    physics: {
        default: `arcade`
    },
    scene: [Boot, Play, Game]
};

let game = new Phaser.Game(config);