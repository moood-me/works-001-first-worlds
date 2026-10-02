const hill = (x) => -12 - 32 * Math.exp(-Math.pow(x / 55, 2));
g.fillStyle = "#120c1b";
g.beginPath();
g.moveTo(-200, 1);
for (let x = -200; x <= 200; x += 5) g.lineTo(x, hill(x));
g.lineTo(200, 1);
g.closePath();
g.fill();
for (let i = 0; i < 420; i++) {
  const x = -200 + e.rnd() * 400,
    y = hill(x) + 1 + e.rnd() * 6,
    hh = 9 + e.rnd() * 13,
    w = hh * 0.13,
    d = e.rnd();
  g.fillStyle = d < 0.5 ? "#0f0a16" : d < 0.85 ? "#140d1e" : "#1a1126";
  g.beginPath();
  g.moveTo(x, y - hh);
  for (let k = 1; k <= 7; k++) {
    const t = k / 7;
    g.lineTo(x + w * t * (k % 2 ? 1.2 : 0.75), y - hh + hh * t);
  }
  for (let k = 7; k >= 1; k--) {
    const t = k / 7;
    g.lineTo(x - w * t * (k % 2 ? 1.2 : 0.75), y - hh + hh * t);
  }
  g.closePath();
  g.fill();
  if (x > 10 && e.rnd() < 0.5) {
    g.strokeStyle = "rgba(200,120,135,0.13)";
    g.lineWidth = 0.35;
    g.beginPath();
    g.moveTo(x, y - hh);
    g.lineTo(x + w * 0.9, y - hh * 0.35);
    g.stroke();
  }
}
