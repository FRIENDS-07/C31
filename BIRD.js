class Bird extends Parent{

    constructor(x,y){

        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png");
        this.image1 = loadImage("sprites/smoke.png");

        this.array1 = [];

    }

    display(){

        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        super.display();

        if(this.body.position.x > 245 && this.body.velocity.x > 12){
            var opt = [this.body.position.x,this.body.position.y];
            this.array1.push(opt);
        }

        for(var i=0 ; i<this.array1.length ; i++){
            image(this.image1,this.array1[i][0],this.array1[i][1]);
        }

        //console.log(this.body.velocity.x);

    }

}