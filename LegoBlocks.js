
var stats, camera, scene, renderer;
//var cameraFixedtoDraw = new THREE.Vector3( 50.0,  -150.0,   50.0); //For tests and study
var cameraFixedtoDraw = new THREE.Vector3( 0.0, 0., 0.0); //For tests and study
var cameraFixedFlag = 0;
var visualMode = 0;
var editMode = 1;
var selectedObj = [0, null];
//scene.children[0] = orthographicCamera. PS for nextObjs.
var nextObj = 1;
var keyMap = [];
//z rotate camera to left with the right (inverse directionsfor camera always)

function init() {

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	renderer.setSize(500, 500);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	//camera.position.y = 100;
	scene.add( camera );

	stats = new Stats();
	document.getElementById('WebGL-output').appendChild(stats.domElement);

  activateAnimation();
	//renderer.clear();
	//renderer.render(scene, camera);
};

function doMoveCameraToPos(posVector3){
	camera.position.x =  posVector3.x;
	camera.position.y =  posVector3.y;
	camera.position.z =  posVector3.z;
}

function activateAnimation(){
	requestAnimationFrame(activateAnimation);
	stats.begin();
	renderer.clear();
	render();
	stats.end();
}

function render(){
	//doMoveCameraToPos(cameraFixedtoDraw);

  if(!cameraFixedFlag){
    //retorna o número de milisegundos decorridos desde 1 de janeiro de 1970 00:00:00 UTC.
    var timer = Date.now() * 0.0005;
  	camera.position.x = Math.cos( timer ) * 0.4;
	  camera.position.y = Math.sin( timer ) * 0.4;
	  camera.position.z = Math.sin( timer ) * 0.4;
    camera.lookAt( scene.position);
  }else{
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 0;
    //camera.lookAt(cameraFixedtoDraw);
    camera.lookAt(scene.position);
  }

	renderer.render( scene, camera );
}

function LegoBlock0(){
	
	this.createVertices = function(){
		var triangleGeometry = new THREE.Geometry();
		
		//ArrArg = [front, back, top, bottom, left, right]
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: 0.0}, [0, 1, 1, 1, 1, 0]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.2, y: 0.0, z: 0.0}, [1, 1, 1, 1, 0, 0]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.4, y: 0.0, z: 0.0}, [1, 1, 1, 1, 0, 1]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: 0.2}, [1, 0, 1, 1, 1, 1]);
		
		var boxMaterials = [];
		boxMaterials.push(
			new THREE.MeshBasicMaterial({color:0xFF0000, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x5BDF14, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x0000FF, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xF0C58D, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xE86B9C, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xFFFFFF, side:THREE.DoubleSide})
		);
		var triangleMaterial = new THREE.MeshFaceMaterial(boxMaterials); 
		
		return new THREE.Mesh(triangleGeometry, triangleMaterial);
	}
	
	this.Mesh = this.createVertices();
	this.Vertices = this.Mesh.geometry.vertices;
	
	/*Meshblock2 = this.Mesh.clone();
	Meshblock2.translateX(1);
	scene.add(Meshblock2);
	
	Meshblock3 = Meshblock2.clone();
	Meshblock3.translateX(1);
	scene.add(Meshblock3);
	Meshblock3.geometry.verticesNeedUpdate = true;
	console.log(Meshblock3.geometry.vertices);
	
	Meshblock4 = this.Mesh.clone();
	Meshblock4.translateZ(1);
	scene.add(Meshblock4);*/
	
}

function LegoBlock1(){
	
	this.createVertices = function(){
		var triangleGeometry = new THREE.Geometry();
		
		//ArrArg = [front, back, top, bottom, left, right]
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: 0.0}, [0, 1, 1, 1, 0, 0]);
		addBlockGeometrysNextto(triangleGeometry, {x: -0.2, y: 0.0, z: 0.0}, [1, 1, 1, 1, 1, 0]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.2, y: 0.0, z: 0.0}, [1, 1, 1, 1, 0, 1]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: 0.2}, [1, 0, 1, 1, 1, 1]);
		
		var boxMaterials = [];
		boxMaterials.push(
			new THREE.MeshBasicMaterial({color:0xFF0000, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x5BDF14, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x0000FF, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xF0C58D, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xE86B9C, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xFFFFFF, side:THREE.DoubleSide})
		);
		var triangleMaterial = new THREE.MeshFaceMaterial(boxMaterials); 
		
		return new THREE.Mesh(triangleGeometry, triangleMaterial);
	}
	
	this.Mesh = this.createVertices();
}

