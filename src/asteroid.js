import * as Util from "./util.js";

class Asteroid extends MovingObject {
  static COLOR = "pink";
  static RADIUS = 25;

  constructor(obj) {
    super(obj);
    this.pos = obj.pos;
    this.color = Asteroid.COLOR;
    this.radius = Asteroid.RADIUS;
    this.vector = Util.randomVec(obj.length);
  }
}

export default Asteroid;
