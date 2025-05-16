radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == myID) {
        display = _2smiley
        drawScreen()
    } else {
        counter = 0
    }
})
input.onButtonPressed(Button.A, function () {
    display = _3dB
    drawScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(myID)
})
function drawScreen () {
    if (display != _2smiley) {
        if (display == _1X) {
            basic.showIcon(IconNames.No)
        } else if (display == _3dB) {
            basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
        } else {
            led.plotBarGraph(
            Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 9),
            9
            )
        }
        display = _0graph
    } else {
        basic.showIcon(IconNames.Happy)
    }
}
let _1X = 0
let _3dB = 0
let counter = 0
let _2smiley = 0
let _0graph = 0
let display = 0
let myID = 0
radio.setGroup(1)
myID = 8
display = _0graph
loops.everyInterval(500, function () {
    if (display == _2smiley) {
        drawScreen()
    } else {
        display = _0graph
        drawScreen()
        counter += 1
        if (counter >= 2) {
            display = _1X
            drawScreen()
        }
    }
})
basic.forever(function () {
	
})
