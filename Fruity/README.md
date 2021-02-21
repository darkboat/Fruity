# Fruity 2D

Fruity 2D is a game engine written in javascript, used for web-based games.
It has many features, such as:

1. Box Colliders
2. Sprite Classes
3. Support for Mass-Generation

## Installation

To install Fruity 2D you can use npm

```cmd
npm install @rexysaur/fruity
```

or use github to clone a barebone project

```cmd
git clone https://github.com/darkboat/Fruity/
```

## Usage

### Game

#### Initiate the Game

Initiating the game is very simple using fruity.
All you have to do is create an instance of the Game class.

```js
import Fruity from "../Fruity"; // Import Fruity

const canvas = document.querySelector("canvas"); // Get the canvas reference

// You have to pass the canvas as a parameter so the engine can draw onto the canvas
const game = new Fruity.Game(canvas); // Create an instance and store it into a variable
```

#### KeyPressEvents

Keypress events can be chained and are very efficient.
You can add a key event and a callback function which will be run when the event is fired

```js
game.onKeyPress("f", doSomething()).onKeyPress("g", doSomethingElse());
```

### Sprites

#### Creating the Sprite

Creating a Sprite is simple using fruity,
It is similar to initiating the game in the sense that you have to create an instance of a class.
An example of creating a sprite

```js
// The parameters you pass in are as follows:
// 1. gameInstance
// 2. the starting x coordinate of the sprite
// 3. the starting y coordinate of the sprite
// 4. the starting width of the sprite
// 5. the starting height of the sprite
const sprite = new Fruity.Sprite(gameInstance, x, y, width, height);

// p.s. The reason I described all of the parameters as starting is because you can change them
// and the game loop will re-draw them with the new changes
```

#### Moving the Sprite

Moving a sprite is very easy to do and it is quite self-explanatory aswell.
All you have to do is get a reference to the sprite and use the movement functions to change its position

```js
// The movement functions take one parameter
// 1. The pixel change amount (how much the sprite will move by when invoked)
sprite.moveRight(pixelChangeAmount);
```

You can also use the setPosition() function to move it to a specific area on the canvas

```js
// The setPosition function takes two parameters
// 1. x coordinate that it will be moved to
// 2. y coordinate that it will be moved to
sprite.setPosition(x, y); // Moves the sprite to the location
```

### Box-Colliders

#### Appending a Box-Collider to a sprite

You can add physics and collision to a sprite by appending a Box-Collider to it.
This can be done by creating an instance of a Box-Collider and passing in a Sprite reference as a parameter

```js
const spriteCollider = new Fruity.BoxCollider(spriteReference); // Create a Box-Collider and append it to a Sprite
```

You will have to update the position of the Box-Collider so it stays on-top of the Sprite like so,

```js
game.loop(() => {
  spriteCollider.update();
});
```
