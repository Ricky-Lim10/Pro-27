class Bob {
    constructor(x,y,radius){
    var options = {
        isStatic: false,
        restitiution:0.3,
        frictions:0.5,
        density:1.2
    }
    this.Body = Matter.Bodies.circle(700,650,20)
    display()
    {
        var paperpos = this.Body.position;

        push()
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER)
		strokeWeight(3);
		fill("white")
		ellipse(0,0,this.r, this.r);
		pop()
    }
}
}