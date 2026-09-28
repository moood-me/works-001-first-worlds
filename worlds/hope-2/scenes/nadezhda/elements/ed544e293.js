const t = e.t;
let s = 13;
const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
const P = [
  [-14, -2.6],
  [-8, -1.6],
  [-4.5, -0.8],
  [-2.6, -0.35],
  [-1.2, -0.1],
  [0, 0],
  [1.0, 0.03],
  [1.8, 0.13],
  [2.8, 0.2],
  [5, 0.24],
  [14, 0.26],
];
const ey = (x) => {
  for (let i = 0; i < P.length - 1; i++)
    if (x <= P[i + 1][0]) {
      const u = (x - P[i][0]) / (P[i + 1][0] - P[i][0]);
      return P[i][1] + (P[i + 1][1] - P[i][1]) * u;
    }
  return 0.26;
};
const w = Math.sin(t * 0.63) * 0.5 + Math.sin(t * 1.37 + 0.8) * 0.3 + Math.sin(t * 0.23 + 2.1) * 0.2;
const wd = 0.6 + 0.4 * w;
for (let i = 0; i < 24; i++) {
  const x = 1.2 + R() * 9,
    ph = R() * 6.283,
    l = 0.15 + R() * 0.5;
  const a = 0.1 + 0.08 * Math.sin(t * 0.8 + ph);
  const xx = x + Math.sin(t * 0.5 + ph) * 0.05;
  g.strokeStyle = "rgba(160,170,195," + a + ")";
  g.lineWidth = e.px * 1.2;
  g.beginPath();
  g.moveTo(xx, ey(xx) - 0.008);
  g.lineTo(xx + l, ey(xx + l) - 0.008);
  g.stroke();
}
for (let i = 0; i < 46; i++) {
  let x = -9 + R() * 16;
  if (x > -0.35 && x < 0.45) x += x < 0.05 ? -0.5 : 0.5;
  const by = ey(x) + 0.01,
    n = 3 + Math.floor(R() * 6),
    H = 0.07 + R() * 0.22,
    warm = Math.max(0, 1 - Math.abs(x - 0.4) / 1.6);
  for (let j = 0; j < n; j++) {
    const h = H * (0.5 + R() * 0.6),
      lean = (R() - 0.5) * 0.5,
      ph = R() * 6.283,
      bx = x + (R() - 0.5) * 0.08,
      lw = 1 + R() * 1.2;
    const sw = -(wd * 0.12 + Math.sin(t * 1.3 + ph) * 0.03) * h;
    const tx = bx + lean * h + sw,
      ty = by - h * (1 - Math.abs(lean) * 0.2);
    g.strokeStyle = warm > 0.05 && j % 2 ? "rgba(120,88,58," + (0.35 + warm * 0.4) + ")" : "#0b0e14";
    g.lineWidth = e.px * lw;
    g.beginPath();
    g.moveTo(bx, by);
    g.quadraticCurveTo(bx + lean * h * 0.3, by - h * 0.6, tx, ty);
    g.stroke();
  }
}
for (let i = 0; i < 7; i++) {
  const x = 2.1 + R() * 1.6,
    by = ey(x) + 0.02,
    h = 0.5 + R() * 0.6,
    ph = R() * 6.283;
  const sw = -(wd * 0.05 + Math.sin(t * 0.7 + ph) * 0.02) * h;
  g.strokeStyle = "#0c1017";
  g.lineWidth = e.px * 1.4;
  g.beginPath();
  g.moveTo(x, by);
  g.quadraticCurveTo(x + sw * 0.3, by - h * 0.5, x + sw, by - h);
  g.stroke();
  if (i % 3 == 0) {
    g.fillStyle = "#0c1017";
    g.save();
    g.translate(x + sw * 0.9, by - h * 0.85);
    g.rotate(sw * 0.8);
    g.fillRect(-0.012, -0.06, 0.024, 0.12);
    g.restore();
  }
}
