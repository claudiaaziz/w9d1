// console.log("Webpack is working!");

import MovingObject from "./moving_object";
window.MovingObject = MovingObject

const game = document.getElementById("game-canvas");
game.width = 1000;
game.height = 1000;
const ctx = game.getContext("2d")

  const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00",
  });


 mo.draw(ctx);