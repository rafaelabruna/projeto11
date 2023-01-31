var mar, barco, maranimation, barcoanimation


function preload(){
maranimation= loadImage("sea.png");
barcoanimation= loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png", "ship-3.png", "ship-2.png");
}

function setup(){
  createCanvas(400,400);
 mar = createSprite (200,200,400,400);
 barco = createSprite (200,200,5,5);
 mar.addImage ("maranimação",maranimation);
 barco.addAnimation ("barcoanimação", barcoanimation);
 barco.scale=0.5
 mar.velocityX = 2;
 
}

function draw() {
  background("blue");
    
   if(mar.x <0){
   mar.x = mar.width/2;

   }





    drawSprites();

 
}
