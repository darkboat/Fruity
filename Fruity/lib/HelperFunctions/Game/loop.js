function loop(cb, gameInstance) {
  window.requestAnimationFrame(() => {
    let generated = gameInstance.draw();
    if (cb) {
      cb(generated);
    }
    window.requestAnimationFrame(() => {
      loop(cb, gameInstance);
    });
  });
}

export default loop;
