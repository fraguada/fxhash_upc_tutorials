class Utilities {

    static rndColor () {

        let r = 255 * fxrand()
        let g = 255 * fxrand()
        let b = 255 * fxrand()
        let a = 255 * fxrand()

        return [r, g, b, a]

    }

}

export { Utilities }