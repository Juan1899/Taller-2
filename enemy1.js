function Enemy1 (x,y) {

  this.x = x; 
  this.y = y;
  this.r = 25;
  this.quit = false;
  
  this.move = function () {
  this.y+=0.5;
  
  
  
  }
  
  
  
  this.show = function () {
    
    noStroke();
    fill (128, 0, 128);
    ellipseMode (CENTER);
    ellipse (this.x, this.y, this.r*2, this.r*2);
  
  }
  
  
  this.die = function () {
  
      this.quit = true; 
  
  
  
  }

}