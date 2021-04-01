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
    */

    addPhraseToDisplay() {
        const phraseDom = document.getElementById('phrase').getElementsByTagName('ul')[0];

        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] !== ' ') {
                this.activePhrase += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            } else {
                this.activePhrase += " ";
            }
        }
        phraseDom.innerHTML = this.activePhrase;
    }

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


