var fixedRect, MovingRect;



function setup() {
  createCanvas(800,400);
  
 fixedRect= createSprite(400, 200, 50, 80);
 MovingRect = createSprite(200,200,80,50);
MovingRect.shapeColor="blue";
fixedRect.shapeColor="blue";
MovingRect.debug=true;
fixedRect.debug= true;
MovingRect.velocityX=6;
fixedRect.velocityX=-6;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  //ob1.x=mouseX;
  //vingRect.y=mouseY;
  bounceoff(MovingRect,fixedRect);
    if(isTouching(MovingRect,fixedRect)){
      MovingRect.shapeColor="white";
fixedRect.shapeColor="white";

    }
    else{
      MovingRect.shapeColor="blue";
fixedRect.shapeColor="blue";
    }
  
  }
 