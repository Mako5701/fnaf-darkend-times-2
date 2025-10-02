namespace SpriteKind {
    export const GLITCH = SpriteKind.create()
    export const ToyB = SpriteKind.create()
    export const ToyF = SpriteKind.create()
    export const ToyC = SpriteKind.create()
    export const Fox = SpriteKind.create()
    export const DRUNKFREDDY = SpriteKind.create()
    export const bonnie = SpriteKind.create()
    export const mangle = SpriteKind.create()
    export const puppet = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ToyC, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile80`, function (sprite, location) {
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.InBackground)
        Music_Box()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile76`, function (sprite, location) {
    info.setScore(-83)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 4861, 4668, 185, 0, 106, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    mySprite.setImage(img`
        ....55555555....
        ...5555555555...
        ..555555555555..
        ..554445444455..
        ...4466456644...
        ...4466446644...
        ...4422442244...
        ....44444444....
        .......44.......
        .....666666.....
        ....6cccccc6....
        ....46666664....
        ....4cccccc4....
        ...4446666444...
        ...4446666444...
        .....bbbbbb.....
        .....bbbbbb.....
        .....bb..bb.....
        .....44..44.....
        ...5555..5555...
        ...5555..5555...
        `)
})
function hold () {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile77`, function (sprite, location) {
    info.setScore(-60)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 4861, 4668, 185, 0, 106, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c c c c c . . . 
        . . c c c c c c c c c c c . . . 
        . . c c c c c c c c c c c . . . 
        . . c 6 6 6 6 c 6 6 6 6 c . . . 
        . . c 6 6 6 6 c 6 6 6 6 c . . . 
        . . c c d d c c c d d c c . . . 
        . . c c d d c c c d d c c . . . 
        . . . . d d c c c d d . . . . . 
        . . . . d d c c c d d . . . . . 
        . . . . d d c c c d d . . . . . 
        . . . . d d c c c d d . . . . . 
        . . . . d d c c c d d . . . . . 
        . . . . d d c . c d d . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile79`, function (sprite, location) {
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.InBackground)
        Music_Box()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.DRUNKFREDDY, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.GLITCH, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile73`, function (sprite, location) {
    info.setScore(-20)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 4861, 4668, 185, 0, 106, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    mySprite.setImage(img`
        ......bbb22......
        .....abbbb2b.....
        ....eeedddddd....
        ....666666666....
        ...66666666666...
        ..8861166611688..
        .6686f6f6f6f6866.
        66686f6f6f6f68666
        666.666aaa666.666
        66...6a666a6...66
        ......66666......
        .......666.......
        .....6666666.....
        ....66a666a66....
        ....88a666a88....
        ....68a666a86....
        ....86a666a68....
        ....6.66.66.6....
        ......88.88......
        ......68.86......
        ......86.68......
        ......66.66......
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Inside Day Theme`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    tiles.setCurrentTilemap(tilemap`level4`)
})
sprites.onOverlap(SpriteKind.ToyF, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ToyC, function (sprite, otherSprite) {
    game.gameOver(false)
})
info.onCountdownEnd(function () {
    info.setScore(30)
    music.play(music.createSong(assets.song`Night theme`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(assets.image`myImage`)
    tiles.setCurrentTilemap(tilemap`level2`)
    info.setLife(1)
    info.setScore(0)
    mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    mySprite.changeScale(0, ScaleAnchor.Middle)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ToyB, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile74`, function (sprite, location) {
    info.setScore(-40)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 4861, 4668, 185, 0, 106, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    mySprite.setImage(img`
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 4 5 5 . . . . . 
        . . . 5 5 5 5 4 4 5 5 . . . . . 
        . . . 5 5 5 5 4 2 5 5 . . . . . 
        . . . 5 5 6 4 4 6 c 5 5 . . . . 
        . . 5 5 5 4 4 4 4 4 5 5 . . . . 
        . . 5 5 6 6 6 6 6 6 5 5 . . . . 
        . 5 5 2 2 2 2 2 2 2 2 5 . . . . 
        . 5 5 4 2 2 2 2 2 2 4 5 . . . . 
        . 5 4 4 c c c c c c 4 4 . . . . 
        . 5 5 c c c c c c c c . . . . . 
        . . . 5 d d d d d d . . . . . . 
        . . . . d d . . d d . . . . . . 
        . . . . d d . . d d . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    game.splash("You Entered a Night!")
    info.startCountdown(200)
    tiles.setCurrentTilemap(tilemap`level0`)
    bunny = sprites.create(assets.image`myImage7`, SpriteKind.bonnie)
    animation.runMovementAnimation(
    bunny,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    bunny.follow(mySprite, 90)
    WFOXY = sprites.create(assets.image`fox`, SpriteKind.Fox)
    animation.runMovementAnimation(
    WFOXY,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    WFOXY.follow(mySprite, 200)
    ToyCh = sprites.create(img`
        ...8..8.8...
        ....8888....
        .....88.....
        ...668866...
        ..88888888..
        .88aa88aa88.
        .88c6886c88.
        .8812882188.
        .3889999883.
        .3899999983.
        .888c6c6888.
        ..88999988..
        ...821138...
        .8881111888.
        888131121888
        888111111888
        888812138888
        88.888888.88
        88.333333.88
        88.883388.88
        ...88..88...
        ...88..88...
        ...88..88...
        ...99..99...
        ..999..999..
        ..999..999..
        `, SpriteKind.ToyC)
    ToyCh.follow(mySprite)
    myEnemy = sprites.create(img`
        ...6....6...
        ..616..616..
        ..666..666..
        ..616..616..
        ..616..616..
        ..666..666..
        ...6....6...
        ...666666...
        ..66666666..
        .6666666666.
        .6666666666.
        .6661661666.
        .6666666666.
        .6666116666.
        .6616666166.
        ..66611666..
        ...666666...
        .6666666666.
        666666666666
        666666666666
        666666666666
        66.666666.66
        66.666666.66
        66.666666.66
        ...66..66...
        ...66..66...
        ...66..66...
        ...66..66...
        ...66..66...
        ..666..666..
        ..666..666..
        `, SpriteKind.GLITCH)
    myEnemy.setStayInScreen(true)
    myEnemy.follow(mySprite)
    animation.runMovementAnimation(
    myEnemy,
    animation.animationPresets(animation.bobbing),
    5000,
    true
    )
    animation.runMovementAnimation(
    myEnemy,
    animation.animationPresets(animation.waveRight),
    5000,
    true
    )
    myEnemy.startEffect(effects.ashes)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile81`, function (sprite, location) {
    music.play(music.createSong(assets.song`arcade`), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`level19`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Inside Day Theme`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    tiles.setCurrentTilemap(tilemap`level4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile66`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`slowed down inside`), music.PlaybackMode.LoopingInBackground)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    scene.setBackgroundImage(img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666666666666eeeeeeeeeeeeeee6666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666666666eeeeeeeeeeeeeeeeeeeee6666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666eeeeeeeeeeeeedddddddddeeeeeeeeeeeeeeeeeeeee666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666eeeeeeeeeeedddddddddddddddddeeeeeeeeeeeeeeeee66666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666eeeeeeeeeddddddddddddddddddddddddeeeeeeeeeeeeee6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666eeeeeeeedddddddddddddddddddddddddddddddeeeeeeeeee666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666eeeeedddddddddddddddddddddddddddddddddddddddeeeee666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666eeeddddddddddddddddddddddddddddddddddddddddddddddee66666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666ddddddddddddddddd44444444444dddddddddddddddddddddddd6666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666ddddddddddd44444444444444444444444444444ddddddddddddddd666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666dddd44444444444444444444444444444444444444444444444dddddd66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666664444444444444444444444444444444444444444444444444444444666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666664444444444444444444444444444444444444444444444444444444666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666644444444444444444444444444444444444444444444444444444444466666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666644444444444444444444444444444444444444444444444444444444466666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666664444444444444444444444444444444444ccccccccc4444444444444466666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666664444444444ccccccccc444444444444444ccccccccccc444444444444446666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666444444444ccccccccccc4444444444444ccccccccccccc44444444444446666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666644444444ccccccccccccc44444444444ccccccccccccccc4444444444446666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666664444444ccccccccccccccc444444444ccccccccccccccccc444444444446666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666444444ccccccccccccccccc44444444ccccccccccccccccc444444444446666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666444444ccccccccccccccccc44444444ccccccccccccccccc444444444446666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666444444ccccccccccccccccc44444444ccccccccccccccccc444444444446666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666444444ccccccccccccccccc44444444ccccccccccccccccc444444444446666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666444444ccccccc666ccccccc44444444cccccc666cccccccc4444444444466666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666444444ccccccc666ccccccc44444444cccccc666cccccccc4444444444466666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666444444ccccccc666ccccccc44444444cccccc666cccccccc4444444444466666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666444444ccccccccccccccccc44444444ccccccccccccccccc4444444444466666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666444444ccccccccccccccccc44444444422ccccccccccccc44444444444466666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666644444442cccccccccccccc2444444444422ccccccccc22222444444444466666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666444444422cccccccccccc224444444444422cccccc2222224444444444466666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666444444442ccccccccc222244444444444422cccc22222444444444444666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666664444444422cccc2222444444444444444442222222444444444444444666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666444444444422224444444444444444444444422444444444444444444666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666644444444444444444444444444444444444444444444444444444446666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666644444444444444444444444444444444444444444444444444444446666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666644444444444444444444444444444444444444444444444444444446666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666664444444444444444444444444444444444444444444444444444466666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666444444444444444444444444444444444444444444444444444666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666444444444444444444444444444444444444444444444444444666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666644444444444444444444446666444444444444444444444446666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666644444444444444444444666444666444444444444444444446666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666664444444444444444444644444446644444444444444444466666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666444444444444444446644444444644444444444444444666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666644444444444444444444444444664444444444444446666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666664444444444444444444444444444444444444444466666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666444444444444444444444444444444444444444666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666644444444444444444444444444444444444446666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        666666666666666666666666666666666666666666666666666666666666666444444444444444444444444444444444a666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        bbbb7777bbbb7777bbbb7777bbbb7777bbbb7766666666666666666666666666a44444444444444444444444444444eaaa66666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        bbbb7777bbbb7777bbbb7777bbbb7777bbbb776666666666666666666666666aaa444444444444444444444444444eeaaaa6666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666
        bbbb7777bbbb7777bbbb7777bbbb7777bbbb776666666666666666666666666aaaaee444444444444444444444eeeeeaaaa6666666666666666eeeeeeeeeeee6666666666666666666666bb7777bbbb7
        bbbb7777bbbb7777bbbb7777bbbb7777bbbb776666666666666666666666666aaaaeeeee444444444444444eeeeeeeeaaaa66666666666666666666666666667777bbbb7777bbbb7777bbbb7777bbbb7
        7777bbbb7777bbbb7777bbbb7777bbbb7777bb6666666666666666666666666aaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaa6666666666666666bbbb7777bbbb7777bbbb7777bbbb7777bbbb7777bbbb7
        7777bbbb7777bbbb7777bbbb7777bbbb7777bb6666666666666666666666666aaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaa6666666666666666bbbb7777bbbb7777bbbb7777bbbb7777bbbb7777bbbb7
        7777bbbb7777bbbb7777bbbb7777bbbb7777bb6666666666666666666666666aaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaa666666666666666bbbb7777bbbb7777bbbb7777bbbb7777bbbb7777bbbb7
        7777bbbb7777bbbb7777bbbb7777bbbb7777bb6666666666666666666666666aaaaeeeeeeeeeeeeeeeeeeeee8eeeeeeaaaaa666666666666666bbbb7777bbbb7777bbbb7777bbbb7777bbbb7777bbbb7
        666666666677bbbb7777bbbb7777bbbb7777bb6666666666666666666666666aaaaeeeeeeeeeeeeeeeeeee88888eeeeaaaaa6666666666666667777bbbb7777bbbb7777bbbb7777bbbb7777bbbb7777b
        eeeeeeeeee666666666666666666bbbb7777bb6666666666666666666666666aaaaeeeeeeeeeeeeeeeeeeee888eeeeeaaaaa6666666666666667777bbbb7777bbbb7777bbbb7777bbbb7777bbbb7777b
        eeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeee8a8eeeeeaaaaa6666666666666667777bbbb7777bbbb7777bbbb7777bbbb7777bbbb7777b
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaa666666666666667777bbbb7777bbbb7777bbbb7777bbbb7777bbbb7777b
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaa666666666666667777bbbb7777bbbb7777bbbb7777bbbb7777bbbb7777b
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaa666666666666667777bbbb7777bbbb7777bbbb7777bbbb7777bbbb7777b
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaa666666666666666666666b7777bbbb7777bbbb7777bbbb7777bbbb7777b
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaa66666666666666eeeeeee6666666666677bbbb7777bbbb7777bbbb7777b
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaa6666666666666eeeeeeeeeeeeeeeeee6666666666bbbb7777bbbb7777b
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666aaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaa6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666b7777b
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666aaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaa6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaa6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaa6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaa666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaa6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaa6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaa6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaa6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaa666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666aaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaa666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666aaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaa666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666aaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaa666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666aaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaa666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666aaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaa66666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666aaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaa66666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666aaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaa66666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666aaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaa66666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666aaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaa66666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666aaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaa6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666aaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaa6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666aaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaa6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666aaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaa6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666aaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaa6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666aaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaa666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666aaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaa666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666aaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaa666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666aaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaa666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666aaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaa666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666aaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeaaaaaaaaaaa666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `)
    tiles.setCurrentTilemap(tilemap`level21`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile50`, function (sprite, location) {
    game.splash("You Entered a Night!")
    info.startCountdown(200)
    tiles.setCurrentTilemap(tilemap`level0`)
    myEnemy = sprites.create(img`
        ........8888........
        .........88.........
        .......888888.......
        ......88888888......
        .....8666886668.....
        .....8c1188c118.....
        .....8d6188d618.....
        .....8ddc99ddc8.....
        .....8889499888.....
        .....8899499988.....
        .....8cdc99cdc8.....
        .....23dddddd32.....
        .....23eeeeee32.....
        .....236c6c6c32.....
        .....88ec6c6e88.....
        .....89feeeef98.....
        .....8c9ffff9c8.....
        ......4c9ff9c9......
        32888884c99c98888823
        3288688c4449c8886623
        3286688ca8a8a8688823
        32....8a8a8ac8....23
        32....8cacacc8....23
        .2....8cccccc8.....3
        ......88cccc88......
        .....8c888888c8.....
        .....888....888.....
        .....888....888.....
        .....8c6....888.....
        .....6c6....6c6.....
        .....888....888.....
        .....666....666.....
        .....888....888.....
        .....868....868.....
        .....499....499.....
        .....499....499.....
        ....c4c9c..c4c9c....
        `, SpriteKind.Enemy)
    animation.runMovementAnimation(
    myEnemy,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    myEnemy.follow(mySprite, 100)
    drunkbear = sprites.create(img`
        .5555....666....5555.
        .5445....666....5445.
        .5455...66666...5545.
        .555c55555555555c555.
        ....5555555555555....
        ....5555555555555....
        ....5566655566655....
        ....5555555555555....
        ....5516155516155....
        ....5511155511155....
        ....5554466644555....
        ...555444494444555...
        ...555444494444555...
        ....5554446444555....
        ....6116116116116....
        ....6666666666666....
        ....5166666666615....
        ..56551611611615565..
        ..55655555555555655..
        ..66655555555555666..
        .5666666666666666555.
        .6666556665666556565.
        .5656555544455556665.
        .5556555446445556565.
        .5556554444444556555.
        .6666544446444456666.
        .5556444444444446665.
        .5556444444444446555.
        .6556444444444446555.
        .6556444444444446555.
        .6665666666666665666.
        .5556555555555556555.
        .5556555555555556555.
        555556666666666655555
        5555565555.5555655555
        ..55.55555.55555.55..
        .....55555.55555.....
        .....55555.55555.....
        .....56555.55555.....
        .....65555.55655.....
        .....55656.55665.....
        .....66666.66666.....
        .....65555.56325.....
        .....55555.55632.....
        .....55555.55535.....
        .....55555.55555.....
        .....55565.55555.....
        .....66666.66666.....
        .959959955.559959959.
        .959959955.559959959.
        `, SpriteKind.DRUNKFREDDY)
    animation.runMovementAnimation(
    drunkbear,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    drunkbear.follow(mySprite, 30)
    ToyFr = sprites.create(img`
        .....66.....
        .....66.....
        .5...ff...5.
        545.6666.545
        .5c555555c5.
        ..56655665..
        ..51655615..
        ..5c2552c5..
        ..54466445..
        .5544444455.
        .ff5c6c65ff.
        .ff544445ff.
        ...566665...
        .5556446555.
        555446644555
        555444444555
        555446644555
        55.544445.55
        55.444444.55
        55.554455.55
        ...55..55...
        ...55..55...
        ...55..55...
        ...55..55...
        ...55..55...
        ..555..555..
        ..555..555..
        `, SpriteKind.ToyF)
    ToyFr.follow(mySprite)
    mangle = sprites.create(assets.image`mangle`, SpriteKind.mangle)
    mangle.follow(mySprite, 100)
    mangle.startEffect(effects.trail)
})
function holder () {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile57`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Day theme`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(assets.image`mkay`)
    tiles.setCurrentTilemap(tilemap`level2`)
    info.setLife(1)
    info.setScore(0)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    mySprite.changeScale(0, ScaleAnchor.Middle)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bonnie, function (sprite, otherSprite) {
    game.gameOver(false)
})
function hold2 () {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile75`, function (sprite, location) {
    info.setScore(-20)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 4861, 4668, 185, 0, 106, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    mySprite.setImage(img`
        . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 a a b 8 b a a 6 . . . 
        . . 6 9 6 6 6 6 6 6 6 9 6 . . 
        . . 6 4 9 1 b 4 b 1 9 4 6 . . 
        . . 6 4 9 c 6 4 6 c 9 4 6 . . 
        . . 6 4 4 4 9 9 9 4 4 4 6 . . 
        . . 6 6 4 4 6 6 6 4 4 6 6 . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . 6 6 c 6 4 4 4 6 2 6 6 . . 
        . 6 c 6 6 d 6 4 6 d 6 6 2 6 . 
        . 6 d 6 c 6 6 6 6 6 2 6 d 6 . 
        . 6 6 6 c c 2 6 2 2 2 6 6 6 . 
        6 4 4 6 2 2 6 6 6 2 2 6 4 4 6 
        6 4 4 6 2 2 6 6 6 2 d 6 4 4 6 
        . 6 6 6 2 2 2 6 2 d d 6 6 6 . 
        . . . 6 d d d d d d d 6 . . . 
        . . . . 6 6 6 6 6 6 6 . . . . 
        `)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Day theme`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(assets.image`mkay`)
    tiles.setCurrentTilemap(tilemap`level2`)
    info.setLife(1)
    info.setScore(0)
    mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    mySprite.changeScale(0, ScaleAnchor.Middle)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    music.stopAllSounds()
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666c6666666666c6666666666666666666666666666c6666666666c6666666666666666666666666666c6666666666c6666666666666666666666666666c6666666666c6666666666666666666666
        6666666666666666cbc66666666666666666666c6666666666666666cbc66666666666666666666c6666666666666666cbc66666666666666666666c6666666666666666cbc66666666666666666666c
        66666666666666666c666666666666666666666666666666666666666c666666666666666666666666666666666666666c666666666666666666666666666666666666666c6666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666c666666666666666666666666666666666666666c666666666666666666666666666666666666666c666666666666666666666666666666666666666c6666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666c666666666666666666666666666666666666666c666666666666666666666666666666666666666c666666666666666666666666666666666666666c666666666666666666666666666
        6666666666666666666666666cbc6666666666666666666666666666666666666cbc6666666666666666666666666666666666666cbc6666666666666666666666666666666666666cbc666666666666
        666c666666666666666666666bbb666666666666666c666666666666666666666bbb666666666666666c666666666666666666666bbb666666666666666c666666666666666666666bbb666666666666
        66bcb66666666666666666666cbc66666666666666bcb66666666666666666666cbc66666666666666bcb66666666666666666666cbc66666666666666bcb66666666666666666666cbc666666666666
        6ccccc666666666666cc666666666666666666666ccccc666666666666cc666666666666666666666ccccc666666666666cc666666666666666666666ccccc666666666666cc66666666666666666666
        66cbc6666666666666cc6666666666666666666666cbc6666666666666cc6666666666666666666666cbc6666666666666cc6666666666666666666666cbc6666666666666cc66666666666666666666
        66b6b66666666666666666666666666666c6666666b6b66666666666666666666666666666c6666666b6b66666666666666666666666666666c6666666b6b66666666666666666666666666666c66666
        666666666666666666666666666666666cbc6666666666666666666666666666666666666cbc6666666666666666666666666666666666666cbc6666666666666666666666666666666666666cbc6666
        66666666666c6666666666666666666666c6666666666666666c6666666666666666666666c6666666666666666c6666666666666666666666c6666666666666666c6666666666666666666666c66666
        6666666666cbc6666666666666666666666666666666666666cbc6666666666666666666666666666666666666cbc6666666666666666666666666666666666666cbc666666666666666666666666666
        66666666666c666666666666666666666666666666666666666c666666666666666666666666666666666666666c666666666666666666666666666666666666666c6666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6c6666666666666666666666666c6666666666666c6666666666666666666666666c6666666666666c6666666666666666666666666c6666666666666c6666666666666666666666666c666666666666
        66666666666666666c666666666666666666666666666666666666666c666666666666666666666666666666666666666c666666666666666666666666666666666666666c6666666666666666666666
        6666666666666666666666666666666666c666666666666666666666666666666666666666c666666666666666666666666666666666666666c666666666666666666666666666666666666666c66666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666cc66666c66666666666666666666666666666666cc66666c66666666666666666666666666666666cc66666c66666666666666666666666666666666cc66666c66666666666666666666666666
        666666cc6666666666666ccccccccccc66666666666666cc6666666666666ccccccccccc66666666666666cc6666666666666ccccccccccc66666666666666cc6666666666666ccccccccccc66666666
        6666666666666666cccccccccccccccccccc66666666666666666666cccccccccccccccccccc66666666666666666666cccccccccccccccccccc66666666666666666666cccccccccccccccccccc6666
        6666666666666cccccccccccccccccccccccccc66666666666666cccccccccccccccccccccccccc66666666666666cccccccccccccccccccccccccc66666666666666cccccccccccccccccccccccccc6
        cc666666666ccccccccccccccccccccccccccccccc666666666ccccccccccccccccccccccccccccccc666666666ccccccccccccccccccccccccccccccc666666666ccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
        bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
        bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
        bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
        bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
        3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
        333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
        cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
        cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
        cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
        bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
        bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
        dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
        dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
        dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
        ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
        ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
        ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
        ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
        d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
        333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
        33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
        33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
        d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
        ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
        b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
        bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
        bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
        b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
        dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddaaaaaaaaaaaaadddddddddddddddddddddddddddaaaaaaaaaaaaadddddddddddddddddddddddddddaaaaaaaaaaaaadddddddddddddddddddddddddddaaaaaaaaaaaaaddddddddddddddddd
        ddddddaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaddddddddddddd
        ddddaaaaaaaaaaaaaaaadddaaaaaaaddddddddddddddaaaaaaaaaaaaaaaadddaaaaaaaddddddddddddddaaaaaaaaaaaaaaaadddaaaaaaaddddddddddddddaaaaaaaaaaaaaaaadddaaaaaaadddddddddd
        ddaaaaaaaaaaaaaaaaaaaddddddaaaaaadddddddddaaaaaaaaaaaaaaaaaaaddddddaaaaaadddddddddaaaaaaaaaaaaaaaaaaaddddddaaaaaadddddddddaaaaaaaaaaaaaaaaaaaddddddaaaaaaddddddd
        aaaaaaaaaaaaaaaaaaaaaadddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        `)
    music.play(music.createSong(hex`006e000408020104001c00100500640000041e000004000000000000000000000000000a0400043c0000000100012a04000500012a08000900012a0c000d0001250e000f0001242000210001242400250001242800290001242b002c0001242d002e000125`), music.PlaybackMode.LoopingInBackground)
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level13`)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile67`, function (sprite, location) {
    myEnemy.setImage(img`
        ........8888........
        .........88.........
        .......888888.......
        ......88888888......
        .....8666886668.....
        .....8c1188c118.....
        .....8d6188d618.....
        .....8ddc99ddc8.....
        .....8889499888.....
        .....8899499988.....
        .....8cdc99cdc8.....
        .....23dddddd32.....
        .....23eeeeee32.....
        .....236c6c6c32.....
        .....88ec6c6e88.....
        .....89feeeef98.....
        .....8c9ffff9c8.....
        ......4c9ff9c9......
        32888884c99c98888823
        3288688c4449c8886623
        3286688ca8a8a8688823
        32....8a8a8ac8....23
        32....8cacacc8....23
        .2....8cccccc8.....3
        ......88cccc88......
        .....8c888888c8.....
        .....888....888.....
        .....888....888.....
        .....8c6....888.....
        .....6c6....6c6.....
        .....888....888.....
        .....666....666.....
        .....888....888.....
        .....868....868.....
        .....499....499.....
        .....499....499.....
        ....c4c9c..c4c9c....
        `)
    WFOXY.setImage(assets.image`fox`)
    drunkbear.setImage(img`
        .5555....666....5555.
        .5445....666....5445.
        .5455...66666...5545.
        .555c55555555555c555.
        ....5555555555555....
        ....5555555555555....
        ....5566655566655....
        ....5555555555555....
        ....5516155516155....
        ....5511155511155....
        ....5554466644555....
        ...555444494444555...
        ...555444494444555...
        ....5554446444555....
        ....6116116116116....
        ....6666666666666....
        ....5166666666615....
        ..56551611611615565..
        ..55655555555555655..
        ..66655555555555666..
        .5666666666666666555.
        .6666556665666556565.
        .5656555544455556665.
        .5556555446445556565.
        .5556554444444556555.
        .6666544446444456666.
        .5556444444444446665.
        .5556444444444446555.
        .6556444444444446555.
        .6556444444444446555.
        .6665666666666665666.
        .5556555555555556555.
        .5556555555555556555.
        555556666666666655555
        5555565555.5555655555
        ..55.55555.55555.55..
        .....55555.55555.....
        .....55555.55555.....
        .....56555.55555.....
        .....65555.55655.....
        .....55656.55665.....
        .....66666.66666.....
        .....65555.56325.....
        .....55555.55632.....
        .....55555.55535.....
        .....55555.55555.....
        .....55565.55555.....
        .....66666.66666.....
        .959959955.559959959.
        .959959955.559959959.
        `)
    bunny.setImage(img`
        .........eee......eee.........
        ........eddde....eddde........
        ........eddde....eddde........
        ........eddde....eddde........
        ........eeeee....eeeee........
        ........eeeee....eeeee........
        ........eddde....eddde........
        ........eddde....eddde........
        ........eddde....eddde........
        .........eee......eee.........
        .........eeeeeeeeeeee.........
        ........eeeeeeeeeeeeee........
        ........ee6666666666ee........
        .......ee666666666666ee.......
        .......ee666666666666ee.......
        .......ee666666666666ee.......
        .......ee666666666666ee.......
        .......ee66f666666f66ee.......
        ......eee666666666666eee......
        ......eee666666666666eee......
        ......eee666666666666eee......
        ......eee666666666666eee......
        ......eee666666666666eee......
        .......aa16666666666caa.......
        .......aaa1c166661c1aaa.......
        ........aaaaa1c1caaaaa........
        .......a6aaaaaaaaaaaa6a.......
        ......aa6eaaaaaaaaaae6aa......
        .....aaa6eedffffffdee6aaa.....
        .....66a6edfffddfffde6a23.....
        ....aaa6eedffddddffdee723.....
        ....aaaeeddddd66dddddee723....
        ...aaaaeeddddd66dddddee823....
        ...aaaaeeddddddddddddee823....
        ...aaaaeeddddd66dddddee87.....
        ...aaaaeeddddd66dddddee.7.....
        ...6aaaeeddddddddddddee.7.....
        ...a666eeddddddddddddee.......
        ...aaaaeeddddddddddddee.......
        ...aaaa6eeeeeeeeeeeeee6.......
        ...aaaae66666666666666e.......
        ...6aa6eeeeeeeeeeeeeeee.......
        ....66.6eeeeeeeeeeeeee6.......
        ...dcc.e66eeeeeeeeee66e.......
        ..d.cceeee66aaaaaa66eeee......
        ..dcdc666eee......eeeeee......
        ..dcdc66eeee......eeeeee......
        ...cdc666eee......ee6eee......
        ......666eee......e66eee......
        ......66ee6e......ee66ee......
        ......eeee66......eeeeee......
        .......6eee........eeee.......
        .......aaaa........aaaa.......
        .......aaaa........aaaa.......
        .......eaae........6aa6.......
        .......eeee........e666.......
        .......eeee........eee6.......
        .......ee6e........eeee.......
        .......ee66........e6ee.......
        .......ee6e........eeee.......
        .......6666........6666.......
        .......e66e.........cc........
        ......eeaaee......ddeedd......
        ......eeaaee......ddeedd......
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mangle, function (sprite, otherSprite) {
    game.setGameOverEffect(false, effects.melt)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fox, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile78`, function (sprite, location) {
    info.setScore(-70)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 4861, 4668, 185, 0, 106, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    mySprite.setImage(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 b b b b b b b 6 . . . 
        . . . 6 d d d d d d d d d 6 . . 
        . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . . 6 9 6 9 9 9 9 9 6 9 6 . . 
        . . . 6 9 9 6 6 6 6 6 9 9 6 . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 6 b b b b b 8 b 6 6 . . 
        . . . 6 6 b b b b b b b 6 6 . . 
        . . . 6 6 b b b b b b b 6 6 . . 
        . . . 6 6 b b b b b b b 6 6 . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . . 6 . . . . . 6 . . . . 
        . . . . . 6 . . . . . 6 . . . . 
        . . . . . 6 . . . . . 6 . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
function Music_Box () {
    puppetl = sprites.create(img`
        ..................
        ..................
        ...1111111........
        ..111111111.......
        .11111111111......
        .11111111111......
        .11111111111......
        .11111111111......
        .11111111111......
        .11111111111......
        .11111111111......
        ..111111111.......
        ...1111111........
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        ..................
        `, SpriteKind.puppet)
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile61`, function (sprite, location) {
    myEnemy.setImage(assets.image`myImage2`)
    WFOXY.setImage(assets.image`fox0`)
    drunkbear.setImage(assets.image`myImage6`)
    bunny.setImage(img`
        ....eeeeeeeeeeeeeeeeee..
        ...eddeeeeeeeeeeeeeedde.
        ...eddee6666666666eedde.
        ..eddee666666666666eedde
        ..eddee666666666666eedde
        ..eddee666666666666eedde
        ...eeee666666666666eeee.
        .....ee66f666666f66ee...
        ....eee666666666666eee..
        ....eee666666666666eee..
        ....eee666666666666eee..
        ....eee666666666666eee..
        ....eee666666666666eee..
        .....aa16666666666caa...
        .....aaa1c166661c1aaa...
        ......aaaaa1c1caaaaa....
        .....a6aaaaaaaaaaaa6a...
        ....aa6eaaaaaaaaaae6aa..
        ...aaa6eedffffffdee6aaa.
        ...66a6edfffddfffde6a23.
        ..aaa6eedffddddffdee723.
        ..aaaeeddddd66dddddee723
        .aaaaeeddddd66dddddee823
        .aaaaeeddddddddddddee823
        .aaaaeeddddd66dddddee87.
        .aaaaeeddddd66dddddee.7.
        .6aaaeeddddddddddddee.7.
        .a666eeddddddddddddee...
        .aaaaeeddddddddddddee...
        .aaaa6eeeeeeeeeeeeee6...
        .aaaae66666666666666e...
        ..66.6eeeeeeeeeeeeee6...
        .dcc.e66eeeeeeeeee66e...
        d.cceeee66aaaaaa66eeee..
        dcdc666eee......eeeeee..
        dcdc66eeee......eeeeee..
        .cdc6aaaae......eaaaae..
        ....6aaaae......eaaaae..
        ....6eaaee......e6aa6e..
        ....eeeee6......ee666e..
        .....eeee........eee6...
        .....ee6e........eeee...
        .....ee66........e6ee...
        .....ee6e........eeee...
        .....6666........6666...
        .....e66e.........cc....
        ....eeaaee......ddeedd..
        ....eeaaee......ddeedd..
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ToyF, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    game.splash("You Entered a Night!")
    info.startCountdown(200)
    tiles.setCurrentTilemap(tilemap`level0`)
    myEnemy = sprites.create(img`
        ........8888........
        .........88.........
        .......888888.......
        ......88888888......
        .....8666886668.....
        .....8c1188c118.....
        .....8d6188d618.....
        .....8ddc99ddc8.....
        .....8889499888.....
        .....8899499988.....
        .....8cdc99cdc8.....
        .....23dddddd32.....
        .....23eeeeee32.....
        .....236c6c6c32.....
        .....88ec6c6e88.....
        .....89feeeef98.....
        .....8c9ffff9c8.....
        ......4c9ff9c9......
        32888884c99c98888823
        3288688c4449c8886623
        3286688ca8a8a8688823
        32....8a8a8ac8....23
        32....8cacacc8....23
        .2....8cccccc8.....3
        ......88cccc88......
        .....8c888888c8.....
        .....888....888.....
        .....888....888.....
        .....8c6....888.....
        .....6c6....6c6.....
        .....888....888.....
        .....666....666.....
        .....888....888.....
        .....868....868.....
        .....499....499.....
        .....499....499.....
        ....c4c9c..c4c9c....
        `, SpriteKind.Enemy)
    animation.runMovementAnimation(
    myEnemy,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    myEnemy.follow(mySprite, 100)
    WFOXY = sprites.create(assets.image`fox`, SpriteKind.Fox)
    animation.runMovementAnimation(
    WFOXY,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    WFOXY.follow(mySprite, 200)
    ToyBo = sprites.create(img`
        ...2....2...
        ..212..212..
        ..bbb..bbb..
        ..212..212..
        ..212..212..
        ..222..222..
        ...d....d...
        ...662266...
        ..2cc22cc2..
        .2c16cc61c2.
        .2c17cc71c2.
        .22cc66cc22.
        .f22cccc22f.
        .f2c6116c2f.
        .2c166661c2.
        ..2cccccc2..
        ...ff22ff...
        .222ffff222.
        222ffccff222
        2222cccc2222
        2222cccc2222
        22.2cccc2.22
        22.2cccc2.22
        22.222222.22
        ...22..22...
        ...dd..dd...
        ...22..22...
        ...22..22...
        ...dd..dd...
        ..222..222..
        ..2d2..2d2..
        `, SpriteKind.ToyB)
    ToyBo.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.puppet, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    sprites.destroy(myEnemy)
    sprites.destroy(puppetl)
    sprites.destroy(ToyBo)
    sprites.destroy(ToyCh)
    sprites.destroy(ToyFr)
    sprites.destroy(WFOXY)
    sprites.destroy(drunkbear)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.ToyB, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile70`, function (sprite, location) {
    info.setScore(-10)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 4861, 4668, 185, 0, 106, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    mySprite.setImage(img`
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . 4 8 8 4 4 4 . . . . . 
        . . . . 4 6 6 4 4 6 6 4 . . . . 
        . . . . 4 6 6 4 4 6 6 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 6 6 6 6 6 6 5 . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . 4 4 7 7 7 5 5 5 5 7 7 7 4 4 . 
        4 4 4 5 7 7 7 7 7 7 7 7 4 4 4 5 
        4 4 4 5 7 7 7 7 7 7 7 7 4 4 4 5 
        . 5 5 7 7 7 7 7 7 7 7 7 7 5 5 . 
        . . . . . a a a a a a . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . b b b a a b b b . . . . 
        . . . . a a a . . a a a . . . . 
        . . . 9 9 5 5 . . 5 5 9 9 . . . 
        `)
})
let ToyBo: Sprite = null
let puppetl: Sprite = null
let mangle: Sprite = null
let ToyFr: Sprite = null
let drunkbear: Sprite = null
let myEnemy: Sprite = null
let ToyCh: Sprite = null
let WFOXY: Sprite = null
let bunny: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666222222222222222266666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666222222222222222266666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666222222222222222266666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666222222222222222266666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666622266666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666aaaaaa66666666666666666aaaaaa666666666666666666666666666666666622266666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666aaaaaa66666666666666666aaaaaa666666666666666666666666666666666622266666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666aa6666666666666666aa666aa6666666666666666666666666222222222222222266666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666aa66666aaa666a66aaaaaa6aa6666666666666666666666666222222222222222266666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666aa66666aaa666a66aa66aa6aa6666666666666666666666666222222222222222266666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666aaaaa66aaaaa6a66aa66aa6aaaa66666666666666666666666222222222222222266666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666aaaaa66aaaaaaa66aaaaaa6aaaa66666666666666666666666222222222222222266666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666aa66666aaa6aaa66aa66aa6aa6666666666666666666666666222266666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666aa66666aaa666a66aa66aa6aa6666666666666666666666666222266666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666aa66666aaa666a66aa66aa6aa6666666666666666666666666222266666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666aa66666aaa666a66aa66aa6aa6666666666666666666666666222222222222222226666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666aa66666aaa6666666666666aa6666666666666666666666666222222222222222226666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666aa666666666666666666666666666666666666666666666666222222222222222226666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666222222222222222226666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666222222222222222226666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff666666666666666666666666666666666666ffff666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff6ff666666666666666666666666666666666ffff666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff6ff6666666666666ff6ff66ffff66ff666f6ff6ff66666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff666f666ff6666666ff6ff66ff6666ffff6f6ff6ff6ffff666666666666666666fff666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff666f6fffff6ff666ffff666ff6666ffffff6ff6ff6ffff6ff66fff6fff6ffff6fff666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff666f6ff6ff6ffff6ff6ff66ff6666ff6fff6ff6ff66ff66ff66fffffff6ff6f6ff6666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff666f6ff6ff6ffff6ff6ff66ffff66ff666f6ff6ff66ff666666ff6f6ff6ffff6fff666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff666f6fffff6ff666ff6ff66ff6666ff666f6ffff666ff66ff66ff6f6ff6ff66666f666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff666f6ff6ff6ff666ff6ff66ff6666ff666f6ffff666ff66ff66ff6f6ff6ff666fff666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff666f6ff6ff6ff666ff6ff66ffff66ff666666666666ff66ff66ff666ff6ffff6fff666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff666f6ff6ff6ff666ff6666666666666666666666666ff66ff66ff66666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff6ff66ff6ff6ff666ff666666666666eeeee66666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff6ff666666666666666666666666eeeeeeeeee666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffff6666666666666666666666666eeeeeeeeedddeee666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeedddddee6666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeddddeeee66666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeddddddeee6666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeddddddeeee66666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeddeeeeee6666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeee666666666eeeeeeeee66666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeeeeee66666666666ddddddddd666666666a6666666666666666666666666666
    66666666666666666666ff666666666666666ff66666666666666666666666666666666666666666666666666666666eeeeee6ddddddddddddddddddddcccdddddd66666666666666666666666666666
    66666666666666666666ff666666666666666ff66666666666666666666666666666666666666666666666666666666aaeee6dddddddddddddddddddddccccccddddddddd66666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaaaa6edddddddddddddddddddddddcccddddddddde6666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaaaaa6edddddddddddddddddddddddddddddddddde6666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeedddddddddddddeeeeeee66666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555555566666666666666eeeeeeeeeeeeee66666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666665555555555555555555556666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555555555555555555555556666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666655555555555555555555555555555555555556666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555555555555599955555599555555555555555666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666555555599999944499999944999999955555555666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666955959944444444444444444444444499999955666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666499494444444444444444444444444444444499666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666444444444444449999944444444449999944444666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666444444444444911111119444444911111119444666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666644444444111111111444444111111111444666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666664444444444444111111111444444111111111444666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666644444444444444111111111444444111111111444666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666644444444444444111111111444444111111111444666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666644444444444444111116661444444111111666444666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666644444444444444111116661444444111111666444666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666694444444444444111116661444444111111666444666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999994444444911111119444444911111119446666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666664444444499999994444444499999994446666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669444444444444444444444444444444444466666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669444444444444444444444444444444444466666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666944444444444444444444444444444444666666666666666666666666666666
    666666666666eeeaeeeaeee66666666666666666666666666666666666666666666666666666666666666666666666666994444444444444444444444444444444666666666666666666666666666666
    666666666666eeeaeeeaeee66666666666666666666666666666666666666666666666666666666666666666666666666694444444444444444444444444444446666666666666666666666666666666
    666666666666eeeaeeeaeeeaeeee666666666666666666666666666666666666666666666666666666666666666666666669444444444444666666644444444466666666666666666666666666666666
    6666666ccccceeeaeeeaeeeaeeeeccccccccccccccccccccccc6666666666666666666666666666666666666666666666666944444444446999999964444444666666666666666666666666666666666
    6666666ccccceeeaeeeaeeeaeeeeccccccccccccccccccccccc6666666666666666666666666666666666666666666666666699444444444444444444444446666666666666666666666666666666666
    6666666ccdddddddddddddddddddddddddddddddddddddddddd6666666666666666666666666666666666666666666666666666994444444444444444444666666666666666666666666666666666666
    6666666ccdddddddddddddddddddddddddddddddddddddddddd6666666666666666666666666666666666666666666666666666669944444444444444466666666666666666666666666666666666666
    6666666ccdd66dd66dd66d66d66ddd6d6dd66d6dd6d6d6ddddd666666666666666666666666666666666666666666666666aaee6e66999999944444466eee66666666666666666666666666666666666
    6666666ccdd6d6d6d6d6dd6dd6ddd6d6d6d6dd66d6d6d6ddddd666666666666666666666666666666666666666666666666aeee6eeee666666666666eeeee66666666666666666666666666666666666
    6666666ccdd666d66dd66d66d66dd6d6d6d66d6d66d6d6ddddd66666666666666666666666666666666666666666666666aaeee6eeeeeeeeee666eeeeeeee66666666666666666666666666666666666
    6666666ccdd6ddd6d6d6ddd6dd6dd6ddd6d6dd6dd6d6d6ddddd6666666666666666666666666666666666666666666666aaeeee6eeeeeeeeeeeeeeeeeeeee66e66666666666666666666666666666666
    6666666ccdd6ddd6d6d66d66d66dd6ddd6d66d6dd6dd6dddddd6666666666666666666666666666666666666666666666aeeeee6eeeeeeeeeeeeeeeee88eee6ee6666666666666666666666666666666
    6666666ccdddddddddddddddddddddddddddddddddddddddddd666666666666666666666666666666666666666666666aeeeeee6eeeeeeeeeeeeeeee8cc8eee6ee666666666666666666666666666666
    6666666ccdddddddddddddddddddddddddddddddddddddddddd66666666666666666666666666666666666666666666aaeeeee6eeeeeeeeeeeeeee888cc888e6eee66666666666666666666666666666
    6666666ccdddddddddddddddddddddddddddddddddddddddddd6666666666666666666666666666666666666666666aaeeeeee6eeeeeeeeeeeeee98888888896eeee6666666666666666666666666666
    6666666ccddddd6666d666ddddddddddddddddddddddddddddd6666666666666666666666666666666666666666666aeeeeee6eeeeeeeeeeeeeeee98888889e6eeeee666666666666666666666666666
    6666666ccdddddd6ddd6d6dd666d666dd6dd66d666d6d6ddddd666666666666666666666666666666666666666666aaeeeeee6eeeeeeeeeeeeeeeee889988ee66eeeee66666666666666666666666666
    6666666ccdddddd6ddd6d6dd6dddd6dd6d6d6d6d6dd6d6ddddd666666666666666666666666666666666666666666aeeeeeee6eeeeeeeeeeeeeeeee99ee99eee6eeeeeee666666666666666666666666
    6666666ccdddddd6ddd6d6dd666dd6dd666d66dd6dd6d6ddddd66666666666666666666666666666666666666666aeeeeeee6eeeeeeeeeeeeeeeeee9eeee9eee6eeeeeeee66666666666666666666666
    6666666ccdddddd6ddd6d6dddd6dd6dd6d6d6d6d6dddddddddd66666666666666666666666666666666666666666aeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeee6666666666666666666666
    6666666ccdddddd6ddd666dd666dd6dd6d6d6d6d6dd6d6ddddd6666666666666666666666666666666666666666aaeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeee666666666666666666666
    6666666ccdddddddddddddddddddddddddddddddddddddddddd6666666666666666666666666666666666666666aeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeee6aaeeeeeeeee64444444666666666666
    6666666ccdddddddddddddddddddddddddddddddddddddddddd666666666666666666666666666666666666666aaeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeee66aaeeeeeeee44444444466666666666
    6666666ccdddddddddddddddddddddddddddddddddddddddddd666666666666666666666666666666666666666aaeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeee6aaaeeeeee444444444446666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeee6aaaaaaaee444444444446666666666
    6666666666666666666666666ddcccc66666666666666666666666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeee666aaaaaaa444444444446666666666
    6666666666666666666666666ddcccc66666666666666666666666666666666666666666666666666666666666664444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666aaa444444444446666666666
    6666666666666666666666666ddcccc666666666666666666666666666666666666666666666666666666666666444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666444444444446666666666
    6666666666666666666666666ddcccc6666666666666666666666666666666666666666666666666666666666644444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666994444444446666666666
    6666666666666666666666666ddcccc6666666666666666666666666666666666666666666666666666666666644444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666999944444446666666666
    6666666666666666666666666ddcccc6666666666666666666666666666666666666666666666666666666666644444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666699999944466666666666
    6666666666666666666666666ddcccc6666666666666666666666666666666666666666666666666666666666644444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666669999999666666666666
    6666666666666666666666666ddcccc6666666666666666666666666666666666666666666666666666666666644444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666666666
    6666666666666666666666666ddcccc6666666666666666666666666666666666666666666666666666666666644444444444aeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666666666
    6666666666666666666666666ddcccc6666666666666666666666666666666666666666666666666666666666699444449999aeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666666666
    6666666666666666666666666ddcccc6666666666666666666666666666666666666666666666666666666666669999999996aaeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666666666
    6666666666666666666666666ddcccc6666666666666666666666666666666666666666666666666666666666666999999966aaeeeeeeeeeeeeeeeeeeeeeeeeea6666666666666666666666666666666
    6666666666666666666666666ddcccc6666666666666666666666666666666666666666666666666666666666666666666666aaaeeeeeeeeeeeeeeeeeeeeeeeaa6666666666666666666666666666666
    6666666666666666666666666ddcccc6666666666666666666666666666666666666666666666666666666666666666666666aaaaeeeeeeeeeeeeeeeeeeeeeaa66666666666666666666666666666666
    6666666666666666666666666ddcccc6666666666666666666666666666666666666666666666666666666666666666666666aaaaaaaaaaaaaaaaaaaaaaaaaaa66666666666666666666666666666666
    6666666666666666666666666ddcccc66666666666666666666666666666666666666666666666666666666666666666666666aaaaaaaaaaaaaaaaaaaaaaaaaa66666666666666666666666666666666
    6666666666666666666666666ddcccc66666666666666666666666666666666666666666666666666666666666666666666666aaaaaaaaaaaaaaaaaaaaaaaaa666666666666666666666666666666666
    6666666666666666666666666ddcccc66666666666666666666666666666666666666666666666666666666666666666666666aaaaaaaaaaaaaaaaaaaaaaaaa666666666666666666666666666666666
    6666666666666666666666666ddcccc66666666666666666666666666666666666666666666666666666666666666666666666aaaaaaaaaaaaaaaaaaaaaaaaa666666666666666666666666666666666
    6666666666666666666666666ddcccc66666666666666666666666666666666666666666666666666666666666666666666666aaaaaaaaaaaaaaaaaaaaaaaaa666666666666666666666666666666666
    6666666666666666666666666ddcccc666666666666666666666666666666666666666666666666666666666666666666666666aaaaaaaaaaaaaaaaaaaaaaa6666666666666666666666666666666666
    `)
music.play(music.createSong(assets.song`menu theme`), music.PlaybackMode.LoopingInBackground)
