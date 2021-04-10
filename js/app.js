/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game = null;
document.getElementById('btn__reset').addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});

const keySelectors = document.querySelectorAll('.key');

for (let i = 0; i < keySelectors.length; i++) {
    keySelectors[i].addEventListener('click', e => {
        game.handleInteraction(e.target);
    });
}