import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

var scene = new THREE.Scene();
const ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);
const sun = new THREE.DirectionalLight(0xffffff, 2);
sun.position.set(5, 10, 5);
scene.add(sun);
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



const textureloader = new THREE.TextureLoader();
const texture = await textureloader.loadAsync('winnie_is_me.jpg');
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
const gltfloader = new GLTFLoader();
const gltf = await gltfloader.loadAsync('Flamingo.glb');
gltf.scene.scale.set(0.02, 0.02, 0.02);
gltf.scene.position.x = 2;
scene.add(gltf.scene);



renderer.setAnimationLoop( animate );