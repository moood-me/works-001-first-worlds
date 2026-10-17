g.fillStyle = "#0c1112";
g.beginPath();
g.moveTo(-600, 2);
for (let x = -600; x <= 600; x += 2.5) {
  let h = 6 + e.rnd() * 9 + (Math.sin(x * 0.013) + 1) * 4;
  if (Math.abs(x - 0.8) < 6) h *= 0.15;
  g.lineTo(x - 1.2, -h * 0.55);
  g.lineTo(x, -h);
  g.lineTo(x + 1.2, -h * 0.55);
}
g.lineTo(600, 2);
g.closePath();
g.fill();
