
import * as THREE from './three.min'; 

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, .1, 1000 );

let renderer = new THREE.WebGLRenderer();

document.body.appendChild( renderer.domElement );

let cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
let greenMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
let cube = new THREE.Mesh( cubeGeometry, greenMaterial );

let lineGeometry = new THREE.Geometry();
lineGeometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
lineGeometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
lineGeometry.vertices.push(new THREE.Vector3( 10, 0, 0) );

let line = new THREE.Line( lineGeometry, greenMaterial );


scene.add( cube );
scene.add( line );

//camera.position.z = 5;
camera.position.set( 0, 0, 50 );
camera.lookAt( 0, 0, 0 );


function updateSize() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  renderer.setSize( width, height );
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  console.log("updated the size")
}
window.addEventListener( 'resize', updateSize );
updateSize();


function gameLoop() {
  requestAnimationFrame( gameLoop );

  gameFrame();

  renderer.render( scene, camera);
}

gameLoop();



function gameFrame() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  camera.position.z -= 0.5;

  if (camera.position.z <= 0) {
    camera.position.z = 50;
  }
}






//
