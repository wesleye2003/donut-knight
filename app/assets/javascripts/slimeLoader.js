var setupSlime = function(slime, scaler, animationSpeed) {
  slime.collideWorldBounds = true;
  slime.body.bounce.set(1);
  slime.health = 1;
  slime.enableBody = true;
  slime.animations.add('alive', [0, 1, 2, 1]);
  slime.animations.add('die', [0, 1, 0, 1, 2, 2]);
  slime.body.collideWorldBounds = true;
  slime.body.velocity.x = Math.random()*80;
  slime.body.velocity.y = Math.random()*-80;
  slime.animations.play('alive', animationSpeed, true);
  slime.scale.setTo(scaler, scaler);
}
