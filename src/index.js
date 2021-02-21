import fruity from "../Fruity/index";

const canvas = document.querySelector("canvas"); // Get the canvas from the html file
const speed = 5; // Amount of pixels the character will move by

const game = new fruity.Game(canvas); // Initiate Game

const character = new fruity.Sprite(game, 100, 100, 50, 50); // Create a sprite(character)
game.Sprites.push(character); // Add the sprite to the draw loop

const characterCollider = new fruity.BoxCollider(character);

game
  .onKeyPress("w", () => {
    character.moveUp(speed);
  })
  .onKeyPress("a", () => {
    character.moveLeft(speed);
  })
  .onKeyPress("s", () => {
    character.moveDown(speed);
  })
  .onKeyPress("d", () => {
    character.moveRight(speed);
  });

game.loop(); // Run the game loop
