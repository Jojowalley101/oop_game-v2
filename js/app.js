/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// let game;
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// const game = new Game();
// const phrase = new Phrase();

let game = null;
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();


document.getElementById('btn__reset').addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
    //const liElementInPhrasePart2 = document.getElementsByTagName('li');
    //const phraseInTheULPart2 = document.querySelector('#phrase ul');

    //game.handleInteraction(e.target);
    //thisstyle.display = 'none';
    //document.querySelector('#phrase').style.opacity = '1';
});

const keySelectors = document.querySelectorAll('.key');
// const keysInDom = document.getElementById('qwerty');

for (let i = 0; i < keySelectors.length; i++) {
    keySelectors[i].addEventListener('click', e => {
        game.handleInteraction(e.target);
    });
}

document.addEventListener('keypress', e => {
    if (!game) {
        return;
    }
    for (let i = 0; i < keySelectors.length; i++) {
        if (keySelectors[i].innerHTML === e.key) {
            keySelectors[i].click();
        }
    }
});

// keySelectors.forEach(letterOfButton => {
//     letterOfButton.addEventListener('click', function() {
//         game.handleInteraction(this);
//     });
// });

// document.addEventListener('keyup', ({lettersOfKey}) => {
//     document.querySelectorAll('key').forEach(letterOfButton => {
//         if (letterOfButton.textContent === lettersOfKey && !letterOfButton.disabled) {
//             game.handleInteraction(letterOfButton);
//         }
//     });
// });

// const firstRow = keysInDom[0];
// firstRow.addEventListener('click', () => {
//     game.handleInteraction(firstRow);
// });
// const firstRow1 = keysInDom[1];
// firstRow.addEventListener('click', () => {
//     game.handleInteraction(firstRow1);
// });
// const firstRow2 = keysInDom[2];
// firstRow2.addEventListener('click', () => {
//     game.handleInteraction(firstRow2);
// });
// const firstRow3 = keysInDom[3];
// firstRow3.addEventListener('click', () => {
//     game.handleInteraction(firstRow3);
// });
// const firstRow4 = keysInDom[4];
// firstRow4.addEventListener('click', () => {
//     game.handleInteraction(firstRow4);
// });
// const firstRow5 = keysInDom[5];
// firstRow5.addEventListener('click', () => {
//     game.handleInteraction(firstRow5);
// });
// const firstRow6 = keysInDom[6];
// firstRow6.addEventListener('click', () => {
//     game.handleInteraction(firstRow6);
// });
// const firstRow7 = keysInDom[7];
// firstRow7.addEventListener('click', () => {
//     game.handleInteraction(firstRow7);
// });
// const firstRow8 = keysInDom[8];
// firstRow8.addEventListener('click', () => {
//     game.handleInteraction(firstRow8);
// });
// const firstRow9 = keysInDom[9];
// firstRow9.addEventListener('click', () => {
//     game.handleInteraction(firstRow9);
// });

// const secondRow = keysInDom[10];
// secondRow.addEventListener('click', () => {
//     game.handleInteraction(secondRow);
// });
// const secondRow1 = keysInDom[11];
// secondRow1.addEventListener('click', () => {
//     game.handleInteraction(secondRow1);
// });
// const secondRow2 = keysInDom[12];
// secondRow2.addEventListener('click', () => {
//     game.handleInteraction(secondRow2);
// });
// const secondRow3 = keysInDom[13];
// secondRow3.addEventListener('click', () => {
//     game.handleInteraction(secondRow3);
// });
// const secondRow4 = keysInDom[14];
// secondRow4.addEventListener('click', () => {
//     game.handleInteraction(secondRow4);
// });
// const secondRow5 = keysInDom[15];
// secondRow5.addEventListener('click', () => {
//     game.handleInteraction(secondRow5);
// });
// const secondRow6 = keysInDom[16];
// secondRow6.addEventListener('click', () => {
//     game.handleInteraction(secondRow6);
// });
// const secondRow7 = keysInDom[17];
// secondRow7.addEventListener('click', () => {
//     game.handleInteraction(secondRow7);
// });
// const secondRow8 = keysInDom[18];
// secondRow8.addEventListener('click', () => {
//     game.handleInteraction(secondRow8);
// });

// const thirdRow = keysInDom[19];
// thirdRow.addEventListener('click', () => {
//     game.handleInteraction(thirdRow);
// });

// const thirdRow1 = keysInDom[20];
// thirdRow1.addEventListener('click', () => {
//     game.handleInteraction(thirdRow1);
// });

// const thirdRow2 = keysInDom[21];
// thirdRow2.addEventListener('click', () => {
//     game.handleInteraction(thirdRow2);
// });

// const thirdRow3 = keysInDom[22];
// thirdRow3.addEventListener('click', () => {
//     game.handleInteraction(thirdRow3);
// });

// const thirdRow4 = keysInDom[23];
// thirdRow4.addEventListener('click', () => {
//     game.handleInteraction(thirdRow4);
// });

// const thirdRow5 = keysInDom[24];
// thirdRow5.addEventListener('click', () => {
//     game.handleInteraction(thirdRow5);
// });

// const thirdRow6 = keysInDom[25];
// thirdRow6.addEventListener('click', () => {
//     game.handleInteraction(thirdRow6);
// });

// const thirdRow7 = keySelectors[26];
// thirdRow7.addEventListener('click', () => {
//     game.handleInteraction(thirdRow7);
// });

// document.querySelectorAll('.key').addEventListener('click', e => {
//     console.log(e.target.value);
//     game.handleInteraction(e.target);

// });