const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

//1-d array or array
var arr1=[1,2,3];
console.log(arr1)

//2-d array
var arr2=[[1,2],[2,3],[4,6]]
console.log(arr2)
console.log(arr2[0])
console.log(arr2[0][0])
arr2.push("tanisqka")
console.log(arr2)
arr2.pop("tanisqka")
console.log(arr2)
//empty array
var balls=[]
var cannonball;
function preload() {
 backgroundImg=loadImage('assets/background.gif');
 towerImage=loadImage('assets/tower.png')
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle=15
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 

 tower=Bodies.rectangle(160,350,160,310,options)
 World.add(world,tower)

 cannon = new Cannon(180,110,130,100,angle)

//  cannonball: object that you are going to make using
//  the class cannonBall
 cannonball= new CannonBall(cannon.x,cannon.y)
}


function draw() {
  
   
    rect(ground.position.x, ground.position.y,width*2,1);

  
 image(backgroundImg,0,0,1200,600)
 push()
 imageMode(CENTER)
 image(towerImage,tower.position.x,tower.position.y,160,310) 
 pop()
 cannon.display()
 //cannonball.display()
 for(var i=0;i<balls.length;i++){
   showCannonballs(balls[i],i)
 }
}

function keyPressed(){
  if (keyCode==32){
var cannonball1=new CannonBall(cannon.x,cannon.y)
balls.push(cannonball1)
  }
}
function showCannonballs (ball,i){
if(ball){
  ball.display()
}
}
function keyReleased(){
  if(keyCode===32){
    balls[balls.length-1].shoot()
  }

}