function update() {

  if (cursors.left.isDown) {
    player.setVelocityX(-160);

    player.anims.play('left', true);

  //permet de répéter le son quand le personnage marche en continu
  if (walking === false) {
      walking = true;
      this.walking.play();
      setTimeout(() => {
        walking = false;
        }, 500)
      }
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play('right', true);
    if (walking === false) {
      walking = true;
      this.walking.play();
      setTimeout(() => {
          walking = false;
          }, 500)
      }
  } else {
    player.setVelocityX(0);
    player.anims.play('turn');
  }
  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
    this.jump.play();
  }
  cursors = this.input.keyboard.createCursorKeys();
  if (cursors.left.isDown) {

    // enregistrement de la direction : gauche
    player.direction = 'left';
    player.setVelocityX(-160);
    player.anims.play('left', true);
  } else if (cursors.right.isDown) {

    // enregistrement de la direction : droite
    player.direction = 'right';
    player.setVelocityX(160);
    player.anims.play('right', true);
  }
  // affectation de la touche A à boutonFeu
  btnFire = this.input.keyboard.addKey('A');
  //fonction tirer( ), prenant comme paramètre l'auteur du tir
  function tirer(player) {
    // mesasge d'alerte affichant les attributs de player
    alert("joueur en position" + player.x + "," + player.y + ", direction du tir: " + player.direction);
  }

  // déclenchement de la fonction tirer() si appui sur boutonFeu
  if (Phaser.Input.Keyboard.JustDown(btnFire)) {
    tirer(player);
    this.shoot.play();
  }
  function tirer(player) {
    var coefDir;
    if (player.direction == 'left') {
      coefDir = -1;
    } else {
      coefDir = 1
    }
    // on crée la balle a coté du joueur
    var bullet = groupeBullets.create(player.x + (25 * coefDir), player.y - 4, 'bullet');
    // parametres physiques de la balle.
    bullet.setCollideWorldBounds(false);
    bullet.body.allowGravity = true;
    bullet.setVelocity(500 * coefDir, 0); // vitesse en x et en y
  }

  //Permet au Zombie Girl de faire des demi tour
  if(zombieGirl.x == 300){
    zombieGirl.anims.play('walkLeft', true);
    this.tweens.add({
      targets: zombieGirl,
      x: 150,
      duration: 8800,
      ease: 'Linear',
    });
  };

  if(zombieGirl.x == 150){
      zombieGirl.anims.play('walkRight', true);
      this.tweens.add({
        targets: zombieGirl,
        x: 300,
        duration: 8800,
        ease: 'Linear',
      });
  };

    //Permet au Zombie Red Girl de faire des demi tour
    if(zombieRedGirl.x == 620){
      zombieRedGirl.anims.play('ZombieRedGirlWalkLeft', true);
      this.tweens.add({
        targets: zombieRedGirl,
        x: 470,
        duration: 8800,
        ease: 'Linear',
      });
    };
  
    if(zombieRedGirl.x == 470){
      zombieRedGirl.anims.play('ZombieRedGirlWalkRight', true);
        this.tweens.add({
          targets: zombieRedGirl,
          x: 620,
          duration: 8800,
          ease: 'Linear',
        });
    };

  //Permet au Zombie Man de faire des demi tour
  if(zombieMan.x == 1250){
      zombieMan.anims.play('ZombieManWalkRight', true);
      this.tweens.add({
        targets: zombieMan,
        x: 1350,
        duration: 8800,
        ease: 'Linear',
      });
  };

  if(zombieMan.x == 1350){
    zombieMan.anims.play('ZombieManWalkLeft', true);
    this.tweens.add({
      targets: zombieMan,
      x: 1250,
      duration: 8800,
      ease: 'Linear',
    });
  };

    //Permet au Zombie Fair Man de faire des demi tour
    if(zombieFairMan.x == 1500){
      zombieFairMan.anims.play('ZombieFairManWalkRight', true);
      this.tweens.add({
        targets: zombieFairMan,
        x: 1620,
        duration: 8800,
        ease: 'Linear',
      });
  };

  if(zombieFairMan.x == 1620){
    zombieFairMan.anims.play('ZombieFairManWalkLeft', true);
    this.tweens.add({
      targets: zombieFairMan,
      x: 1500,
      duration: 8800,
      ease: 'Linear',
    });
  };

    if (player.y >= 820 && player.y <= 1000 ) {
    this.fall.play();
    }

  // si le jouer tombe hors de viewport
  if (player.y >= 1500) {
    this.sound.pauseAll();
    this.scene.restart();
    score = 0;
  }

}