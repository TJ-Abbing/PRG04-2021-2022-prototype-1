console.log(`Loaded game.ts`)

// imports
import * as PIXI from "pixi.js"
import fishImage from "./images/fish.png"
import bgImage from "./images/water.jpg"

export class Game { // puts entire game into game class

    // states the classes within the game class
    pixi: PIXI.Application
    background:PIXI.Sprite
    fish:PIXI.Sprite
    loader:PIXI.Loader

    constructor() { // constructor runs once class is called
        this.pixi = new PIXI.Application({ width: 900, height: 500 })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader
            .add("fishTexture", fishImage) // adds fish texture
            .add("backgroundTexture", bgImage) // adds background texture

        this.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        console.log(`Loaded all textures.`) 

        // background
        this.background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!)
        this.pixi.stage.addChild(this.background)

        // fish
        this.fish = new PIXI.Sprite(this.loader.resources["fishTexture"].texture!)
        this.pixi.stage.addChild(this.fish)
        this.fish.tint = Math.random() * 0xFFFFFF;
        this.fish.x = Math.floor(Math.random() * 800)
        this.fish.y = Math.floor(Math.random() * 400)

        // adds animation
        this.pixi.ticker.add((delta) => this.update(delta))
    }

    update(delta : number) { // game loop
        this.fish.x -= 4 // determines movement speed and direction 

        if (this.fish.x <= -100) { // when fish moves passed the left side; moves to the right side
            this.fish.x = 900
        }

    }
}

new Game()
console.log(`Finished game.ts`)