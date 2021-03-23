const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

function setup() {
  createCanvas(1000,600);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(500,580,1000,20);
  box1=new Box(450,550,100,100);
  box2=new Box(550,550,100,100);
  box3=new Box(650,550,100,100);
  box4=new Box(750,550,100,100);
  box5=new Box(450,450,100,100);
  box6=new Box(550,450,100,100);
  box7=new Box(650,450,100,100);
  box8=new Box(750,450,100,100);
  box9=new Box(450,350,100,100);
  box10=new Box(550,350,100,100);
  box11=new Box(650,350,100,100);
  box12=new Box(750,350,100,100);
  ball=new Ball(250,100,70,70,PI/2);
  slingshot=new Slingshot(ball.body,{x:250,y:100});
}

function draw() {
  background(0); 
  

  Engine.update(engine);
  ground.display();
  box1.display(); 
  box2.display();
  box3.display();
  box4.display();
  box5.display(); 
  box6.display();
  box7.display();
  box8.display();
  box9.display(); 
  box10.display();
  box11.display();
  box12.display();
  ball.display();
  slingshot.display();
}
function mouseDragged(){
  Matter.Body. setPosition(ball.body,{x:mouseX,y:mouseY});
}