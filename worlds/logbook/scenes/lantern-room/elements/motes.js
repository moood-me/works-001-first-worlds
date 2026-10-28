const lit = (e.state.lamp ?? 0.7) * (1 - 0.8 * (e.state.shutter || 0));
g.globalCompositeOperation = "lighter";
for (let i = 0; i < 26; i++) {
  const x0 = (e.rnd() - 0.5) * 1.4,
    y0 = -e.rnd() * 1.3,
    s = 0.1 + e.rnd() * 0.25,
    ph = e.rnd() * 6.28;
  const x = x0 + Math.sin(e.t * 0.07 * (1 + s) + ph) * 0.12 + Math.sin(e.t * 0.031 + ph * 2) * 0.05,
    y = y0 + Math.sin(e.t * 0.05 * (1 + s) + ph * 1.7) * 0.1;
  const a = lit * (0.25 + 0.25 * Math.sin(e.t * 0.6 + ph));
  if (a < 0.03) continue;
  g.fillStyle = `rgba(255,214,150,${a})`;
  g.beginPath();
  g.arc(x, y, 0.004 + s * 0.006, 0, 7);
  g.fill();
}
