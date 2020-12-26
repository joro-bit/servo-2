// Следиме постоянно каква поредица се праща от дистанционното
radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        kitronik_servo_lite.driveForwards(50)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (receivedString == "backward") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        kitronik_servo_lite.driveBackwards(50)
    }
    if (receivedString == "stop") {
        kitronik_servo_lite.stop()
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(10)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (receivedString == "left") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        kitronik_servo_lite.turnLeft(10)
    }
    if (receivedString == "right") {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        kitronik_servo_lite.turnRight(10)
    }
})
let strip: neopixel.Strip = null
kitronik_servo_lite.stop()
radio.setGroup(1)
music.playMelody("C C C C5 C5 F C5 C5 ", 1400)
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(10)
    basic.clearScreen()
    basic.pause(3000)
})
