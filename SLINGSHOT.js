class Slingshot{

    constructor(bodya,pointb){

        var options = {
            bodyA : bodya,
            pointB : pointb,
            stiffness : 1,
            length : 30
          }
        
        this.pointB = pointb;

        this.body = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        World.add(world,this.body);

    }

    fly(){
        this.body.bodyA = null;
    }

    //attach(body){
        //this.body.bodyA = body;
    //}

    display(){

        image(this.image1,205,93);
        image(this.image2,175,90);

        if(this.body.bodyA){

            var pointa = this.body.bodyA.position;
            var pointb = this.pointB;

            push();
            strokeWeight(8);
            stroke(48,22,8);
            
            if(pointa.x < 225){
                line(pointa.x + 25,pointa.y,pointb.x + 20,pointb.y - 30);
                line(pointa.x - 25,pointa.y,pointb.x - 20,pointb.y - 30);
                image(this.image3,pointa.x - 25,pointa.y - 15,15,30);
            }
            else {
                line(pointa.x,pointa.y,pointb.x-20,pointb.y-20);
                line(pointa.x,pointa.y,pointb.x+15,point.y-15);
                image(this.image3,pointa.x+15,pointa.y-10,15,30);
            }
            pop();

        }

    }

}