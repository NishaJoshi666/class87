const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Ground1;
var paper1;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new dustbin(700,295,200,200);
    Ground1 = new ground(600,height,1200,20);
    paper1 =new paper(200,340,60,70);
  
}


function draw() {
	background("gray");
    Engine.update(engine);
    text(mouseX +","+mouseY,200,20);
    box1.display();
    Ground1.display();
    paper1.display();

    keyPrassed();
 
}
function keyPrassed(){
	if(keyCode === UP_ARROW){

	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:8,y:-8});

	}
}


