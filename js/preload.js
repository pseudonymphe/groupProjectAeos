function preload ()
{
  // background
  this.load.image('bg-night', 'assets/backgrounds/bg-night-lg-blur.png');
  // platforms
  this.load.image('platform-start', 'assets/platforms/platform1.png');
  this.load.image('platform-island', 'assets/platforms/platform3.png');
  this.load.image('platform-island-float', 'assets/platforms/platform4.png');
  this.load.image('platform-sm', 'assets/platforms/platform-sm.png');
  this.load.image('platform-end', 'assets/platforms/platform1-reverse.png');
  // la personnage principale
  this.load.spritesheet('dude', 'assets/characters/mains/spriteRedGirl.png', { frameWidth: 41, frameHeight: 48 });
  // le chien et ses accessoires
  this.load.image('dog', 'assets/characters/mains/dog.png');
  this.load.image('dogBone', 'assets/objects/dog-bone.png');
  this.load.image('dogBowl', 'assets/objects/dog-bowl.png');
  this.load.image('dogHouse', 'assets/objects/dog-house.png');
  this.load.image('pawprint', 'assets/objects/pawprint.png');
  this.load.image('tag', 'assets/objects/tag.png');
  this.load.image('barricadeLg', 'assets/objects/barricade.png');
  this.load.image('barricadeSm', 'assets/objects/barricade-sm.png');

  this.load.image('bomb', 'assets/objects/bomb.png');
  // bullets
  this.load.image("bullet", "assets/objects/pills.png");
  // chargement des spritesheet zombie
  this.load.spritesheet("zombieGirl", "assets/characters/zombies/spriteZombieGirlBrown.png", { frameWidth: 42, frameHeight: 48 });
  this.load.spritesheet("zombieMan", "assets/characters/zombies/spriteZombieFairMan.png", { frameWidth: 41, frameHeight: 48 });
  this.load.spritesheet("zombieRedGirl", "assets/characters/zombies/spriteZombieGirl.png", { frameWidth: 42.99, frameHeight: 48 });
  this.load.spritesheet("zombieFairMan", "assets/characters/zombies/spriteZombieMan.png", { frameWidth: 41, frameHeight: 48 });
  
  //Chargement son mouvements
  this.load.audio('jump', 'assets/audio/jumping.wav');
  this.load.audio('walking', 'assets/audio/walk.wav');
  this.load.audio('shoot', 'assets/audio/shoot.wav');
  this.load.audio('biteZombie', 'assets/audio/soundZombie.wav');
  this.load.audio('fall', 'assets/audio/fall.wav');
  this.load.audio('dog', 'assets/audio/dog.wav');
  this.load.audio('die', 'assets/audio/die.wav');
  this.load.audio('win', 'assets/audio/win.mp3');
  //Chargement musique de fond
  this.load.audio('backgroundMusic', 'assets/audio/8bit-adventure.ogg');
}
