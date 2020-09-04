const props = {
    score: 0,
    onGoing: true
}

export default class TestGame extends Phaser.Scene {
    constructor() {
        super({ key: 'testGame' });
    }

    preload() {
        this.load.image("lava", "../images/lava.png");
        this.load.spritesheet('runner', '../images/bunny-hop-spritesheet.png', { frameWidth: 48, frameHeight: 32 });
        this.load.image('land', '../images/platform-2.png');
        this.load.image('cave', '../images/cave.png');
    }

    create() {
        props.height = this.scale.height;
        props.width = this.scale.width;
        props.cursors = this.input.keyboard.createCursorKeys();

        this.cameras.main.setBounds(0, 0, 2000, props.height);
        props.bg = this.add.image(180, 150, 'cave');
        props.scoreText = this.add.text(props.width-130, 10, `Score:${props.score}`, { font: "20px", fill: '#FFFFFF' });
        props.playerName = this.add.text(25, 10, `name:kowski`, { font: "20px", fill: '#FFFFFF' })
        this.anims.create({
            key: 'playerRun',
            frames: this.anims.generateFrameNumbers('runner', { start: 0, end: 3 }),
            frameRate: 18,
            repeat: -1
        });
        this.cameras.main.setBackgroundColor("#ADD8E6");

        this.platGroup = this.add.group({
            removeCallback: function (platform) {
                platform.scene.platPool.add(platform)
            }
        });

        this.platPool = this.add.group({
            removeCallback: function (platform) {
                platform.scene.platGroup.add(platform)
            }
        });

        props.landing = this.addPlat(props.width, props.width / 3);

        props.player = this.physics.add.sprite(50, 200, 'runner');
        props.player.x = 200;
        props.player.setScale(.8)
        props.player.setGravityY(900);
        props.player.flipX = true;
        props.player.anims.play('playerRun', true);

        this.input.on('pointerdown', () => {
            if (props.player.body.touching.down) {
                props.playerJumps = 0;
                props.player.setVelocityY(-395);
                props.playerJumps++;
            }
        })

        this.physics.add.collider(props.player, props.landing)
        this.physics.add.collider(props.player, this.platGroup, () => {
            props.score += 1
        });

        this.cameras.main.startFollow(props.player, true, 0.5, 0.5, 200);


        this.physics.add.collider(props.player, props.platGroup, () => {
            this.cameras.main.setBackgroundColor("#FFE5B4");
        });

        this.anims.create({
            key: 'playerRun',
            frames: this.anims.generateFrameNumbers('runner', { start: 4, end: 7 }),
            frameRate: 20,
            repeat: -1
        });
    }

    addPlat(platWidth, xCord, yCord) {
        let platform;
        if(props.onGoing){
            if (this.platPool.getLength()) {
                platform = this.platPool.getFirst();
                platform.x = xCord;
                platform.visible = true;
                platform.active = true;
                platform.setScale(.3, .3)
                this.platPool.remove(platform);
            } else {
                platform = this.physics.add.sprite(xCord, yCord, 'land');
                platform.setImmovable(true);
                platform.setVelocityX(Phaser.Math.Between(-290, -190));
                platform.setScale(.3, .3)
                this.platGroup.add(platform);
            }
            platform.displayWidth = platWidth;
            props.nextPlatDistance = Phaser.Math.Between(300, 350);
            return platform;
        }
    }

    update() {
        //updates should only occur when game is still ongoing

        if(props.onGoing){

            props.player.x = 200;
            if (props.cursors.space.isDown) {
                if (props.player.body.touching.down) {
                    props.playerJumps = 0;
                    props.player.setVelocityY(-395);
                    props.playerJumps++;
                }
            }
            props.scoreText.text = `Score:${props.score}`;

            let mostRightPlat = 0;
            let minDistance = props.width;
            this.platGroup.getChildren().forEach(function (platform) {
                let platDistance = props.width - platform.x - platform.displayWidth / 2;

                if (platDistance < minDistance) {
                    minDistance = platDistance;
                    mostRightPlat = platform.y;
                }
                if (platform.x < - platform.displayWidth / 2) {
                    this.platGroup.killAndHide(platform);
                    this.platGroup.remove(platform);
                }
            }, this);

            if (minDistance > props.nextPlatDistance) {
                let minHeight = props.height * 0.4;
                let maxHeight = props.height * 0.8;
                let randHeight = 11 * Phaser.Math.Between(-8, 8)
                let nextGap = mostRightPlat + randHeight;
                let nextPlatHeight = Phaser.Math.Clamp(nextGap, minHeight, maxHeight)
                let nextPlatWidth = Phaser.Math.Between(100, 150);
                this.addPlat(nextPlatWidth, (props.width - 200 + (nextPlatWidth / 2)), nextPlatHeight);
            }
        }
        //GameOver
        if (props.player.y > props.height) {
            const score = props.score;
            props.onGoing = false;
            this.cameras.main.shake(200, .01, true);
            this.add.text(props.width / 2 - 100, props.height / 2 - 80, 'GAME \n OVER', { font: '60px' });
            this.add.text(props.width / 2 - 35, props.height / 2 + 40, `score: ${score}`, { font: '20px' });
            this.add.text(props.width / 2 - 120, props.height / 2 + 80, 'PRESS SPACE TO START AGAIN')
            if (props.cursors.space.isDown) {
                this.scene.start("testGame");
                props.onGoing = true;
                props.score = 0;
            }
        }
    }
}