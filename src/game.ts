import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"

//
// STAP 1 - maak een pixi canvas
//
const pixi = new PIXI.Application({ width: 800, height: 450 })
document.body.appendChild(pixi.view)

//
// STAP 2 - preload alle afbeeldingen
//
const loader = new PIXI.Loader()
loader.add('fishTexture', fishImage)
      .add('bubbleTexture', bubbleImage)
      .add('waterTexture', waterImage)
loader.load(()=>loadCompleted())

//
// STAP 3 - maak een sprite als de afbeeldingen zijn geladen
//
function loadCompleted() {
    let water = new PIXI.Sprite(loader.resources["waterTexture"].texture!)
    let bubble = new PIXI.Sprite(loader.resources["bubbleTexture"].texture!)
    let fish = new PIXI.Sprite(loader.resources["fishTexture"].texture!)
    pixi.stage.addChild(water)

    bubble.x = 100
    bubble.y = 200
    pixi.stage.addChild(bubble)

    fish.x = 100
    fish.y = 200
    pixi.stage.addChild(fish)

    let anotherFish = new PIXI.Sprite(loader.resources["fishTexture"].texture!)
    anotherFish.x = 400
    anotherFish.y = 100
    pixi.stage.addChild(anotherFish)
    
}