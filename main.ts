let tenperatura_neurtu = 0
music.setVolume(37)
basic.forever(function () {
    if (tenperatura_neurtu < 17) {
        basic.showIcon(IconNames.Square)
    } else if (tenperatura_neurtu > 17) {
        basic.showIcon(IconNames.Chessboard)
    }
})
basic.forever(function () {
    tenperatura_neurtu = input.temperature()
    basic.showString("" + (tenperatura_neurtu))
    if (tenperatura_neurtu) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
    }
    if (tenperatura_neurtu == 17) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
    }
})
