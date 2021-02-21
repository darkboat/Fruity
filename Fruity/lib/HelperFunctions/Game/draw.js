function draw(gameInstance) {
  let { ctx } = gameInstance;

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  let Sprite;
  let generated = [];

  for (var i = 0; i < gameInstance.Sprites.length; i++) {
    Sprite = gameInstance.Sprites[i];
    let { positionX, positionY, width, height } = Sprite;
    ctx.beginPath();
    ctx.fillRect(positionX, positionY, width, height);
    ctx.stroke();
    generated.push({ positionX, positionY, width, height });
  }

  return generated;
}

export default draw;
