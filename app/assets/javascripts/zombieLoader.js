var rng = function() {
  return Math.random();
}

var randomPosition =  function() {
  min = Math.ceil(32);
  max = Math.floor(568);
  return Math.random() * (568 - 32) + 16;
}

function randomMovement(enemy) {
  stopMovement(enemy);
  if (rng() >= 0.5){
    if (rng() >= 0.5){
      enemy.body.velocity.x = (rng()+2)*50;
    } else {
      enemy.body.velocity.x = (rng()-2)*50;
    }
  } else {
    if (rng() >= 0.5){
      enemy.body.velocity.y = (rng()+2)*50;
    } else {
      enemy.body.velocity.y = (rng()-2)*50;
    }
  }
}

var setupZombie = function(game, animationSpeed) {
  var zombie = game.add.sprite(randomPosition(), randomPosition(), 'zombie');
  game.physics.enable(zombie, Phaser.Physics.ARCADE);
  zombie.collideWorldBounds = true;
  zombie.health = 0.5;
  zombie.enableBody = true;
  zombie.cooldown = 0;
  zombie.animations.add('alive', [48, 60, 72, 84, 48]);
  zombie.animations.add('die', [48, 60, 72, 84, 48, 60, 72, 84, 48]);
  zombie.animations.add('walkDown', [48, 49, 50, 49, 48]);
  zombie.animations.add('walkLeft', [60, 61, 62, 61, 60]);
  zombie.animations.add('walkRight', [72, 73, 74 ,73 ,72]);
  zombie.animations.add('walkUp', [84,85,86,85,84]);
  zombie.body.collideWorldBounds = true;
  zombie.animations.play('alive', animationSpeed, false);
  setTimeout(function(){
    zombie.health = 1;
  }, 800);

  // add randomized movement to zombie
  game.time.events.repeat(Phaser.Timer.SECOND * 10 * rng(), 1000, randomMovement, game, zombie);

  return zombie;
}
