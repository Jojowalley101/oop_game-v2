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

for (let i = 0; i < keySelectors.length; i++) {
    keySelectors[i].addEventListener('click', e => {
        game.handleInteraction(e.target);
    });
    
}
// document.querySelectorAll('.key').addEventListener('click', e => {
//     console.log(e.target.value);
//     game.handleInteraction(e.target);

// });