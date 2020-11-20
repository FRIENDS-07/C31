class Pig extends Parent{

    constructor(x,y){

        super(x,y,75,75);
        this.image = loadImage("sprites/enemy.png");
        this.Visibility = 255;

    }

    display(){
        
        if(this.body.speed<5.5){
            super.display();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 10;
            tint(255,this.Visibility);
            image(this.image,this.body.position.x,this.body.position.y,75,75);
            pop();
        }

    }

}