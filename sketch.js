
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObj1 = new Bob(110,350,10);
	bobObj2 = new Bob(130,350,10);
	bobObj3 = new Bob(150,350,10);
	bobObj4 = new Bob(170,350,10);
	bobObj5 = new Bob(190,350,10);

	rope1=new rope(bobObj1.body,roofObject.body, -bobDiameter*2,0);
	rope2=new rope(bobObj2.body,roofObject.body, -bobDiameter*2,0);
	rope3=new rope(bobObj3.body,roofObject.body, -bobDiameter*2,0);
	rope4=new rope(bobObj4.body,roofObject.body, -bobDiameter*2,0);
	rope5=new rope(bobObj5.body,roofObject.body, -bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  drawSprites();
 
}
function keyPressed() {
if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObj5.body,bobObj1.body.position,{x:130,y:-145});

}
}
