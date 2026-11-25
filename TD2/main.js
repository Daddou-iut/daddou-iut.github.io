import * as THREE from 'three';

var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



const loader = new THREE.TextureLoader();
const texture = await loader.loadAsync('winnie_is_me.jpg');
// MeshNormalMaterial ignore les textures, donc je change en MeshBasicMaterial
var material = new THREE.MeshBasicMaterial( {map: texture} );
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var cube = new THREE.Mesh( geometry, material );
cube.rotation.order = 'YXZ';

window.addEventListener('deviceorientation', (event) => {
  
  cube.rotation.x = event.beta * Math.PI / 180;
  cube.rotation.y = event.alpha * Math.PI / 180;
  cube.rotation.z = event.gamma * Math.PI / 180;
});
scene.add( cube );
camera.position.z = 5;

function animate() {
  renderer.render(scene, camera);
}

renderer.setAnimationLoop( animate );