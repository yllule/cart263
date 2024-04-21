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
    scene: [Boot, Play, Npctask1, Npctask2, Npctask3, Npctask5, Npctask6, Npctask7, Plant1task]
};

let game = new Phaser.Game(config);