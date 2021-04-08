/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


"use strict";

class Game {
    constructor() {
        this.missed = 0;
        // this.phrases = [new Phrase('a')];
        this.phrases = [ new Phrase('Becoming is better than being'),
        new Phrase('A company that cannot self-correct cannot thrive'),
        new Phrase('Teaching is a wonderful way to learn'),
        new Phrase('A growth mindset is belief you can develop abilities'),
        new Phrase('You have to work hardest for the things you love most'),
        new Phrase('This is hard This is fun'),
        new Phrase('Representation matters'),
        new Phrase('Dedication hardwork plus patience'),
        new Phrase('The marathon continues'),
        new Phrase('You are what you choose to be'),
        new Phrase('Do not let them dim your light')
        ];
        this.activePhrase = null;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhrases = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrases;
    }

    startGame() {
        document.getElementById('overlay').style.visibility = 'hidden';
        const randomPhrase = this.getRandomPhrase();
        this.activePhrase = randomPhrase;
        console.log(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    * And I would recommend setting up the click handler on the onscreen keyboard keys, 
    * so you can call game.handleInteraction in that click handler, 
    * so you can more easily test the keys.  
    * hen try logging out what you're passing to the method.  
    * If you pass the button that was clicked to the method, 
    * then that is what you'll be disabling.
    */

    handleInteraction(button) {
        // console.log(button);
        //Disable the selected letter’s onscreen keyboard button.
        const checkLetter = document.querySelectorAll('.chosen');
        checkLetter = 'disabled';
        const wrongGuess = document.querySelectorAll('.wrong');
        //console.log(button);
        //If the phrase does not include the guessed letter, 
        //add the wrong CSS class to the selected letter's keyboard button 
        //and call the removeLife() method.
        console.log(button);
        if (!this.activePhrase.checkLetter) {
            button = wrongGuess;
            this.removeLife();

            //this.activePhrase.showMatchedLetter(checkLetter);
        } else if (this.checkForWin() == true) {
            this.gameOver();
        
        //If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, 
        //call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. 
        //If the player has won the game, also call the gameOver() method.
        } else if (this.activePhrase.checkLetter) {
            this.activePhrase.showMatchedLetter(checkLetter);
        }

        // document.querySelector('button').onclick=function() {
        //     //alert('clicked');
        // }
        //console.log(button);
    }

    // handleInteraction(button) {
    //     console.log(button);
    // };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    *  
    * And for the removeLife method, make sure you're inspecting the DOM and 
    * checking out the elements panel so you know how the markup is structured.  
    * The 'tries' elements are li elements.  
    * So you should be able to use the this.missed property along with bracket notation 
    * to target one of the li elements, 
    * and then you just need set its innerHTML 
    * to equal to an img tag like what you find in the index.html file, 
    * but with the lostHeart image instead of the liveHeart image
    */

    removeLife() {
        const livesLost = document.getElementsByClassName('tries');
        const missedLives = this.missed[livesLost];
        //console.log(livesLost[this.missed]);
        // const lifeRemover = document.getElementById('scorebaord');
        //const liveHeart = document.
        //livesLost[this.missed].src = 'images/lostHeart.png';
        //livesLost[this.missed].getAttribute('img src');
        //console.log(livesLost[this.missed].getAttribute('src'));
        this.missed += 1;
        missedLives.innerHTML = `<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">`;

        if (this.missed === 5) {
            // livesLost -= 1;
            this.gameOver(true);
        } else {
            this.gameOver(false);
            // livesLost -= 1;
        }
        //console.log(this.removeLife);
       
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */

    checkForWin() {
        // const phraseChecker = document.getElementById('phrase');
        const lettersHidden = document.querySelectorAll(`[class^="hide letter"]`);
        //console.log(lettersHidden);
        //console.log(lettersHidden.length);
        // for (let i = 0; i < lettersHidden.length; i++) {
        if (lettersHidden.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */

    gameOver(gameWon) {
        if (gameWon !== true) {
            document.getElementById('game-over-message');
        } 
    }
}


