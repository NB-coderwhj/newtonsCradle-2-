class Pendulum{
    constructor(x,y, color){   
        var options = {
            restitution :1,
            friction:0,
            frictionAir:0.0,
            slop : 1,
            inertia : Infinity
        }  ;

        this.body = Bodies.circle(x,y,25);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       // var angle = this.body.angle;
      /*  push();
        translate(pos.x,pos.y);
        rotate(angle);*/
        fill(87,40,92);
        strokeWeight(4);
        stroke(255,216,0);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y     ,75,75);
       // pop();
    }
}