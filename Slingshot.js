class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 11
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;  //bird.body
            var pointB = this.pointB;               // point to which the bird is attached, between the 2 arms of the sling 
            push();

            stroke ("#301608");

            if (pointA.x<220){  //left of the sling shot
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
                image(this.sling3,pointA.x-30,pointA.y - 10,15,30);
            }
            else{  //right of the sling shot
                strokeWeight(3);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
                image(this.sling3,pointA.x+23,pointA.y - 10,15,30);
            }
            
            pop();
        }

        image(this.sling1, 200,20); ///right side
        image(this.sling2, 170,20); //left side
    }
    
}