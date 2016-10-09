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
  scene.add( camera );

  renderer =  new THREE.WebGLRenderer();
  renderer.setClearColor( 0x000000, 1.0 );

  renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.7);
  //renderer.shadowMap.enabled;

  //create a sphere
  var sphereGeometry = new THREE.SphereGeometry(15, 60, 60);
  var textureLoader = new THREE.TextureLoader();
  texture = textureLoader.load("earthmap4k.jpg");
  sceneMesh = new THREE.Mesh( sphereGeometry, texture);
  scene.add(sceneMesh);

  //enviroment light
  /*
  var ambientLight = new THREE.AmbientLight( 0x111111 );
  ambientLight.name = 'ambient';
  scene.add( ambientLight );
  */

  document.getElementById("WebGL-output").appendChild( renderer.domElement );
  requestAnimationFrame(render);
}
/*
function createSphereMaterial(){
  var textureLoader = new THREE.TextureLoader();

  //var texture = THREE.ImageUtils.loadTexture("earthmap4k.jpg");
  //var texture = textureLoader.load("amazing_landscape.jpg");
  //var texture = textureLoader.load("../Assets/Images/bandeira_brasil.jpg");
  texture = textureLoader.load("earthmap4k.jpg");


  var sceneMaterial =  new THREE.MeshBasicMaterial({
    map:texture
  });
  return sceneMaterial;


  //var normalMap = THREE.ImageUtils.loadTexture("./amazing_landscape_normalmap.jpǵ");

  var sceneMaterial = new THREE.MeshPhongMaterial();
  sceneMaterial.map = texture;

  //normalMap
  //sceneMaterial.normalMap = normalMap;
  //sceneMaterial.normalScale = new THREE.Vector2(0.5, 0.7);

  return sceneMaterial;
}
*/

function render(){
  cameraControl.update();


  if( texture && !texture.image ){
    requestAnimationFrame(render);
  }else{
    //renderer.setSize(texture.image.width, texture.image.height);

    var matShader = new THREE.ShaderMaterial({
        uniforms: {
          texture: {type: "t", value: texture},
        },
        vertexShader: document.getElementById( 'base-vs' ).textContent,
        fragmentShader: document.getElementById( 'base-fs' ).textContent
    });

    composer = new THREE.EffectComposer( renderer );
    var renderPass = new THREE.RenderPass(scene, camera);

    shaderPass = new THREE.ShaderPass(matShader);
    shaderPass.renderToScreen = true;

    composer.addPass( renderPass );
    composer.addPass( shaderPass );

    sceneMesh.rotation.y += 0.005;

  //renderer.autoClear = false;
    composer.render();
    //renderer.render(scene, camera);
  }
}



