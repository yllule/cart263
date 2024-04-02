/**
Catherine Zaloshnja
Final Project
*/

//make it possible to switch btw two scenes depending on what gets clicked (add two items)
//add "dialogue" (instructions) for what to do in each scene

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