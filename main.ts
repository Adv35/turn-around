basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
    basic.pause(5000)
    basic.pause(2000)
    basic.pause(1000)
    basic.pause(1000)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 70)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
    basic.pause(5000)
    basic.pause(2000)
    basic.pause(1000)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
})
