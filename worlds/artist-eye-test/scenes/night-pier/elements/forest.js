g.fillStyle = "#0c121a";
g.beginPath();
g.moveTo(-800, 2);
let x = -800;
while (x < 800) {
  const h = 9 + e.rnd() * 10 + 7 * Math.sin(x * 0.011) + 4 * Math.sin(x * 0.031 + 1.3);
  const w = h * (0.22 + e.rnd() * 0.1);
  g.lineTo(x, -h * 0.25);
  g.lineTo(x + w * 0.25, -h * 0.55);
  g.lineTo(x + w * 0.15, -h * 0.55);
  g.lineTo(x + w * 0.5, -h);
  g.lineTo(x + w * 0.85, -h * 0.55);
  g.lineTo(x + w * 0.75, -h * 0.55);
  g.lineTo(x + w, -h * 0.25);
  x += w * (0.55 + e.rnd() * 0.4);
}
g.lineTo(800, 2);
g.closePath();
g.fill();
