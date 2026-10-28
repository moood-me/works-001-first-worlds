g.fillStyle = e.color;
g.beginPath();
g.moveTo(-1200, 3);
let x = -1200;
while (x < 1200) {
  const r = 5 + e.rnd() * 9;
  const h = 8 + e.rnd() * 12;
  g.lineTo(x, -h + r * 0.3);
  g.quadraticCurveTo(x + r, -h - r * 0.6, x + 2 * r, -h + r * 0.3);
  x += 2 * r * (0.7 + e.rnd() * 0.3);
}
g.lineTo(1200, 3);
g.closePath();
g.fill();
