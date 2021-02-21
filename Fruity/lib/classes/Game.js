import draw from "../HelperFunctions/Game/draw";
import loop from "../HelperFunctions/Game/loop";
import keypress from "../HelperFunctions/Game/keypress";

class Game {
  constructor(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    this.ctx = canvas.getContext("2d");
    this.Sprites = [];

    // Key Event Array
    this.keyEventArray = [];
    this.keyCallbackArray = [];

    document.addEventListener("keypress", (keyPressed) => {
      const key = keyPressed.key;
      const index = this.keyEventArray.indexOf(key);
      if (index !== -1) {
        this.keyCallbackArray[index]();
      }
    });
  }

  draw() {
    draw(this);
  }

  loop(cb) {
    loop(cb, this);
  }

  onKeyPress(key, cb) {
    keypress(key, cb, this);
    return this;
  }
}

export default Game;
