for (const [x, i] of [
  [-6.4, 0],
  [-5.9, 1],
  [5.8, 2],
  [6.3, 3],
  [-6.9, 4],
  [6.9, 5],
]) {
  for (let j = 0; j < 5; j++) {
    const sw = Math.sin(e.t * 1.3 + i + j) * 0.08,
      h = 0.9 + ((i * 7 + j * 5) % 9) * 0.05,
      xx = x + j * 0.1 - 0.2;
    g.strokeStyle = j % 2 ? "#4b7f3a" : "#6a9a45";
    g.lineWidth = 0.05;
    g.beginPath();
    g.moveTo(xx, 0);
    g.quadraticCurveTo(xx, -h * 0.6, xx + sw, -h);
    g.stroke();
  }
  if (i % 2 === 0) {
    g.fillStyle = "#6b4428";
    g.fillRect(x + 0.05 + Math.sin(e.t * 1.3 + i) * 0.06, -1.25, 0.1, 0.3);
  }
}
