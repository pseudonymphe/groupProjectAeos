var config = {
    // La type propriété peut être Phaser.CANVAS, Phaser.WEBGL ou Phaser.AUTO.
    // C'est le contexte de rendu que vous souhaitez utiliser pour votre jeu.
    // La valeur recommandée est celle Phaser.AUTO qui essaie automatiquement d'utiliser WebGL,
    //  mais si le navigateur ou l'appareil ne le prend pas en charge, il reviendra à Canvas.
    type: Phaser.AUTO,
    width: 1200,
    height: 1010,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
};

var player;
var platforms;
var dogs;
var dogBone;
var dogHouse;
var dogBowl;
var pawprint;
var tag;

// mise en place d'une variable boutonFeu
var btnFire;  
// mise en place d'une variable groupeBullets
var groupeBullets;  
// mise en place d'une variable groupeZombies
var groupeZombies;

//score
var score = 0; 
var scoreText;

var walking = false;
var zombieGirl;
