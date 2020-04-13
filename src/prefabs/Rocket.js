//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); //add to existing, diplaylist updatelist
        this.isFiring = false; //track rocket firing status
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }

    update() {
        //left and right movement
        if (!this.isFiring) {
            if (keyLeft.isDown && this.x >= 47) {
                this.x -= 2;
            } else if (keyRight.isDown && this.x <= 598) {
                this.x += 2;
            }
        }

        // fire button
        if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }

        //if fired, move up
        if (this.isFiring && this.y >= 108) {
            this.y -= 2;
        }

        //reset on miss
        if (this.y <= 108) {
            this.isFiring = false;
            this.y = 431;
        }
    }

    reset() {
        this.isFiring = false;
        this.y = 431;
    }
}