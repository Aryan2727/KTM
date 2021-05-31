class Hero {
  constructor(x,y,width,height){

      var options = {
          frictionAir : 0.005,
          density : 1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height = height
      World.add(world,this.body)

  }
  display(){

    var pos = this.body.position

      pos.x = mouseX
      pos.y = mouseY
      fill("yellow")
      ellipseMode(CENTER)
      ellipse(pos.x,pos.y,this.width,this.height)
  }
}