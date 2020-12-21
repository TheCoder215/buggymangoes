class Mango{

    constructor(x,y,width,height,options){

        var options = {
        isStatic:true, 
        density:1.2
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("mango.png");

    }

    display(){

        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }



}