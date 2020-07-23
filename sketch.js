function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var particles = [] ;
  var plinkos = [];
  var divisions = []; 
  var ground = [] ;

var divisionHeight = 300;

for(var k = 0; k<=innerWidth;k=k+80) {
divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight));  
}
for(var j = 40; j<=width ; j=j+50) 
{
plinklos.push(new Plinko(j,75));
}
for(var j = 15; j<=width-10; j=j+50)
{
plinkos,push(new Plinko(j,175));
}
for(var j = 0; j<particles.length;k++) {
divisions[k].display();
}  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}