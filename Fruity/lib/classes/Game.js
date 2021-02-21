import draw from "../HelperFunctions/Game/draw";
import loop from "../HelperFunctions/Game/loop";

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.Sprites = [];
  }

  draw() {
    draw(this);
  }

  loop(cb) {
    loop(cb, this);
  }
}

export default Game;
