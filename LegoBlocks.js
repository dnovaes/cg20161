
var stats, camera, scene, renderer;
var cameraFixedtoDraw = new THREE.Vector3( 50.0,  -150.0,   50.0); //For tests and study
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
	
	animate();
	//console.log(camera.position, cameraFixedtoDraw);
	//renderer.clear();
	//renderer.render(scene, camera);
};

function doMoveCameraToPos(posVector3){
	camera.position.x =  posVector3.x;
	camera.position.y =  posVector3.y;
	camera.position.z =  posVector3.z;
}

function animate(){
	requestAnimationFrame(animate);
	stats.begin();
	renderer.clear();
	render();
	stats.end();
}

function render(){
	//retorna o número de milisegundos decorridos desde 1 de janeiro de 1970 00:00:00 UTC.
	var timer = Date.now() * 0.0005;
	//doMoveCameraToPos(cameraFixedtoDraw);
	
	camera.position.x = Math.cos( timer ) * 0.5;
	camera.position.y = Math.sin( timer ) * 0.5;
	camera.position.z = Math.sin( timer ) * 0.5;
	
	camera.lookAt( scene.position );
	
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

//except for camera. Clear all objects in the scene
function clearObjsinScene(){
	for(var i=1; i<scene.children.length; i++){
		scene.remove(scene.children[i]);
	}
}

$(document).ready(function(){
    //document.body.onkeyup =
    document.body.onkeydown = function(e){
		//48 - 55 => key code for  0-7
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
	}
});
