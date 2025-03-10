bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.clearScreen()
    led.plot(2, 2)
    y = 2
    x = 2
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.clearScreen()
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    led.unplot(x, y)
    if (data == "N") {
        y = y - 1
    }
    if (data == "D") {
        y = y + 1
    }
    if (data == "P") {
        x = x + 1
    }
    if (data == "L") {
        x = x - 1
    }
    if (data == "T") {
        basic.showString("Tob")
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (data == "Ch") {
        basic.showString("M+T+F+K+T=")
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.clearScreen()
    }
    led.plot(x, y)
})
let data = ""
let x = 0
let y = 0
bluetooth.startUartService()
