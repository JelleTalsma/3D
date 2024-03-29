// import * as BABYLON from 'babylonjs';
//
// window.addEventListener('DOMContentLoaded', function () {
// // Get the canvas DOM element
//     let canvas = document.getElementById('canvasRender');
//
//     console.log(canvas);
// // Load the 3D engine
//     let engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
//
// // CreateScene function that creates and return the scene
//     function createScene() {
//         // Create a basic BJS Scene object
//         let scene = new BABYLON.Scene(engine);
//         // Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}
//         let camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
//         // Target the camera to scene origin
//         camera.setTarget(BABYLON.Vector3.Zero());
//         // Attach the camera to the canvas
//         camera.attachControl(canvas, false);
//         // Create a basic light, aiming 0, 1, 0 - meaning, to the sky
//         new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
//         // Create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation
//         let sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE);
//         // Move the sphere upward 1/2 of its height
//         sphere.position.y = 1;
//         // Create a built-in "ground" shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable
//         BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false);
//         // Return the created scene
//         return scene;
//     }
//
// // call the createScene function
//     let scene = createScene();
// // run the render loop
//     engine.runRenderLoop(function () {
//         scene.render();
//     });
// // the canvas/window resize event handler
// });
//
// window.addEventListener('resize', function () {
//     engine.resize();
// });