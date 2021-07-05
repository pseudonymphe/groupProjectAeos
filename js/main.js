// SCREENS
let screenLanding = document.getElementById('screenLanding');
let screenIntroText = document.getElementById('screenIntroText');
let screenGame = document.getElementById('screenGame');
let gameOverScreen = document.getElementById('gameOver');
let gameEndScreen = document.getElementById('gameEnd');
let game = document.getElementById('game');

gameOverScreen.style.display = 'none';
gameEndScreen.style.display = 'none';

let playBtn = document.getElementById('playBtn');

// LANDING BUTTON
playBtn.addEventListener('click', function() {
  screenLanding.style.display = 'none';
  game = new Phaser.Game(config);
});
