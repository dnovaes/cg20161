var renderer;
var scene;
var camera;
var control;
var stats;
var cameraControl;
var earthMesh, cloudMesh;

function init() {

    clock = new THREE.Clock();

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 25;
    camera.position.y = 10;
    camera.position.z = 63;
    camera.lookAt(scene.position);
    cameraControl = new THREE.OrbitControls(camera);

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
	renderer.setSize(window.innerWidth*0.7, window.innerHeight*0.7);
    renderer.shadowMapEnabled = true;

    // cria esfera do planeta Terra
    var sphereGeometry = new THREE.SphereGeometry(15, 60, 60);
    var sphereMaterial = createEarthMaterial();
    earthMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(earthMesh);

    // cria a atmosfera com as nuvens, uma esfera um pouco maior que a da Terra
    var cloudGeometry = new THREE.SphereGeometry(15.2, 60, 60);
    var cloudMaterial = createCloudMaterial();
    cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(cloudMesh);

    // Luz ambiente
    var ambientLight = new THREE.AmbientLight(0x111111);
    ambientLight.name = 'ambient';
    scene.add(ambientLight);

    // Luz do sol
    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position = new THREE.Vector3(200, 10, -50);
    directionalLight.name = 'directional';
    scene.add(directionalLight);

    document.body.appendChild(renderer.domElement);

    render();
}


function createEarthMaterial() {
    var earthTexture 	= THREE.ImageUtils.loadTexture("../../Assets/Textures/earthmap4k.jpg");
    var normalMap 		= THREE.ImageUtils.loadTexture("../../Assets/Textures/earth_normalmap_flat4k.jpg");

    var earthMaterial = new THREE.MeshPhongMaterial();
    earthMaterial.map = earthTexture;

    // normalMap
    earthMaterial.normalMap = normalMap;
    earthMaterial.normalScale = new THREE.Vector2(0.5, 0.7);
    
    return earthMaterial;
}

function createCloudMaterial() {
    var cloudTexture = THREE.ImageUtils.loadTexture("../../Assets/Textures/fair_clouds_4k.png");

    var cloudMaterial 			= new THREE.MeshPhongMaterial();
    cloudMaterial.map 			= cloudTexture;
    cloudMaterial.transparent 	= true;
    cloudMaterial.opacity 		= 0.5;
    cloudMaterial.blending 		= THREE.AdditiveBlending;

    return cloudMaterial;
}

function render() {

    cameraControl.update();

	earthMesh.rotation.y+=0.005;
	cloudMesh.rotation.y+=0.010;

    renderer.autoClear = false;
    renderer.render(scene, camera);

    requestAnimationFrame(render);
}
