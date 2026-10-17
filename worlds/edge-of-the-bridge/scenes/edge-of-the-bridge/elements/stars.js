const A = e.aspect,
  n = e.state.night ?? 0.3,
  t = e.t;
const k = Math.max(0, (n - 0.15) / 0.85);
if (k <= 0) return;
for (let i = 0; i < 240; i++) {
  const x = -0.3 + e.rnd() * (A + 0.6),
    y = -0.35 + Math.pow(e.rnd(), 1.4) * 0.85,
    s = e.rnd(),
    f = e.rnd() * 6.28,
    w = 0.5 + e.rnd() * 1.5;
  const tw = 0.6 + 0.4 * Math.sin(t * w + f) * Math.sin(t * 0.37 * w + f * 2);
  const a = k * tw * (0.25 + 0.6 * s) * (1 - Math.max(0, (y - 0.35) / 0.25));
  if (a <= 0) continue;
  g.fillStyle = "rgba(225,225,245," + a + ")";
  g.beginPath();
  g.arc(x, y, 0.0008 + s * 0.0016, 0, 6.283);
  g.fill();
}
