const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero, ground1
var backgroundImg
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  ground1 = new Ground(200,500,2000,50)

  hero = new Hero(200,200,200)

  block1 = new Block(600,200,50,50)
  block2 = new Block(650,200,50,50)
  block3 = new Block(700,200,50,50)
  block4 = new Block(750,200,50,50)
  block5 = new Block(625,350,50,50)
  block6 = new Block(775,350,50,50)
  block7 = new Block(925,350,50,50)
  block8 = new Block(900,400,50,50)
  block9 = new Block(950,400,50,50)
  block10 = new Block(925,450,50,50)

}

function draw() {
  background("white");
  Engine.update(engine);

  ground1.display();
  hero.display();
  block1.display();
  block2.display();
  block3.display();
  //block4.display();
  //block5.display();
  //block6.display();
  //block7.display();
  //block8.display();
  //block9.display();
  //block10.display();
}

//function mouseDragged(){

  //Matter.Body.setPosition(hero.body,{x : mouseX ,y : mouseY})
  
//}

