var button1, button2, button3, button4, button5, tree1, tree2, tree3, tree4;
var computerPaddle, computerScore, userPaddle, userScore, ball, edges,canvas;
var Levels= "Level1";
var pongLevel= "serve";

function setup(){

  canvas=createCanvas(400,400)

  button1= createSprite(300,200,40,10);
  button1.visible= true;

 button2= createSprite(200, 150, 10, 40);
button2.visible= false;

 button3= createSprite(50,50,50,10);
button3.visible= false;

button4= createSprite(250, 40, 80, 20);
button4.visible= false;

button5= createSprite(150, 70, 50, 60);
button5.visible= false;


 tree1= createSprite(200,100,30, 50);
tree1.visible= false;

tree2= createSprite(350, 300, 30, 50);
tree2.visible= false;

tree3= createSprite(150, 200, 30, 50);
tree3.visible= false;
 
tree4= createSprite(275, 275, 30, 50);
tree4.visible= false;

//ponggame
userPaddle = createSprite(390,200,10,70);
userPaddle.visible= false;

var computerPaddle = createSprite(10,200,10,70);
computerPaddle.visible= false;

 ball = createSprite(200,200,12,12);
ball.visible= false;

computerScore = 0;
 playerScore = 0;
 edges= createEdgesSprites;
}

function draw() {
  background("lightGreen");
  
    if(mousePressedOver(button1)){
      Levels= "Level2";
    }
    
    if(Levels=== "Level2"){
      background("white");
      button1.visible= false;
      tree1. visible= true;
      tree2. visible= true;
      
      if(mousePressedOver(tree1)){
        Levels= "Level3";
      
      }
    }

    if(Levels= "Level3"){
      
      background("green");
      
    
      button2.visible= true;
      tree1.visible= false;
      tree2.visible= false;
      if(mousePressedOver(button2)){
        Levels= "ponggame";
      }
    }
  if(Levels=== "ponggame"){
    background("lightPurple");

    //to go back to the level before
    button3.visible= true;

    button2.visible= false;

    userPaddle.visible= true;
    computerPaddle.visible= true;
    ball.visible= true;

    //display Scores
  text(computerScore,170,20);
  text(playerScore, 230,20);
  
  //draw dotted lines
  for (var i = 0; i < 400; i+=20) {
     line(200,i,200,i+10);
  }

  //make the userPaddle move with the mouse
  userPaddle.y = World.mouseY;
  
  if (pongLevel=== "serve") {
    text("Press Space to Serve",150,180);
  } 
  
  if (keyDown("space") && pongLevel == "serve") {
    ball.velocityX = 5;
    ball.velocityY = 5;
    pongLevel = "play";
  }
  
 
  if (pongLevel === "over") {
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r")) {
    pongLevel = "serve";
    computerScore = 0;
    playerScore = 0;
  }
  

  //make the ball bounce off the user paddle
  if(ball.isTouching(userPaddle)){
    ball.x = ball.x - 5;
    ball.velocityX = -ball.velocityX;
  }
  
  //make the ball bounce off the computer paddle
  if(ball.isTouching(computerPaddle)){
    ball.x = ball.x + 5;
    ball.velocityX = -ball.velocityX;
  }
  
  //place the ball back in the centre if it crosses the screen
  if(ball.x > 400 || ball.x < 0){
    
    if (ball.x < 0) {
      playerScore++;
    }
    else {
      computerScore++;
    }
      
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    pongLevel="serve";
    
    if (computerScore=== 5 || playerScore === 5){
      pongLevel = "over";
    }
  }
  

  createEdgeSprites();
    //make the ball bounce off the top and bottom walls
  if (ball.isTouching(topEdge) || ball.isTouching(bottomEdge)) {
    ball.bounceOff(topEdge);
    ball.bounceOff(bottomEdge);
  }
  
  //add AI to the computer paddle so that it always hits the ball
  computerPaddle.y = ball.y;


  if(mousePressedOver(button3)){
    gameState= "Level2";
    button3.visible= false;
    ball.visible= false;
    computerPaddle.visible= false;
    userPaddle.visible= false;
  
  }
  drawSprites();
 }
    }