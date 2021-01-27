const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    
    
}

function setup() {
    createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world;

    surface = new Ground(900,290,600,15)
    platty = new Ground(100,200,50,10)

        box1  = new Box (900,250,20,50)
        box2  = new Box (921,250,20,50)
        box3  = new Box (942,250,20,50)
        box4  = new Box (963,250,20,50)
        box5  = new Box (879,250,20,50)
        box6  = new Box (858,250,20,50)
        box7  = new Box (837,250,20,50)
        box8  = new Box (900,200,20,50)
        box9  = new Box (921,200,20,50)
        box10  = new Box (942,200,20,50)
        
        box12  = new Box (879,200,20,50)
        box13  = new Box (858,200,20,50)
        box14  = new Box (900,150,20,50)
        box15  = new Box (921,150,20,50)
        
        
        box18  = new Box (879,150,20,50)
        box19  = new Box (900,100,20,50)
        
        
        
        
        
        
        
    

        
        hexago = new Hex(98,142)
        sling = new SlingShot(hexago.body,{x:98,y:142})
        
    
}

function draw() {

    var pos = hexago.position

    Engine.update(engine);

    background(0)
    surface.display()
    platty.display()

    push()
        box1.display()
        box2.display()
        box3.display()
        box4.display()
        box5.display()
        box6.display()
        box7.display()
        box8.display()
        box9.display()
        box10.display()
        
        box12.display()
        box13.display()
        box14.display()
        box15.display()
        
        
        box18.display()
        box19.display()
        
        
        
        
        
        
        
    
    pop()

    hexago.display()

    sling.display()

    
    

    drawSprites()
    
    console.log(mouseX,mouseY)

}

function mouseDragged(){
    Matter.Body.setPosition(hexago.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(hexago.body);
    }
}