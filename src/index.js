import MovingObject from "./moving_object";
import Asteroid from "./asteroid";
window.MovingObject = MovingObject;

const game = document.getElementById("game-canvas");
game.width = 1000;
game.height = 1000;
const ctx = game.getContext("2d");

const mo = new MovingObject({
  pos: [30, 30],
  vel: [1000, 1000],
  radius: 5,
  color: "#00FF00",
});

// mo.draw(ctx);

const asteroid1 = new Asteroid({ pos: [30, 30] });
asteroid1.draw(ctx)
