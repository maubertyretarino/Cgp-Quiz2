const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000); 
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color("#EDF3F3");
renderer.setSize(800, 800);
document.body.appendChild(renderer.domElement); 

let x = 0.01
let y = 0.01

const cylinderGeometry = new THREE.CylinderGeometry(1,1,1);
const cylinderMaterial = new THREE.MeshBasicMaterial({ color: "#40E8E3" });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
scene.add(cylinder);
camera.position.z=5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    if (cylinder.position.x >=6 || cylinder.position.x <= -6){
        x =- x; 
    
    }
    if (cylinder.position.x >=6 || cylinder.position.x <= -6){
        cylinder.material.color.set("#493078");    
    }
    cylinder.position.x = cylinder.position.x + x;
    if (cylinder.position.y >=2.5 || cylinder.position.y <= -2.5){
        y = -y ;      

    }
    if (cylinder.position.y >=2.5 || cylinder.position.y <= -2.5){
        cylinder.material.color.set("#EC8234");     
    }
    cylinder.position.x = cylinder.position.x + x;
    cylinder.position.y = cylinder.position.y + y;

    //cylinder.scale.x = cylinder -0.05
    //cylinder.scale.y = cylinder -0.05
	//cylinder.scale.z = ccylinder -0.05
    
}
animate();
