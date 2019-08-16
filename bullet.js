    function Bullet (x,y) {

  this.x = x; 
  this.y = y;
  this.r = 8;
  this.erase = false; 
  
  this.show = function () {
    
    //stroke (255);
    fill (31, 190, 214);
    ellipse (this.x, this.y, this.r*2, this.r*2);
  
  }

  this.move = function () {
    this.y = this.y - 5;
  
  
  }
  
  this.dissapear = function () {
  
    this.erase = true; 
  
  
  
  }

  
  
  this.hits = function (enemy1) {
    
    
    
    var d = dist (this.x, this.y, enemy1.x, enemy1.y);
    
    if (d < this.r + enemy1.r) {
    
    return true;
    } 
    else {
    
    return false;
    }
    
    }

  
  
}