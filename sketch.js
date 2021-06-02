const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world, engine

function setup(){

    createCanvas(windowWidth/2,windowHeight);

    engine = Engine.create();
    world = engine.world;

    p1 = new Pendulum(125,250);
    p2 = new Pendulum(200,250);
    p3 = new Pendulum(275,250);
    p4 = new Pendulum(350,250);
    p5 = new Pendulum(425,250);

    s1 = new Sling(p1.body,{x:125,y:100})
    s2 = new Sling(p2.body,{x:200,y:100})
    s3 = new Sling(p3.body,{x:275,y:100})
    s4 = new Sling(p4.body,{x:350,y:100})
    s5 = new Sling(p5.body,{x:425,y:100})
}

function draw(){
    Engine.update(engine)

    background(87,40,92);
    p1.display();
    p2.display();
    p3.display();
    p4.display();
    p5.display();

    s1.display();
    s2.display();    
    s3.display();
    s4.display();
    s5.display();
}