/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js  
 * ask Samee how to translate the phrase if the user selects the language (at the end) */





"use strict";

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */

    addPhraseToDisplay() {
        const phraseDisplay = '';
        const phraseDom = document.getElementById('phrase').getElementsByTagName('ul')[0];

        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] !== ' ') {
                phraseDisplay += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            } else {
                phraseDisplay += `<li class="hide space"> </li>`;
            }
        }
        phraseDom.innerHTML = phraseDisplay;
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


