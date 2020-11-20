var engine,world,body

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground1,ground2
var polygon
var box1,box2,box3,box4,box5,box6,box7,box8,box9
var box10,box11,box12,box13,box14,box15,box16,box17,box18

var polygonObject
var gameState = "onSling";

function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world
  ground1 = new Ground(470, 400, 200, 15);
  ground2 = new Ground(675,350,200,15);
  
  
  //first layer
  box1=new Box(400,350,35,35);
  box2=new Box(435,350,35,35);
  box3= new Box(470,350,35,35);
  box4= new Box(505,350,35,35);
  box5= new Box(540,350,35,35);
  //second layer
  box6= new Box(435,315,35,35);
  box7 = new Box(470,315,35,35);
  box8= new Box(505,315,35,35);
 
  //third layer
  box9= new Box(470,280,35,35);



  //Second ground thingy
  
  //first layer
  box10 = new Box(610,315,35,35);
  box11 = new Box(645,315,35,35);
  box12 = new Box(680,315,35,35);
  box13 = new Box(715,315,35,35);
  box14 = new Box(750,315,35,35);
  //Second Layer
  box15 = new Box(645,280,35,35);
  box16 = new Box(680,280,35,35);
  box17 = new Box(715,280,35,35);

  //Third Layer
  box18 = new Box(680,245,35,35);

  var options = {
    restitution: 0.3,
    friction: 0.3,
    density: 1

  }

  polygon = Bodies.circle(50,200,20,options)
  World.add(world,polygon);

slingshot = new SlingShot(polygon,{x: 100, y:350})


  

}

function draw() {
  Engine.update(engine)
  background(255,255,255);  

  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  fill("red")
  ellipseMode(RADIUS)
  ellipse(this.polygon.position.x,this.polygon.position.y,20,20);
  slingshot.display();

 
}


function mouseDragged(){ 
  Matter.Body.setPosition(this.polygon, {x:mouseX, y: mouseY});
 } 

 function mouseReleased() { 
  slingshot.fly(); 
 }

function keyPressed() {
  if(keyCode === 32) {
    slingshot.attach(this.polygon);
  }
}