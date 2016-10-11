var renderer;
var scene;
var camera;
var control;
var stats;
var cameraControl;
var sceneMesh;
var texture;
var composer;
var shaderPass;

function init(){

  clock = new THREE.Clock();
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.x = 25;
  camera.position.y = 10;
  camera.position.z = 63;
  camera.lookAt(scene.position);
  cameraControl =  new THREE.OrbitControls( camera );

  renderer =  new THREE.WebGLRenderer();
  renderer.setClearColor( 0x000000, 1.0 );

  renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.7);
  //renderer.shadowMap.enabled;

  // cria esfera do planeta Terra
    var sphereGeometry = new THREE.SphereGeometry(15, 60, 60);

    var textureLoader = new THREE.TextureLoader();
    texture = textureLoader.load("earthmap4k.jpg");

    var matShader = new THREE.ShaderMaterial({
        uniforms: {
          texture: {type: "t", value: texture},
          width: {type: "f", value: window.innerWidth*0.8},
          height: {type: "f", value: window.innerHeight*0.7},
        },
        vertexShader: document.getElementById( 'base-vs' ).textContent,
        fragmentShader: document.getElementById( 'base-fs' ).textContent
    });

    sceneMesh = new THREE.Mesh(sphereGeometry, matShader);
    scene.add(sceneMesh);

    //Cria os passos de renderizacao
    composer = new THREE.EffectComposer( renderer );

    var renderPass = new THREE.RenderPass(scene, camera);

    shaderPass = new THREE.ShaderPass(matShader);
    shaderPass.

    composer.renderTarget2.texture = 

    composer.addPass(renderPass);
    composer.addPass(shaderPass);
/*
  //create a sphere
  var sphereGeometry = new THREE.SphereGeometry(15, 60, 60);

  var textureLoader = new THREE.TextureLoader();
  texture = textureLoader.load("earthmap4k.jpg");

  sphereMaterial = new THREE.MeshPhongMaterial();
  sphereMaterial.map = texture;

  //normalMap
  sceneMesh = new THREE.Mesh( sphereGeometry, sphereMaterial);
  scene.add(sceneMesh);

  //enviroment light
  /*
  var ambientLight = new THREE.AmbientLight( 0x111111 );
  ambientLight.name = 'ambient';
  scene.add( ambientLight );
  */

  document.getElementById("WebGL-output").appendChild( renderer.domElement );
  console.log(scene.children);
  render();
}

function render(){
  cameraControl.update();

//renderer.setSize(texture.image.width, texture.image.height);

  sceneMesh.rotation.y += 0.005;

  //composer.render();
  renderer.autoClear = false;
  renderer.render(scene, camera);
  requestAnimationFrame(render);

}

function createEarthMaterial() {

    var textureLoader = new THREE.TextureLoader();
    texture = textureLoader.load("earthmap4k.jpg");
    //texture 	= THREE.ImageUtils.loadTexture("earthmap4k.jpg");
    //var normalMap 		= THREE.ImageUtils.loadTexture("../../Assets/Textures/earth_normalmap_flat4k.jpg");

    var earthMaterial = new THREE.MeshPhongMaterial();
    earthMaterial.map = texture;

    // normalMap
    //earthMaterial.normalMap = normalMap;
    //earthMaterial.normalScale = new THREE.Vector2(0.5, 0.7);

    return earthMaterial;
}

