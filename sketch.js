var pillar;
var pillar2;
var rockGroup;
var rockGroup2;
var count;
var ninja;
var gameState;
var snakes;
var rand;
var edges;
var LeftImage,RightImage;
var invi;
var invi2;

function preload(){
LeftImage=loadImage("left_Ninja.png");
RightImage=loadImage("Right_Ninja.png");
}

function setup() {

createCanvas(400,800); 

invi=createSprite(30,200,100,400)
invi=createSprite(355,200,100,400)

ninja=createSprite(105,400,10,10);
ninja.addImage("Left",LeftImage);
ninja.addImage("Right",RightImage)
ninja.scale=0.15;

gameState="serve";

count=0;

pillar=createSprite(55,200,100,400);
pillar.velocityY=5;
pillar.height=pillar.height*3;

pillar2=createSprite(345,200,100,400);
pillar2.velocityY=5;
pillar2.height=pillar2.height*3;

rockGroup=createGroup();

rockGroup2=createGroup();

SnakeGroup=createGroup();


edges=createEdgeSprites();

}

function draw() {


if(gameState=="serve"){
background("blue");

text("Score:"+count++,200,200);

//LR();

ninja.collide(invi);

ninja.collide(invi2);

if(ninja.isTouching(rockGroup)){
gameState="end";
}

if(ninja.isTouching(rockGroup2)){
gameState="end";
}

if(count>1000 && count<2000 ){
gameState="level2";
}

if(pillar.y>450){
pillar.y=200;
}

if(pillar2.y>450){
pillar2.y=200;
}

spawnRocks1();

spawnRocks2();
            
text("score 4000 to win",150,300);

} 

if(gameState=="end"){
background("blue");

rockGroup.visible=false;

rockGroup2.visible=false;

pillar.velocityY=0;

SnakeGroup.visible=false;

pillar2.velocityY=0;

ninja.visible=false;

text("you lost",200,200);
}

if(gameState=="level2"){
background("green");

ninja.collide(edges[0]);
ninja.collide(edges[1]);

if(count>2000){
gameState="Won";
}

text("Score:"+count++,200,200);

spawnSnakes();

pillar.visible=false;

pillar2.visible=false;

ninja.visible=true;

if(ninja.isTouching(SnakeGroup)){
gameState="end";
}

if(keyDown("RIGHT_ARROW")){
ninja.velocityX=7;
}     

if(keyDown("LEFT_ARROW")){
ninja.velocityX=-7;
}
}

if(gameState=="Won"){
Win();
}
drawSprites();
}

function spawnRocks1(){
if(World.frameCount % 60===0 ) {
var rock=createSprite(125,0,40,10);

rock.velocityY=7;

rock.lifetime=134;

rockGroup.add(rock);
}
}

function spawnRocks2(){
if(World.frameCount % 60===0){
var rock2=createSprite(270,0,40,10);

rock2.velocityY=5;

rockGroup2.lifetime=80;

rockGroup2.add(rock2);
}
}

function spawnSnakes(){
if(World.frameCount % 60===0){
rand=random(05,400);

snakes=createSprite(rand,-20,10,30);

snakes.velocityY=18;

snakes.lifetime=100;

SnakeGroup.add(snakes);
}
}

function LR(){
if(keyDown("RIGHT_ARROW")){
ninja.velocityX=7;
ninja.changeImage("Right",RightImage);
}
if(keyDown("LEFT_ARROW")){
ninja.velocityX=-7;
ninja.changeImage("Left",LeftImage);
}
}                                                                                           

function Win(){
background("white");
text("you won",200,200)
}