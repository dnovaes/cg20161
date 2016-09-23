var renderer;
var scene;
var camera;
var composer;
var texture;
var texture2;
var alpha1;
var alpha2;
var xPos, animation;
var shaderPass;

function init() {

	scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	camera = new THREE.OrthographicCamera( -0.5, 0.5, 0.5, -0.5, -1.0, 1.0 );
	scene.add( camera );

	var textureLoader = new THREE.TextureLoader();
	texture = textureLoader.load("../Assets/Images/lena.png");
  var txtmaterial = new THREE.MeshBasicMaterial({
    map:texture
  });

  //texture2 = textureLoader.load("../Assets/Images/baboon.png");
  texture2 = textureLoader.load("../Assets/Images/bandeira_brasil.jpg");
  var txtmaterial2 = new THREE.MeshBasicMaterial({
    map:texture2
  });

  // Plane
  var planeGeometry = new THREE.PlaneBufferGeometry(1.0, 1.0, 20, 20);
  var plane = new THREE.Mesh( planeGeometry, txtmaterial);
  plane.position.set(0.0, 0.0, -0.5);
  scene.add( plane );

  var plane2 = new THREE.Mesh(planeGeometry, txtmaterial2);
  plane2.position.set(0.0, 0.0, -0.5);
  scene.add( plane2 );

	requestAnimationFrame(render);
	document.getElementById("WebGL-output").appendChild(renderer.domElement);
};

function render(){

	if (!texture.image){
		requestAnimationFrame(render);
  }else{
    //renderer.clear();
    //requestAnimationFrame(render);
    renderer.setSize(texture.image.width, texture.image.height);

    var matShader = new THREE.ShaderMaterial( {
      uniforms: {
        texture: {type: "t", value: texture },
        texture2: {type: "t", value: texture2 },
        alpha1: {type: "f", value: alpha1},
        alpha2: {type: "f", value: alpha2},
        xPos: {type: "f", value: xPos},
        animation: {type: "int", value: animation},
      },
      vertexShader: document.getElementById( 'base-vs' ).textContent,
      fragmentShader: document.getElementById( 'base-fs' ).textContent,
      transparent: true
    });

    //renderer.render(scene, camera);

    //Cria os passos de renderizacao
    composer = new THREE.EffectComposer( renderer );

    var renderPass = new THREE.RenderPass(scene, camera);

    shaderPass = new THREE.ShaderPass(matShader);
    shaderPass.renderToScreen = true;

    composer.addPass(renderPass);
    composer.addPass(shaderPass);

/*
    shaderPass.uniforms["alpha1"].value = 1.0;
    shaderPass.uniforms["alpha2"].value = 1.0;
*/
    //render the screen
    composer.render();
  }
}


$(document).ready(function(){
  //console.log($("#anima1"));

  $("#animation1").prop("checked", false);
  $("#animation2").prop("checked", false);
  $("#animation3").prop("checked", false);

  var interval1, interval2;

  //Animation 1
  $("#animation1").bind("click", function(){


    clearInterval(interval2);

    if($(this).prop("checked") == true){

      $("#animation2").prop("checked", false);
      $("#animation3").prop("checked", false);

      shaderPass.uniforms["alpha1"].value = 0.5;
      shaderPass.uniforms["alpha2"].value = 0.5;

      shaderPass.uniforms["xPos"].value = 0.0;
      shaderPass.uniforms["animation"].value = 1;

      interval1 = setInterval(function(){
        if(shaderPass.uniforms["xPos"].value < 1.0){
          shaderPass.uniforms["xPos"].value += 0.05;
          composer.render();
        }else{
          clearInterval(interval1);
        }
      }, 1000);
    }else{

      clearInterval(interval1);
    }
  });


  $("#animation2").bind("click", function(){

    clearInterval(interval1);

    if($(this).prop("checked") == true){

      $("#animation1").prop("checked", false);
      $("#animation3").prop("checked", false);

      shaderPass.uniforms["alpha1"].value = 1.0;
      shaderPass.uniforms["alpha2"].value = 0.0;

      shaderPass.uniforms["xPos"].value = -1.0;
      shaderPass.uniforms["animation"].value = 2;

      interval2 = setInterval(function(){
        if(shaderPass.uniforms["alpha1"].value > 0.1){
          shaderPass.uniforms["alpha1"].value -= 0.1;
          shaderPass.uniforms["alpha2"].value += 0.1;


          composer.render();
        }else{
          clearInterval(interval2);
        }
      }, 1200);
    }else{
      clearInterval(interval2);
    }
  });

  $("#animation3").bind("click", function(){

    clearInterval(interval1);
    clearInterval(interval2);

    if($(this).prop("checked") == true){

      shaderPass.uniforms["xPos"].value = -1.0;
      shaderPass.uniforms["animation"].value = 3;

      $("#animation1").prop("checked", false);
      $("#animation2").prop("checked", false);

      shaderPass.uniforms["alpha1"].value = 1.0;
      shaderPass.uniforms["alpha2"].value = 0.0;


      composer.render();
      console.log("ok");
    }

  });

});
