/*
These are four changes(points break down) I(Baoqing Xie) made:
1.Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (25)
2.Implement mouse control for player movement and mouse click to fire (25)
3.Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (25)
4.Create and implement a new weapon (w/ new behavior and graphics) (25)

Here are descriptions in the README:
1. A brand new spaceship type which has faster speed and smaller size. It is worth 40 points.
2. Add a new Rocket type that is bigger. Players can use "R" to fire or use back button of the mouse to fire. This weapon will keeping flying in the game until it hit a spaceship. Player only have three chances to use them.
3. Add the mouse control to the game, using left right button to move, middle button to fire and back button to fire special Rocket.
4. Add particle effects when rocket hit the spaceships.

Outside Resources:
1.explotionParticle.png credits to cleanpng.com
*/
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
};

let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000    
}

var particles;
var RocketMoveSpeed = -1;

//reserve some keyboard varibles

let keyF, keyLeft, keyRight, keyR;