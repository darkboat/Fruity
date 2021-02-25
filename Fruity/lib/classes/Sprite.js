class Sprite {
  constructor(gameInstance, x, y, width, height) {
    this.ctx = gameInstance.ctx;

    // Position and Scale
    this.positionX = x;
    this.positionY = y;
    this.width = width;
    this.height = height;

    this.gameInstance = gameInstance;
  }

  draw() {
    let { ctx, positionX, positionY, width, height } = this;
    ctx.beginPath();
    ctx.fillRect(positionX, positionY, width, height);
    ctx.stroke();
  }
  setPosition(x, y) {
    this.ctx.clearRect(this.positionX, this.positionY, this.width, this.height); // Clears the area that our Sprite was so it can be drawn in the new position
    this.positionX = x; // Changes the position on the "x" axis to what was passed as a parameter
    this.positionY = y; // Changes the position on the "y" axis to what was passed as a parameter
    this.draw();
  }

  moveUp(amount) {
    this.ctx.clearRect(this.positionX, this.positionY, this.width, this.height); // Clears the area that our Sprite was so it can be drawn in the new position
    this.positionX = this.positionX; // Stays the same as we are only moving on the "y" axis
    this.positionY -= amount; // Changes by the amount set as a parameter
    this.draw();
  }
  moveDown(amount) {
    this.ctx.clearRect(this.positionX, this.positionY, this.width, this.height); // Clears the area that our Sprite was so it can be drawn in the new position
    this.positionX = this.positionX; // Stays the same as we are only moving on the "y" axis
    this.positionY += amount; // Changes by the amount set as a parameter
    this.draw();
  }
  moveRight(amount) {
    this.ctx.clearRect(this.positionX, this.positionY, this.width, this.height); // Clears the area that our Sprite was so it can be drawn in the new position
    this.positionX += amount; // Changes by the amount set as a parameter
    this.positionY = this.positionY; // Stays the same as we are only moving on the "x" axis
    this.draw();
  }
  moveLeft(amount) {
    this.ctx.clearRect(this.positionX, this.positionY, this.width, this.height); // Clears the area that our Sprite was so it can be drawn in the new position
    this.positionX -= amount; // Changes by the amount set as a parameter
    this.positionY = this.positionY; // Stays the same as we are only moving on the "x" axis
    this.draw();
  }

  onCollision(Sprite) {
    console.log(this.positionX);
  }
}

export default Sprite;
