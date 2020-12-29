const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var groundObj;

function setup() {
  createCanvas(480,800);

  for(var k =0; k <=innerWidth; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 40; j <=innerWidth; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 40; j <=innerWidth; j=j+50){
    plinkos.push(new Plinko(j,50));
  }
  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,100));
  }


  groundObj = new Ground(240, 780, 480, 50);

}

function draw() {
  background(255,255,255);  

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for (var c = 0; c < plinkos.length; c++){
    plinkos[c].display();
  }

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10), 10, 10));
  }


  groundObj.display();
  drawSprites();
}
