input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . # # # .
        . . . . .
        `)
})
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . # # # .
        . . . . .
        `)
})
