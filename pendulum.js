class Pendulum {
    constructor(x,y,radius) {
        var options = {
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity
            
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(186, 11, 239);
        ellipse(0,0,this.body.circleRadius,this.body.circleRadius);
        pop();
    }
}