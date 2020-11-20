const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var bodies;
var ball;

var box1,box2,box3,box4,box5;
var ground1, ground2;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;
var bg;
var line1;
var gamestate = "onSling";


function preload(){
  
  bg = loadImage("sprites/bg.png");

}

function setup() {

  createCanvas(1000,500);

  engine = Engine.create();
  world = engine.world;

  box1 = new box(600,400);
  box2 = new box(840,400);
  box3 = new box(600,300);
  box4 = new box(840,300);
  box5 = new box(720,200);

  ground1 = new ground(500,480,1010,30);
  ground2 = new ground(150,380,300,180);

  pig1 = new Pig(720,400);
  pig2 = new Pig(720,300);

  log1 = new Log(720,350,350,PI);
  log2 = new Log(720,250,350,PI);
  log3 = new Log(660,145,170,-PI/4);
  log4 = new Log(780,155,170,PI/4);

  bird1 = new Bird(210,145);

  line1 = new Slingshot(bird1.body,{x:210, y:155});

}

function draw() {

  background(bg);  

  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  ground1.display();
  ground2.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird1.display();

  line1.display();

}

function mouseDragged(){

  if(gamestate === "onSling"){
    Matter.Body.setPosition(bird1.body,{x : mouseX, y : mouseY}); 
  }

}

function mouseReleased(){
  line1.fly();
  gamestate="launch";
}

function keyPressed(){
  if(keyCode === 32){
    //line1.attach(bird1.body);
  }
}

