const t = e.t,
  I = 0.3 + 0.7 * (e.state.lamp ?? 0.8),
  a = t * 0.55,
  ab = Math.PI - 0.1;
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
  blob(P);
  g.save();
  g.clip();
  g.fillStyle = "rgba(125,140,172,0.3)";
  g.fillRect(x0 - 1, y0 - 1, w + 2, h + 2);
  blob(P.map(([x, y]) => [x - r, y + r * 0.7]));
  const cx = x1 - w * 0.3,
    cy = y0 + h * 0.15,
    gr = g.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 1.1);
  gr.addColorStop(0, "#1a2131");
  gr.addColorStop(0.45, "#0b0f16");
  gr.addColorStop(1, "#04060a");
  g.fillStyle = gr;
  g.fill();
  for (let i = 0; i < 22; i++) {
    const x = x0 + (0.35 + 0.6 * e.rnd()) * w,
      y = y0 + (0.05 + 0.5 * e.rnd()) * h;
    g.strokeStyle = `rgba(180,195,225,${0.04 + 0.13 * e.rnd()})`;
    g.lineWidth = 0.012;
    g.beginPath();
    g.moveTo(x, y);
    g.quadraticCurveTo(x + 0.05, y - 0.03, x + 0.1, y + 0.01);
    g.stroke();
  }
  for (let i = 0; i < 30; i++) {
    g.fillStyle = `rgba(0,0,0,${0.15 + 0.2 * e.rnd()})`;
    g.beginPath();
    g.ellipse(x0 + w * e.rnd(), y0 + h * e.rnd(), 0.03 + 0.06 * e.rnd(), 0.015 + 0.03 * e.rnd(), 0, 0, 7);
    g.fill();
  }
  if (bf > 0.01) {
    const bw = g.createRadialGradient(x0 + w * 0.3, y0, 0, x0 + w * 0.3, y0, w);
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
    [-0.95, 0.35],
    [-0.85, -0.3],
    [-0.55, -0.68],
    [0, -0.85],
    [0.6, -0.8],
    [1.2, -0.5],
    [1.7, 0.35],
  ],
  0.03,
);
rock(
  [
    [-1.05, 0.35],
    [-1.0, 0.12],
    [-0.8, 0.02],
    [-0.6, 0.1],
    [-0.55, 0.35],
  ],
  0.015,
);
