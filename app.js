// Create an empty scene
var scene = new THREE.Scene();
//Creating a clock
var clock = new THREE.Clock();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 10000 );
//camera.position.set(135,4,-142) // Inside House
//camera.lookAt(135,4,-142)
camera.position.set(534,1801,4)// OverView of House
var controls = new THREE.OrbitControls( camera); //Reme,ber to move back down
var renderer = new THREE.WebGLRenderer({antialias:true});
// Configure renderer clear color
renderer.setClearColor("#000000");
// Configure renderer size
renderer.setSize( window.innerWidth-1, window.innerHeight-1 );
renderer.setPixelRatio(window.devicePixelRatio);
// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

//var controls = new THREE.FirstPersonControls( camera);
//controls = new THREE.PointerLockControls(camera,renderer.domElement);
//controls.movementSpeed = 100;
//controls.lookVertical = false; // Comment out for Vertical
//controls.lookSpeed = 0.2;

//Printing out X Y Z For Debugging
/**document.addEventListener(
  "click",
  event => {
   console.log(camera.position)
  },
  false ); **/ 

//Creating Floor
var geometry = new THREE.PlaneGeometry( 500, 500, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
var floor = new THREE.Mesh( geometry, material );
floor.material.side = THREE.DoubleSide;
floor.rotation.x -= Math.PI / 2;
//Creating Roof 
var georoof = new THREE.PlaneGeometry( 500, 500, 1, 1 );
var matroof = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var roof = new THREE.Mesh( georoof, matroof );
roof.material.side = THREE.DoubleSide;
roof.rotation.x -= Math.PI / 2;
//Creating a basic wall for the floor
const geowall1= new THREE.PlaneGeometry( 500, 100, 1, 1 );
const matwall1 = new THREE.MeshBasicMaterial( {color: 0x34ebae, side: THREE.DoubleSide} );
const wall1 = new THREE.Mesh( geowall1, matwall1 );
const geowall2= new THREE.PlaneGeometry( 500, 100, 1, 1 );
const matwall2 = new THREE.MeshBasicMaterial( {color: 0x024d08, side: THREE.DoubleSide} );
const wall2 = new THREE.Mesh( geowall2, matwall2 );
const geowall3= new THREE.PlaneGeometry( 500, 100, 1, 1 );
const matwall3 = new THREE.MeshBasicMaterial( {color: 0xb020a2, side: THREE.DoubleSide} );
const wall3 = new THREE.Mesh( geowall3, matwall3 );
wall3.rotation.y -= Math.PI/2
const geowall4= new THREE.PlaneGeometry( 500, 100, 1, 1 );
const matwall4 = new THREE.MeshBasicMaterial( {color: 0xeb4034, side: THREE.DoubleSide} );
const wall4 = new THREE.Mesh( geowall4, matwall4 );
wall4.rotation.y -= Math.PI/2
// Creating extra Walls and adding them 
/**
 * const geowall5= new THREE.PlaneGeometry( 500, 100, 1, 1 );
 * const matwall5 = new THREE.MeshBasicMaterial( {color: 0x5aa360, side: THREE.DoubleSide} );
 * const wall5 = new THREE.Mesh( geowall5, matwall5 );
 * wall5.rotation.y -= Math.PI/2
 * const geowall6= new THREE.PlaneGeometry( 500, 100, 1, 1 );
 * const matwall6 = new THREE.MeshBasicMaterial( {color: 0x5aa360, side: THREE.DoubleSide} );
 * const wall6 = new THREE.Mesh( geowall5, matwall5 );
 * //wall5.position.set(floor.position.x, floor.position.y+wall5.geometry.parameters.height/2, floor.position.z-wall5.geometry.parameters.height/2);
//wall6.position.set(floor.position.x-wall6.geometry.parameters.height/2, floor.position.y+wall6.geometry.parameters.height/2, floor.position.z);
 */
//Poistions of the Walls
wall1.position.set( floor.position.x, floor.position.y+wall1.geometry.parameters.height/2, floor.position.z+floor.geometry.parameters.height/2);
wall2.position.set(floor.position.x, floor.position.y+wall2.geometry.parameters.height/2, floor.position.z-floor.geometry.parameters.height/2);
wall3.position.set(floor.position.x-floor.geometry.parameters.height/2, floor.position.y+wall1.geometry.parameters.height/2, floor.position.z);
wall4.position.set(floor.position.x+floor.geometry.parameters.height/2, floor.position.y+wall1.geometry.parameters.height/2, floor.position.z);
roof.position.set(floor.position.x,floor.position.y+wall1.geometry.parameters.height,floor.position.z);

const House = new THREE.Group();
House.add(floor);
House.add(wall1);
House.add(wall2);
House.add(wall3);
House.add(wall4);
House.add(roof);
//House.add(wall5);
//House.add(wall6);
console.log(floor.geometry);

var sphere = new THREE.Mesh( geometry, material );
sphere.position.set(0,0,0)

scene.add(House)
//scene.add( sphere );
//const directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
//directionalLight.position.set(-20,10,1)
//scene.add( directionalLight );
//console.log(directionalLight.position)
//console.log(floor.geometry.parameters.x);
// Checking Boundaries for Camera and readjusting when going near the walls. 
function checkBoundaries(){
  //Wall4 Boundary
  if(camera.position.z >= floor.geometry.parameters.width/2-10){
    camera.position.z = floor.geometry.parameters.width/2-15;
  }
  //Wall2 Boundary
  if(camera.position.z <= -(floor.geometry.parameters.width/2-10)){
    camera.position.z = -(floor.geometry.parameters.width/2-15);
  }
  if(camera.position.x >= (floor.geometry.parameters.width/2-10)){
    camera.position.x = (floor.geometry.parameters.width/2-15);
  }
  if(camera.position.x <= -(floor.geometry.parameters.width/2-10)){
    camera.position.x = -(floor.geometry.parameters.width/2-15);
  }
}



// Render Loop
var render = function () {
  requestAnimationFrame( render );
  // Render the scene
  //checkBoundaries();
  controls.update(clock.getDelta());
  renderer.render(scene, camera);
};

render();