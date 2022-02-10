let bri = 0
let pixel_hue = 0
pixel.setColor(0x000000)
let strip = light.createStrip(pins.D1, 8)
pause(200)
input.touchD0.calibrate()
input.touchD2.calibrate()
strip.stopAllAnimations()
strip.setAll(0x000000)
let allapot = 1
forever(function () {
    if (input.touchD0.isPressed()) {
        strip.showAnimationFrame(light.rainbowAnimation)
        if (input.touchD2.isPressed()) {
            strip.showAnimationFrame(light.runningLightsAnimation)
        }
        allapot = 1
    } else if (input.touchD2.isPressed()) {
        strip.showAnimationFrame(light.sparkleAnimation)
        allapot = 1
    } else {
        if (allapot == 1) {
            strip.showAnimationFrame(light.cometAnimation)
            allapot = 0
        }
    }
    pause(20)
})
forever(function () {
    pixel_hue += 1
    if (pixel_hue > 255) {
        pixel_hue = 0
    }
    pixel.setColor(pixel.hsv(pixel_hue, 255, 255))
})
forever(function () {
    if (allapot != 0) {
        if (bri < 255) {
            bri = bri * 1.1
        }
    } else {
        bri = 5
    }
    strip.setBrightness(bri)
    pause(100)
})
