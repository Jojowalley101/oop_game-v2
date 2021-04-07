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
        // const getPhraseCurrent = this.phrase.getRandomPhrase().charAt(i);
        // console.log(getPhraseCurrent);
        
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


        //Also, in your addPhraseToDisplay method, 
        //you need to give the letters li elements the 'hidden' className as well as the letter in the li element.
        //const getPhraseCurrent = this.phrase.getRandomPhrase().charAt(i);

        for (let i = 0; i < this.phrase.length; i++) {
            //const getPhraseCurrent = this.phrase.getRandomPhrase().charAt(i);
            //const phraseBuilder = `<li class="hide letter ${this.phrase[i]}" > ${this.phrase[i]}</li>`;
            const liElementInPhrase = document.createElement('li');
            const phraseInTheUL = document.getElementById('phrase');
            phraseInTheUL.appendChild(liElementInPhrase);
            //console.log(getPhraseCurrent);
            if (this.phrase[i] == ' ') {
                // liElementInPhrase.className.add('show');
                liElementInPhrase.classList.add('space');
                liElementInPhrase.textContent = this.phrase.charAt(i);
                console.log(liElementInPhrase);
                //liElementInPhrase.innerHTML = `<li class="space"> </li>`;
            } else {
                // liElementInPhrase.className.remove('show');
                //liElementInPhrase.className.remove('space');
                liElementInPhrase.classList.add('hide');
                liElementInPhrase.classList.add('letter');
                liElementInPhrase.classList.add(`${this.phrase.charAt(i)}`);
                liElementInPhrase.textContent = this.phrase.charAt(i);
                console.log(liElementInPhrase);
            }
            // phraseBuilder = `<li class="hide letter ${this.phrase[i]}" > ${this.phrase[i]}</li>`;
            //liElementInPhrase.textContent += this.phrase[i];
            //liElementInPhrase.innerHTML += phraseBuilder;
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
        const selectLetter = document.getElementsByClassName(letter);
        //console.log(selectLetter);
        for (let i = 0; i < selectLetter.length; i++) {
            selectLetter[i].classList.remove('hide');
            selectLetter[i].classList.add('show');
        }
    }
}


