var setupKnight = function(game) {
  var knightObject = game.add.sprite(game.world.centerX-100, game.world.centerY, 'knight');
  game.camera.follow(knightObject, Phaser.Camera.FOLLOW_LOCKON);
  game.physics.arcade.enable(knightObject, Phaser.Physics.ARCADE)
  knightObject.enableBody = true;
  knightObject.collideWorldBounds = true;
  knightObject.body.collideWorldBounds = true;
  knightObject.anchor.setTo(0.5, 0.5);
  knightObject.scale.setTo(1.2, 1.2);
  knightObject.body.height = 10;
  knightObject.body.width = 8;
  knightObject.health = 8;
  

  // set up custom animations using .gif or .png spritesheet
  knightObject.animations.add('walkDown', [3,4,5,4]);
  knightObject.animations.add('attackDown', [6, 7, 8, 3]);
  knightObject.animations.add('walkLeft', [12,13,14,13]);
  knightObject.animations.add('attackLeft', [15, 16, 17, 12]);
  knightObject.animations.add('walkRight', [21,22,23,22]);
  knightObject.animations.add('attackRight', [24, 25, 26, 21]);
  knightObject.animations.add('walkUp', [30,31,32,31]);
  knightObject.animations.add('attackUp', [33, 34, 35, 30]);
  knightObject.animations.add('victorious', [1, 1, 1, 6, 7, 16, 34, 25, 6, 7, 7, 8])
  knightObject.animations.add('spin', [1, 10, 28, 19, 1]);

  knightObject.animations.play('spin', 8, false);

  setTimeout(function(){
    knightTookDamage = false;
  }, 1000);

  return knightObject;
}
