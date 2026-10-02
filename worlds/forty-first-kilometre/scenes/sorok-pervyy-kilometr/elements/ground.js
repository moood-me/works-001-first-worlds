g.fillStyle = "#0f1412";
g.fillRect(-400, -180, 800, 360);
g.strokeStyle = "#19201b";
g.lineWidth = 0.05;
for (let i = 0; i < 3000; i++) {
  const x = -60 + e.rnd() * 120,
    y = -180 + e.rnd() * 360;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + (e.rnd() - 0.5) * 0.2, y - 0.4);
  g.stroke();
}
