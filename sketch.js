var rect;
var circ;
function setup() {
  createCanvas(400,400);
  rect = createSprite(200, 200, 20, 20);
  edge = createEdgeSprites();
  circ = createSprite(200, 100, 20, 20);
}

function draw() 
{
  background("yellow");
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)){
    rect.position.x = rect.position.x + 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    rect.position.x = rect.position.x - 5;
  }
  if(keyIsDown(UP_ARROW)){
    rect.position.y = rect.position.y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    rect.position.y = rect.position.y + 5;
  }
  rect.collide(edge);
  ellipse(mouseX, mouseY, 55, 55);
}