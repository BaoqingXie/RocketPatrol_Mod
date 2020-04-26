//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); //add to existing, diplaylist updatelist
        this.isFiring = false; //track rocket firing status
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
        this.type = 0; //deflaut type
        this.goingback = 0;
        this.rtypeNumber = 3;
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
            this.type = 0;
        }

        //fire Rtype weapon
        if(Phaser.Input.Keyboard.JustDown(keyR)&& !this.isFiring &&this.rtypeNumber >0){
            this.setFlipY(true); // transform to the Rtype looking
            this.setScale(1.5);
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
            this.type = 1;
            this.rtypeNumber--;
        }

        //if fired, move up
        if (this.isFiring && this.y >= 108 && this.type==0) {
            this.y -= 2;
        }

        //Rtype going up
        if (this.isFiring && this.y >= 108 && this.type==1&&this.goingback ==0) {
            this.y -= 2;
            this.x -= 2;
            if(this.y == 109){
                this.goingback = 1;
            }
        }

        //Rtype going back
        if(this.goingback==1&&this.isFiring){
            this.y += 2;
        }

        //reset on miss
        if (this.y <= 108 && this.type==0) {
            this.isFiring = false;
            this.y = 431;
        }else if (this.y >= 431 &&this.type==1){
            this.goingback = 0;
        }

    }

    reset() {
        this.setFlipY(false);//reset the rocket
        this.setScale(0.5);
        this.isFiring = false;
        this.y = 431;
        this.goingback = 0;
    }
}