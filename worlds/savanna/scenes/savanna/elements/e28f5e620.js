g.fillStyle = "#ffe7bd";
for (let i = 0; i < 45; i++) {
  const x0 = e.rnd() * 8 - 4,
    y0 = -0.3 - e.rnd() * 2.6,
    sp = 0.02 + e.rnd() * 0.04,
    ph = e.rnd() * 6.28,
    r = e.px * (0.8 + e.rnd() * 1.2);
  const x = ((x0 + 4 + e.t * sp) % 8) - 4;
  const y = y0 + Math.sin(e.t * 0.23 + ph) * 0.08 + Math.sin(e.t * 0.6 + ph) * 0.03;
  const a = 0.12 + 0.12 * Math.sin(e.t * 0.41 + ph * 1.7);
  g.globalAlpha = Math.max(0, a);
  g.beginPath();
  g.arc(x, y, r, 0, 6.2832);
  g.fill();
}
g.globalAlpha = 1;
