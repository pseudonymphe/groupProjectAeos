function create() {

  //BACKGROUND MUSIC
  var backgroundMusic;
  backgroundMusic = this.sound.add('backgroundMusic');
  backgroundMusic.play();

  // BACKGROUND IMG
  this.add.image(1999, 500, 'bg-night');

  // PLATFORMS
  platforms = this.physics.add.staticGroup();

  // // ordered left to right
  platforms.create(140, 905, 'platform-start').setScale(0.85).refreshBody();
  platforms.create(450, 800, 'platform-sm').setScale(0.45).refreshBody();
  platforms.create(750, 880, 'platform-island').setScale(0.75).refreshBody();

  platforms.create(715, 615, 'platform-sm').setScale(0.25).refreshBody();
  platforms.create(860, 700, 'platform-sm').setScale(0.25).refreshBody();
  
  platforms.create(340, 560, 'platform-island-float').setScale(0.5).refreshBody();
  platforms.create(95, 465, 'platform-sm').setScale(0.25).refreshBody();
  platforms.create(300, 400, 'platform-sm').setScale(0.50).refreshBody();
  
  // // DOG BONE position
  platforms.create(675, 350, 'platform-island-float').setScale(0.5).refreshBody();

  platforms.create(1105, 345, 'platform-sm').setScale(0.25).refreshBody();
  platforms.create(1305, 299, 'platform-sm').setScale(0.25).refreshBody();

  platforms.create(1055, 685, 'platform-sm').setScale(0.25).refreshBody();

  // // PAWPRINT position
  platforms.create(1428, 668, 'platform-island-float').setScale(0.5).refreshBody();
  platforms.create(1640, 360, 'platform-island-float').setScale(0.40).refreshBody();

  platforms.create(1750, 580, 'platform-sm').setScale(0.25).refreshBody();
  platforms.create(1950, 530, 'platform-sm').setScale(0.25).refreshBody();
  platforms.create(1850, 660, 'platform-sm').setScale(0.25).refreshBody();
  // // DOG TAG position
  platforms.create(2120, 875, 'platform-island').setScale(0.85).refreshBody();

  platforms.create(2150, 480, 'platform-sm').setScale(0.5).refreshBody();
  platforms.create(2400, 430, 'platform-sm').setScale(0.5).refreshBody();
  // // DOG HOUSE position
  platforms.create(2150, 180, 'platform-island-float').setScale(0.45).refreshBody();
  platforms.create(2450, 250, 'platform-sm').setScale(0.25).refreshBody();
  platforms.create(2550, 340, 'platform-sm').setScale(0.25).refreshBody();
  platforms.create(2925, 300, 'platform-island-float').setScale(0.45).refreshBody();

  platforms.create(2390, 790, 'platform-sm').setScale(0.25).refreshBody();
  platforms.create(2580, 710, 'platform-sm').setScale(0.25).refreshBody();
  platforms.create(2700, 650, 'platform-sm').setScale(0.25).refreshBody();
  platforms.create(2770, 600, 'platform-sm').setScale(0.25).refreshBody();

  platforms.create(3025, 550, 'platform-island-float').setScale(0.35).refreshBody();
  platforms.create(3250, 580, 'platform-sm').setScale(0.25).refreshBody();
  // // DOG BOWL position
  platforms.create(3400, 640, 'platform-sm').setScale(0.45).refreshBody();
  // // DOG
  platforms.create(3850, 905, 'platform-end').setScale(1).refreshBody();

  //Son mouvement
  this.walking = this.sound.add('walking');
  this.jump = this.sound.add('jump');
  this.shoot = this.sound.add('shoot');
  this.biteZombie= this.sound.add('biteZombie');
  this.fall= this.sound.add('fall');
  this.dog= this.sound.add('dog');
  this.win= this.sound.add('win');
  this.die= this.sound.add('die');

  // PLAYER CONFIGURATION
  player = this.physics.add.sprite(65, 770, 'dude');
  player.setBounce(0.1);
  player.setCollideWorldBounds(false);

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', {
      start: 0,
      end: 3
    }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'turn',
    frames: [
      {
        key: 'dude',
        frame: 4
      }
    ],
    frameRate: 20
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', {
      start: 5,
      end: 8
    }),
    frameRate: 10,
    repeat: -1
  });

  //Création du Zombie Girl qui se déplace
  this.anims.create({
    key: 'walkRight',
    frames: this.anims.generateFrameNumbers('zombieGirl', { start: 5, end: 8 }),
    frameRate: 5,
    repeat: -1
  });

  this.anims.create({
    key: 'walkLeft',
    frames:this.anims.generateFrameNumbers('zombieGirl', { start: 0, end: 3 }),
    frameRate: 5,
    repeat: -1
  });

  zombieGirl = this.physics.add.sprite(120, 505).play('walkRight');
  zombieGirl.setBounce(0.1);
  zombieGirl.setCollideWorldBounds(false);
  this.physics.add.collider(zombieGirl, platforms)

  this.tweens.add({
    targets: zombieGirl,
    x: 300,
    duration: 8800,
    ease: 'Linear',
  });

