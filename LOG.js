class Log extends Parent{

    constructor(x,y,width,angle){

        super(x,y,width,20,angle);
        this.image = loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body,angle);

    }

}