import { getApi, scorePostApi } from './fetchApi';
import { introState } from './introScene';
import TestGame from "./testGame";

let props = {
    space: 0
} 

class LeaderBoard extends Phaser.Scene {
    constructor(){
        super({ key: "LeaderBoard"});
        // leaders.scores = getApi();
    }

    getScores() {
        return getApi()
    }

    scoreDisplay(name, points, spaceY) {
        this.add.text(330, spaceY, `${name} : ${points}`, { fill: "#5c573e" });
    }

    errMessage(mess) {
        this.add.text(270, 200, `Network Error: ${mess}`, { fill: "#5c573e" });
    }

    preload(){
        this.load.image('clouds', '../../images/clouds.png');
        if(introState.expScore){
            scorePostApi(introState.input.text, introState.expScore).then((res) => {
                console.log(res);
            });
        }
    }

    create() {
        props.cursors = this.input.keyboard.createCursorKeys();
        this.cameras.main.setBounds(0, 0, 450, 2000);
        this.cameras.main.setBackgroundColor("#ADD8E6");
        this.add.image(100, 100, "clouds");
        this.add.text(270, 10, "LEADERBOARD", {
          font: "40px",
          fill: "#982649",
        });
        this.getScores().then( res => {
            let space = 60;
            props.space = space;
            let counter = 0;
            console.log(res);
            if(res){
                res.result.forEach((r, index) => {
                  if (index < 10) {
                    this.scoreDisplay(r.user, r.score, space);
                    counter += 1;
                    space += 30;
                    console.log(r.score + "----" + r.user, space);
                  } else {
                    return true;
                  }
                });
            }
        }).catch( err => this.errMessage(err));
        this.add.text(267, introState.height - 70, "CLICK MOUSE TO GO TO START", { fill: "#183059"});
        this.add.text(270, introState.height - 50, "PRESS SPACE TO PLAY AGAIN", { fill: "#183059"});
        this.add.text(300, introState.height - 30, "Dev by @Jay_Kowski", { fill: "#183059"});
    }

    update() {
        if(props.cursors.space.isDown) {
            this.scene.stop("LeaderBoard");
            this.scene.start("testGame");
        }

        this.input.on('pointerup', () => {
            this.scene.stop("LeaderBoard");
            location.reload();
        })
    }
}

export default LeaderBoard;