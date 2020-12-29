class Plinko{
    constructor(x, y, r){
        var options={
            isStatic: true,
            friction: 1,
            restitution: 0.1,
            density: 15
        }
        
    this.body = Bodies.circle(x, y, r/2, options);
    this.x = x;
    this.y = y;
    this.r = r;

    World.add(world, this.body);
    } 
    
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        circle(0,0,this.r,this.r);
        pop();
        

    }
}
