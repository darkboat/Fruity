function loop(cb, gameInstance) {
  window.requestAnimationFrame(() => {
    let generated = gameInstance.draw();
    if (cb) {
      cb(generated);
    }
  });
}

export default loop;
