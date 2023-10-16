class MovingObject {
  constructor (obj) {
    this.pos = obj.pos
    this.vel = obj.vel
    this.radius = obj.radius
    this.color = obj.color
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(100, 100, 50, 0 , 2 * Math.PI)
    ctx.stroke()
  }

  // move() {
  //   return this.pos += this.vel
  // }
}

export default MovingObject;

