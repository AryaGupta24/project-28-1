const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg;
var tree2 , tree2img;

function preload(){
	boyImg = loadImage("boy.png");
	tree2img = loadImage("tree.png");
}

function setup(){
	createCanvas(1350, 700);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(675, 665, 1350, 20);
	stone1 = new stone(150, 550);
	mango1 = new mango(1070, 250);
	mango2 = new mango(1000, 250);
	mango3 = new mango(1150, 300);
	mango4 = new mango(900, 280);
	mango5 = new mango(1250, 250);
	mango6 = new mango(1220, 180);
	mango7 = new mango(900, 180);
	mango8 = new mango(1009, 120);
	mango9 = new mango(1100, 150);
	mango10 = new mango(850, 230);
	mango11 = new mango(1150, 230);
	mango12 = new mango(1120, 70);
	launcher1 = new launcher(stone1.body,{x:150, y:550 });
	Engine.run(engine);
}


function draw(){
	rectMode(CENTER);
	background(255);
	boy = createSprite(200, 600, 50, 50);
	boy.addImage(boyImg);
	boy.scale = 0.099;
	tree2 = createSprite(1050, 350, 350, 650);
	tree2.addImage(tree2img);
	tree2.scale = 0.5;
	drawSprites();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	launcher1.display();
	ground.display();
	stone1.display();
	detectollison(stone1,mango1);
	detectollison(stone1,mango2);
	detectollison(stone1,mango3);
	detectollison(stone1,mango4);
	detectollison(stone1,mango5);
	detectollison(stone1,mango6);
	detectollison(stone1,mango7);
	detectollison(stone1,mango8);
	detectollison(stone1,mango9);
	detectollison(stone1,mango10);
	detectollison(stone1,mango11);
	detectollison(stone1,mango12);

}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y:mouseY})
}

function mouseReleased(){
    launcher1.fly();
}

function detectollison(lstone, lmango){
	mangoBodyPosition = lstone.body.position
	stoneBodyPosition = lmango.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed(){
    if (keyCode === 32){
        launcher1.attach(stone1.body);
		mouseDragged();
    }
}