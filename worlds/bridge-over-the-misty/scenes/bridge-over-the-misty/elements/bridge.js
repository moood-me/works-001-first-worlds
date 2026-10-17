const L = Math.max(0, Math.min(1, e.state.light)),
  t = e.t;
const m = (a, b) => {
  const p = [1, 3, 5].map((i) => Math.round(parseInt(a.substr(i, 2), 16) * (1 - L) + parseInt(b.substr(i, 2), 16) * L));
  return "rgb(" + p.join(",") + ")";
};
const D = (x) => -1.4 * (1 - (x / 23) * (x / 23));
const I = [
  [-21.5, 45],
  [-21, 12],
  [-11, 1.0],
  [0, 1.0],
];
const bz = (u, P) => {
  const v = 1 - u;
  return [
    v * v * v * P[0][0] + 3 * v * v * u * P[1][0] + 3 * v * u * u * P[2][0] + u * u * u * P[3][0],
    v * v * v * P[0][1] + 3 * v * v * u * P[1][1] + 3 * v * u * u * P[2][1] + u * u * u * P[3][1],
  ];
};
const body = m("#151422", "#2a2336");
g.fillStyle = body;
g.beginPath();
g.moveTo(-24.5, D(-24.5));
for (let x = -24; x <= 24.5; x += 0.5) g.lineTo(x, D(x));
g.lineTo(24.5, 45);
g.lineTo(21.5, 45);
g.bezierCurveTo(21, 12, 11, 1.0, 0, 1.0);
g.bezierCurveTo(-11, 1.0, -21, 12, -21.5, 45);
g.lineTo(-24.5, 45);
g.closePath();
g.fill();
g.fillStyle = m("#131220", "#262032");
g.beginPath();
g.moveTo(-24.5, D(-24.5));
for (let x = -24; x <= 24.5; x += 0.5) g.lineTo(x, D(x));
for (let x = 24.5; x >= -24.5; x -= 0.5) g.lineTo(x, D(x) - 0.7);
g.closePath();
g.fill();
g.strokeStyle = "rgba(255,200,155," + (0.45 * L + 0.08) + ")";
g.lineWidth = e.px * 1.4;
g.beginPath();
for (let x = -24.5; x <= 24.5; x += 0.5) {
  x === -24.5 ? g.moveTo(x, D(x) - 0.7) : g.lineTo(x, D(x) - 0.7);
}
g.stroke();
g.strokeStyle = "rgba(6,5,14,0.45)";
g.lineWidth = e.px * 1.2;
for (let i = 0; i <= 22; i++) {
  const p = bz(i / 22, I);
  [1, -1].forEach((k) => {
    g.beginPath();
    g.moveTo(p[0] * k, p[1]);
    const nx = p[0] * k * 0.06,
      ny = -1;
    const n = Math.hypot(nx, ny);
    g.lineTo(p[0] * k + (nx / n) * 0.9, p[1] + (ny / n) * 0.9);
    g.stroke();
  });
}
g.strokeStyle = "rgba(255,205,170," + (0.1 + 0.12 * L) + ")";
g.lineWidth = e.px * 1.2;
g.beginPath();
g.moveTo(21.5, 45);
g.bezierCurveTo(21, 12, 11, 1.0, 0, 1.0);
g.bezierCurveTo(-11, 1.0, -21, 12, -21.5, 45);
g.stroke();
g.strokeStyle = m("#12161c", "#242c2a");
g.lineCap = "round";
for (let i = 0; i < 4; i++) {
  const x = -5 + i * 3.1 + e.rnd() * 1.2,
    y0 = 1.0 + Math.abs(x) * 0.05,
    len = 0.8 + e.rnd() * 1.6,
    w = Math.sin(t * 0.5 + i * 1.9) * 0.12 + Math.sin(t * 0.31 + i) * 0.07;
  g.lineWidth = 0.06;
  g.beginPath();
  g.moveTo(x, y0);
  g.bezierCurveTo(x + 0.15, y0 + len * 0.3, x - 0.1 + w * 0.5, y0 + len * 0.7, x + w, y0 + len);
  g.stroke();
}
