const t = e.t;
const h = (n) => {
  const v = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return v - Math.floor(v);
};
[9.7, 13.3, 17.9].forEach((p, j) => {
  const tt = t + j * 4.1,
    k = Math.floor(tt / p),
    age = tt - k * p;
  const X = (h(k * 3 + j) - 0.5) * 5,
    D = 10 + (h(k * 7 + j + 1) - 0.5) * 4,
    sc = 10 / D,
    cy = 17 / D - 1.7,
    rt = 1.7 / D;
  for (let r = 0; r < 3; r++) {
    const a2 = age - r * 1.1;
    if (a2 < 0) continue;
    const R0 = a2 * 0.22 * sc;
    const al = 0.3 * Math.exp(-a2 * 0.35) * Math.max(0, 1 - a2 / (p - 1));
    if (al < 0.004) continue;
    g.strokeStyle = "rgba(175,185,205," + al + ")";
    g.lineWidth = e.px * 1.1;
    g.beginPath();
    g.ellipse(X * sc, cy, R0, R0 * rt, 0, 0, 6.283);
    g.stroke();
    g.strokeStyle = "rgba(10,14,22," + al * 0.8 + ")";
    g.beginPath();
    g.ellipse(X * sc, cy + e.px * 1.5, R0 * 0.97, R0 * rt * 0.97, 0, 0.2, 2.94);
    g.stroke();
  }
});
