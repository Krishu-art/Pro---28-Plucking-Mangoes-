class SlingShot{
    constructor(body,anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.04,
            length: 1
        }
        this.body = body
        this.pointB = anchor
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x , pointA.y, pointB.x , pointB.y);
         // line(pointA.x -20, pointA.y, pointB.x + 30, pointB.y -3);
           
        }
    }
    
}