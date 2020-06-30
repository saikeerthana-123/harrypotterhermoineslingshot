class Hermoine {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      //this.body = Bodies.rectangle(x,y,width,height,options);
      this.x = 1000;
      this.y =350 ;
      this.width = 100;
      this.height = 50;
      this.image = loadImage("sprites/hermoine.jpg");
      //World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
     // rectMode(CENTER);
      //fill("brown");
      //image(pos.x, pos.y, this.width, this.height);
      image(this.image,1000,350,50,80);
    } 
  };
