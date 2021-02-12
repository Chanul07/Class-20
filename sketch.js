var fixedRect,movingRect1,movingRect2;

function setup() {
  createCanvas(800,400);
  
  //create the sprites for the fixed and moving rects.
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect1= createSprite(400, 200, 80, 30);
  movingRect2= createSprite(400, 200, 80, 30);
}

function draw() {
  background(0,0,0);  
  movingRect1.x=World.mouseX;
  movingRect1.y=World.mouseY;
  movingRect2.velocityX = 2;


  if(movingRect1.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect1.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect1.y<fixedRect.width/2+movingRect.width/2
    && movingRect1.y-fixedRect.y<fixedRect.width/2+movingRect.width/2){

  movingRect1.shapeColor="lightblue";
  fixedRect.shapeColor="lightblue";
  }
  else {
  movingRect1.shapeColor="orange";
  fixedRect.shapeColor="orange";
  movingRect2.shapeColor="orange";
  }

  drawSprites();
}