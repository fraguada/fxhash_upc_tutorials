import p5 from 'p5'
import { Utilities } from './utilities'

let threshold = 500 * fxrand()

window.$fxhashFeatures = {
  "threshold": threshold
}

let sketch = ( p ) => {

  let w = p.windowWidth
  let h = p.windowHeight

  p.setup = () => {

    p.createCanvas( w, h )

  }

  p.draw = () => {

    // p.background( 0 )
    p.noStroke()
    p.fill( 0, 255, 255 )

    let x1 = w * fxrand()
    let y1 = h * fxrand()

    p.rect( x1, y1, 5, 5 )

    let x2 = w * fxrand()
    let y2 = h * fxrand()

    p.rect( x2, y2, 5, 5 )

    let d = p.dist( x1, y1, x2, y2 )

    if ( d < threshold ) {

      let c = Utilities.rndColor()

      p.stroke( c[0], c[1], c[2], c[3] )
      p.line( x1, y1, x2, y2 )

    }

  }

  p.windowResized = () => {

    w = p.windowWidth
    h = p.windowHeight

    p.resizeCanvas( w, h )

  }

}

let myP5 = new p5( sketch )

// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

// this code writes the values to the DOM as an example
const container = document.createElement("div")
container.innerText = `
  random hash: ${fxhash}\n
  some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
`
// document.body.prepend(container)