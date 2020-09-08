import Phaser from 'phaser';
import { getApi, scorePostApi } from './fetchApi';
import { introState } from './introScene';

const props = { };

class LeaderBoard extends Phaser.Scene {
  constructor() {
    super({ key: 'LeaderBoard' });
  }

  // eslint-disable-next-line class-methods-use-this
  getScores() {
    return getApi();
  }

  scoreDisplay(name, points, spaceY) {
    this.add.text(330, spaceY, `${name} : ${points}`, { fill: '#5c573e' });
  }

  errMessage(mess) {
    this.add.text(220, 200, `Network Error: ${mess}`, { fill: '#5c573e' });
  }

  // eslint-disable-next-line class-methods-use-this
  scoreSort(sArr, resArr) {
    const lBoard = [];
    sArr.forEach((x) => {
      resArr.result.forEach((r) => {
        if (x === r.score) {
          lBoard.push(r);
        }
      });
    });
    lBoard.splice(10);
    return lBoard;
  }

  preload() {
    this.load.image('clouds', '../../images/clouds.png');
    if (introState.expScore) {
      scorePostApi(introState.input.text, introState.expScore);
    }
  }

  create() {
    props.cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.setBounds(0, 0, 450, 2000);
    this.cameras.main.setBackgroundColor('#ADD8E6');
    this.add.image(100, 100, 'clouds');
    this.add.text(260, 10, 'LEADERBOARD', {
      font: '40px',
      fill: '#982649',
    });
    this.getScores()
      .then((res) => {
        props.scoreArr = [];
        props.scoreInf = res;
        if (res) {
          res.result.forEach((r) => {
            props.scoreArr.push(r.score);
          });
        }
        const lead = this.scoreSort(props.scoreArr, res);
        return lead;
      })
      .then((res) => {
        let space = 60;
        res.forEach((r) => {
          this.scoreDisplay(r.user, r.score, space);
          space += 30;
        });
      })
      .catch((err) => this.errMessage(err));
    this.add.text(267, introState.height - 70, 'CLICK MOUSE TO GO TO START', {
      fill: '#183059',
    });
    this.add.text(270, introState.height - 50, 'PRESS SPACE TO PLAY AGAIN', {
      fill: '#183059',
    });
    this.add.text(300, introState.height - 30, 'Dev by @Jay_Kowski', {
      fill: '#183059',
    });
  }

  update() {
    if (props.cursors.space.isDown) {
      this.scene.stop('LeaderBoard');
      this.scene.start('testGame');
    }
    this.input.on('pointerup', () => {
      this.scene.stop('LeaderBoard');
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  }
}

export default LeaderBoard;