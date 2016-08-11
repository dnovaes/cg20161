function appendText(txt){
  document.getElementById('message-box').innerHTML += txt;
}

function clearText(){
  document.getElementById('message-box').innerHTML = '';
}

function initGUI() {

	controls = new function () {
		this.fov 			= camera.fov;
		this.camPosX		= camera.position.x;
		this.camPosY		= camera.position.y;
		this.camPosZ		= camera.position.z;
		}

	var gui = new dat.GUI();

	gui.add(controls, 'fov', -10.0, 100.0).onChange(function (value) {
		camera.fov = controls.fov;
		camera.updateProjectionMatrix();
		});

	var fCamPos = gui.addFolder('CameraPos');
	fCamPos.add( controls, 'camPosX', -40.0, 40.0).onChange(function (value) {
		camera.position.x = controls.camPosX;
		camera.updateProjectionMatrix();
		});
	fCamPos.add( controls, 'camPosY', -40.0, 40.0).onChange(function (value) {
		camera.position.y = controls.camPosY;
		camera.updateProjectionMatrix();
		});
	fCamPos.add( controls, 'camPosZ', -40.0, 40.0).onChange(function (value) {
		camera.position.z = controls.camPosZ;
		camera.updateProjectionMatrix();
		});
	fCamPos.close();
};


