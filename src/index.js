import Phaser from "phaser";
import Intro from './phaserIntro'

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [Intro]
};

const game = new Phaser.Game(config);