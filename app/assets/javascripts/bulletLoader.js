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

// fires bullets(donuts) in different directions based on attacking direction
// prevents additional shots based on 'bullet time' (can only fire once per second)
// bullet time is there because idk how to make all bullets hit
// the boss when more than one bullet is on the screen lol PLS FIX
function fireBullet(direction) {
  if (game.time.now > bulletTime){
    bullet = bullets.getFirstExists(false);
    game.add.tween(bullet).to( { angle: 360 }, 2000, Phaser.Easing.Linear.None, true);
    if (bullet){
      if (direction == "attackLeft"){
        bullet.reset(knight.x - 5, knight.y);
        bullet.body.velocity.x = -400;
        bulletTime = game.time.now + 1000;
      }else if (direction == "attackRight"){
      	bullet.reset(knight.x + 5, knight.y);
        bullet.body.velocity.x = 400;
        bulletTime = game.time.now + 1000;
      }else if (direction == "attackUp"){
      	bullet.reset(knight.x, knight.y - 5);
        bullet.body.velocity.y = -400;
        bulletTime = game.time.now + 1000;
      }else if (direction == "attackDown"){
      	bullet.reset(knight.x, knight.y + 5);
        bullet.body.velocity.y = 400;
        bulletTime = game.time.now + 1000;
      }
    }
  }
}
