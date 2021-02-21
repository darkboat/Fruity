class Sprite {
  constructor(GameInstance, x, y, width, height) {
    this.ctx = GameInstance.ctx;

    this.positionX = x;
    this.positionY = y;
    this.width = width;
    this.height = height;
    this.color = "white";
  }

  update() {
    let { ctx, color, positionX, positionY, width, height } = this;

    ctx.beginPath();
    ctx.fillColor(color);
    ctx.fillRect(positionX, positionY, width, height);
    ctx.stroke();
  }
}
