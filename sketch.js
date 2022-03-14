
function setup() {
  createCanvas(400,400);
  var quadrado = createSprite(100, 100, 15, 15);
quadrado.shapeColor = "red";
}

function draw() 
{
  background(185);
drawSprites();

if(keyIsDown("right")){
//  quadrado.x = quadrado.x + 5;
  quadrado.velocityX = 2;
}
}




