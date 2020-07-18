Class roof {


    Constructor(x,y,w,h)
    {
        var options={
            isStatic=true
        }
        this.x=x;
        this.y=y;
        this.w=wthis.h=hthis.body=bodies.rectangle(x,y,w,h,options);
        World.add(World,this.body);

    }
    display()
    {
        var groundPos=this.body.position;

        Push()
        translate(groundPos.x,groundPos.y);
        rectMode(CENTER)
        //strokeWeight(4);
        Fill(128,128,128)
        rect(0,0,this.w,this.h)
        Pop()

    }
}