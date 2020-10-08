
var monkey , monkey_running;
var banana ,bananaImage, obstaces, obstacesImage;
var bananaGroup, obstacesGroup;
var score;
var ground,invisibleGround;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacesImage = loadImage("obstacle.png");
 
}



function setup() {
 

  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running",monkey_running);
   monkey.scale = 0.1;
  
    invisibleGround = createSprite(50,350,1900,10);
  invisibleGround.visible =false;
  
  
    ground = createSprite(50,350,900,10);
  ground.velocityX=-5;
  groundx=ground.width/2;
  
  obstacesGroup=new Group();
    bananaGroup=new Group();
  
    SurvivalTime = 0;
    
}


function draw() {
background("red");
  
  
  
  stroke("black");
  textSize(20);
  fill("balck");
  text("SurvivalTime: "+ SurvivalTime, 100,25);
  SurvivalTime= SurvivalTime+ Math.round(getFrameRate()/60);
      
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
   if(keyDown("space")) {
        monkey.velocityY = -13;}
   monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(invisibleGround);
  
  
   
  spawnbanana()
   spawnObstaces();
  
     drawSprites();
  
  if(obstacesGroup.isTouching(monkey)){
    monkey.velocityY=0;
    ground.velocityY=0;
    obstacesGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    
   bananaGroup.setLifetimeEach(-2);
  obstacesGroup .setLifetimeEach(-2);
    
    
  }
   
}
function spawnObstaces(){
 if (frameCount % 300 === 0){
   var obstaces = createSprite(350,320,10,40);
   obstaces.addImage( obstacesImage);
   obstaces.velocityX = -3;
  obstaces.scale = 0.1;
  
    obstacesGroup.add(obstaces);
 
 }
}
function spawnbanana(){
 if (frameCount % 50=== 0){
   var banana= createSprite(600,250,40,10);
   var randnumb=Math.round(random(120,200));
   banana.y=randnumb;
   banana.addImage(bananaImage);
   banana.velocityX = -3;
   banana.scale = 0.1;
    bananaGroup.add(banana);
   monkey.depth = banana.depth + 1;
 }
}