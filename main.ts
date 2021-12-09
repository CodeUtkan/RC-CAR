radio.onReceivedValue(function (name, value) {
    if (name == "sag") {
        sagMotor(value)
    } else if (name == "sol") {
        solMotor(value)
    } else if (name == "dur") {
        dur()
    }
})
function sagMotor (hiz: number) {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.analogWritePin(AnalogPin.P11, Math.abs(hiz))
    if (hiz > 0) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}
function solMotor (hiz: number) {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.analogWritePin(AnalogPin.P15, Math.abs(hiz))
    if (hiz > 0) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
}
function dur () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
radio.setGroup(2)
led.enable(false)
