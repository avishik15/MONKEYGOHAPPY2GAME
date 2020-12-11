
var bananaImage, obstacleImage, obstacleGroup, background, score , bananaGroup






 function preload(){
  backgrImage = loadImage("jungle.jpg");
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  
  
}





function setup() {
  createCanvas(800, 400);
  
  backg = createSprite(400,20,0,0);
  backg.addImage(backgrImage);
  backg.scale=1.5;
  backg.x=backg.width/2;
  backg.velocityX=-4;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("Running",monkey_running);
  monkey.scale = 0.1;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  
  score = 0; 
  
  
  
  
  
}

function draw() {
  background(220);
  
  
  if(backg.x<100){
    backg.x=backg.width/2;
  }
  
  if(ground.x<100){
    ground.x = ground.width/2;
  }
  
  
  if(bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 6: monkey.scale=0.12;
                break;
        case 12: monkey.scale=0.14;
                break;
        case 18: monkey.scale=0.16;
                break;
        case 24: monkey.scale=0.18;
                break;
        default: break;
    }
  
  
  if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;

  
   monkey.collide(ground);
  spawnBananas();
  spawnObstacles();
 
  
  if(obstacleGroup.isTouching(monkey)){ 
        monkey.scale=0.08;}
  
  
  
  
  
  
  
  
  
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
}


function spawnBananas() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
     
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    bananaGroup.add(banana);
  }
}


function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    
     
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    
    
    obstacleGroup.add(obstacle);
  }
}











