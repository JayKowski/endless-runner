// import { gameState } from "./gameState";
// import lavaPlatform from '../images/lava.png';
// import config from './config'
// import PlatGen from './platGen'

const props = { }

export default class MainGame extends Phaser.Scene {
    constructor() {
        super({ key: 'gamePlay' });

        // this.PlatGen;
    }

    preload() {
        this.load.image("lava", "../images/lava.png");
        this.load.spritesheet('runner', '../images/bunny-hop-spritesheet.png', { frameWidth: 48, frameHeight: 32 });
        this.load.image('land', '../images/platform-2.png');
    }

    create() {

        //add items to plat group, manualy set the object
        //props by direct access using dot annotation
        //example, props.platGroup.setActive, .maxSize = 10 blah blah blah...

        // props.platGroup = this.physics.add.staticGroup();
        // for(let i = 0; i < 10; i++){

        // }
        props.height = this.scale.height;
        props.width = this.scale.width;

        this.cameras.main.setBounds(0, 0, 2000, props.height);
        props.floor = new Phaser.Geom.Rectangle(250, 200, 300, 200);
        props.floor.fillColor = "#CECECE";
        console.log(props.floor)
        this.cameras.main.setBackgroundColor("#ADD8E6");
        props.cursors = this.input.keyboard.createCursorKeys();

        // props.plats = this.physics.add.staticGroup();
        props.platGroup = this.physics.add.staticGroup({
            removeCallback: function (platform) {
                platform.scene.platPool.add(platform);
            }
        });

        props.platPool = this.physics.add.staticGroup({
            removeCallback: function (platform) {
                platform.scene.platGroup.add(platform)
            }
        });

        // props.preLand = this.add.image(0, 0, 'land');

        props.landing = this.addPlat(props.width, props.width/2);

        props.imgOrig = 256;
        // props.img = props.plats.create(props.imgOrig, height, "lava");
        console.log(props.img);
        // props.plats.create(768, height, "lava");
        props.player = this.physics.add.sprite(50, 200, 'runner');
        // props.player.setGravityY(gameOptions.playerGravity);
        props.player.setCollideWorldBounds(true);

        this.physics.add.collider(props.player, props.landing)

        this.cameras.main.startFollow(props.player);
        this.physics.add.collider(props.player, props.platGroup, () => {
            // console.log(true);
            this.cameras.main.setBackgroundColor("#FFE5B4");
        });

        this.anims.create({
            key: 'playerRun',
            frames: this.anims.generateFrameNumbers('runner', { start: 4, end: 7 }),
            frameRate: 25,
            repeat: -1
        });   
        console.log(props.landing);
    }

    addPlat(platWidth, xCord) {
        let platform;
        if (props.platPool.getLength()) {
            platform = props.platPool.getFirst();
            platform.x = xCord;
            platform.active = true;
            platform.visible = true;
            platform.setScale(.3, .3)
            props.platPool.remove(platform);
        } else {
            platform = this.physics.add.sprite(xCord, props.height * 0.8, 'land');
            platform.setImmovable(true);
            platform.setVelocityX(-250);
            platform.setScale(.3, .3)
            props.platGroup.add(platform);
        }
        // platform.displayWidth = platWidth;
        this.nextPlatformDistance = Phaser.Math.Between(100, 350);
        return platform;
    }

    update() {

        
        if (props.cursors.right.isDown) {
            props.player.flipX = false;
            props.player.setVelocityX(250);
            props.player.anims.play('playerRun', true);
        } else if (props.cursors.left.isDown) {
            props.player.flipX = true;
            props.player.setVelocityX(-250);
            props.player.anims.play('playerRun', true);
        } else {
            props.player.setVelocityX(0);
            props.player.anims.play('playerRun', false);
        }
    }
}