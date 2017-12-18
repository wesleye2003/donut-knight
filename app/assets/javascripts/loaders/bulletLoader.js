var setupBullets = function(game){
  var bullets = game.add.group();
  bullets.enableBody = true;
  bullets.physicsBodyType = Phaser.Physics.ARCADE;

  // individual bullet setup and physics
  for (var i = 0; i < 20; i++){
    var b = bullets.create(0, 0, 'bullet');
    b.name = 'bullet' + i;
    b.anchor.setTo(0.5, 0.5);
    b.scale.setTo(1, 1);
    b.exists = false;
    b.visible = false;
    b.checkWorldBounds = true;
    b.events.onOutOfBounds.add(resetBullet, this);
  }

  return bullets;
}

// create function to clear bullets from the screen
function resetBullet (bullet) {
  bullet.kill();
};
