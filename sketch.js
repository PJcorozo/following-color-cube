function setup() {
  createCanvas(800,400);
  O1=createSprite(400, 200, 50, 50);
  O2=createSprite(200, 400, 50, 50);
}

function draw() {
  background("blue");  
  O2.x = mouseX
  O2.y = mouseY
  if(abs(O1.x-O2.x)<O1.width/2 +  O2.width/2 && 
  abs(O1.y-O2.y)<O1.height/2 +  O2.height/2){
  O1.shapeColor = "red"  
  O2.shapeColor = "red"  
  }
  else{
  O1.shapeColor = "darkgreen"  
  O2.shapeColor = "darkgreen"   
  }
  drawSprites();
}