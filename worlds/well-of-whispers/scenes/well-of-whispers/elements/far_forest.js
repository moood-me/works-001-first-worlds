g.fillStyle = "#142236";
const fir = (x, h, w) => {
  g.beginPath();
  g.moveTo(x, -h);
  const n = 6;
  for (let i = 1; i <= n; i++) {
    const yy = -h + ((h * i) / n) * 0.92,
      ww = w * (i / n) * 0.5;
    g.lineTo(x + ww, yy);
    g.lineTo(x + ww * 0.55, yy - h * 0.03);
  }
  g.lineTo(x + 0.05 * w, 0);
  g.lineTo(x - 0.05 * w, 0);
  for (let i = n; i >= 1; i--) {
    const yy = -h + ((h * i) / n) * 0.92,
      ww = w * (i / n) * 0.5;
    g.lineTo(x - ww * 0.55, yy - h * 0.03);
    g.lineTo(x - ww, yy);
  }
  g.closePath();
  g.fill();
};
g.fillRect(-170, -4, 340, 6);
let x = -170;
while (x < 170) {
  const h = 9 + e.rnd() * 13;
  fir(x, h, h * 0.42);
  x += 2 + e.rnd() * 4;
}
