const D = 6.9,
  E = 1.7,
  L = -3.2,
  X = L + 0.14;
const WIN = [
  [1.3, 2.9],
  [3.5, 5.1],
  [5.7, 7.1],
];
const P = (x, h, d) => [(x * D) / d, -(E + ((h - E) * D) / d)];
const poly = (a) => {
  g.beginPath();
  a.forEach((p, i) => {
    const q = P(p[0], p[1], p[2]);
    if (i) g.lineTo(q[0], q[1]);
    else g.moveTo(q[0], q[1]);
  });
  g.closePath();
};
const t = e.t;
WIN.forEach(([a, b], w) => {
  [
    [a - 0.36, a + 0.2],
    [b - 0.2, b + 0.36],
  ].forEach(([d0, d1], s) => {
    const n = 12;
    for (let i = 0; i < n; i++) {
      const da = d0 + ((d1 - d0) * i) / n,
        db = d0 + ((d1 - d0) * (i + 1)) / n;
      const k = i + s * 7 + w * 13;
      const sw =
        0.025 * Math.sin(t * 0.31 + k * 0.37 + w) +
        0.012 * Math.sin(t * 0.53 + k * 0.81) +
        0.006 * Math.sin(t * 1.07 + k * 1.9);
      const sx = 0.015 * Math.sin(t * 0.23 + k * 0.6);
      poly([
        [X, 3.1, da],
        [X, 3.1, db],
        [X + sx, 1.6, db + sw * 0.5],
        [X + sx * 2, 0.92, db + sw],
        [X + sx * 2, 0.92, da + sw],
        [X + sx, 1.6, da + sw * 0.5],
      ]);
      g.fillStyle = i % 2 ? "rgba(252,250,243,0.34)" : "rgba(240,236,226,0.22)";
      g.fill();
    }
  });
});
g.strokeStyle = "#8d8778";
g.lineWidth = e.px * 2;
const p = P(L + 0.12, 3.12, 1.0),
  q = P(L + 0.12, 3.12, 7.4);
g.beginPath();
g.moveTo(p[0], p[1]);
g.lineTo(q[0], q[1]);
g.stroke();
