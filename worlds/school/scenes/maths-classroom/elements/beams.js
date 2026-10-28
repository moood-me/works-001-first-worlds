const D = 2.4,
  E = 1.7,
  L = -3.2,
  S0 = 0.85,
  S1 = 2.85;
const WIN = [
  [1.3, 2.9],
  [3.5, 5.1],
  [5.7, 7.1],
];
const P = (X, h, d) => [(X * D) / d, -(E + ((h - E) * D) / d)];
const hull = (pts) => {
  pts.sort((p, q) => p[0] - q[0] || p[1] - q[1]);
  const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [],
    up = [];
  for (const p of pts) {
    while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop();
    lo.push(p);
  }
  for (const p of pts.slice().reverse()) {
    while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop();
    up.push(p);
  }
  return lo.slice(0, -1).concat(up.slice(0, -1));
};
g.save();
g.globalCompositeOperation = "screen";
g.filter = "blur(10px)";
WIN.forEach(([a, b]) => {
  const w = [
    [S0, a + 0.07],
    [S0, b - 0.07],
    [S1, a + 0.07],
    [S1, b - 0.07],
  ];
  const pts = [];
  w.forEach(([h, d]) => {
    pts.push(P(L, h, d));
    const t = h / 0.75;
    pts.push(P(L + t, 0, d - 0.25 * t));
  });
  const hl = hull(pts);
  const wc = P(L, (S0 + S1) / 2, (a + b) / 2),
    fc = P(L + (S0 + S1) / 1.5, 0, (a + b) / 2 - (0.25 * (S0 + S1)) / 1.5);
  const gr = g.createLinearGradient(wc[0], wc[1], fc[0], fc[1]);
  gr.addColorStop(0, "rgba(255,236,200,0.26)");
  gr.addColorStop(0.6, "rgba(255,236,200,0.11)");
  gr.addColorStop(1, "rgba(255,236,200,0.03)");
  g.beginPath();
  hl.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])));
  g.closePath();
  g.fillStyle = gr;
  g.fill();
});
g.restore();
