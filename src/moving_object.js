class MovingObject {
  constructor (obj) {
    this.pos = obj.pos
    this.vel = obj.vel
    this.radius = obj.radius
    this.color = obj.color
  }

  // draw(ctx) {
  //   ctx.beginPath()
  //   ctx.arc(100, 75, 50, 0 , 2 * Math.PI)
  //   ctx.stroke()
  // }

  move() {
    return this.pos += this.vel
  }
}

  // constructor (obj) {
  //   this.pos = obj.pos
  //   this.vel = obj.vel
  //   this.radius = obj.radius
  //   this.color = obj.color
  // }

export default MovingObject;

