<template>
    <div id="app">
        <canvas id="renderCanvas"></canvas>
    </div>
</template>
<script>
    import * as BABYLON from 'babylonjs';
    import 'babylonjs-loaders';

    export default {
        name: 'App',
        mounted() {
            document.addEventListener('DOMContentLoaded', function () {
                var canvas = document.getElementById('renderCanvas');
// Load the 3D engine
                var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
                var createScene = function(){
                    // Create a basic BJS Scene object
                    var scene = new BABYLON.Scene(engine);
                    // Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}
                    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 10, BABYLON.Vector3.Zero(), scene);
                    camera.attachControl(canvas, false);
                    // Target the camera to scene origin
                    camera.minZ = 0.1;
                    camera. allowUpsideDown  = false;
                    camera.wheelPrecision = 50;
                    camera.setTarget(BABYLON.Vector3.Zero());
                    var orbitPoint = new BABYLON.TransformNode('orbitPoint');
                    orbitPoint.position = new BABYLON.Vector3(0, 0, 0);
                    // Attach the camera to the canvas
                    // Create a basic light, aiming 0, 1, 0 - meaning, to the sky
                    new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
                    scene.clearColor = new BABYLON.Color3(0.5, 0.8, 0.5);
                    // Create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation
                    // var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE);
                    // // Move the sphere upward 1/2 of its height
                    // sphere.position.y = 1;
                    // Create a built-in "ground" shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable
                    // var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false);
                    // Return the created scene
                    var chargingStation = BABYLON.SceneLoader.ImportMesh("", "./", "laadpaal.glb", scene);
                    chargingStation.color = BABYLON.Color3.Black();
                    return scene;
                }
                // call the createScene function
                var scene = createScene();
// run the render loop
                engine.runRenderLoop(function(){
                    scene.render();
                });
            })
        }
    }
</script>
<style>
    body {
        margin: 0;
    }
    #app {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    #renderCanvas {
        width: 99vw;
        height: 99vh;
    }
</style>