function LegoBlock2(){
	
	this.createVertices = function(){
		var triangleGeometry = new THREE.Geometry();
		
		//ArrArg = [front, back, top, bottom, left, right]
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: 0.0}, [1, 0, 1, 1, 0, 1]);
		addBlockGeometrysNextto(triangleGeometry, {x: -0.2, y: 0.0, z: 0.0}, [1, 1, 1, 1, 1, 0]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: -0.2}, [0, 1, 1, 1, 1, 1]);
		
		var boxMaterials = [];
		boxMaterials.push(
			new THREE.MeshBasicMaterial({color:0xFF0000, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x5BDF14, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x0000FF, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xF0C58D, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xE86B9C, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xFFFFFF, side:THREE.DoubleSide})
		);
		var triangleMaterial = new THREE.MeshFaceMaterial(boxMaterials); 
		
		return new THREE.Mesh(triangleGeometry, triangleMaterial);
	}
	
	this.Mesh = this.createVertices();
}

function LegoBlock3(){
	
	this.createVertices = function(){
		var triangleGeometry = new THREE.Geometry();
		
		//ArrArg = [front, back, top, bottom, left, right]
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: 0.0}, [1, 0, 1, 1, 1, 0]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.2, y: 0.0, z: 0.0}, [1, 1, 1, 1, 0, 1]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z:-0.2}, [0, 1, 1, 1, 0, 1]);
		addBlockGeometrysNextto(triangleGeometry, {x: -0.2, y: 0.0, z:-0.2}, [1, 1, 1, 1, 1, 1]);
		
		var boxMaterials = [];
		boxMaterials.push(
			new THREE.MeshBasicMaterial({color:0xFF0000, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x5BDF14, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x0000FF, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xF0C58D, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xE86B9C, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xFFFFFF, side:THREE.DoubleSide})
		);
		var triangleMaterial = new THREE.MeshFaceMaterial(boxMaterials); 
		
		return new THREE.Mesh(triangleGeometry, triangleMaterial);
	}
	
	this.Mesh = this.createVertices();
}

function LegoBlock4(){
	
	this.createVertices = function(){
		var triangleGeometry = new THREE.Geometry();
		
		//ArrArg = [front, back, top, bottom, left, right]
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: 0.0}, [0, 1, 0, 1, 1, 1]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: 0.2}, [1, 0, 1, 1, 1, 1]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.2, z: 0.0}, [1, 1, 1, 0, 1, 0]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.2, y: 0.2, z: 0.0}, [1, 1, 1, 1, 0, 1]);
		//addBlockGeometrysNextto(triangleGeometry, {x: -0.2, y: 0.0, z:-0.2}, [1, 1, 1, 1, 1, 1]);
		
		var boxMaterials = [];
		boxMaterials.push(
			new THREE.MeshBasicMaterial({color:0xFF0000, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x5BDF14, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x0000FF, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xF0C58D, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xE86B9C, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xFFFFFF, side:THREE.DoubleSide})
		);
		var triangleMaterial = new THREE.MeshFaceMaterial(boxMaterials); 
		
		return new THREE.Mesh(triangleGeometry, triangleMaterial);
	}
	
	this.Mesh = this.createVertices();
}

function LegoBlock5(){
	
	this.createVertices = function(){
		var triangleGeometry = new THREE.Geometry();
		
		//ArrArg = [front, back, top, bottom, left, right]
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: 0.0}, [0, 1, 1, 0, 1, 0]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.2, y: 0.0, z: 0.0}, [1, 1, 1, 1, 0, 1]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y:-0.2, z: 0.0}, [1, 1, 0, 1, 1, 1]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: 0.2}, [1, 0, 1, 1, 1, 1]);

		var boxMaterials = [];
		//var randomColor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
		/*for(var i=0; i<7; i++){
			var randomColor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
			//0xFF0000
			boxMaterials.push(new THREE.MeshBasicMaterial({
				color:randomColor,
				side:THREE.DoubleSide,
				wireframe:false
			}));
		}*/
		
		boxMaterials.push(
			new THREE.MeshBasicMaterial({color:0xFF0000, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x5BDF14, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x0000FF, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xF0C58D, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xE86B9C, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xFFFFFF, side:THREE.DoubleSide})
		);
		var triangleMaterial = new THREE.MeshFaceMaterial(boxMaterials); 
		
		return new THREE.Mesh(triangleGeometry, triangleMaterial);
	}
	
	this.Mesh = this.createVertices();
	this.Vertices = this.Mesh.geometry.vertices;
}