//Création du  Man qui se déplace
  this.anims.create({
    key: 'ZombieManWalkRight',
    frames:this.anims.generateFrameNumbers('zombieMan', { start: 5, end: 8 }),
    frameRate: 5,
    repeat: -1
  });

  this.anims.create({
    key: 'ZombieManWalkLeft',
    frames:this.anims.generateFrameNumbers('zombieMan', { start: 0, end: 3 }),
    frameRate: 5,
    repeat: -1
  });

  zombieMan = this.physics.add.sprite(1250, 612).play('ZombieManWalkRight')
  zombieMan.setBounce(0.1);
  zombieMan.setCollideWorldBounds(true);
  this.physics.add.collider(zombieMan, platforms);

  this.tweens.add({
    targets: zombieMan,
    x: 1350,
    duration: 8800,
    ease: 'Linear',
  });

    //Création du Zombie Red Girl qui se déplace
    this.anims.create({
      key: 'ZombieRedGirlWalkRight',
      frames:this.anims.generateFrameNumbers('zombieRedGirl', { start: 5, end: 8 }),
      frameRate: 5,
      repeat: -1
    });
  
    this.anims.create({
      key: 'ZombieRedGirlWalkLeft',
      frames:this.anims.generateFrameNumbers('zombieRedGirl', { start: 0, end: 3 }),
      frameRate: 5,
      repeat: -1
    });
  
    zombieRedGirl = this.physics.add.sprite(470, 300).play('ZombieRedGirlWalkRight');
    zombieRedGirl.setBounce(0.1);
    zombieRedGirl.setCollideWorldBounds(false);
    this.physics.add.collider(zombieRedGirl, platforms)

    this.tweens.add({
      targets: zombieRedGirl,
      x: 620,
      duration: 8800,
      ease: 'Linear',
    });

    //Création du Zombie Fair Man qui se déplace
    this.anims.create({
      key: 'ZombieFairManWalkRight',
      frames:this.anims.generateFrameNumbers('zombieFairMan', { start: 5, end: 8 }),
      frameRate: 5,
      repeat: -1
    });
  
    this.anims.create({
      key: 'ZombieFairManWalkLeft',
      frames:this.anims.generateFrameNumbers('zombieFairMan', { start: 0, end: 3 }),
      frameRate: 5,
      repeat: -1
    });
  
    zombieFairMan = this.physics.add.sprite(1500, 300).play('ZombieFairManWalkRight');
    zombieFairMan.setBounce(0.1);
    zombieFairMan.setCollideWorldBounds(false);
    this.physics.add.collider(zombieFairMan, platforms)

    this.tweens.add({
      targets: zombieFairMan,
      x: 1620,
      duration: 8800,
      ease: 'Linear',
    });

  // écouteur d'événement clavier
  cursors = this.input.keyboard.createCursorKeys();

  // Afin de permettre au joueur d'entrer en collision avec les plates-formes,
  this.physics.add.collider(player, platforms);

  // création d'un groupe d'éléments vide
  groupeBullets = this.physics.add.group();

  // ajout de 8 ennemi espacées de 500 pixels
  barricadeLg = this.physics.add.group({
    key: 'barricadeLg',
    repeat: 20,
    setXY: {
      x: 240,
      y: 0,
      stepX: 500
    }
  });
  barricadeSm = this.physics.add.group({
    key: 'barricadeSm',
    repeat: 20,
    setXY: {
      x: 570,
      y: 0,
      stepX: 500
    }
  });

  // DEATHS /////////////////////////////////////////////////////////////////////////
  this.physics.add.overlap(player, barricadeLg, () => {
    gameOverScreen.style.display = 'block';
    this.physics.pause();
    this.tweens.pauseAll();
    this.anims.pauseAll();
    this.sound.pauseAll();
    this.die.play();
    // redemarrage de jeu si on click
    this.input.on('pointerup', () => {
      gameOverScreen.style.display = 'none';
      this.scene.restart();
      this.anims.resumeAll();
      score = 0;
    })
  });
  this.physics.add.overlap(player, barricadeSm, () => {
    gameOverScreen.style.display = 'block';
    this.physics.pause();
    this.tweens.pauseAll();
    this.anims.pauseAll();
    this.sound.pauseAll();
    this.die.play();
    // redemarrage de jeu si on click
    this.input.on('pointerup', () => {
      gameOverScreen.style.display = 'none';
      this.scene.restart();
      this.anims.resumeAll();
      score = 0;
    })
  });
  this.physics.add.overlap(player, zombieGirl, () => {
    gameOverScreen.style.display = 'block';
    this.physics.pause();
    this.tweens.pauseAll();
    this.anims.pauseAll();
    this.sound.pauseAll();
    this.biteZombie.play();
    // redemarrage de jeu si on click
    this.input.on('pointerup', () => {
      gameOverScreen.style.display = 'none';
      this.scene.restart();
      this.anims.resumeAll();
      score = 0;
    })
  });

  this.physics.add.overlap(player, zombieMan, () => {
    gameOverScreen.style.display = 'block';
    this.physics.pause();
    this.tweens.pauseAll();
    this.anims.pauseAll();
    this.sound.pauseAll();
    this.biteZombie.play();
    // redemarrage de jeu si on click
    this.input.on('pointerup', () => {
      gameOverScreen.style.display = 'none';
      this.scene.restart();
      this.anims.resumeAll();
      score = 0;
    })
  });

  this.physics.add.overlap(player, zombieRedGirl, () => {
    gameOverScreen.style.display = 'block';
    this.physics.pause();
    this.tweens.pauseAll();
    this.anims.pauseAll();
    this.sound.pauseAll();
    this.biteZombie.play();
    // redemarrage de jeu si on click
    this.input.on('pointerup', () => {
      gameOverScreen.style.display = 'none';
      this.scene.restart();
      this.anims.resumeAll();
      score = 0;
    })
  });

  this.physics.add.overlap(player, zombieFairMan, () => {
    gameOverScreen.style.display = 'block';
    this.physics.pause();
    this.tweens.pauseAll();
    this.anims.pauseAll();
    this.sound.pauseAll();
    this.biteZombie.play();
    // redemarrage de jeu si on click
    this.input.on('pointerup', () => {
      gameOverScreen.style.display = 'none';
      this.scene.restart();
      this.anims.resumeAll();
      score = 0;
    })
  });
  //////////////////////////////////////////////////////////////////////////////////

  // ajout du modèle de collision entre ennemi et plate-formes
  this.physics.add.collider(barricadeLg, platforms);
  this.physics.add.collider(barricadeSm, platforms);

  // fonction déclenchée lorsque uneBalle et un zombie se superposent
  function hit(uneBalle, unzombie) {
    uneBalle.destroy();
    unzombie.destroy();
  }

  this.physics.add.overlap(groupeBullets, barricadeLg, hit, null, this);
  this.physics.add.overlap(groupeBullets, barricadeSm, hit, null, this);

  this.physics.add.overlap(groupeBullets, zombieMan, hit, null, this);
  zombieMan.pointsVie = Phaser.Math.Between(2, 5);

  this.physics.add.overlap(groupeBullets, zombieGirl, hit, null, this);
  zombieGirl.pointsVie = Phaser.Math.Between(2, 5);

  this.physics.add.overlap(groupeBullets, zombieRedGirl, hit, null, this);
  zombieRedGirl.pointsVie = Phaser.Math.Between(2, 5);

  this.physics.add.overlap(groupeBullets, zombieFairMan, hit, null, this);
  zombieFairMan.pointsVie = Phaser.Math.Between(2, 5);

  // modification des zombies créées
  barricadeLg.children.iterate(function(barricadeLgTrouvee) {
    barricadeLgTrouvee.pointsVie = Phaser.Math.Between(1, 5);
    barricadeLgTrouvee.y = Phaser.Math.Between(550, 150);
  });
  barricadeSm.children.iterate(function(barricadeSmTrouvee) {
    barricadeSmTrouvee.pointsVie = Phaser.Math.Between(1, 5);
    barricadeSmTrouvee.y = Phaser.Math.Between(550, 150);
  });
  function hit(bullet, barricadeLg) {
    barricadeLg.pointsVie--;
    if (barricadeLg.pointsVie == 0) {
      barricadeLg.destroy();
    }
    bullet.destroy();
  }
  function hit(bullet, barricadeSm) {
    barricadeSm.pointsVie--;
    if (barricadeSm.pointsVie == 0) {
      barricadeSm.destroy();
    }
    bullet.destroy();
  }

  // SCROLL CONFIGURATION
  this.physics.world.setBounds(0, 0, 4000, 1000);
  this.cameras.main.startFollow(player);
  this.cameras.main.setBounds(0, 0, 4000, 1000);

  // DOG ITEMS
  // // PAWPRINT / EMPREINTE
  pawprints = this.physics.add.group({
    key: 'pawprint',
    repeat: 0,
    setXY: { x: 1428, y: 590, stepX: 70 }
  });

  // // DOG TAG
  tags = this.physics.add.group({
      key: 'tag',
      repeat: 0,
      setXY: { x: 2120, y: 655, stepX: 70 }
  });

  // // DOG HOUSE
  dogHouses = this.physics.add.group({
      key: 'dogHouse',
      repeat: 0,
      setXY: { x: 2150, y: 100, stepX: 70 }
  });

  // // DOG BOWL
  dogBowls = this.physics.add.group({
    key: 'dogBowl',
    repeat: 0,
    setXY: { x: 3400, y: 520, stepX: 70 }
  });

  // // DOG BONE
  dogBones = this.physics.add.group({
      key: 'dogBone',
      repeat: 0,
      setXY: { x: 675, y: 250, stepX: 70 }
  });

  // // DOG
  dogs = this.physics.add.group();

  // SCORE
  scoreText = this.add.text(16, 16, 'Items: 0/5', {
    fontSize: '32px',
    fill: '#FFF'
  }).setScrollFactor(0); 

  //  Collide the player and the stars with the platforms
  this.physics.add.collider(player, platforms);
  this.physics.add.collider(pawprints, platforms);
  this.physics.add.collider(dogs, platforms);
  this.physics.add.collider(dogBones, platforms);
  this.physics.add.collider(dogBowls, platforms);
  this.physics.add.collider(dogHouses, platforms);
  this.physics.add.collider(tags, platforms);

  //  Checks to see if the player overlaps with any of the stars, if it does, call the collectStar function
  this.physics.add.overlap(player, pawprints, collectStar, null, this);
  this.physics.add.overlap(player, dogBones, collectStar, null, this);
  this.physics.add.overlap(player, dogBowls, collectStar, null, this);
  this.physics.add.overlap(player, dogHouses, collectStar, null, this);
  this.physics.add.overlap(player, tags, collectStar, null, this);
  this.physics.add.collider(player, dogs, hitdog, null, this);

   // COLLECTION OF ITEMS
  function collectStar (player, pawprint, dogBone, dogBowl, dogHouse, tag)
  {
    pawprint.disableBody(true, true);
    score += 1;
    scoreText.setText('Items: ' + score + '/5');   

    // condition to spawn the dog if all items are collected
    if (pawprints.countActive(true) === 0 && dogBones.countActive(true) === 0 && dogBowls.countActive(true) === 0 && dogHouses.countActive(true) === 0 && tags.countActive(true) === 0)
    {
      // dog position on last platform
      var dog = dogs.create(3860, 700, 'dog');
      dog.setCollideWorldBounds(true);
      dog.allowGravity = false;
      this.dog.play();
    }
  }

  // END OF GAME
  function hitdog (player, dog)
  {
    this.physics.pause();

    player.anims.play('turn');

    this.physics.pause();
    this.tweens.pauseAll();
    this.anims.pauseAll();
    this.sound.pauseAll();
    this.win.play();

    gameEndScreen.style.display = 'block';

    this.input.on('pointerup', () => {
      gameEndScreen.style.display = 'none';
      this.scene.restart();
      this.anims.resumeAll();
      score = 0;
    })
  }
}
