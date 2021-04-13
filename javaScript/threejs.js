import * as THREE from '../build/three.module.js';

import Stats from '../jsm/libs/stats.module.js';

import { OrbitControls } from '../jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../jsm/loaders/GLTFLoader.js';

let camera, scene, renderer, stats;

const clock = new THREE.Clock();

let mixer;

init();
animate();

function init() {

  const container = document.createElement( 'div' );
  document.querySelector(".Banner").appendChild( container );

  camera = new THREE.PerspectiveCamera( 20, document.querySelector(".Banner").offsetWidth / document.querySelector(".Banner").offsetHeight, 1, 2000 );
  camera.position.set( -13, 5, -13 );

  scene = new THREE.Scene();
  scene.background = null;

  const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
  hemiLight.position.set( 0, 200, 0 );
  scene.add( hemiLight );

  const light = new THREE.PointLight( 0x7EEBD7, 3, 500 );
  light.position.set( 50, 50, 50 );
  scene.add( light );

  const light2 = new THREE.PointLight( 0xffffff, 3, 500 );
  light2.position.set( -50, 50, -50 );
  scene.add( light2 );

  const light3 = new THREE.PointLight( 0xffffff, 3, 500 );
  light3.position.set( -50, -50, 50 );
  scene.add( light3 );

  const light4 = new THREE.PointLight( 0xEB9C7F, 3, 500 );
  light4.position.set( 50, -50, -50 );
  scene.add( light4 );


  const manager = new THREE.LoadingManager();

  manager.onLoad = function ( ) {

  	document.getElementById("loadingIcon").style.visibility = "hidden";

  };

  manager.onError = function ( url ) {

  	console.log( 'There was an error loading ' + url );

  };


  // model
  const loader = new GLTFLoader( manager );

  loader.load( 'assets/models/Robot04_02.glb', function ( gltf ) {

    gltf.scene.scale.set(1,1,1);
    scene.add( gltf.scene );

  }, undefined, function ( error ) {

    console.error( error );

  } );

  renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( document.querySelector(".Banner").offsetWidth, document.querySelector(".Banner").offsetHeight );
  renderer.shadowMap.enabled = true;
  container.appendChild( renderer.domElement );

  const controls = new OrbitControls( camera, renderer.domElement );
  controls.target.set( 0, 1.5, 0 );
  controls.enableZoom = true;
  controls.enablePan = false;
  controls.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
  }
  controls.update();

  window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

  camera.aspect = document.querySelector(".Banner").offsetWidth / document.querySelector(".Banner").offsetHeight;

  renderer.setSize( document.querySelector(".Banner").offsetWidth, document.querySelector(".Banner").offsetHeight );
  camera.updateProjectionMatrix();

}

//

function animate() {

  requestAnimationFrame( animate );

  const delta = clock.getDelta();

  if ( mixer ) mixer.update( delta );

  renderer.render( scene, camera );

}
