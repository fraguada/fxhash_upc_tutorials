import * as THREE from 'three'

let renderer, scene, camera, mesh

setup()
generate()
draw()

function setup() {

  //renderer

  renderer = new THREE.WebGLRenderer( { antialias: true } )
  renderer.setPixelRatio( window.devicePixelRatio )
  renderer.setSize( window.innerWidth, window.innerHeight )
  document.body.appendChild( renderer.domElement )

  // scene

  scene = new THREE.Scene()

  // camera

  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 )
  camera.position.z = 50

  // resize

  window.addEventListener( 'resize', onWindowResize, false )

}

function generate() {

  //make some geometry and add it to the scene
  const geometry = new THREE.SphereGeometry( ( 10 * fxrand() ) + 5, 16 * fxrand(), 16 * fxrand())
  const material = new THREE.MeshNormalMaterial( { wireframe: true } )
  mesh = new THREE.Mesh( geometry, material )
  scene.add( mesh )

}

function draw() {

  requestAnimationFrame( draw )
  mesh.rotation.y += 0.001
  renderer.render( scene, camera )

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  
    renderer.setSize( window.innerWidth,  window.innerHeight )

}

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
//document.body.prepend(container)

