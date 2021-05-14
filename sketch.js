var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  division1 = new Divisions(10,790,10,700);
  division2 = new Divisions(90,790,10,700);
  division3 = new Divisions(170,790,10,700);
  division4 = new Divisions(250,790,10,700);
  division5 = new Divisions(330,790,10,700);
  division6 = new Divisions(410,790,10,700);
  division7 = new Divisions(490,790,10,700);
  division8 = new Divisions(570,790,10,700);
  division9 = new Divisions(650,790,10,700);
  division10 = new Divisions(730,790,10,700);
  

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width-20; j=j+50)
  {
    plinkos.push(new Plinko(j,275))
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-30; j=j+50)
  {
    plinkos.push(new Plinko(j,375))
  }

  //create particle objects
  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
  }
    


//create particles
if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }
 

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }

 if(frameCount%100===0)
{
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
 }



    

//create particles
if(frameCount%140===0)
  {
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10))
    
  }
    

 
}

function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division7.display();
  division6.display();
  division8.display();
  division9.display();
  division10.display();
  

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  // display the particles
  for (var h=0; h<particles.length;h = h+1)
  {
    particles[h].display();
  }

}
