class Stone {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, 30, options);
    this.image=loadImage("js/stone.png")

    World.add(world, this.body);
  }


  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
   // rotate(angle);
    noStroke();
  fill("white");
  ellipse(0, 0, this.r,this.r)
    pop();

  }
}
