import fruity from "../Fruity/index";

const canvas = document.querySelector("canvas"); // Get the canvas from the html file
const speed = 5; // Amount of pixels the character will move by

const game = new fruity.Game(canvas); // Initiate Game

const character = new fruity.Sprite(game, 100, 100, 50, 50); // Create a sprite(character)
game.Sprites.push(character); // Add the sprite to the draw loop

game
  .onKeyPress("w", () => {
    // When "w" is pressed it will move our character up
    character.moveUp(speed);
  })
  .onKeyPress("a", () => {
    // When "a" is pressed it will move our character to the left
    character.moveLeft(speed);
  })
  .onKeyPress("s", () => {
    // When "s" is pressed it will move our character down
    character.moveDown(speed);
  })
  .onKeyPress("d", () => {
    // When "d" is pressed it will move our character to the right
    character.moveRight(speed);
  })
  .onKeyPress(" ", () => {
    // When "spacebar" is pressed it will make our character jump
    character.moveUp(50);
    setTimeout(() => {
      character.moveDown(50);
    }, 2000);
  });

game.loop(); // Run the game loop
