const n = Math.floor(220 * (e.state.snow || 0));
g.fillStyle = "rgba(205,210,218,0.5)";
for (let i = 0; i < n; i++) {
  const x0 = -22 + e.rnd() * 44,
    sp = 0.22 + e.rnd() * 0.3,
    ph = e.rnd() * 13,
    r = 0.012 + e.rnd() * 0.022;
  const y = -12 + ((e.t * sp + ph) % 13);
  const x = x0 + Math.sin(e.t * 0.4 + ph) * 0.35 + Math.sin(e.t * 0.13 + i) * 0.2;
  g.beginPath();
  g.arc(x, y, r, 0, 7);
  g.fill();
}
