class End extends Phaser.Scene {
    constructor() {
        super({
            key: 'end'
        });
    }

    create() {

        const dialogueBox = this.add.graphics();
        dialogueBox.fillStyle(0xffffff, 0.8);
        dialogueBox.fillRoundedRect(700, 950, 600, 100, 20);
        dialogueBox.setDepth(1); //makes it go over all other elements

        //create text to display dialogue
        const dialogueText = this.add.text(720, 970, '', { fontFamily: 'Arial', fontSize: 20, color: '#FFFFFFF', wordWrap: { width: 560 }, align: 'center', padding: { x: 10 } });
        dialogueText.setDepth(2); //makes it go over dialogue box
        
        //display the dialogue at the current index
        dialogueText.setText("You've tended to all the customers of the day. (End of the game)");
    }
}