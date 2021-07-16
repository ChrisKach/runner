var path,pathImage
var runner1,runner1Image,
function preload(){
pathImage = loadImage("path.png");
//runner1Image = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200,400,400);
  path.addImage(pathImage);
  path.velocityY=5;

  runner1 = createSprite(200,375,50,50);
 // runner1.addAnimation(runner1Image);
  
  
}

function draw() {
  background(0);
if(path.y>400){
  (path.y=20)
}
drawSprites();

}
