const st = e.state,
  t = e.t;
const cl = (v) => Math.max(0, Math.min(1, v));
const T = cl(st.ropeTaut ?? 0.35),
  Lo = cl(st.ropeLoose ?? 0),
  dr = cl(st.boatDrift ?? 0),
  P = cl(st.boatPresent ?? 1),
  S = cl(st.waterShiver ?? 0.35);
const free = Lo > 0.985;
const pr = (u, D) => [((u + 0.46 * (D - 7)) * 7) / D, 2.6 * (7 / D - 1)];
const dd = free ? dr : 0;
const u0 = 1.4 + 0.9 * T + 9 * dd,
  D0 = 7 + 18 * dd;
const q = pr(u0, D0),
  k = 7 / D0;
const bob = (0.02 * Math.sin(t * 0.9) + 0.012 * Math.sin(t * 0.37 + 1)) * (0.6 + 1.2 * S) * k;
const rot =
  (0.025 * Math.sin(t * 0.53) + 0.012 * Math.sin(t * 1.13)) * (0.5 + 1.5 * S) * (1 - 0.6 * T) +
  (free ? 0.25 * Math.sin(dd * 5) : 0);
const cx = q[0] + 1.15 * k,
  cy = q[1] + bob;
const loc = (lx, ly) => [
  cx + k * (Math.cos(rot) * lx - Math.sin(rot) * ly),
  cy + k * (Math.sin(rot) * lx + Math.cos(rot) * ly),
];
const B = loc(-1.06, -0.3);
const sp = pr(0.5, 6.95),
  sx = sp[0],
  sy = sp[1],
  wl = sy + 0.01,
  ln = -0.05;
const SX = (yy) => sx + (ln * (sy - yy)) / 0.62;
g.fillStyle = "#0a1020";
for (let j = 0; j < 6; j++) {
  const yy = sy + 0.03 + j * 0.06;
  const dx = Math.sin(t * 0.9 + j * 1.7) * 0.012 * (0.5 + 2 * S);
  g.globalAlpha = 0.28 - j * 0.04;
  g.fillRect(sx - 0.045 - (ln * (j * 0.06 + 0.03)) / 0.62 + dx, yy, 0.09, 0.05);
}
g.globalAlpha = 1;
g.fillStyle = "#0a0f1b";
g.beginPath();
g.ellipse(sx, sy + 0.01, 0.14, 0.035, 0, 0, 6.283);
g.fill();
const tx = SX(sy - 0.6);
g.fillStyle = "#0d1322";
g.beginPath();
g.moveTo(sx - 0.045, sy + 0.02);
g.lineTo(tx - 0.042, sy - 0.6);
g.lineTo(tx - 0.012, sy - 0.645);
g.lineTo(tx + 0.012, sy - 0.605);
g.lineTo(tx + 0.04, sy - 0.63);
g.lineTo(sx + 0.045, sy + 0.02);
g.closePath();
g.fill();
g.strokeStyle = "rgba(150,172,215,0.3)";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(sx + 0.038, sy);
g.lineTo(tx + 0.034, sy - 0.6);
g.stroke();
const rc = "#4d505c";
g.lineCap = "round";
g.lineJoin = "round";
const seg = (pts, a, w) => {
  for (let pass = 0; pass < 2; pass++) {
    g.save();
    g.beginPath();
    if (pass === 0) g.rect(-20, -20, 40, 20 + w);
    else g.rect(-20, w, 40, 20);
    g.clip();
    g.globalAlpha = a * (pass ? 0.28 : 1);
    g.strokeStyle = rc;
    g.lineWidth = 0.022;
    g.beginPath();
    g.moveTo(pts[0][0], pts[0][1]);
    for (const p of pts) g.lineTo(p[0], p[1]);
    g.stroke();
    if (!pass) {
      g.strokeStyle = "rgba(170,182,210,0.3)";
      g.lineWidth = 0.007;
      g.beginPath();
      g.moveTo(pts[0][0] + 0.004, pts[0][1] - 0.007);
      for (const p of pts) g.lineTo(p[0] + 0.004, p[1] - 0.007);
      g.stroke();
    }
    g.restore();
  }
  g.strokeStyle = "rgb(150,172,215)";
  g.lineWidth = 0.008;
  for (let i = 1; i < pts.length; i++) {
    const a0 = pts[i - 1][1] - w,
      a1 = pts[i][1] - w;
    if (a0 * a1 < 0) {
      const xx = pts[i][0];
      for (let n = 0; n < 2; n++) {
        const p = (t / 4 + n / 2 + i * 0.13) % 1;
        g.globalAlpha = (1 - p) * (1 - p) * a * 0.3;
        g.beginPath();
        g.ellipse(xx, w, 0.04 + 0.25 * p, (0.04 + 0.25 * p) * 0.16, 0, 0, 6.283);
        g.stroke();
      }
    }
  }
  g.globalAlpha = 1;
};
const yl = sy - 0.26 - 0.28 * Lo;
const Ax = SX(yl) + 0.045,
  Ay = yl;