function LegoBlock6(){
	
	this.createVertices = function(){
		var triangleGeometry = new THREE.Geometry();
		
		//ArrArg = [front, back, top, bottom, left, right]
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: 0.0}, [0, 1, 1, 1, 1, 0]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: 0.2}, [1, 0, 1, 1, 1, 1]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.2, y: 0.0, z: 0.0}, [1, 1, 0, 1, 0, 1]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.2, y: 0.2, z: 0.0}, [1, 1, 1, 0, 1, 1]);

		var boxMaterials = [];
		
		boxMaterials.push(
			new THREE.MeshBasicMaterial({color:0xFF0000, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x5BDF14, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x0000FF, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xF0C58D, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xE86B9C, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xFFFFFF, side:THREE.DoubleSide})
		);
		var triangleMaterial = new THREE.MeshFaceMaterial(boxMaterials); 
		
		return new THREE.Mesh(triangleGeometry, triangleMaterial);
	}
	
	this.Mesh = this.createVertices();
	this.Vertices = this.Mesh.geometry.vertices;
}

function LegoBlock7(){
	
	this.createVertices = function(){
		var triangleGeometry = new THREE.Geometry();
		
		//ArrArg = [front, back, top, bottom, left, right]
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: 0.0}, [1, 0, 0, 1, 0, 0]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.0, z: -0.2}, [0, 1, 1, 1, 1, 1]);
		addBlockGeometrysNextto(triangleGeometry, {x: -0.2, y: 0.0, z: 0.0}, [1, 1, 1, 1, 1, 0]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.2, y: 0.0, z: 0.0}, [1, 1, 1, 1, 0, 1]);
		addBlockGeometrysNextto(triangleGeometry, {x: 0.0, y: 0.2, z: 0.0}, [1, 1, 1, 0, 1, 1]);


		var boxMaterials = [];

		boxMaterials.push(
			new THREE.MeshBasicMaterial({color:0xFF0000, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x5BDF14, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0x0000FF, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xF0C58D, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xE86B9C, side:THREE.DoubleSide}), 
			new THREE.MeshBasicMaterial({color:0xFFFFFF, side:THREE.DoubleSide})
		);
		var triangleMaterial = new THREE.MeshFaceMaterial(boxMaterials); 

		return new THREE.Mesh(triangleGeometry, triangleMaterial);
	}

	this.Mesh = this.createVertices();
	this.Vertices = this.Mesh.geometry.vertices;
}

