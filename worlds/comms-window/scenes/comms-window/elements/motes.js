const t = e.t;
g.globalCompositeOperation = "lighter";
for (let i = 0; i < 46; i++) {
  const x0 = -2.4 + e.rnd() * 4.8,
    y0 = -2.1 + e.rnd() * 2,
    v = 0.02 + e.rnd() * 0.04,
    ph = e.rnd() * 6,
    sz = 0.004 + e.rnd() * 0.006;
  const x = x0 + Math.sin(t * v * 3 + ph) * 0.2,
    y = y0 + Math.sin(t * v * 2.1 + ph * 2) * 0.14;
  const a = 0.07 + 0.09 * Math.sin(t * 0.5 + ph);
  if (a <= 0.01) continue;
  g.fillStyle = "rgba(235,215,175," + a + ")";
  g.beginPath();
  g.arc(x, y, sz, 0, 7);
  g.fill();
}
