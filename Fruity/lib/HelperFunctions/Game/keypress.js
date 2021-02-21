function keypress(key, cb, gameInstance) {
  const isDuplicateEvent = gameInstance.keyEventArray[key] ? true : false;
  if (isDuplicateEvent) {
    throw new Error(
      `you cannot have any duplicates inside the keyEventArray! ${key} was added more than once`
    );
  } else {
    gameInstance.keyEventArray.push(key);
    gameInstance.keyCallbackArray.push(cb);
  }
}

export default keypress;
