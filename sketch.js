var backIMG;
var boy;
var slingshot;
var rock;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world

function preload()
{
	backIMG = loadImage("background.jpg");
	boyIMG = ("boy.png");
}

function setup() {
	createCanvas(650, 400);

	engine = Engine.create();
	world = engine.world;
	
	mango1 = new Mango(150,200,70,60);
	mango2 = new Mango(120,170,70,60);
	mango3 = new Mango(130,220,70,60);
	mango4 = new Mango(140,160,70,60);

	boy = new Boy(590,310,50,50);
	rock = new Rock(546,287,50);
	ground = new Ground(325,397.5,650,5)
	slingshot = new Slingshot(rock.body, {x:546,y: 287})

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backIMG);
  
  boy.display();
  rock.display();
  slingshot.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	slingshot.fly();	
}

function keyPressed(){

	if (keyCode === 32){
		slingshot.attach(rock.body);
	}
}

