function appendText(txt){
  document.getElementById('message-box').innerHTML += txt;
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


