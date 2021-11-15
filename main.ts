input.onButtonPressed(Button.A, function () {
    millilitres += -1
})
input.onButtonPressed(Button.B, function () {
    millilitres += -2
})
input.onGesture(Gesture.Shake, function () {
    millilitres += -5
})
let millilitres = 30
basic.forever(function () {
    let temperature = 0
    if (temperature > 11) {
        basic.showString("the tea is too hot, please add milk")
    }
})
basic.forever(function () {
    if (millilitres == 2) {
        music.playMelody("C5 B A B A G B C5 ", 240)
        basic.showString("alexa turn on the kettle")
    }
})
basic.forever(function () {
    if (millilitres == 0) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . . . . .
            `)
        basic.pause(200)
        basic.showString("cup is now empty")
    }
})
