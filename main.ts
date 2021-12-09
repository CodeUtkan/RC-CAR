namespace RcCar
{
    //% blockId=rcCar
    //% block="RCar SagMotor=$hiz1, SolMotor=$hiz"
    //% hiz.defl=value hiz.defl=value
    //% hiz.min=0 hiz.max=100
    //% hiz1.min=0 hiz.max=100
    //% color="#8B0000"


radio.onReceivedValue(function (name, value) {
    if (name == "sag") {
        sagMotor(value)
    } else if (name == "sol") {
        solMotor(value)
    } else if (name == "dur") {
        dur()
    }
})
export function sagMotor(hiz1: number): void {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.analogWritePin(AnalogPin.P11, Math.abs(hiz1))
    if (hiz1 > 0) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}
export function solMotor(hiz: number): void {
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
export function dur(): void {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
radio.setGroup(5)
led.enable(false)
}
