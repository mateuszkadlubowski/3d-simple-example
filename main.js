import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
 import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls( camera, renderer.domElement );

document.body.appendChild(renderer.domElement);

const colorYellow = new THREE.Color("hsl(41, 100%, 60%)");
const colorLight= new THREE.Color("hsl(40, 100%, 95%)");

const light = new THREE.AmbientLight(colorLight, .4);
const lightDirectional = new THREE.DirectionalLight(colorLight, .4);
lightDirectional.position.set(800,800,5);

scene.add(light);
scene.add(lightDirectional);

camera.position.z=900;
camera.position.y=180;


const loader = new GLTFLoader();
loader.load( '/models/phoenix_bird/scene.gltf', function ( gltf ) {

    scene.add( gltf.scene );
    const  mixer = new THREE.AnimationMixer( gltf.scene );
    gltf.animations.forEach(( clip ) => {
        mixer.clipAction(clip).play();
    });

    function animate() {
        requestAnimationFrame( animate );
        mixer.update(0.01)
        renderer.render(scene, camera);
    }
    animate();
    // /renderer.render(scene, camera);

}, undefined, function ( error ) {

    console.error( error );

} );


