class launcher{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
    fly(){
       this.launch.bodyA = null; 
    }

   attach(body){
        this.launch.bodyA= body;
    }
    display(){
        if(this.launch.bodyA){
            var anchorA = this.launch.bodyA.position;
            var anchorB = this.launch.pointB;
            strokeWeight(4);
            line(anchorA.x, anchorA.y, anchorB.x, anchorB.y);
        }  
    }
}