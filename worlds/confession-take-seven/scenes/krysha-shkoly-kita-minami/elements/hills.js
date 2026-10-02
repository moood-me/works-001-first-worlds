g.fillStyle = "#6a4d74";
g.beginPath();
g.moveTo(-3500, 40);
for (let x = -3500; x <= 3500; x += 50) {
  g.lineTo(x, -60 - 90 * Math.abs(Math.sin(x * 0.0011 + 1)) - 40 * Math.sin(x * 0.0047) - 15 * e.rnd());
}
g.lineTo(3500, 40);
g.closePath();
g.fill();
