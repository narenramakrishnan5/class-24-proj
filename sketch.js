
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	dustbin= new Dustbin(720,390,100,10)
	paper= new Paper(100,300,10)
	ground=Bodies.rectangle(width/2,400,width,10)
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 dustbin.display()
 paper.display()
}

function paperball(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.bodyposition)
		x:12
		y:-13
	}
}

