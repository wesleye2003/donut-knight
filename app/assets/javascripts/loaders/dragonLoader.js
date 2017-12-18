var setupDragon = function(game){
  var boss = game.add.sprite(game.world.centerX+150, game.world.centerY, 'boss');

    // set up custom boss animations for each sprite
    boss.animations.add('rise', [ 0, 0, 0, 1, 1, 4, 4, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 10, 10, 10, 10, 10, 10, 4, 4, 6]);
    boss.animations.add('neutral', [4]);
    boss.animations.add('flinch', [5, 7, 10]);
    boss.animations.add('die', [5, 7, 5, 4, 9, 8, 9, 10, 1, 0]);

    // setup boss health, initial position, enable physics on this object
    boss.health = 5;
    boss.anchor.setTo(0.5, 0.6);
    boss.scale.setTo(1.5, 1.5);
    game.physics.arcade.enable(boss, Phaser.Physics.ARCADE)
    boss.body.immovable = true;

    // opening animations
    boss.animations.play('rise', 10, false);

    return boss;
}
