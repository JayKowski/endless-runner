import Phaser from 'phaser';


class LavaGen extends Phaser.Physics.Arcade.Group {
    constructor(scene, key){
        super(scene.physics.world, scene);

    }
}

export default LavaGen;