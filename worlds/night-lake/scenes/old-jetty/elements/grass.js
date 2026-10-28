const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t,
  S = e.state.waterShiver ?? 0.35;
const pr = (u, D) => [((u + 0.46 * (D - 7)) * 7) / D, 2.6 * (7 / D - 1)];
const SL = [
  [-1.2, 16],
  [-0.2, 11],
  [0.4, 8.5],
  [0.55, 7.4],
  [0.5, 6.8],
  [0.2, 6],
  [-0.8, 4.8],
  [-2.2, 3.8],
  [-4, 3],
  [-7, 2.4],
];
const sU = (D) => {
  for (let j = 0; j < SL.length - 1; j++) {
    const a = SL[j],
      b = SL[j + 1];
    if (D <= a[1] && D >= b[1]) return a[0] + ((b[0] - a[0]) * (a[1] - D)) / (a[1] - b[1]);
  }
  return -1.2;
};
const T = [];
for (let i = 0; i < 230; i++) {
  const edge = i < 150;
  const D = edge ? 2.8 + 13 * Math.pow(h(i + 1), 1.4) : 2.8 + 15 * h(i + 1);
  const u = sU(D) - (edge ? 0.05 + 0.45 * h(i + 2) : 0.7 + 6 * h(i + 2));
  T.push({ i: i, D: D, u: u, edge: edge });
}
T.sort((a, b) => b.D - a.D);
g.lineCap = "round";
for (const o of T) {
  const i = o.i;
  const p = pr(o.u, o.D),
    k = 7 / o.D,
    x = p[0],
    y = p[1];
  if (x < -4 || x > 3) continue;
  const nb = o.edge ? 3 + Math.floor(5 * h(i + 3)) : 2 + Math.floor(3 * h(i + 3));
  for (let b = 0; b < nb; b++) {
    const q = i * 11 + b;
    const H = (o.edge ? 0.2 + 0.4 * h(q + 4) : 0.1 + 0.22 * h(q + 4)) * k;
    const ln = (h(q + 5) - 0.3) * 0.9;
    const sw =
      (0.05 * Math.sin(t * (0.35 + 0.3 * h(q + 6)) + q) + 0.02 * Math.sin(t * (1.0 + 0.4 * h(q + 7)) + b)) *
      (0.6 + 0.8 * S);
    const bx = x + (h(q + 8) - 0.5) * 0.12 * k;
    const tx = bx + (ln + sw) * H,
      ty = y - H;
    const cx = bx + ln * H * 0.2,
      cy = y - H * 0.6;
    g.strokeStyle = h(q + 9) < 0.5 ? "#0a1120" : "#0e1728";
    g.lineWidth = (0.01 + 0.01 * h(q + 10)) * k;
    g.beginPath();
    g.moveTo(bx, y);
    g.quadraticCurveTo(cx, cy, tx, ty);
    g.stroke();
    if (h(q + 11) < 0.35) {
      g.strokeStyle = "rgba(150,172,215,0.16)";
      g.lineWidth = 0.004 * k;
      g.beginPath();
      g.moveTo(bx + 0.005 * k, y);
      g.quadraticCurveTo(cx + 0.005 * k, cy, tx + 0.005 * k, ty);
      g.stroke();
    }
    if (h(q + 12) < 0.22) {
      const gl = 0.25 + 0.45 * Math.pow(Math.max(0, Math.sin(t * (0.3 + 0.4 * h(q + 13)) + q * 2.1)), 3);
      g.fillStyle = "rgba(205,218,242," + gl + ")";
      g.beginPath();
      g.arc(tx, ty + 0.01 * k, 0.009 * k, 0, 6.283);
      g.fill();
    }
  }
  if (o.edge && h(i + 14) < 0.4) {
    const L = (0.3 + 0.4 * h(i + 15)) * k;
    const sw = 0.01 * Math.sin(t * 0.6 + i) * k;
    g.strokeStyle = "#121b2d";
    g.lineWidth = 0.012 * k;
    g.beginPath();
    g.moveTo(x, y);
    g.quadraticCurveTo(x + L * 0.5, y + 0.01 * k + sw, x + L, y + 0.03 * k + sw);
    g.stroke();
    g.strokeStyle = "rgba(160,182,225,0.22)";
    g.lineWidth = 0.004 * k;
    g.beginPath();
    g.moveTo(x + L * 0.3, y + 0.004 * k);
    g.quadraticCurveTo(x + L * 0.6, y + 0.012 * k + sw, x + L, y + 0.026 * k + sw);
    g.stroke();
  }
}
