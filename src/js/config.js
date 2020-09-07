import { Intro } from "./introScene";
import LeaderBoard from "./leaderBoard";
import TestGame from './testGame';

const config = {
  type: Phaser.AUTO,
  // parent: "phaser-example",
  width: 800,
  height: 450,
  parent: "container",
  dom: {
    createContainer: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      enableBody: true,
    },
  },
  scene: [Intro, TestGame, LeaderBoard]
};

export default config;