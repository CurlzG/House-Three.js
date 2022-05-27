// Create an empty scene
var scene = new THREE.Scene();
//Creating a clock
var clock = new THREE.Clock();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 10000 );
//camera.position.set(135,4,-142) // Inside House
//camera.lookAt(135,4,-142)
camera.position.set(350,250,363);
//camera.position.set(534,1801,4)// OverView of House
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
    false );  **/
  


//Creating Floor
//var geoD = new THREE.OctahedronGeometry(10,0);
//var matg = new THREE.MeshPhongMaterial({color:0xFF0000});
//diamonds = new THREE.Mesh(geoD,matg);
var geometry = new THREE.PlaneGeometry( 500, 500, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
var floor = new THREE.Mesh( geometry, material );
floor.material.side = THREE.DoubleSide;
floor.rotation.x -= Math.PI / 2;
//Creating Roof 
//var georoof = new THREE.PlaneGeometry( 500, 500, 1, 1 );
//var matroof = new THREE.MeshBasicMaterial( { color: 0xffffff } );
//var roof = new THREE.Mesh( georoof, matroof );
//roof.material.side = THREE.DoubleSide;
//roof.rotation.x -= Math.PI / 2;
//Creating a basic wall for the floor

function createWall(color){
  const geowall1= new THREE.PlaneGeometry( 500, 100, 1, 1 );
  const matwall1 = new THREE.MeshBasicMaterial( {color: color, side: THREE.DoubleSide} );
  const wall = new THREE.Mesh( geowall1, matwall1 );
  return wall;
}

//Wall 1 0x34ebae
wall1 = createWall(0x34ebae);
wall2 = createWall(0x024d08);
wall3 = createWall(0xb020a2);
wall3.rotation.y -= Math.PI/2
wall4 = createWall(0xeb4034);
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
//shape.position.set(floor.position.x,floor.position.y,floor.position.z);
//roof.position.set(floor.position.x,floor.position.y+wall1.geometry.parameters.height,floor.position.z);
console.log(wall1.position)
//const hole = new THREE.Path()

const House = new THREE.Group();
House.add(floor);
//House.add(mesh);
//House.add(doorMesh);
House.add(wall1);
House.add(wall2);
House.add(wall3);
House.add(wall4);
//House.add(roof);
//House.add(wall5);
//House.add(wall6);
var diamonds = new Array();
function createSphere(){
    const GS = new THREE.SphereGeometry( 15, 32, 2 );
  const MS = new THREE.MeshBasicMaterial( { color: 0xff0019 } );
  const sphere = new THREE.Mesh( GS, MS );
  var scale = 2 * 0.1; // adjust the multiplier to whatever
  sphere.scale.setScalar(scale);
  
  return sphere;
}
function createLoungeWall(){
  var wallPoints = new Array();
    //Creates Small Left Wall
  sphere1 = createSphere(); 

  sphere1.position.set(0,5,250)
  wallPoints.push(sphere1);
  sphere2 = createSphere(); 
  sphere2.position.set(0,5,200)
  wallPoints.push(sphere2)

  //Creates Large Wall 
  sphere3 = createSphere();
  sphere3.position.set(0,5,100)
  wallPoints.push(sphere3)
  sphere4 = createSphere();
  sphere4.position.set(50,5,80)
  wallPoints.push(sphere4)
  sphere5 = createSphere();
  sphere5.position.set(100,5,60)
  wallPoints.push(sphere5)
  sphere6 = createSphere();
  sphere6.position.set(150,5,60)
  wallPoints.push(sphere6)
  sphere7 = createSphere();
  sphere7.position.set(200,5,60)
  wallPoints.push(sphere7)
  sphere8 = createSphere();
  sphere8.position.set(250,5,60)
  wallPoints.push(sphere8)
  return wallPoints
}
function createDiningWall(){
  var wallPoints = new Array();
  //Creates Bottom Wall
sphere1 = createSphere(); 
sphere1.position.set(-50,5,100)
wallPoints.push(sphere1);
sphere2 = createSphere(); 
sphere2.position.set(-100,5,100)
wallPoints.push(sphere2);
//Creates Top Wall
sphere2 = createSphere(); 
sphere2.position.set(-200,5,100)
wallPoints.push(sphere2);
sphere2 = createSphere(); 
sphere2.position.set(-250,5,100)
wallPoints.push(sphere2);
return wallPoints
}
function createKitchenWall(){
  var wallPoints = new Array();
  sphere1 = createSphere();
  sphere1.position.set(0,5,50);
  wallPoints.push(sphere1);
  sphere1 = createSphere();
  sphere1.position.set(0,5,-25);
  wallPoints.push(sphere1);
  sphere3 = createSphere();
  sphere3.position.set(-50,5,-25);
  wallPoints.push(sphere3);
  sphere4 = createSphere();
  sphere4.position.set(-100,5,-25);
  wallPoints.push(sphere4);
  sphere5 = createSphere();
  sphere5.position.set(-200,5,-25);
  wallPoints.push(sphere5);
  sphere6 = createSphere();
  sphere6.position.set(-250,5,-25);
  wallPoints.push(sphere6);
  return wallPoints;
}
function createBedroomWall(){
  var wallPoints = new Array();
  sphere1 = createSphere();
  sphere1.position.set(-200,5,-100);
  wallPoints.push(sphere1);
  sphere2 = createSphere();
  sphere2.position.set(-250,5,-100);
  wallPoints.push(sphere2);
  sphere3 = createSphere();
  sphere3.position.set(-100,5,-100);
  wallPoints.push(sphere3);
  sphere3 = createSphere();
  sphere3.position.set(-100,5,-75);
  wallPoints.push(sphere3);
  sphere4 = createSphere();
  sphere4.position.set(0,5,-100);
  wallPoints.push(sphere4);
  sphere5 = createSphere();
  sphere5.position.set(0,5,-200);
  wallPoints.push(sphere5);
  return wallPoints;
}
diamonds = diamonds.concat(diamonds,createLoungeWall());
diamonds = diamonds.concat(diamonds,createDiningWall());
diamonds = diamonds.concat(diamonds,createKitchenWall());
diamonds = diamonds.concat(diamonds,createBedroomWall());
for(let i = 0; i < diamonds.length;i++){
  scene.add(diamonds[i]);
}
//scene.add(sphere1)

//diamonds.push(sphere1)




scene.add(House);

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


//CameraXYZ(document);
// Render Loop
var render = function () {
  requestAnimationFrame( render );
  // Render the scene
  //checkBoundaries();
  controls.update(clock.getDelta());
  renderer.render(scene, camera);
  
};

render();