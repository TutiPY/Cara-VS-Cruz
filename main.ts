input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.House)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Pitchfork)
    } else {
        basic.showIcon(IconNames.Silly)
    }
})
