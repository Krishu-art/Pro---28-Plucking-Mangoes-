const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeObject, stoneObject,groundObject, slingshot;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var world,boy;
var slingshotForce=100;

function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
  treeObject=new Tree(760,470,500,500);
	stoneObject=new Stone(235,420,30);
   

  mango1=new mango(560,400,30);
  mango2=new mango(970,360,30);
	mango3=new mango(870,370,30);
	mango4=new mango(650,360,30);
	mango5=new mango(700,260,30);
	mango6=new mango(540,300,30);
	mango7=new mango(720,420,40);
	mango8=new mango(450,440,40);
	mango9=new mango(800,280,40);


	groundObject = new Ground(500,height,1000,20);
  slingshotObject = new SlingShot(stoneObject.body,{x:100, y:530});

	Engine.run(engine);
  
}


function draw() {

  background("white");
  textSize(25);
 text("Press UP-ARROW key For a second  Chance",50, 50);
  image(boy ,100,400,200,400);
  //Engine.update(engine);

  rectMode(CENTER);


  treeObject.display();
  stoneObject.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
 mango7.display();
  mango8.display();
 mango9.display();

 groundObject.display();
 slingshotObject.display();

 detectollision(stoneObject,mango1);
  detectollision(stoneObject,mango2);
  detectollision(stoneObject,mango3);
  detectollision(stoneObject,mango4);
  detectollision(stoneObject,mango5);
  detectollision(stoneObject,mango6);
  detectollision(stoneObject,mango7);
  detectollision(stoneObject,mango8);
  detectollision(stoneObject,mango9);

//drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stoneObject.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshotObject.fly();
    // distance=int(dist(stone.x,stone.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
    Matter.Body.setPosition(stoneObject.body, {x:400, y:100}) 
	  slingshotObject.attach(stoneObject.body);
	}
  }

function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
