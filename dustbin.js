class Dustbin{
    constructor(x,y,width,height){
        var options={
            'isStatic':true
        }
        this.body1=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body1)
        this.body2=Bodies.rectangle((x-width/2),(y-(height*2)),height)
        World.add(world,this.body2)
        this.body3=Bodies.rectangle((x+width/2),(y-(height*2)),height)
        World.add(world,this.body3)
        this.body1.height=height
        this.body1.width=width
    }

}