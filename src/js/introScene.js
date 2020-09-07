import InputText from "phaser3-rex-plugins/plugins/inputtext";

let introState = { }

class Intro extends Phaser.Scene {
    constructor(){
        super({ key: 'Intro' }); 
    }

    preload() {
        this.load.image("logo", "../images/game-name.png");
        this.load.spritesheet('runner', '../images/bunny-hop-spritesheet.png', { frameWidth: 48, frameHeight: 32 });
        this.load.image('land', '../images/platform-2.png');
        this.load.image("cave", "../images/cave.png");
        introState.input = new InputText(this, 220, 220, 200, 30, {
          placeholder: "Type your name",
          color: "#ffffff",
          border: 1,
          backgroundColor: "transparent",
          fontSize: 14,
        }).setFocus();
    }

    create() {
        introState.width = this.scale.width;
        introState.height = this.scale.height;
        this.add.image(180, 150, 'cave');
        const logo = this.add.image(370, 120, "logo");
        this.add.text(235, 210, 'Please Enter Your Name Below: ', { font: '18px' } );
        this.add.text(280, 290, "Click Mouse To Continue" );

        introState.elem = introState.input.node;
        introState.elem.style["position"] = "relative";
        introState.elem.style["width"] = "170px";
        introState.elem.style["background-color"] = "#60695D";
        introState.elem.style["top"] = "250px";
        introState.elem.style["right"] = "325px";
        introState.elem.style["text-align"] = "center";
        // introState.elem.style["position"] = "relative";
        // introState.elem.style["width"] = "170px";
        // introState.elem.style["background-color"] = "#60695D";
        // introState.elem.style["top"] = "250px";
        // introState.elem.style["right"] = "325px";
        // introState.elem.style["text-align"] = "center";
        introState.cursors = this.input.keyboard.createCursorKeys();

        this.add.text(305, introState.height-30, "Dev by @Jay_Kowski");
    }

    update() {
        introState.elem.style["float"] = "right";
        
        this.input.on('pointerup', () => {
            if (introState.input.text.length <= 3) {
                introState.input.text = '';
                introState.input.placeholder = "Name too short";
            } else if(introState.input.text.length > 3) {
                introState.elem.style["display"] = "none";
                this.scene.stop("Intro");
                this.scene.start("testGame");
            }
        });
    }
}

export { Intro, introState };