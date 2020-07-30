//This cretaes the constants for the Physics Engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//This creates the varirables
var ball;
var ground;
var box1, box2, box3;

function preload()
{
	
}

function setup() {

	//This creates the Cnavas
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//This creates all the vrirables using the classes
	ball = new Paper(100,100,20);

	ground = new Ground(400, 650, 800, 30);

	box1 = new Box(650,625,200,20);

	box2 = new Box(550,575,20,100);

	box3 = new Box(750,575,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //This displays all the bodies

  ball.display();

  ground.display();

  box1.display();

  box2.display();

  box3.display();
  
  drawSprites();

  keyPressed();
 
}

//This acceltrates the ball when the up arrow is pressed
function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:3,y:-3});

	}



}



