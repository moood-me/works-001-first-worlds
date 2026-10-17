const fir = (x, h, w) => {
  g.beginPath();
  g.moveTo(x, -h);
  const n = 7;
  for (let i = 1; i <= n; i++) {
    const yy = -h + ((h * i) / n) * 0.93,
      ww = w * (i / n) * 0.5 * (0.85 + 0.3 * e.rnd());
    g.lineTo(x + ww, yy);
    g.lineTo(x + ww * 0.5, yy - h * 0.025);
  }
  g.lineTo(x + 0.05 * w, 0);
  g.lineTo(x - 0.05 * w, 0);
  for (let i = n; i >= 1; i--) {
    const yy = -h + ((h * i) / n) * 0.93,
      ww = w * (i / n) * 0.5 * (0.85 + 0.3 * e.rnd());
    g.lineTo(x - ww * 0.5, yy - h * 0.025);
    g.lineTo(x - ww, yy);
  }
  g.closePath();
  g.fill();
};
let x = -70;
while (x < 70) {
  const gap = x > -2 && x < 11;
  const h = gap ? 3 + e.rnd() * 3 : 9 + e.rnd() * 9;
  g.fillStyle = e.rnd() < 0.5 ? "#0c1522" : "#0e1826";
  fir(x, h, h * 0.4);
  x += gap ? 2.5 + e.rnd() * 2 : 1.6 + e.rnd() * 2.6;
}
