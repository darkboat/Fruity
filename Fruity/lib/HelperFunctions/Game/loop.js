function loop(cb, this) {
  window.requestAnimationFrame(() => {
    let generated = this.draw();
    cb(generated);
  });
}

export default loop;
