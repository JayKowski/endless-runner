import Intro from "./phaserIntro";
import MainGame from "./gameScene";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 550,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { y: 200 },
      enableBody: true
    },
  },
  scene: [ MainGame, Intro ],
};

export default config;