const D = 5.1,
  CX = -0.25,
  CZ = 2.6,
  R = 2.5,
  EY = 1.7,
  t = e.t,
  st = e.state;
const fl =
  1 + 0.05 * Math.sin(t * 7.3) + 0.035 * Math.sin(t * 12.7 + 1.3) + 0.06 * Math.sin(t * 1.9 + 0.4) * Math.sin(t * 0.53);
const shut = st.shutter || 0,
  L = Math.max(0, (st.lamp ?? 0.6) * (1 - 0.85 * shut) * fl),
  rain = st.rain ?? 0.4;
const rot = t * 0.28;
let fA = 0;
for (let i = 0; i < 4; i++) fA = Math.max(fA, Math.pow(Math.max(0, Math.cos(rot + (i * Math.PI) / 2)), 60));
fA *= L * (1 - shut);
const W = (f, r, h) => {
  const a = CX + r * Math.sin(f),
    d = CZ + r * Math.cos(f);
  return [(a * D) / d, -EY + ((EY - h) * D) / d];
};
const path = (pts) => {
  g.beginPath();
  pts.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])));
  g.closePath();
};
const mc = (a, b, k) =>
  "rgb(" + a.map((v, i) => Math.round(v + (b[i] - v) * Math.min(1, Math.max(0, k)))).join(",") + ")";
const F = [];
for (let k = -5; k <= 4; k++) F.push(((15 + 30 * k) * Math.PI) / 180);
// where the Krechet's searchlight shows on the glass
const kk = st.krechet || 0,
  on = kk > 0.001 && kk < 0.999;
const sx = 419 + 150 - 500 * kk,
  psi = 1.15 + 0.38 * Math.sin(t * 0.11) + 0.1 * Math.sin(t * 0.29 + 2);
const gl = on
  ? Math.max(st.krechet_flash ? 1 : 0, 0.5 * Math.exp(-Math.pow((psi - Math.atan2(sx, 900)) / 0.15, 2)))
  : 0;
const gx = (sx * D) / 900,
  gy = -EY + ((EY + 16.5) * D) / 900;
// the dome overhead, its ribs running to the vent
const top = F.map((f) => W(f, R, 3.35)),
  cc = W(0, 0, 4.4),
  lt = W(0, 0, 2.75);
