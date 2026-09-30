g.globalCompositeOperation = "lighter";
for (let i = 0; i < 40; i++) {
  const x = -38 + e.rnd() * 66,
    h = e.rnd(),
    ph = Math.sin(e.t * 1.1 - i * 0.55 + h * 2);
  const a = Math.pow(Math.max(0, ph), 2) * 0.22;
  if (a < 0.01) continue;
  const r = 0.8 + h * 1.6 + ph * 0.8,
    f = g.createRadialGradient(x, 0, 0, x, 0, r);
  f.addColorStop(0, `rgba(215,225,240,${a})`);
  f.addColorStop(1, "rgba(215,225,240,0)");
  g.save();
  g.translate(x, 0);
  g.scale(1, 0.35);
  g.fillStyle = f;
  g.fillRect(-r, -r, 2 * r, 2 * r);
  g.restore();
}
