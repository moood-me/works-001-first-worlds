const t = e.t;
for (let i = 0; i < 45; i++) {
  const x0 = (e.rnd() - 0.5) * 1.8,
    y0 = -0.3 - e.rnd() * 2,
    sp = 0.02 + e.rnd() * 0.04,
    ph = e.rnd() * 6,
    sz = 0.002 + e.rnd() * 0.003;
  const x = x0 + Math.sin(t * sp * 3 + ph) * 0.1,
    y = y0 + Math.sin(t * sp * 2.1 + ph * 1.7) * 0.08;
  const a = 0.06 + 0.3 * Math.pow(Math.max(0, Math.sin(t * 0.5 + ph)), 4);
  g.fillStyle = "rgba(235,205,200," + a + ")";
  g.fillRect(x, y, sz, sz);
}
const q = (t + 0.8 * Math.sin(t * 0.11)) / 4.7,
  p = q - Math.floor(q);
if (p < 0.55) {
  const k = p / 0.55;
  for (let j = 0; j < 3; j++) {
    const y = -1.22 - k * (0.32 + j * 0.05),
      x = 0.04 + j * 0.03 + Math.sin(q * 3 + j) * 0.04 + k * 0.05,
      r = 0.05 + k * (0.2 + j * 0.04);
    const a = 0.055 * Math.sin(k * Math.PI);
    const c = g.createRadialGradient(x, y, 0, x, y, r);
    c.addColorStop(0, "rgba(215,225,235," + a + ")");
    c.addColorStop(1, "rgba(215,225,235,0)");
    g.fillStyle = c;
    g.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
}
