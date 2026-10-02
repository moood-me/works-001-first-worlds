const t = e.t,
  I = 0.3 + 0.7 * (e.state.lamp ?? 0.8),
  a = t * 0.55,
  ab = Math.PI - 0.15;
const bf =
  Math.max(Math.pow(Math.max(0, Math.cos(a - ab)), 14), Math.pow(Math.max(0, Math.cos(a - Math.PI - ab)), 14)) * I;
const blob = (P) => {
  const n = P.length,
    m = (i) => [(P[i % n][0] + P[(i + 1) % n][0]) / 2, (P[i % n][1] + P[(i + 1) % n][1]) / 2];
  g.beginPath();
  const s = m(n - 1);
  g.moveTo(s[0], s[1]);
  for (let i = 0; i < n; i++) {
    const q = m(i);
    g.quadraticCurveTo(P[i][0], P[i][1], q[0], q[1]);
  }
  g.closePath();
};
const rock = (P, r) => {
  let x0 = 1e9,
    x1 = -1e9,
    y0 = 1e9,
    y1 = -1e9;
  P.forEach(([x, y]) => {
    x0 = Math.min(x0, x);
    x1 = Math.max(x1, x);
    y0 = Math.min(y0, y);
    y1 = Math.max(y1, y);
  });
  const w = x1 - x0,
    h = y1 - y0;
  g.fillStyle = "rgba(110,130,170,0.07)";
  g.beginPath();
  g.ellipse(x0 + w * 0.6, y1, w * 0.6, h * 0.08, 0, 0, 7);
  g.fill();
  blob(P);
  g.save();
  g.clip();
  g.fillStyle = "rgba(125,140,171,0.5)";
  g.fillRect(x0 - 1, y0 - 1, w + 2, h + 2);
  blob(P.map(([x, y]) => [x - r, y + r * 0.7]));
  const cx = x1 - w * 0.25,
    cy = y0 + h * 0.2,
    gr = g.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 1.1);
  gr.addColorStop(0, "#1a2130");
  gr.addColorStop(0.5, "#0d1119");
  gr.addColorStop(1, "#06080c");
  g.fillStyle = gr;
  g.fill();
  for (let i = 0; i < 10; i++) {
    const x = x0 + (0.45 + 0.5 * e.rnd()) * w,
      y = y0 + (0.1 + 0.5 * e.rnd()) * h;
    g.strokeStyle = `rgba(175,190,220,${0.05 + 0.12 * e.rnd()})`;
    g.lineWidth = w * 0.008;
    g.beginPath();
    g.moveTo(x, y);
    g.quadraticCurveTo(x + w * 0.03, y - h * 0.03, x + w * 0.07, y + h * 0.01);
    g.stroke();
  }
  const wg = g.createLinearGradient(0, y1 - h * 0.35, 0, y1);
  wg.addColorStop(0, "rgba(20,26,18,0)");
  wg.addColorStop(1, "rgba(22,30,20,0.8)");
  g.fillStyle = wg;
  g.fillRect(x0 - 1, y0 - 1, w + 2, h + 2);
  if (bf > 0.01) {
    const bw = g.createRadialGradient(x0 + w * 0.3, y0, 0, x0 + w * 0.3, y0, w * 0.9);
    bw.addColorStop(0, `rgba(255,215,160,${0.2 * bf})`);
    bw.addColorStop(1, "rgba(255,215,160,0)");
    g.globalCompositeOperation = "lighter";
    g.fillStyle = bw;
    g.fillRect(x0 - 1, y0 - 1, w + 2, h + 2);
  }
  g.restore();
};
rock(
  [
    [-4.6, 0.15],
    [-4.5, -0.5],
    [-4.1, -0.9],
    [-3.5, -1.05],
    [-2.9, -0.8],
    [-2.6, -0.3],
    [-2.5, 0.15],
  ],
  0.06,
);
rock(
  [
    [-2.2, 0.15],
    [-2.1, -0.25],
    [-1.8, -0.42],
    [-1.4, -0.4],
    [-1.2, 0.15],
  ],
  0.04,
);
rock(
  [
    [0.2, 0.2],
    [0.3, -0.5],
    [0.7, -0.95],
    [1.3, -1.15],
    [1.9, -0.9],
    [2.2, -0.4],
    [2.3, 0.2],
  ],
  0.06,
);
rock(
  [
    [2.9, 0.2],
    [3, -0.2],
    [3.4, -0.35],
    [3.8, -0.2],
    [3.9, 0.2],
  ],
  0.04,
);
for (let i = 0; i < 26; i++) {
  const x = -0.4 + i * 0.18 + Math.sin(i * 3.7) * 0.1,
    p = Math.max(0, Math.sin(t * 0.86 - x * 0.5 + Math.sin(i) * 0.6)),
    al = Math.pow(p, 3) * 0.28;
  if (al < 0.01) continue;
  g.fillStyle = `rgba(215,225,240,${al})`;
  g.beginPath();
  g.ellipse(x, 0.12 - p * 0.15, 0.22 + p * 0.2, 0.05, 0, 0, 7);
  g.fill();
}
