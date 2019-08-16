var player; 
var enemies = [];
var bullets = [];

function setup() {
  createCanvas(600, 400);
  
  player = new Character (); 
 
}


function draw() {
  background(22);
  
  player.show ();

   if(frameCount%150==0){
  for (var i = 0; i < 9; i++){
  enemies.push( new Enemy1 (i*60+60, 40));
  }
}
  
 for (var i = 0; i < enemies.length; i++){
  enemies [i].show();
  enemies [i].move();
 }
  
   for (var i = 0; i < bullets.length; i++){
  bullets [i].show();
  bullets [i].move();
   
     for (var j = 0; j < enemies.length; j++){
  if (bullets [i].hits(enemies[j])) {
    
    enemies [j].die (); 
   bullets.splice(i,1);
    console.log ("BOOM");
  }
       
  }
        
  }
  
  
  for (var i = bullets.lenght-1; i>=0; i--){ 
       
        if (bullets [i].erase) {
        bullets.splice(i, 1);  
     
    }

}
      for (var j = enemies.lenght-1; i>=0; i--){ 
       
        if (enemies [j].die) {
        enemies.splice(i, 1);   
    }
      }
}
   

function keyPressed () {
  
  
  
  if (key === ' ')   {
  
    var bullet = new Bullet (player.x, 320);
    bullets.push(bullet);
  }
  
  
  
  
  
  if (keyCode === RIGHT_ARROW) {
    player.move(2);
    
  } else if (keyCode === LEFT_ARROW) {
  
    player.move(-2);
  
  }
  

  

      
}