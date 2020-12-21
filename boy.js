class Boy{

    constructor(x,y,width,height, options){

        var options ={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png");
    }

    display(){

        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 780, 420);

    }

}