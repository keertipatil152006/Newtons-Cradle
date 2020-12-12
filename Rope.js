class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var opt = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX,y:this.offsetY},
            stiffness:1,
            angularStiffness:1
            
        }
        this.rope = Constraint.create(opt);
        World.add(world,this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push();
        strokeWeight(3,5);
       stroke("#fff");
        line(pointA.x,pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
        pop();
    }
}