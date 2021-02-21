class BoxCollider {
  constructor(Sprite) {
    // Append a sprite to the Box Collider and set the colliders position to the Sprite's
    this.appendedSprite = Sprite;

    // Set self position
    this.positionX = Sprite.positionX; // the sprites x pos
    this.positionY = Sprite.positionY; // the sprites y pos
  }

  update() {
    // Update the position so it follows the Sprite it is appended to
    this.positionX = Sprite.positionX; // the sprites x pos
    this.positionY = Sprite.positionY; // the sprites y pos
  }
}

export default BoxCollider;
