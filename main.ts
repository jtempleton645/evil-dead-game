scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level11`)
    mySprite2 = sprites.create(img`
        . . . . . . . e e . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 d 1 1 d 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 2 1 1 1 . . . . 
        . . . f f f f 1 2 f f f f . . . 
        . . f f f f f f f 2 f f f f . . 
        . . f . f f f f f f f f . f . . 
        . . f . f f f f f f f f . f . . 
        . . f . f 2 2 f f f f f . f . . 
        . . f . b b b b b b b b . f . . 
        . . 1 . b b b b b b b b . 1 . . 
        . . . . b b . . . . b b . . . . 
        . . . . b b . . . . b b . . . . 
        . . . . b b . . . . b b . . . . 
        . . . . f f . . . . f f . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(22, 16)
    mySprite.setPosition(28, 40)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level21`)
    mySprite2 = sprites.create(img`
        . . . . . . . e e . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 d 1 1 d 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 2 1 1 1 . . . . 
        . . . f f f f 1 2 f f f f . . . 
        . . f f f f f f f 2 f f f f . . 
        . . f . f f f f f f f f . f . . 
        . . f . f f f f f f f f . f . . 
        . . f . f 2 2 f f f f f . f . . 
        . . f . b b b b b b b b . f . . 
        . . 1 . b b b b b b b b . 1 . . 
        . . . . b b . . . . b b . . . . 
        . . . . b b . . . . b b . . . . 
        . . . . b b . . . . b b . . . . 
        . . . . f f . . . . f f . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(114, 95)
    mySprite.setPosition(41, 56)
    mySprite3 = sprites.create(img`
        d d d 2 2 2 d d d 
        d 2 2 2 2 2 2 2 d 
        d 2 8 2 2 2 8 2 d 
        d 2 8 8 8 8 8 2 d 
        d 2 d 8 d 8 d 2 d 
        d 2 8 d 8 d 8 2 d 
        d 2 8 8 8 8 8 2 d 
        d 2 2 2 2 2 2 2 d 
        d d d d d d d d d 
        `, SpriteKind.Food)
    mySprite3.setPosition(50, 52)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverMessage(true, "GAME OVER!")
})
info.onLifeZero(function () {
    game.gameOver(false)
    game.reset()
    game.setGameOverMessage(false, "GAME OVER!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(mySprite3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite2, effects.disintegrate, 500)
    info.changeLifeBy(-1)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level10`)
info.setLife(3)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . 8 . 8 8 8 8 8 8 8 8 . 8 . . 
    . . 8 . 8 8 8 8 8 8 8 8 . 8 . . 
    . . f . 8 8 8 8 8 8 8 8 . 8 . . 
    . . e . 5 5 5 5 5 5 5 5 . 2 . . 
    . . e . 5 5 5 5 5 5 5 5 . f . . 
    . . . . 5 5 . . . . 5 5 . f . . 
    . . . . 5 5 . . . . 5 5 . . . . 
    . . . . 5 5 . . . . 5 5 . . . . 
    . . . . f f . . . . f f . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . e e . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 d 1 1 d 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 2 1 1 1 . . . . 
    . . . f f f f 1 2 f f f f . . . 
    . . f f f f f f f 2 f f f f . . 
    . . f . f f f f f f f f . f . . 
    . . f . f f f f f f f f . f . . 
    . . f . f 2 2 f f f f f . f . . 
    . . f . b b b b b b b b . f . . 
    . . 1 . b b b b b b b b . 1 . . 
    . . . . b b . . . . b b . . . . 
    . . . . b b . . . . b b . . . . 
    . . . . b b . . . . b b . . . . 
    . . . . f f . . . . f f . . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(26, 24)
mySprite.setPosition(60, 50)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
animation.runImageAnimation(
mySprite2,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . b b b b . . . . . . . 
    . . . . . b b b b . . . . . . . 
    . . . . . b b b b . . . . . . . 
    . . . . . b b b b . . . . . . . 
    . . . . . b b b b . . . . . . . 
    . . . . . f f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . f f f f . . 1 . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f f f f f f f . . . . . . 
    . . 1 f . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . b b b b . . . . . . . 
    . . . . . b b b b . . . . . . . 
    . . . . b b . . b b . . . . . . 
    . . . . b b . . b b . . . . . . 
    . . . . b b . . b b . . . . . . 
    . . . f f f . . f f f . . . . . 
    `],
500,
true
)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f 1 . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 2 2 8 . . . . . . . 
    . . . . . e 2 2 e . . . . . . . 
    . . . . . e f f e . . . . . . . 
    . . . . . e f f e . . . . . . . 
    . . . . . e f f e . . . . . . . 
    . . . . . e e e e . . . . . . . 
    . . . . . f f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f 1 . . . . . . . 
    . . . . . 1 1 1 1 . . . f f . . 
    . . . . . 1 1 1 1 . . f f f . . 
    . . . . . 8 8 8 8 . 2 2 f . . . 
    . . . . 8 8 8 8 8 8 8 2 . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . 1 . 8 8 8 8 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . e e e e . . . . . . . 
    . . . . . e e e e . . . . . . . 
    . . . . e e . . e e . . . . . . 
    . . . . e e . . e e . . . . . . 
    . . . e e e . . e e e . . . . . 
    . . . f f f . . f f f . . . . . 
    `],
500,
true
)
