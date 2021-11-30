var normalBackGroundImg, INtenseBSC;
var Yamakazu, alien, GrandMaster, Spaceman, Part, UFO, Hello;
var Yamakazuimg, alienimg, GrandMasterimg, INtenseBGimg, Spacemanimg, Partimg, UFOimg, Helloimg;
function preload()
{
	normalBackGroundImg = loadImage("assests/NormalBG.png");
	Yamakazuimg = loadImage("assests/Yamakazu.png");
  alienimg = loadImage("assests/alien.png");
  GrandMasterimg = loadImage("assests/GrandMaster.png");
  Partimg = loadImage("assests/part.png");
  INtenseBGimg = loadImage("assests/INtenseBSC.jpg");
  Spacemanimg = loadImage("assests/SPACEMAN.png");
  UFOimg = loadImage("assests/UFO.png");
  Helloimg = loadImage("assests/hello.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight-20);

Yamakazu = createSprite(windowWidth/2,windowHeight/2,50,50);
Yamakazu.addImage("Yamakazuimg",Yamakazuimg);
Yamakazu.scale = 0.3;

Spaceman = createSprite(200, 200, 50, 50);
Spaceman.addImage("Spacemanimg",Spacemanimg);
Spaceman.scale = 0.3;

UFO = createSprite(300,300,40,50);
UFO.addImage("UFOimg",UFOimg);
UFO.scale = 1.2;

//Part = createSprite(240,30,20,20);
//Part.addImage("Partimg",Partimg);

//Hello = createSprite(304,340,30,40);
//Hello.addImage("Helloimg",Helloimg);

GrandMaster = createSprite(800,360,40,50);
GrandMaster.addImage("GrandMasterimg",GrandMasterimg);
GrandMaster.scale = 0.3;

alien = createSprite(850,400,40,40);
alien.addImage("alienimg",alienimg)
alien.scale = 0.1;
}


function draw() {
  rectMode(CENTER);
  background(normalBackGroundImg);
  
  drawSprites();
 
}



