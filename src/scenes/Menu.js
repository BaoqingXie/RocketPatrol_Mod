//in order
//init()- prepare any data for the scene
//preload() - prepares any assets we'll need for the secne
//creat() - adds assets to the scene
//update() - loop run continuously at hopefully our chosen frame rate
//inherient from phaser 
class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create() {
        // menu display
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY- 3*textSpacer, 'ROCKET PATROL Moded Version', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY- 2* textSpacer, 'Use ←→ arrows to move & (F) to Fire', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY- textSpacer, 'Use Mouse to move the Rocket', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Left And Right Click to fire ', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(centerX, centerY + textSpacer, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5); 
        this.add.text(centerX, centerY + textSpacer + textSpacer, 'Press R to fire special Rocket', menuConfig).setOrigin(0.5);   
        this.add.text(centerX, centerY + 3* textSpacer, 'You have ten chances to use R', menuConfig).setOrigin(0.5);   
        // define keys
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLeft)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000    
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRight)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000   
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
        }
    }
}