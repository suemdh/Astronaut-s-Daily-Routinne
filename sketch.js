function preload(){
bg=loadImage("iss.png");
bath=loadAnimation("bath1.png","bath2.png");
brush=loadAnimation("brush.png");
drink=loadAnimation("drink1.png","drink2.png")
eat=loadAnimation("eat1.png","eat2.png");
gym=loadAnimation("gym1.png","gym2.png",);
gym2=loadAnimation("gym11.png","gym12.png")
sleep=loadAnimation("sleep.png");
move=loadAnimation("move.png","move1.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
 
 
  
  
  astronaut=createSprite(750,400,50,50)
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.2;

}

function draw() {
  background(bg); 
  fill("black") 
  textSize(20);
  text("Up Arrow = Brushing",250,60)
  text("Down Arrow = Gymming",250,95)
  text("Left Arrow = Eating",250,125)
  text("Right Arrow = Bathing",250,155)
  text("r key = Gymming2",250,185)
  text("e key = Moving",250,215)
  textSize(35);
  text("Instructions:",250,25)

  edges= createEdgeSprites();
   astronaut .collide(edges);



   if(keyDown("r")){
    astronaut.addAnimation("gymming2",gym2)
    astronaut.changeAnimation("gymming2")
    astronaut.y=275
    astronaut.velocityX=0;
    astronaut.velocityY=0;
   }
  

  if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush)
  astronaut.changeAnimation("brushing")
  astronaut.y=350
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }
   
  if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym)
  astronaut.changeAnimation("gymming")
  astronaut.y=400
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }  
  if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat)
  astronaut.changeAnimation("eating")
  astronaut.y=467
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y=493
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    }
    
    
  



  drawSprites();
}


