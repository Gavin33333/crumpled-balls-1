
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(400,360,20)
	ground1 = new Ground(800,685,1600,20)

	D1 = new Dustbin(1300,665,170,20)

	D2 = new Dustbin(1205,615,20,120)
	
	D3 = new Dustbin(1395,615,20,120)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  D1.display();
  D2.display();
  D3.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65, y:-65})
	}

}

