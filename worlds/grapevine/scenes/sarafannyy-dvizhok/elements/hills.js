g.fillStyle = "#8fb3a4";
g.beginPath();
g.moveTo(-1400, 2);
for (let x = -1400; x <= 1400; x += 20) g.lineTo(x, -50 - Math.sin(x * 0.004 + 1) * 24 - Math.sin(x * 0.012) * 8);
g.lineTo(1400, 2);
g.fill();
g.fillStyle = "#7ea88a";
g.beginPath();
g.moveTo(-1400, 2);
for (let x = -1400; x <= 1400; x += 20) g.lineTo(x, -22 - Math.sin(x * 0.006 + 3) * 14);
g.lineTo(1400, 2);
g.fill();
for (let i = 0; i < 70; i++) {
  const x = (e.rnd() - 0.5) * 2800,
    y = -8 - e.rnd() * 18,
    r = 8 + e.rnd() * 12;
  g.fillStyle = e.rnd() < 0.5 ? "#5f8f5c" : "#6f9e62";
  g.beginPath();
  g.ellipse(x, y, r, r * 1.2, 0, 0, 7);
  g.fill();
}