g.beginPath();
g.moveTo(-16, top[0][1]);
top.forEach((p) => g.lineTo(p[0], p[1]));
g.lineTo(16, top[top.length - 1][1]);
g.lineTo(16, -22);
g.lineTo(-16, -22);
g.closePath();
g.fillStyle = "#0d0b0a";
g.fill();
let gr = g.createRadialGradient(lt[0], lt[1], 0.2, lt[0], lt[1], 7);
gr.addColorStop(0, `rgba(255,170,95,${0.28 * L})`);
gr.addColorStop(0.5, `rgba(200,120,70,${0.1 * L})`);
gr.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = gr;
g.fill();
g.lineCap = "round";
top.forEach((p) => {
  g.strokeStyle = "rgba(6,5,4,0.9)";
  g.lineWidth = 0.14;
  g.beginPath();
  g.moveTo(p[0], p[1]);
  g.lineTo(cc[0], cc[1]);
  g.stroke();
  g.strokeStyle = `rgba(255,190,120,${0.07 * L})`;
  g.lineWidth = 0.03;
  g.beginPath();
  g.moveTo(p[0] + 0.08, p[1]);
  g.lineTo(cc[0] + 0.02, cc[1]);
  g.stroke();
});
g.fillStyle = "#060504";
g.beginPath();
g.ellipse(cc[0], cc[1], 0.6, 0.22, 0, 0, 7);
g.fill();
for (let i = 0; i < F.length - 1; i++) {
  const f0 = F[i],
    f1 = F[i + 1],
    fm = (f0 + f1) / 2,
    sc = D / (CZ + R * Math.cos(fm));
  const q = (f, h, r = R) => W(f, r, h);
  // the glass, wet
  path([q(f0, 1.05), q(f0, 3.0), q(f1, 3.0), q(f1, 1.05)]);
  g.fillStyle = "rgba(80,100,135,0.07)";
  g.fill();
  g.save();
  g.clip();
  const lp = q(fm, 1.85),
    warm = Math.exp(-fm * fm * 1.2);
  gr = g.createRadialGradient(lp[0], lp[1], 0, lp[0], lp[1], 1.6 * sc);
  gr.addColorStop(0, `rgba(255,190,120,${(0.1 * L + 0.18 * fA) * warm})`);
  gr.addColorStop(1, "rgba(255,190,120,0)");
  g.fillStyle = gr;
  g.fillRect(lp[0] - 2 * sc, lp[1] - 2 * sc, 4 * sc, 4 * sc);
  if (fA > 0.01) {
    g.fillStyle = `rgba(255,232,190,${0.07 * fA})`;
    g.fillRect(-20, -20, 40, 40);
  }
  if (gl > 0.01) {
    const r = 1.2 + 1.6 * gl;
    gr = g.createRadialGradient(gx, gy, 0, gx, gy, r);
    gr.addColorStop(0, `rgba(235,240,255,${0.3 * gl})`);
    gr.addColorStop(1, "rgba(235,240,255,0)");
    g.fillStyle = gr;
    g.fillRect(gx - r, gy - r, 2 * r, 2 * r);
  }
  const n = Math.round(80 * rain);
  for (let k = 0; k < n; k++) {
    const u = e.rnd(),
      v = e.rnd(),
      r0 = 0.006 + e.rnd() * e.rnd() * 0.02,
      f = f0 + (f1 - f0) * u;
    const p = W(f, R, 1.05 + 1.95 * v),
      x = p[0],
      y = p[1],
      r = r0 * sc;
    g.fillStyle = "rgba(10,14,22,0.3)";
    g.beginPath();
    g.arc(x, y, r, 0, 7);
    g.fill();
    const w = Math.min(1, L * Math.exp(-f * f * 1.5) + 0.5 * fA),
      sg = gl * Math.exp(-((x - gx) * (x - gx) + (y - gy) * (y - gy)) / 2);
    g.fillStyle = `rgba(${Math.round(190 + 65 * w)},205,${Math.round(232 - 92 * w)},${Math.min(0.95, 0.28 + 0.3 * w + 0.6 * sg)})`;
    g.beginPath();
    g.arc(x - r * 0.3, y - r * 0.35, r * 0.38, 0, 7);
    g.fill();
  }
  for (let k = 0; k < Math.round(4 * rain); k++) {
    const u = 0.08 + 0.84 * e.rnd(),
      sp = 0.025 + e.rnd() * 0.04,
      ph = e.rnd(),
      v = 1 - ((ph + t * sp) % 1),
      f = f0 + (f1 - f0) * u;
    const wob = (vv) => f + Math.sin(vv * 23 + u * 40) * 0.006;
    g.strokeStyle = "rgba(165,185,215,0.13)";
    g.lineWidth = 0.01 * sc;
    g.beginPath();
    for (let j = 0; j <= 12; j++) {
      const vv = Math.min(1, v + j * 0.03),
        p = W(wob(vv), R, 1.05 + 1.95 * vv);
      j ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]);
    }
    g.stroke();
    const p = W(wob(v), R, 1.05 + 1.95 * v);
    g.fillStyle = "rgba(10,14,22,0.35)";
    g.beginPath();
    g.arc(p[0], p[1], 0.022 * sc, 0, 7);
    g.fill();
    g.fillStyle = "rgba(200,212,235,0.45)";
    g.beginPath();
    g.arc(p[0] - 0.007 * sc, p[1] - 0.008 * sc, 0.008 * sc, 0, 7);
    g.fill();
  }
  g.restore();
  // the iron ring under the dome, lit from below
  path([q(f0, 3.0), q(f0, 3.35), q(f1, 3.35), q(f1, 3.0)]);
  g.fillStyle = mc([20, 17, 15], [70, 50, 34], L * 0.6);
  g.fill();
  const c0 = q(f0, 3.0),
    c1 = q(f1, 3.0);
  g.strokeStyle = `rgba(255,190,120,${0.3 * L})`;
  g.lineWidth = 0.02 * sc;
  g.beginPath();
  g.moveTo(c0[0], c0[1]);
  g.lineTo(c1[0], c1[1]);
  g.stroke();
  // the parapet: old whitewash, soot, rust under the sill
  path([q(f0, 0), q(f0, 1.0), q(f1, 1.0), q(f1, 0)]);
  g.fillStyle = mc([30, 32, 38], [128, 98, 66], L * 0.75 * (0.75 + 0.25 * Math.cos(fm)));
  g.fill();
  g.save();
  g.clip();
  const ya = q(fm, 1.0)[1],
    yb = q(fm, 0)[1];
  gr = g.createLinearGradient(0, ya, 0, yb);
  gr.addColorStop(0, "rgba(0,0,0,0)");
  gr.addColorStop(1, "rgba(0,0,0,0.45)");
  g.fillStyle = gr;
  g.fillRect(-20, ya - 1, 40, yb - ya + 2);
  for (let k = 0; k < 30; k++) {
    const p = W(f0 + (f1 - f0) * e.rnd(), R, e.rnd()),
      l = (0.05 + e.rnd() * 0.25) * sc;
    g.fillStyle = e.rnd() < 0.6 ? "rgba(10,8,6,0.18)" : "rgba(120,60,30,0.12)";
    g.fillRect(p[0], p[1], 0.012 * sc, l);
  }
  g.restore();
  // the sill ledge
  path([q(f0, 1.05), q(f1, 1.05), q(f1, 1.05, R - 0.22), q(f0, 1.05, R - 0.22)]);
  g.fillStyle = mc([34, 34, 40], [150, 115, 78], L * 0.8);
  g.fill();
  path([q(f0, 1.05, R - 0.22), q(f1, 1.05, R - 0.22), q(f1, 0.97, R - 0.22), q(f0, 0.97, R - 0.22)]);
  g.fillStyle = mc([18, 17, 18], [70, 52, 36], L * 0.6);
  g.fill();
}
// the mullions and the cross-bar
const lx0 = W(0, 0, 1.85)[0];
for (const f of F) {
  const p0 = W(f, R, 1.05),
    x = p0[0],
    y1 = W(f, R, 3.0)[1],
    w = (0.045 * D) / (CZ + R * Math.cos(f));
  g.fillStyle = "#0f0d0c";
  g.fillRect(x - w, y1, 2 * w, p0[1] - y1);
  g.fillStyle = `rgba(255,185,115,${0.22 * L})`;
  g.fillRect(x < lx0 ? x + w * 0.5 : x - w, y1, w * 0.5, p0[1] - y1);
}
for (let i = 0; i < F.length - 1; i++) {
  const a = W(F[i], R, 2.05),
    b = W(F[i + 1], R, 2.05),
    sc = D / (CZ + R * Math.cos((F[i] + F[i + 1]) / 2));
  g.strokeStyle = "#0f0d0c";
  g.lineWidth = 0.035 * sc;
  g.beginPath();
  g.moveTo(a[0], a[1]);
  g.lineTo(b[0], b[1]);
  g.stroke();
}
