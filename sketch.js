
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof (500,100,600,30)
	bob1 = new Bob (310,400,60);
	bob2 = new Bob (430,400,60);
	bob3 = new Bob (550,400,60);
	bob4 = new Bob (670,400,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  drawSprites();
 
}



