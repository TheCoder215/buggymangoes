class Rock {

    constructor(x,y,rad){

        var options={
            restitution:0.4,
            friction:1,
            density:1.2,
            isStatic:false
        }
        this.body = Bodies.circle(x,y,rad,options);
        this.image = loadImage("rock.png");
        this.x = x;
        this.y = y;
        this.rad = rad;
        World.add(world, this.body);

    }

    display(){

        imageMode(CENTER);
        push();
        translate(this.body.position.x, this.body.position.y)
        image(this.image, 0, 0, this.rad*2, this.rad*2);
        pop();
    }
    
}