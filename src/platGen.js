
import Phaser from "phaser";

// function cordY() {
//     return Math.floor(Math.random() * (420 - 200) + 200);
// }

// function cordX(arg) {
//     return Math.floor(Math.random() * (arg - 150) + 150);
// }

// function scaleX() {
//     return (Math.random() * (0.7 - 0.3) + 0.3).toFixed(1);
// }

class PlatGen extends Phaser.Physics.Arcade.Group {
    constructor(scene, key, w) {
        super(scene.physics.world, scene);

        //try initialize group rules below as inn the youtube tutorial
        this.platGroup = this.add.group({
            removeCallback: function (platform) {
                platform.scene.platPool.add(platform);
        });

        this.platPool = this.add.group({
            removeCallback: function (platform) {
                platform.scene.platGroup.add(platform)
            }
        });

            {// console.log(plats);
            // const xCord = cordX(w);
            // const yCord = cordY();
            // const img = plats.create(xCord, yCord, key)
            // const land = plats.create(xCord, yCord, key).setScale(.3);
            // img.x = xCord;
            // img.y = yCord;
            // img.setScale(.1);
            // img.scaleX = scaleX();
            // img.setVelocityX = -250;
            // console.log(img)
        }
        // return img;

        function addPlat(platWidth, xCord) {
            let platform;
            if (this.platPool.getLength()) {
                platform = this.platformPool.getFirst();
                platform.x = xCord;
                platform.active = true;
                platform.visible = true;
                this.platformPool.remove(platform);
            } else {
                platform = this.physics.add.sprite(posX, scene.scale.height * 0.8, key);
                platform.setImmovable(true);
                platform.setVelocityX(-250);
                this.platformGroup.add(platform);
            }
            platform.displayWidth = platWidth;
            this.nextPlatformDistance = Phaser.Math.Between(100, 350);
        }
    }

    }
}


export default PlatGen;