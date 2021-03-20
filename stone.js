class stone {
    constructor(x, y) {
      var options = {
        //'isStatic': true,
        'restitution':0,
        'friction':8,
        'density':1.0,
        'stiffness':0.004,
      }
      this.body = Bodies.circle(x, y, 25, options);
      this.r = 50;
      this.r = 50;      
  
      this.image = loadImage("stone.png");
      
      World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      fill("red");
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
  }
    