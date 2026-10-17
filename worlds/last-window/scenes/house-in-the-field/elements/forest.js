g.fillStyle = "#161b20";
g.beginPath();
g.moveTo(-600, 2);
for (let x = -600; x <= 600; x += 3 + e.rnd() * 4) {
  const h = 6 + e.rnd() * 10;
  g.lineTo(x - 1.6, -h * 0.3);
  g.lineTo(x, -h);
  g.lineTo(x + 1.6, -h * 0.3);
}
g.lineTo(600, 2);
g.closePath();
g.fill();
