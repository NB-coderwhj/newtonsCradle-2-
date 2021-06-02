class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB: pointB,
            stiffness: 1,
            length : 1
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;

    }
    display(){
        var A = this.sling.bodyA.position;
        var B = this.pointB;
        strokeWeight(4);
        stroke(255,216,0);
        line(A.x,A.y,B.x,B.y);
    }
}