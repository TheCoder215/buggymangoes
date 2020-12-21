class Slingshot{

    constructor(bodyA, pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:1,
            stiffness:0.1
        }

        this.pointB=pointB,
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);

    }

    fly(){
        this.slingshot.bodyA = null;
    }

    attach(body){
        this.slingshot.bodyA = body;
    }

    display(){

        if(this.slingshot.bodyA){

           var pointA = this.slingshot.bodyA;
           var pointB = this.pointB

            strokeWeight(2.5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
}
