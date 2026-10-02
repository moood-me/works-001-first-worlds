const A = e.aspect,
  n = e.state.night ?? 0.3,
  t = e.t;
const hx = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
const mx = (a, b, k) => {
  const p = hx(a),
    q = hx(b);
  return p.map((v, i) => Math.round(v + (q[i] - v) * k));
};
const c = mx("#c69a90", "#3e4060", n);
for (let i = 0; i < 12; i++) {
  const y = 0.3 + e.rnd() * 0.22,
    w = 0.12 + e.rnd() * 0.35,
    sp = 0.0015 + e.rnd() * 0.002,
    tl = (e.rnd() - 0.5) * 0.03;
  const x = ((e.rnd() * (A + 1.2) + t * sp) % (A + 1.2)) - 0.6;
  const h = 0.004 + e.rnd() * 0.008;
  const rg = g.createLinearGradient(x - w, 0, x + w, 0);
  rg.addColorStop(0, "rgba(" + c + ",0)");
  rg.addColorStop(0.4 + e.rnd() * 0.2, "rgba(" + c + "," + (0.32 - 0.14 * n) + ")");
  rg.addColorStop(1, "rgba(" + c + ",0)");
  g.fillStyle = rg;
  g.beginPath();
  g.ellipse(x, y, w, h, tl, 0, 6.283);
  g.fill();
}
