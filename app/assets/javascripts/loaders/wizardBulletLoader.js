var setupWizardBullets = function(game){
  var wizardBullets = game.add.group();
  wizardBullets.enableBody = true;
  wizardBullets.physicsBodyType = Phaser.Physics.ARCADE;

  // individual bullet setup and physics
  for (var i = 0; i < 2; i++){
    var b = wizardBullets.create(0, 0, 'fireball');
    b.name = 'bullet' + i;
    b.anchor.setTo(0.5, 0.5);
    b.scale.setTo(1, 1);
    b.exists = false;
    b.visible = false;
    b.checkWorldBounds = true;
    b.events.onOutOfBounds.add(resetBullet, this);
  }

  return wizardBullets;
}

// create function to clear bullets from the screen
function resetBullet (bullet) {
  bullet.kill();
};
