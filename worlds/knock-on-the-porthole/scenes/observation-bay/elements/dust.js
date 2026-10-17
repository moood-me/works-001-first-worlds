const t = e.t;
for (let i = 0; i < 40; i++) {
  const x0 = (e.rnd() - 0.5) * 5.6,
    y0 = -0.3 - e.rnd() * 2.4,
    sp = 0.02 + e.rnd() * 0.04,
    ph = e.rnd() * 6;
  const x = x0 + Math.sin(t * sp * 3 + ph) * 0.15,
    y = y0 + Math.sin(t * sp * 2.1 + ph * 1.7) * 0.1;
  const a = 0.1 + 0.15 * Math.max(0, Math.sin(t * 0.3 + ph));
  g.fillStyle = "rgba(220,200,190," + a + ")";
  g.beginPath();
  g.arc(x, y, 0.006 + e.rnd() * 0.006, 0, 7);
  g.fill();
}
