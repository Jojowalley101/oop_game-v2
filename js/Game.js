/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


"use strict";

class Game {
    constructor() {
        this.missed = 0;
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
        // { phrase: '' },
        // { phrase: '' },
        // { phrase: '' },
        // { phrase: '' },
        // { phrase: '' },
        // { phrase: '' },
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
        this.activePhrase.addPhraseToDisplay;
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */

    handleInteraction() {
        //Disable the selected letter’s onscreen keyboard button.

        //If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.

        //If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, 
        //call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. 
        //If the player has won the game, also call the gameOver() method.

        
        document.querySelector('button').onclick=function() {
            alert('clicked');
        }
    }
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */

    removeLife() {
        this.missed += 1;
        const livesLost = document.getElementsByClassName('tries');
        if (livesLost in missed) {
            livesLost -= 1;
        } else {
            livesLost += 1;
        }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */

    checkForWin() {
        if (document.getElementById('scoreboard') == 5) {
            alert('Good job! You won!');
        } else {
            alert('Better luck next time :)');
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


