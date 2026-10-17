const t = e.t;
for (let i = 0; i < 7; i++) {
  const y = -0.4 - i * 0.9 - e.rnd() * 0.5;
  const x = Math.sin(t * 0.03 + i * 1.7) * 6 + (e.rnd() - 0.5) * 20;
  const rx = 14 + e.rnd() * 16;
  g.save();
  g.translate(x, y);
  g.scale(1, 0.12);
  const rg = g.createRadialGradient(0, 0, 0, 0, 0, rx);
  rg.addColorStop(0, "rgba(52,64,74,0.32)");
  rg.addColorStop(1, "rgba(52,64,74,0)");
  g.fillStyle = rg;
  g.beginPath();
  g.arc(0, 0, rx, 0, 7);
  g.fill();
  g.restore();
}
