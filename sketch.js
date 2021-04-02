const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,pig,box2;





function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    ground = new Ground(5,height,1200,20);
    ground2 = new Ground(5,height,15,1200);
    ground3 = new Ground(1200,height,15,1200);
    pig = new Pig(200,200);
    box2 = new Log(100,300,100,PI/2);
   
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    
    ground.display();
    ground2.display();
    ground3.display();

    pig.display();
    box2.display();

    
    
 
}