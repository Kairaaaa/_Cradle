class rope{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offseetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        //console.log(options);
        this.rope=constraint.create(options)
        World.add(world,this.rope)
    }
    display()
    {
        var pointA=this.ropw.bodyA.position;
        varpointB=this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2X=pointB.y+this.offsetY
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);


    }
}