function addBlockGeometrysNextto(triangleGeometry, TransCoordObj, ArrArg){
	//TransCoordObj = an object with values of translate in x, y and z.
	//TransCoordObj = {x: value, y: value, z: value}
	//
	//ArrArg: 0 -> false, 1 -> true
	//[0] = FRONT, [1] = BACK, [2] = TOP, [3] = BOTTOM, [4] = LEFT, [5] = RIGHT

	var currentTriangleLenght = triangleGeometry.vertices.length;
	var len = currentTriangleLenght;

	var f_addFaces = false;

	//console.log(typeof(TransCoordObj));
	if(typeof(TransCoordObj) == "object"){
		triangleGeometry.vertices.push(new THREE.Vector3( 0.1+TransCoordObj.x,  0.1+TransCoordObj.y,  0.1+TransCoordObj.z));
		triangleGeometry.vertices.push(new THREE.Vector3( 0.1+TransCoordObj.x, -0.1+TransCoordObj.y,  0.1+TransCoordObj.z));
		triangleGeometry.vertices.push(new THREE.Vector3(-0.1+TransCoordObj.x, -0.1+TransCoordObj.y,  0.1+TransCoordObj.z));
		triangleGeometry.vertices.push(new THREE.Vector3(-0.1+TransCoordObj.x,  0.1+TransCoordObj.y,  0.1+TransCoordObj.z));

		triangleGeometry.vertices.push(new THREE.Vector3(-0.1+TransCoordObj.x,  0.1+TransCoordObj.y, -0.1+TransCoordObj.z));
		triangleGeometry.vertices.push(new THREE.Vector3( 0.1+TransCoordObj.x,  0.1+TransCoordObj.y, -0.1+TransCoordObj.z));
		triangleGeometry.vertices.push(new THREE.Vector3( 0.1+TransCoordObj.x, -0.1+TransCoordObj.y, -0.1+TransCoordObj.z));
		triangleGeometry.vertices.push(new THREE.Vector3(-0.1+TransCoordObj.x, -0.1+TransCoordObj.y, -0.1+TransCoordObj.z));
		f_addFaces = true;
	}

	numFaces = triangleGeometry.faces.length;
	//numRandom = Math.ceil(Math.random()*5);

	if((ArrArg.length > 0)&&(f_addFaces)){
		if(ArrArg[0] == 1){
			// Front
			triangleGeometry.faces.push(new THREE.Face3(0+len, 1+len, 2+len));
			triangleGeometry.faces.push(new THREE.Face3(0+len, 2+len, 3+len)); 
			triangleGeometry.faces[triangleGeometry.faces.length-2].materialIndex = 
			triangleGeometry.faces[triangleGeometry.faces.length-1].materialIndex = 0;
		}

		if(ArrArg[1] == 1){
			// Back
			triangleGeometry.faces.push(new THREE.Face3(5+len, 6+len, 7+len)); 
			triangleGeometry.faces.push(new THREE.Face3(5+len, 7+len, 4+len)); 
			triangleGeometry.faces[triangleGeometry.faces.length-2].materialIndex = 
			triangleGeometry.faces[triangleGeometry.faces.length-1].materialIndex = 1;
		}

		if(ArrArg[2] == 1){
			// Top
			triangleGeometry.faces.push(new THREE.Face3(5+len, 0+len, 3+len)); 
			triangleGeometry.faces.push(new THREE.Face3(5+len, 3+len, 4+len)); 
			triangleGeometry.faces[triangleGeometry.faces.length-2].materialIndex = 
			triangleGeometry.faces[triangleGeometry.faces.length-1].materialIndex = 2;
		}

		if(ArrArg[3] == 1){
			// Bottom
			triangleGeometry.faces.push(new THREE.Face3(6+len, 1+len, 2+len)); 
			triangleGeometry.faces.push(new THREE.Face3(6+len, 2+len, 7+len)); 
			triangleGeometry.faces[triangleGeometry.faces.length-2].materialIndex = 
			triangleGeometry.faces[triangleGeometry.faces.length-1].materialIndex = 3;
		}

		if(ArrArg[4] == 1){
			// Left
			triangleGeometry.faces.push(new THREE.Face3(3+len, 2+len, 7+len)); 
			triangleGeometry.faces.push(new THREE.Face3(3+len, 7+len, 4+len)); 
			triangleGeometry.faces[triangleGeometry.faces.length-2].materialIndex = 
			triangleGeometry.faces[triangleGeometry.faces.length-1].materialIndex = 4;
		}

		if(ArrArg[5] == 1){
			// Right
			triangleGeometry.faces.push(new THREE.Face3(5+len, 6+len, 1+len)); 
			triangleGeometry.faces.push(new THREE.Face3(5+len, 1+len, 0+len));
			triangleGeometry.faces[triangleGeometry.faces.length-2].materialIndex = 
			triangleGeometry.faces[triangleGeometry.faces.length-1].materialIndex = 5;
		}
	}
}

function checkObjinCenter(){
  if(scene.children.length > 1){
    for(i=1; i<scene.children.length; i++){
      //console.log(scene.children[i].position);
      if((scene.children[i].position.x == 0.0)
        &&(scene.children[i].position.y == 0.0)
        &&(scene.children[i].position.z == 0.0)
      ){
        return 1;
      }
    }
  }
  return 0;
}

function spawnObjinCenter(){
  var num = Math.floor(Math.random()*7);
  addObjinScene(num);
  //objects in scene = 2; (camera and the added one)
  indexObj = selectedObj[0];
  nextObj = (indexObj % (scene.children.length-1))+1;
  //console.log("nextObj INDEX to select couting with the camrea index: "+nextObj);
}

