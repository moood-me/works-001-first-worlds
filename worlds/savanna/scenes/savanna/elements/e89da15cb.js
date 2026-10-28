g.fillStyle = "#6b4f33";
for (let i = 0; i < 7; i++) {
  const x = (e.rnd() - 0.5) * 90,
    d = e.rnd() < 0.5 ? 1 : -1,
    rt = 0.12 + e.rnd() * 0.1;
  const p = Math.min(1, Math.max(0, Math.sin(e.t * rt + i * 2) * 1.5 + 0.5));
  g.save();
  g.translate(x, 0);
  g.scale(d, 1);
  g.beginPath();
  g.ellipse(0, -0.95, 0.6, 0.25, 0, 0, 6.2832);
  g.fill();
  g.fillRect(-0.45, -0.95, 0.08, 0.95);
  g.fillRect(0.4, -0.95, 0.08, 0.95);
  g.beginPath();
  g.moveTo(0.45, -1.0);
  g.lineTo(0.8 + 0.2 * p, -1.55 + 1.3 * p);
  g.lineTo(0.95 + 0.1 * p, -1.45 + 1.1 * p);
  g.lineTo(0.65, -0.95);
  g.closePath();
  g.fill();
  g.restore();
}
