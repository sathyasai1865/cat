var cat,mouse,catImg2,catImg1,catImg3,mouseImg1,mouseImg2,garden

function preload() {
    //load the images here
    catImg1=loadAnimation("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    catImg3=loadAnimation("images/cat4.png")
    mouseImg1=loadAnimation("images/mouse2.png")
    mouseImg2=loadAnimation("mouse4.png")
    garden=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat=createSprite(350,100,10,10)
  mouse=createSprite(250,100,10,10)
}

function draw() {

    background(400);
    //Write condition here to evalute if  tomand jerry collide
  text(mouseX+" "+mouseY,mouseX,mouseY)

    if (cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.velocityX=0
      cat.x=300
     cat.changeAnimation(catImg3)
     mouse.changeAnimation(mouseImg2)
    }

    else{
    cat.addAnimation("catImg1")
    mouse.addAnimation("mouseImg1")
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
     cat.velocityX=-5;
    cat.addAnimation("catRunning",catImg2)
 }

}
