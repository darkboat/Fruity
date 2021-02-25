import fruity from "../Fruity/index";

const canvas = document.querySelector("canvas"); // Get the canvas from the html file
const speed = 5; // Amount of pixels the character will move by

const game = new fruity.Game(canvas); // Initiate Game

const p1 = new fruity.Sprite(game, 100, 100, 50, 50); // Create a sprite(p1)
const p2 = new fruity.Sprite(game, 200, 200, 50, 50); // Create a sprite(p2)

game
  .onKeyPress("w", () => {
    // When "w" is pressed it will move our character up
    p1.moveUp(speed);
  })
  .onKeyPress("a", () => {
    // When "a" is pressed it will move our character to the left
    p1.moveLeft(speed);
  })
  .onKeyPress("s", () => {
    // When "s" is pressed it will move our character down
    p1.moveDown(speed);
  })
  .onKeyPress("d", () => {
    // When "d" is pressed it will move our character to the right
    p1.moveRight(speed);
  });

const p1BoxCollider = new fruity.BoxCollider(p1);
const p2BoxCollider = new fruity.BoxCollider(p2);

game.Sprites.push(p1, p2);

game.loop(() => {
  game.getBoxColliders().forEach((box) => box.update());
}); // Run the game loop
