import logoImg from "./assets/logo.png";

class Intro extends Phaser.Scene {
    constructor(){
        super({ key: 'Intro' })
    }

    preload() {
    this.load.image("logo", logoImg);
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
}

export default Intro;