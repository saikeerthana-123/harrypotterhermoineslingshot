class Ron extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/ron.jpg");
      //shapeColour("red");
      this.smokeImage = loadImage("sprites/smoke.png");
      this.trajectory = [];
      }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
      if(this.body.position.x>200 && this.body.velocity.x>10) {
      var pos = [this.body.position.x, this.body.position.y];
      this.trajectory.push(pos);
      //this.body.fill("red");
    }
      //console.log(this.trajectory);
      for(var array = 0; array<this.trajectory.length;array++){
        image(this.smokeImage,this.trajectory[array][0],this.trajectory[array][1]);
      }
  
    }
  }