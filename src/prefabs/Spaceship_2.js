//Spaceship prefab
class Spaceship_2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointvalue) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); //add to existing, diplaylist updatelist
        this.points = pointvalue;
    }

    update(){
        //move spaceship left
        this.x -= 6;
        //wraparound screem bounds
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }
    }

    reset(){
        this.x = game.config.width;
    }

}