function addObjinScene(numBlock){
  switch(numBlock){
    case 0:
      var Obj = new LegoBlock0();
      var group = new THREE.Object3D();
      var axis =  new THREE.AxisHelper(0.45);
      axis.visible = false;
      group.add(Obj.Mesh);
      group.add(axis);
      scene.add(group);
      break;
    case 1:
      var Obj = new LegoBlock1();
      var group = new THREE.Object3D();
      var axis =  new THREE.AxisHelper(0.45);
      axis.visible = false;
      group.add(Obj.Mesh);
      group.add(axis);
      scene.add(group);
      break;
    case 2:
      var Obj = new LegoBlock2();
      var group = new THREE.Object3D();
      var axis =  new THREE.AxisHelper(0.45);
      axis.visible = false;
      group.add(Obj.Mesh);
      group.add(axis);
      scene.add(group);
      break;
    case 3:
      var Obj = new LegoBlock3();
      var group = new THREE.Object3D();
      var axis =  new THREE.AxisHelper(0.45);
      axis.visible = false;
      group.add(Obj.Mesh);
      group.add(axis);
      scene.add(group);
      break;
    case 4:
      var Obj = new LegoBlock4();
      var group = new THREE.Object3D();
      var axis =  new THREE.AxisHelper(0.45);
      axis.visible = false;
      group.add(Obj.Mesh);
      group.add(axis);
      scene.add(group);
      break;
    case 5:
      var Obj = new LegoBlock5();
      var group = new THREE.Object3D();
      var axis =  new THREE.AxisHelper(0.45);
      axis.visible = false;
      group.add(Obj.Mesh);
      group.add(axis);
      scene.add(group);
      break
    case 6:
      var Obj = new LegoBlock6();
      var group = new THREE.Object3D();
      var axis =  new THREE.AxisHelper(0.45);
      axis.visible = false;
      group.add(Obj.Mesh);
      group.add(axis);
      scene.add(group);
      break;
    case 7:
      var Obj = new LegoBlock7();
      var group = new THREE.Object3D();
      var axis =  new THREE.AxisHelper(0.45);
      axis.visible = false;
      group.add(Obj.Mesh);
      group.add(axis);
      scene.add(group);
      break;
  }
  var m = new THREE.Matrix4();
  m.identity();
  m.makeScale(0.8, 0.8, 0.8);
  Obj.Mesh.applyMatrix(m);
  Obj.Mesh.updateMatrix();

  /*m.identity();
  m.makeTranslation(0.3, 0, 0);
  Obj.Mesh.applyMatrix(m);
  Obj.Mesh.updateMatrix();*/
}

function doSelectObjinScene(indexObj){
  if(scene.children.length > 1){
    changeOpacityByIndexSceneObj(indexObj, 0.4);
    //make axisHelper visible.
    //scene.children[indexObj] = group  | scene.children[indexObj].children[1] = axisHelper
    scene.children[indexObj].children[1].visible = true;

    //update the current pos and next pos for the obj
    selectedObj = [indexObj, scene.children[indexObj]];
    nextObj = ((indexObj) % (scene.children.length-1))+1;
    //console.log("Next obj index: "+nextObj);
  }
}

//changing the opacity of the obj make the use to see if the object is selected or not.
function changeOpacityByIndexSceneObj(indexObj, val){
  for(var i=0; i<scene.children[indexObj].children[0].material.materials.length; i++){
    scene.children[indexObj].children[0].material.materials[i].opacity = val;
    scene.children[indexObj].children[0].material.materials[i].transparent = true;
  }
  //value = 1.0, then the application is making all the faces visible with no transparency.
  //then its not a selected object anymore. hide the axisHelper with it too.
  if(val == 1){
    scene.children[indexObj].children[1].visible = false;
  }
}

//except for camera. Clear all objects in the scene
function clearObjsinScene(){
	for(var i=1; i<scene.children.length; i++){
		scene.remove(scene.children[i]);
    i--;
	}
}

function getCurrPosfromSelectedObj(){

    return {
      "x": selectedObj[1].position.x,
      "y": selectedObj[1].position.y,
      "z": selectedObj[1].position.z
    }
}

