/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
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