if (!free) {
  g.strokeStyle = rc;
  g.lineWidth = 0.02;
  g.beginPath();
  g.ellipse(SX(yl), yl, 0.058, 0.02, 0, 0, 6.283);
  g.stroke();
  g.beginPath();
  g.ellipse(SX(yl - 0.035), yl - 0.035, 0.055, 0.018, 0, 0, 6.283);
  g.stroke();
  g.strokeStyle = "rgba(170,182,210,0.3)";
  g.lineWidth = 0.006;
  g.beginPath();
  g.ellipse(SX(yl), yl, 0.058, 0.02, 0, -1.2, 0.4);
  g.stroke();
  g.strokeStyle = rc;
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(SX(yl) - 0.05, yl + 0.01);
  g.quadraticCurveTo(SX(yl) - 0.09, yl + 0.08, SX(yl) - 0.07 + 0.01 * Math.sin(t * 0.7), yl + 0.14);
  g.stroke();
  if (P > 0.01) {
    const sag = 0.6 * Math.pow(1 - T, 1.4) + 0.01;
    const vib = T > 0.6 ? Math.sin(t * 11) * 0.005 * (T - 0.6) * (1 + 2 * S) + Math.sin(t * 0.9) * 0.01 * (T - 0.6) : 0;
    const mxp = (Ax + B[0]) / 2,
      myp = (Ay + B[1]) / 2 + 2 * sag + vib;
    const pts = [];
    for (let i = 0; i <= 30; i++) {
      const s = i / 30;
      pts.push([
        (1 - s) * (1 - s) * Ax + 2 * (1 - s) * s * mxp + s * s * B[0],
        (1 - s) * (1 - s) * Ay + 2 * (1 - s) * s * myp + s * s * B[1],
      ]);
    }
    seg(pts, P, wl);
    if (T > 0.5) {
      g.fillStyle = "rgb(180,195,225)";
      for (let d = 0; d < 3; d++) {
        const f = (t * 0.45 + d * 0.37) % 1;
        const s = 0.3 + 0.2 * d;
        const px = (1 - s) * (1 - s) * Ax + 2 * (1 - s) * s * mxp + s * s * B[0],
          py = (1 - s) * (1 - s) * Ay + 2 * (1 - s) * s * myp + s * s * B[1];
        const yy = py + f * f * (wl - py);
        g.globalAlpha = (1 - f) * (T - 0.5) * P;
        g.beginPath();
        g.arc(px, yy, 0.008, 0, 6.283);
        g.fill();
      }
      g.globalAlpha = 1;
    }
  }
  if (P < 0.99) {
    const a = 1 - P;
    const pts = [];
    const ex = Ax + 0.7,
      ey = wl + 0.05;
    for (let i = 0; i <= 24; i++) {
      const s = i / 24;
      pts.push([
        Ax + (ex - Ax) * s,
        Ay + (wl + 0.03 - Ay) * Math.min(1, s * 2.2) + 0.02 * s + Math.sin(t * 0.6 + s * 6) * 0.01 * s,
      ]);
    }
    seg(pts, a, wl);
    g.globalAlpha = a * 0.6;
    g.strokeStyle = rc;
    g.lineWidth = 0.006;
    for (let f = 0; f < 3; f++) {
      g.beginPath();
      g.moveTo(ex, ey);
      g.lineTo(ex + 0.05, ey - 0.01 + f * 0.012);
      g.stroke();
    }
    g.globalAlpha = 1;
  }
} else if (P > 0.01) {
  const wb = q[1] + 0.005 * k;
  const pts = [];
  for (let i = 0; i <= 24; i++) {
    const s = i / 24;
    pts.push([
      B[0] - s * 1.3 * k,
      B[1] + (wb + 0.01 * k - B[1]) * Math.min(1, s * 3) + Math.sin(t * 0.8 + s * 7) * 0.012 * k * s,
    ]);
  }
  seg(pts, P * 0.9, wb);
}