function detectKeyboardAction(){
  if(editMode == 1 && selectedObj[1] != null){
    m = new THREE.Matrix4();
    m.identity();
    //ctrl
    if(keyMap[17] == null || !keyMap[17]){
      //right
      if(keyMap[39]){
        m.makeTranslation(0.1, 0.0, 0.0);
        selectedObj[1].applyMatrix(m);
        selectedObj[1].updateMatrix();
      }
      //left
      if(keyMap[37]){
        m.makeTranslation(-0.1, 0.0, 0.0);
        selectedObj[1].applyMatrix(m);
        selectedObj[1].updateMatrix();
      }
      //up
      if(keyMap[38]){
        //selectedObj[1].matrix.copy(m);
        m.makeTranslation(0.0, 0.1, 0.0);
        selectedObj[1].applyMatrix(m);
        selectedObj[1].updateMatrix();
      }
      //down
      if(keyMap[40]){
        //save the previous pos
        prevPos = selectedObj[1].position;
        m.makeTranslation(0.0, -0.1, 0.0);
        selectedObj[1].applyMatrix(m);
        selectedObj[1].updateMatrix();
      }
      //plus (scale up)
      if(keyMap[107]){
        var prevPos = getCurrPosfromSelectedObj();

        m.makeTranslation(-prevPos.x, -prevPos.y, -prevPos.z);
        selectedObj[1].applyMatrix(m);
        selectedObj[1].updateMatrix();

        m.makeScale(1.1, 1.1, 1.1);
        selectedObj[1].applyMatrix(m)
        selectedObj[1].updateMatrix();

        m.makeTranslation(prevPos.x, prevPos.y, prevPos.z);
        selectedObj[1].applyMatrix(m);
        selectedObj[1].updateMatrix();
      }
      //minus (scale down)
      if(keyMap[109]){
        var prevPos = getCurrPosfromSelectedObj();

        m.makeTranslation(-prevPos.x, -prevPos.y, -prevPos.z);
        selectedObj[1].applyMatrix(m);
        selectedObj[1].updateMatrix();

        m.makeScale(0.9, 0.9, 0.9);
        selectedObj[1].applyMatrix(m)
        selectedObj[1].updateMatrix();

        m.makeTranslation(prevPos.x, prevPos.y, prevPos.z);
        selectedObj[1].applyMatrix(m);
        selectedObj[1].updateMatrix();
      }
    }

    //Rotation Y (ctrl + left)
    if(keyMap[17] && keyMap[37]){
      //save the amount value for translation back and further
      var prevPos = getCurrPosfromSelectedObj();

      m.makeTranslation(-prevPos.x, -prevPos.y, -prevPos.z);
      selectedObj[1].applyMatrix(m);
      selectedObj[1].updateMatrix();

      m.makeRotationY(-Math.PI/4);
      selectedObj[1].applyMatrix(m);
      selectedObj[1].updateMatrix();

      m.makeTranslation(prevPos.x, prevPos.y, prevPos.z);
      selectedObj[1].applyMatrix(m);
      selectedObj[1].updateMatrix();
    }

    //Rotation Y (ctrl + right)
    if(keyMap[17] && keyMap[39]){
      //this will save the amoount of translation is necessary to put the object back there or further there
      var prevPos = getCurrPosfromSelectedObj();

      m.makeTranslation(-prevPos.x, -prevPos.y, -prevPos.z);
      selectedObj[1].applyMatrix(m);
      selectedObj[1].updateMatrix();

      m.makeRotationY(Math.PI/4);
      selectedObj[1].applyMatrix(m);
      selectedObj[1].updateMatrix();

      m.makeTranslation(prevPos.x, prevPos.y, prevPos.z);
      selectedObj[1].applyMatrix(m);
      selectedObj[1].updateMatrix();
    }

    //Rotation X (ctrl + up)
    if(keyMap[17] && keyMap[38]){
      var prevPos = getCurrPosfromSelectedObj();

      m.makeTranslation(-prevPos.x, -prevPos.y, -prevPos.z);
      selectedObj[1].applyMatrix(m);
      selectedObj[1].updateMatrix();

      m.makeRotationX(-Math.PI/4);
      selectedObj[1].applyMatrix(m);
      selectedObj[1].updateMatrix();

      m.makeTranslation(prevPos.x, prevPos.y, prevPos.z);
      selectedObj[1].applyMatrix(m);
      selectedObj[1].updateMatrix();
    }

    //Rotation X (ctrl + down)
    if(keyMap[17] && keyMap[40]){
      var prevPos = getCurrPosfromSelectedObj();

      m.makeTranslation(-prevPos.x, -prevPos.y, -prevPos.z);
      selectedObj[1].applyMatrix(m);
      selectedObj[1].updateMatrix();

      m.makeRotationX(Math.PI/4);
      selectedObj[1].applyMatrix(m);
      selectedObj[1].updateMatrix();

      m.makeTranslation(prevPos.x, prevPos.y, prevPos.z);
      selectedObj[1].applyMatrix(m);
      selectedObj[1].updateMatrix();
    }

  }else{
    //non-editMode
    //Rotation X of Camera to the left
    if(keyMap[16] && keyMap[37]){
      console.log("rotating in x");
      timer = Date.now() * 0.0005;

      camera.position.x = Math.cos(timer)* 0.5;
      camera.position.z = Math.sin(timer)* 0.5;
      //camera.up = new THREE.Vector3(0,0,1);
      camera.lookAt(scene.position);
    }
  }
}

