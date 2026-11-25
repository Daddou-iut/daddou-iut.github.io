import * as THREE from 'three';

var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
const loader = new THREE.TextureLoader();
const texture = await loader.loadAsync('winnie_is_me.jpg');
// MeshNormalMaterial ignore les textures, donc je change en MeshBasicMaterial
var material = new THREE.MeshBasicMaterial( {map: texture} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;

function animate() {
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );