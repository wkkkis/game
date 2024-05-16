import { Application } from '@pixi/app'

import { Renderer } from '@pixi/core'

import { BatchRenderer } from '@pixi/core'
Renderer.registerPlugin('batch', BatchRenderer)

import { TickerPlugin } from '@pixi/ticker'
Application.registerPlugin(TickerPlugin)

import { AppLoaderPlugin } from '@pixi/loaders'
Application.registerPlugin(AppLoaderPlugin)

import { Sprite } from '@pixi/sprite'

const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio
})
document.body.appendChild(app.view)

app.loader.add('logo', './assets/logo.png')
app.loader.load(() => {
    const sprite = Sprite.from('logo')
    sprite.anchor.set(0.5)
    app.stage.addChild(sprite)

    sprite.x = app.screen.width * 0.5
    sprite.y = app.screen.height * 0.5

    app.ticker.add(delta => {
        sprite.rotation += 0.02 * delta
    })
})