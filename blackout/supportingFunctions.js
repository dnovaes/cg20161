function appendText(txt){
  document.getElementById('message-box').innerHTML += txt;
}

function appendTexttoDiv(txt, divName){
  document.getElementById(divName).innerHTML = '';
//  $(divName).text(" ");
//  $(divName).text(txt);
  document.getElementById(divName).innerHTML += txt;
}

function clearText(){
  document.getElementById('message-box').innerHTML = '';
}

function initGUI() {

	controls = new function () {
		this.fov 			= frontCamera.fov;
		this.camPosX		= frontCamera.position.x;
		this.camPosY		= frontCamera.position.y;
		this.camPosZ		= frontCamera.position.z;
		}

	var gui = new dat.GUI();

	gui.add(controls, 'fov', -10.0, 100.0).onChange(function (value) {
		frontCamera.fov = controls.fov;
		frontCamera.updateProjectionMatrix();
		});

	var fCamPos = gui.addFolder('CameraPos');
	fCamPos.add( controls, 'camPosX', -40.0, 40.0).onChange(function (value) {
		frontCamera.position.x = controls.camPosX;
		frontCamera.updateProjectionMatrix();
		});
	fCamPos.add( controls, 'camPosY', -40.0, 40.0).onChange(function (value) {
		frontCamera.position.y = controls.camPosY;
		frontCamera.updateProjectionMatrix();
		});
	fCamPos.add( controls, 'camPosZ', -40.0, 40.0).onChange(function (value) {
		frontCamera.position.z = controls.camPosZ;
		frontCamera.updateProjectionMatrix();
		});
	fCamPos.close();
};

function checkDistance2D( ray, obj3d){
  return ray.ray.distanceToPoint(obj3d.position);
}

function checkForCompletedDepthLevel(){

  var f_removeLevel = 1;
  for(var depth = 0; depth < 8; depth++){
    for(var x=0; x<5; x++){
      for(var y=0; y<5; y++){
        if( scenarioMatrix[depth][x][y] == 0 || !f_removeLevel){
          f_removeLevel =0;
          break;
        }
      }
    }

    if(f_removeLevel){
      console.log("Remove level: "+depth+" now.");
      removeObjsByDepthLevel(depth);
    }
    //value back to one to check next depthLevel
    f_removeLevel = 1;
  }
}

function removeObjsByDepthLevel(level){
  //remove objects in scene
  for(var i=0; i< collidableList[1].length; i++){
    if(( collidableList[1][i].position.z - 0.5 ) == level ){
      scene.remove( collidableList[1][i]);
    }
  }

  //fix the scenarioMatrix with new bolean values
  for(var i=level; i < collidableList[1].lenght; i++){
    scenarioMatrix[i] = scenarioMatrix[i+1];
  }

  level += 1;
  //move all objects over that depth field to down (-1)
  for(var i=level; i < collidableList[1].length; i++){
    if(( collidableList[1][i].position.z - 0.5 ) == level){
      collidableList[1][i].position.z -=1;
    }
  }

  currIndex = scene.children.length-1;
  selectedObj[0] = currIndex;
  updateNextObj();

}

