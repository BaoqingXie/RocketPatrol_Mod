//in order
//init()- prepare any data for the scene
//preload() - prepares any assets we'll need for the secne
//creat() - adds assets to the scene
//update() - loop run continuously at hopefully our chosen frame rate
//inherient from phaser 
class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");//scene name
    }

    create(){
        console.log(this);
        //display menu text
        this.add.text(20,20,"Rocket Patrol Menu"); // 0, 0 uplate

        //lunch the next scene
        this.scene.start("playScene");
    }
}