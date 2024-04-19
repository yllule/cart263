/**
Catherine Zaloshnja
Final Project
*/


//add simple dialogue
//randomize tasks?
//make npcs randomly appear while playing + bell sound
//make npcs talk before going to npctask scene
//add timer/time system/ set interval or mapping seconds to hours
//add intro scene w/ dialogue
//add end scene, end of day, going home, dialogue

"use strict";


let config = {
    type : Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: `arcade`
    },
    scene: [Boot, Play, Npctask1, Plant1task]
};

let game = new Phaser.Game(config);