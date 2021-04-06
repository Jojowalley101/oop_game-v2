/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js  
 */

"use strict";

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    * Each letter is presented by an empty box, one li element for each letter
    * When the player correctly guesses a letter, the empty box is replaced with the matched letter
    */

    addPhraseToDisplay() {
        const getPhraseCurrent = game.getRandomPhrase().split(" ");
        
        //select phrase div to insert phrase there
        // create empty string to add a class to every letter of the phrase
        // follow for loop below 
        // if the phrase isnt = to an empty string then add a template literal of the phrase li class
        // do same for displaying and hiding phrase into 
        // do the temp literal of exact line (of example phrase html)
        // insertAdjacent or innerHTML


        //build string and then add it in to the string 
        // li of letter or if space then li of space 
        // const liElementInPhrase = document.createElement('li');
        // liElementInPhrase.textContent = getPhraseCurrent[i];
        



        //const liString = `<li class="hide letter ${this.phrase[i]}">h</li>`
        // to note a space = this.phrase[i] == ' ';
        // for (const c of this.phrase)
        // select phrase element within index.html (append it)


        for (let i = 0; i < getPhraseCurrent.length; i++) {
            const liElementInPhrase = document.createElement('li');
            liElementInPhrase.textContent = getPhraseCurrent[i];
            const phraseInTheUL = document.getElementById('phrase');
            phraseInTheUL.appendChild(liElementInPhrase);

            if (liElementInPhrase.textContent == ' ') {
                liElementInPhrase.className = 'space';

            } else {
                liElementInPhrase.className = 'letter';
            }
        }
    }




            //const li = document.querySelector('#phrase ul li');
            // li.innerHTML = this.phrase[i];
            //.classList.add('hide', 'letter', `${this.phrase[i]}`);
            
            // phraseDom.appendChild()
            // if (this.phrase[i] !== ' ') {
            //     this.activePhrase += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            // } else {
            //     this.activePhrase += " ";
            // }
        // phraseDom.innerHTML = this.activePhrase;
        //console.log(this.addPhraseToDisplay());

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */

    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */

    showMatchedLetter(letter) {
        const selectLetter = document.getElementsByClassName(letter)
        selectLetter.forEach(element => {
            element.className.remove('hide');
            element.className.add('show');
        });
    }
}


