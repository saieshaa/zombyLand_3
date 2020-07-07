var player, playerImage;
var zombie1Group,zombie1Image,zombie2Group,zombie2Image,zombie3Group,zombie3Image,zombie4Group,zombie4Image;
var bg;

function preload() {
  playerImage  =  loadImage ("player.png")
  zombie1Image = loadImage ("zombie_1.png")
  zombie2Image = loadImage ("zombie_2.png")
  zombie3Image = loadImage ("zombie_3.png")
  zombie4Image = loadImage ("zombie_4.png")
            bg = loadImage("hauntedhous_bg.jpg")
}
function setup() {
createCanvas(1500,500);

player = createSprite(75,400,7,7);
player.addImage("player",playerImage);

player.scale = 0.3;
}

function draw() {
  background(bg);

  if(keyDown("UP_ARROW")){
  player.y=player.y-5;
  }

  if(keyDown("DOWN_ARROW")){
    player.y=player.y+5;
    }

    if(keyDown("RIGHT_ARROW")){
      player.x=player.x+5;
      }

      if(keyDown("LEFT_ARROW")){
        player.x=player.x-5;
        }
  
       
        
        
        

        var spawn  = Math.round(random (1,4))
        if(frameCount %100 === 0 ){
          if(spawn===1){
          spawnZombie1();
          }
          else if (spawn===2){
          spawnZombie2();
          }

        else if (spawn===3){
          spawnZombie3();

        }

        else if (spawn===4){
          spawnZombie4();
        }
        }

  drawSprites();
}

function spawnZombie1 (){
  var zombie1 = createSprite(1500,440,10,10);
    zombie1.addImage ("zombie1",zombie1Image);
    zombie1.velocityX = -4
    zombie1.scale = 0.2
   
  
}

function spawnZombie2 (){
  
    var zombie2 = createSprite(1500,440,10,10);
    zombie2.addImage ("zombie2",zombie2Image);
    zombie2.velocityX = -4
    zombie2.scale = 0.2
  
  
}

function spawnZombie3 (){
  
    var zombie3 = createSprite(1500,440,10,10);
    zombie3.addImage ("zombie3",zombie3Image);
    zombie3.velocityX = -4
    zombie3.scale = 0.2
  
  
}

function spawnZombie4 (){
  
    var zombie4 = createSprite(1500,440,10,10);
    zombie4.addImage ("zombie4",zombie4Image);
    zombie4.velocityX = -4
    zombie4.scale = 0.2
  
  
}