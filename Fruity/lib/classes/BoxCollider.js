class BoxCollider {
  constructor(Sprite) {
    // Append a sprite to the Box Collider and set the colliders position to the Sprite's
    this.appendedSprite = Sprite;

    // Set self position
    this.positionX = Sprite.positionX; // the sprites x pos
    this.positionY = Sprite.positionY; // the sprites y pos

    // Get the game instance attached to the Sprite
    this.gameInstance = this.appendedSprite.gameInstance;

    // Sprite Data
    this.spritePosX = this.appendedSprite.positionX;
    this.spritePosY = this.appendedSprite.positionY;
    this.spriteWidth = this.appendedSprite.width;
    this.spriteHeight = this.appendedSprite.height;

    Sprite.gameInstance.BoxColliders.push(this);
  }

  update() {
    // Update the position so it follows the Sprite it is appended to
    this.positionX = this.appendedSprite.positionX; // the sprites x pos
    this.positionY = this.appendedSprite.positionY; // the sprites y pos

    this.gameInstance.draw();
  }

  getPosition() {
    let { positionX, positionY } = this;
    return { positionX, positionY };
  }
}

export default BoxCollider;
