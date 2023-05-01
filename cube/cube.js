import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(24, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});


renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls( camera, renderer.domElement );

document.body.appendChild(renderer.domElement);

const colorYellow = new THREE.Color("hsl(41, 100%, 60%)");
const colorLight= new THREE.Color("hsl(40, 100%, 95%)");

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshPhongMaterial({
    color: colorYellow,
    shininess: 80,
});

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);


const light = new THREE.PointLight(colorLight, 2);
const light2 = new THREE.PointLight(colorLight, .5);
const light3 = new THREE.PointLight(colorLight, .5);
const light4 = new THREE.PointLight(colorLight, .5);

light.position.set(-40, -20, 20)
light2.position.set(40, 20, 10)
light3.position.set(40, -20, 10)
light4.position.set(-40, 20, 10)

scene.add(light);
scene.add(light2);
scene.add(light3);
scene.add(light4);


camera.position.z=15;

controls.update();

const animate = () =>{
     requestAnimationFrame(animate);
    cube.rotation.x -= 0.01;
    cube.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
}
 animate();





