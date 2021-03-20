class mango {
    constructor(x, y) {
      var options = {
        'isStatic': true,
        'restitution':0,
        'friction':1,
        //'density':1.2
      }
      this.body = Bodies.circle(x, y, 25, options);
      this.r = 40;
      this.r = 40;      
  
      this.image = loadImage("mango.png");
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
    