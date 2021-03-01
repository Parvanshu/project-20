var cat;
var mouse;
var forest;

function preload(){
    mouseanimation2 = loadAnimation("test", "images/mouse4.png")
    catanimation2 = loadAnimation("test2", "images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    forest = createSprite(500, 400);
    forest.addImage(loadImage("images/garden.png"));

    cat = createSprite(840, 670, 20, 20);
    cat.addImage(loadImage("images/cat2.png"));
    cat.scale = 0.15
    cat.velocityX = -1.5

    mouse = createSprite(200, 670, 20, 20);
    mouse.addImage(loadImage("images/mouse2.png"));
    mouse.scale = 0.1
}

function draw() {

    background(255);
    
    if(isTouching(mouse, cat)){
        mouse.changeAnimation("test", mouseanimation2);
        cat.changeAnimation("test2", catanimation2);
        cat.velocityX = 0
    }

    drawSprites();
}

function isTouching(object1, object2){
    if(object1.x - object2.x <= 20 && object2.x - object1.x <= 20 && object1.y - object2.y <= 20 && object2.y - object1.y <= 20){
      return true;
    }
    
    else{
      return false;
    }
  }