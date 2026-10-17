const tree = (x, w, h, c) => {
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(x - w * 0.5, 0.5);
  const n = 9;
  for (let i = 0; i < n; i++) {
    const k = i / n,
      yy = -h * 0.12 - h * 0.88 * k,
      ww = (w / 2) * (1 - k) * (0.8 + 0.4 * e.rnd());
    g.lineTo(x - ww, yy + h * 0.03);
    g.lineTo(x - ww * 0.35, yy - h * 0.06);
  }
  g.lineTo(x, -h);
  for (let i = n - 1; i >= 0; i--) {
    const k = i / n,
      yy = -h * 0.12 - h * 0.88 * k,
      ww = (w / 2) * (1 - k) * (0.8 + 0.4 * e.rnd());
    g.lineTo(x + ww * 0.35, yy - h * 0.06);
    g.lineTo(x + ww, yy + h * 0.03);
  }
  g.lineTo(x + w * 0.5, 0.5);
  g.closePath();
  g.fill();
};
for (let x = -170; x < 170; ) {
  const w = 4 + e.rnd() * 4;
  tree(x, w, 16 + e.rnd() * 12, "#121819");
  x += w * (0.35 + e.rnd() * 0.4);
}
for (let x = -170; x < 170; ) {
  const w = 4.5 + e.rnd() * 5;
  const near = Math.abs(x + 1) < 6;
  tree(x, w, (near ? 10 : 13) + e.rnd() * 11, "#090c0d");
  x += w * (0.4 + e.rnd() * 0.5);
}
g.fillStyle = "#090c0d";
g.fillRect(-170, -4, 340, 4.5);
