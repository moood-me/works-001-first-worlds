const t = e.t,
  s = e.state,
  VL = s.vera_light !== false;
for (let i = 0; i < 55; i++) {
  const x0 = (e.rnd() - 0.5) * 3.2,
    y0 = -e.rnd() * 2.6,
    sp = 0.02 + e.rnd() * 0.03,
    ph = e.rnd() * 6.3,
    fall = 0.03 + e.rnd() * 0.04,
    z = 0.004 + e.rnd() * 0.005;
  const y = -2.6 + ((((y0 + 2.6 + t * fall) % 2.6) + 2.6) % 2.6);
  const x = x0 + Math.sin(t * sp * 3 + ph) * 0.12;
  const near = VL ? Math.max(0, 1 - Math.hypot(x - 0.4, y + 1.3) / 0.9) : 0;
  const a = (0.06 + 0.1 * Math.max(0, Math.sin(t * 0.5 + ph))) * (1 + 2.5 * near);
  g.fillStyle = "rgba(225,238,252," + Math.min(0.6, a) + ")";
  g.fillRect(x, y, z, z);
}
