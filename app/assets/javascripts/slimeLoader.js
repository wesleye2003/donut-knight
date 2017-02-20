var rng = function() {
  return Math.random();
};

var setupSlime = function(game, scaler, animationSpeed) {
  var slime = game.add.sprite(game.world.centerX+100, game.world.centerY, 'slime');

  game.physics.enable(slime, Phaser.Physics.ARCADE);
  slime.collideWorldBounds = true;
  slime.body.bounce.set(1);
  slime.health = 1;
  slime.enableBody = true;
  slime.body.immovable = true;
  slime.animations.add('alive', [0, 1, 2, 1]);
  slime.animations.add('die', [0, 1, 0, 1, 2, 2]);
  slime.body.collideWorldBounds = true;
  slime.animations.play('alive', animationSpeed, true);
  slime.scale.setTo(scaler, scaler);
  if (rng() >= 0.5){
    slime.body.velocity.x = (rng()+2)*50;
  } else {
    slime.body.velocity.x = (rng()-2)*50;
  }
  if (rng() >= 0.5){
    slime.body.velocity.y = (rng()+2)*50;
  } else {
    slime.body.velocity.y = (rng()-2)*50;
  }

  return slime;
}