$(document).ready(function(){

    location.href = "#instructions";
    $("#toolbar, #WebGL-output, #log").addClass("invisible");
    //document.body.onkeyup =
   document.body.onkeydown = function(e){
      //48 - 55 => key code for  0-7
     if(visualMode){

       switch(e.keyCode){ //e.which, e.type == 'keydown'
         case 32://space key
           e.preventDefault();
           console.log(scene.children);
           break;
         case 48:
           clearObjsinScene();
           e.preventDefault();
           Lego0 = new LegoBlock0();
           scene.add(Lego0.Mesh);
           break;
         case 49:
           clearObjsinScene();
           e.preventDefault();
           Lego1 = new LegoBlock1();
           scene.add(Lego1.Mesh);
           break;
         case 50:
           clearObjsinScene();
           e.preventDefault();
           Lego2 = new LegoBlock2();
           scene.add(Lego2.Mesh);
           break;
         case 51:
           clearObjsinScene();
           e.preventDefault();
           Lego3 = new LegoBlock3();
           scene.add(Lego3.Mesh);
           break;
         case 52:
           clearObjsinScene();
           e.preventDefault();
           Lego4 = new LegoBlock4();
           scene.add(Lego4.Mesh);
           break;
         case 53:
           clearObjsinScene();
           e.preventDefault();
           Lego5 = new LegoBlock5();
           scene.add(Lego5.Mesh);
           break;
         case 54:
           clearObjsinScene();
           e.preventDefault();
           Lego6 = new LegoBlock6();
           scene.add(Lego6.Mesh);
           break;
         case 55:
           clearObjsinScene();
           e.preventDefault();
           Lego7 = new LegoBlock7();
           scene.add(Lego7.Mesh);
           break;
       }
     }else if(editMode){
        if(e.keyCode == 9){
          //console.log("check if there is any selected obj ", selectedObj);
          if(selectedObj[1] != null){
            changeOpacityByIndexSceneObj(selectedObj[0], 1.0);
          }
          doSelectObjinScene(nextObj);
        }
     }
   }

  setInterval(function(){
    if(editMode && !checkObjinCenter()){
      spawnObjinCenter();
    }
  }, 3000);

  setInterval(function(){
    detectKeyboardAction();
  }, 1000/10);

  $("#bt-play").on("click", function(){
    $("#WebGL-output, #toolbar, #log").removeClass("invisible");
  });

  $("#button1, #button2").on("click", function(){
    cameraFixedFlag = 1-cameraFixedFlag;
  });

  $("#game-mode").on("click", function(){
    visualMode = 1-visualMode;
    editMode = 1-editMode;
    clearObjsinScene();
    selectedObj = [0, null];
    if(visualMode){
      $("#log-text").text("Visual Mode");
    }else{
      $("#log-text").text("Edit Mode");
    }
  });

  //Edit-Mode
  $("#select-object").on("click", function(){
    if(selectedObj[1] != null){
      changeOpacityByIndexSceneObj(selectedObj[0], 1.0);
    }
    doSelectObjinScene(nextObj);
  });

  $(document).on("keydown keyup", function(e){
    keyMap[e.keyCode] = (e.type == "keydown");
    //console.log(e.keyCode);
    if(e.keyCode != 116 && e.keyCode != 123){
      e.preventDefault();
    }
  });
});
