function draw(this) {
  let { ctx } = this;
  let Sprite;
  let generated = [];

  for (var i = 0; i < this.Sprites.length; i++) {
    Sprite = this.Sprites[i];
    let { positionX, positionY, width, height } = Sprite;

    ctx.fillRect(positionX, positionY, width, height);
    generated.push(positionX, positionY, width, height);
  }

  return generated;
}

export default draw;
