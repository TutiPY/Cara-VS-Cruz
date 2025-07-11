input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Pitchfork)
    } else {
        basic.showIcon(IconNames.Silly)
    }
})
