/**
Ghost Hunting Simulator
Catherine Zaloshnja
*/

//notes to self
//1- list of questions/answers
//2- make ghost answer questions
//3- add gibberish for when player says smth other than questions
//4- add static/radio sounds
//5- have other events happen when player asks a questions (sound plays, smth happens on screen)
//6- add assets


"use strict";


const speechRecognizer = new p5.SpeechRec();
const speechSynthesizer = new p5.Speech();

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
    "what should i beware",
    "why do you want revenge",
    "why did she kill you"
];

//answers the ghost will give (the order corresponds to the order of the questions)
const answers = [
    "killed",
    "below the soil", //?
    "beware",
    "old", //young?
    "arnold",
    "revenge", //justice?
    "killed",
    "come closer",
    "oughe", //gibberish
    "run away",
    "aaaaa", //scream/gibberish
    "oughe", //gibberish
    "arnold",
    "hi",
    "iiii", //gibberish
    "miss tulip",
    "miss tulip",
    "killed",
    "fertilizer" //idk
]


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(500, 500);

    //speech recognizer settings
    speechRecognizer.onResult = onResult;
    speechRecognizer.continuous = true;
    speechRecognizer.start();

    //speech synthesizer settings
    speechSynthesizer.setRate(1);
    speechSynthesizer.setPitch(1);
    speechSynthesizer.setVoice('Whisper'); //i believe this voice is only available on safari? so on the uni computers which sucks cause i'd like to have this voice for my project
    // console.log(speechSynthesizer.listVoices());

}


/**
Description of draw()
*/
function draw() {
    background(0);
  

}

function onResult() {

    console.log(speechRecognizer.resultString);

    if (speechRecognizer.resultString === questions[0]) {
        speechSynthesizer.speak(answers[0]);
    }
  
  }