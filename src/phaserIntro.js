import logoImg from "../images/logo.png";

let gameState = { }

class Intro extends Phaser.Scene {
    constructor(){
        super({ key: 'Intro' })
    }

    preload() {
        this.load.image("logo", "../images/logo.png");
    }

    create() {
        const logo = this.add.image(400, 150, "logo");

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power1",
            yoyo: true,
            loop: -1,
        });
    }

    update() {
        gameState.cursors = this.input.keyboard.createCursorKeys();
        this.input.on('pointerup', () => {
            this.scene.stop("Intro");
            this.scene.start("gamePlay");
        })
    }
}

export default Intro;