import Intro from "./phaserIntro";
import MainGame from "./gameScene";
import TestGame from './testGame';

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 450,
  physics: {
    default: "arcade",
    arcade: {
      // debug: true,
      // gravity: { y: 200 },
      enableBody: true
    },
  },
  scene: [ TestGame, MainGame, Intro ],
};

export default config;