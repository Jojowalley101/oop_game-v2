/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


"use strict";

class Game {
    constructor() {
        this.missed = 0;
        // this.phrases = [new Phrase('a')];
        this.phrases = [ new Phrase('Becoming is better than being'),
        new Phrase('A company that cannot self correct cannot thrive'),
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
        //this.usedPhrases = [];
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
        document.getElementById('overlay').style.display= 'none';
        const randomPhrase = this.getRandomPhrase();
        this.activePhrase = randomPhrase;
        //console.log(this.activePhrase);
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
        //const chosenLetter = document.querySelectorAll('#chosen');
        button.disabled = true;
        // const buttonOfCSS = document.querySelectorAll('#button')
        //const wrongGuess = document.querySelectorAll('#wrong');
        //console.log(button);
        //If the phrase does not include the guessed letter, 
        //add the wrong CSS class to the selected letter's keyboard button 
        //and call the removeLife() method.
        //console.log(button);
        if (this.activePhrase.checkLetter(button.innerHTML)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.innerHTML);

            //this.activePhrase.showMatchedLetter(checkLetter);
        //If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, 
        //call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. 
        //If the player has won the game, also call the gameOver() method.
        } else {
            //console.log(this.activePhrase);
            button.classList.add('wrong');
            this.removeLife();

        }
        //this.usedPhrases.push(button);

        if (this.checkForWin() === true) {
            // button.classList.remove('wrong');
            //button.classList.add('chosen');
            this.gameOver(true);
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
        //console.log(livesLost);
        const missedLives = livesLost[this.missed].getElementsByTagName('img')[0];
        //console.log(missedLives);
        missedLives.src = "images/lostHeart.png";

        //console.log(livesLost[this.missed]);
        // const lifeRemover = document.getElementById('scorebaord');
        //const liveHeart = document.
        //livesLost[this.missed].src = 'images/lostHeart.png';
        //livesLost[this.missed].getAttribute('img src');
        //console.log(livesLost[this.missed].getAttribute('src'));
        this.missed += 1;
    

        if (this.missed === 5) {
            // livesLost -= 1;
            this.gameOver(false);
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
        const gameOverDisplay = document.getElementById('game-over-message');
        const gameOverYESORNO = document.getElementById('overlay');
        gameOverYESORNO.style.display = 'inherit';
        //console.log(gameOverYESORNO);
        if (gameWon === true) {
            gameOverDisplay.innerHTML = `Congrats you win`;
            gameOverYESORNO.className = 'win';
        } else {
            
            gameOverDisplay.innerHTML = `Better Luck Next Time`;
            //gameOverYESORNO.classList = 'win';
            //gameOverYESORNO.parentElement.remove('win');
            gameOverYESORNO.className = 'lose';
        }
        console.log(gameOverYESORNO);
        const enableButtonsNow = document.getElementsByClassName('key');
        for (let i = 0; i < enableButtonsNow.length; i++) {
            enableButtonsNow[i].disabled = false;
            enableButtonsNow[i].classList.remove('wrong');
            enableButtonsNow[i].classList.remove('chosen');
        }
        //const livesGainedBack = document.getElementsByClassName('tries');
        const reincarnated = document.querySelectorAll('img');
        for (let i = 0; i < reincarnated.length; i++) {
            reincarnated[i].src = "images/liveHeart.png";
        }
        document.querySelector('#phrase ul').innerHTML = '';



        //this.activePhrase = null;
        // const ulAgain = document.querySelector("ul");
        // ulAgain.innerHTML = " ";
        //this.activePhrase.default = true;
        // const resetingGameNow = document.querySelector('#phrase ul');
        // while (resetingGameNow.firstChild) {
        //     resetingGameNow.removeChild(resetingGameNow.firstChild);
        // }
        //const resetingGameNow = document.querySelectorAll('btn__reset');
        //for (let i = 0; i < resetingGameNow.length; i++) {
            //resetingGameNow[i] = this.activePhrase.remove(addPhraseToDisplay());
        // for (let i = 0; i < ) {
        // }
    }
}

