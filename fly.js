class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.pointB = pointB
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }
    
    fly(){
        this.Rope.bodyA = null;
    }

    display(){
        if(this.Rope.bodyA){
    var pointA = this.Rope.bodyA.position;
    var pointB = this.pointB;
    push(); 
    stroke(48,22,8);
    strokeWeight(3)
    line(pointB.x,pointB.y,pointA.x,pointA.y)
    pop();
        }
    }
    
}

