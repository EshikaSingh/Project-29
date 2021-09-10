class  Block{
    constructor(x,y,width,height){
       var options={
          isStatic: false,
          restitution: 0.4,
          density: 0.0002,
          friction: 0.1
       }
       this.body = Bodies.rectangle(x,y,width-10,height-15,options);
       this.width = width;
       this.height = height;
       this.image = loadImage("Images/DoraCakes.png");

       World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
     var angle = this.body.angle;
     
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     imageMode(CENTER);
     fill(0,255,0)
     image(this.image,0,25-5,this.width,this.height);
     pop();
  }
}