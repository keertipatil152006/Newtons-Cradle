
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var ground;
var rope1,rope2,rope3,rope4,rope5;
var background1;


function setup() {
	createCanvas(600,500);

	engine = Engine.create();
	world = engine.world;

	//Bob
	bob1 = new Pendulum(360,300,20);
	bob2 = new Pendulum(380,300,20);
	bob3 = new Pendulum(400,300,20);
	bob4 = new Pendulum(420,300,20);
	bob5 = new Pendulum(440,300,20);

	//Roof
	ground = new Ground(400,100,200,20);

	//Ropes
	rope1 = new Rope(bob1.body,ground.body,-80,0);
	rope2 = new Rope(bob2.body,ground.body,-40,0);
	rope3 = new Rope(bob3.body,ground.body,0,0);
	rope4 = new Rope(bob4.body,ground.body,40,0);
	rope5 = new Rope(bob5.body,ground.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(16, 232, 41);
  
  //display bobs
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //display roof
  ground.display();

  //display ropes
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}