/**
Ghost Hunting Simulator
Catherine Zaloshnja
*/

//notes to self
//-make them switch rooms (buttons) and scroll through rooms
//-have certain events happen randomly while exploring
//-make the garden accessible after getting a certain answer (find corpse? + ms tulip)
//-make end screen (killed) + credits
//-make start screen (entry door)

//audio by : Percy Duke, theplax on Freesound
//original unedited images by : Charlotte May, Vlada Karpovich, Askar Abayev, Antaryami Das on Pexels and Forte Foundry, Annie Spratt, Arno Smit, Hans Isaacson, Aaron Huber, Kate Darmody, Julian Hochgesang on Unsplash and rorozoa on freepik


"use strict";

//possible states = intro, tutorial, living room, dining room, kitchen, hallway, bathroom, bedroom, backyarddoor, backyard, end
let currentState;

const speechRecognizer = new p5.SpeechRec();
const speechSynthesizer = new p5.Speech();

let tulipTextStart = [
    'Thank you so much for coming dear...',
    "I've been unable to rest at all with all this activity...",
    "What kind of activity?",
    "Well...doors slamming shut, disembodied footsteps and whispers...",
    "What may be causing this? I'm not sure...",
    "I've lived here for years...",
    "And I've never experienced anything like this before.",
    "Please dear, help this poor old lady out.",
    "Please exorcise this ghost for me."
]

let currentIndex = 0;

let tulipTextEnd = "I wonder what lovely flowers will sprout from you."

//list of questions you can ask the ghost
const questions = [
    "how did you die",
    "where are you",
    "can you hear me",
    "how old are you",
    "what is your name",
    "what do you want",
    "why are you here",
    "should i leave",
    "is anyone here",
    "what should i do",
    "give me a sign",
    "show yourself",
    "who is this",
    "hello",
    "let me know you are here",
    "who killed you",
    "what should i be aware of",
    "why do you want revenge",
    "why did she kill you",
    "what is your favorite food",
    "where should i go",
    "where do i go",
    "leave miss tulip alone",
    "leave this place",
    "why can't you leave this place",
    "where are you buried"
];

//answers the ghost will give (the order corresponds to the order of the questions)
const answers = [
    "killed",
    "below the soil",
    "beware",
    "old",
    "arnold",
    "revenge",
    "killed",
    "come closer",
    "oughe",
    "run away",
    "asdjkfh",
    "idskfslkfh",
    "arnold",
    "hi",
    "i",
    "miss tulip",
    "miss tulip",
    "killed",
    "soil",
    "apple tater",
    "run away",
    "save yourself",
    "i cannot",
    "i cannot",
    "buried",
    "garden. beware"
]

//variables for images
let backyardDoorImg;
let backyardImg;
let bathroomImg;
let bedroomImg;
let diningRoomImg;
let frontDoorImg;
let kitchen1Img;
let kitchen2Img;
let livingRoomImg;
let msTulipImg;
let plantsImg;


//variables for sounds
let staticbg;
let staticvoices;

//boolean to check if the spiritbox is on or not
let spiritBoxOn = false;


/**
Description of preload
*/
function preload() {

    staticbg = loadSound('assets/sounds/staticbg.mp3');
    staticvoices = loadSound('assets/sounds/staticvoices.wav');

    backyardDoorImg = loadImage("assets/images/backyard_door.png");
    backyardImg = loadImage("assets/images/backyard.png");
    bathroomImg = loadImage("assets/images/bathroom.png");
    bedroomImg = loadImage("assets/images/bedroom.png");
    diningRoomImg = loadImage("assets/images/dining_room.png");
    frontDoorImg = loadImage("assets/images/front_door.png");
    kitchen1Img = loadImage("assets/images/kitchen1.png");
    kitchen2Img = loadImage("assets/images/kitchen2.png");
    livingRoomImg = loadImage("assets/images/living_room.png");
    msTulipImg = loadImage("assets/images/mstulip.png");
    plantsImg = loadImage("assets/images/plants.png");
}


/**
Description of setup
*/
function setup() {
    createCanvas(500, 750);

    currentState = new Intro();

    //speech recognizer settings
    speechRecognizer.onResult = onResult;
    speechRecognizer.continuous = true;
    speechRecognizer.start();

    //speech synthesizer settings
    speechSynthesizer.setRate(0.01);
    speechSynthesizer.setPitch(0.01);
    speechSynthesizer.setVoice('Whisper'); //this voice is only available on chrome for mac i think :( doesn't show up on my home computer
    // console.log(speechSynthesizer.listVoices());

}


/**
Description of draw()
*/
function draw() {
    background(0);

    currentState.draw();

    if (spiritBoxOn) {
        if (!staticbg.isPlaying()) {
            staticbg.setVolume(0.25);
            staticbg.loop();
        }
        if (!staticvoices.isPlaying()) {
            staticvoices.setVolume(0.25);
            staticvoices.loop();
        }
    }
}

function mousePressed() {
    // spiritBoxOn = true;

    currentState.mousePressed();
}

// function mouseReleased() {
//     spiritBoxOn = false;
//     staticbg.stop();
//     staticvoices.stop();
// }

function onResult() {

    console.log(speechRecognizer.resultString);

    if (spiritBoxOn) {
        for (let i = 0; i < questions.length; i++) {
            //check if the recognized speech matches any of the questions on the list
            if (speechRecognizer.resultString.toLowerCase() === questions[i]) {
                //the corresponing answer will...get spoken
                speechSynthesizer.speak(answers[i]);
                break;
            }
        }
    }
  }