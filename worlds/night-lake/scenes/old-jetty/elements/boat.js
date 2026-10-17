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
if (P < 0.01) return;
const A = (a) => {
  g.globalAlpha = a * P;
};
const yN = (x) => -0.24 - (x < 0 ? 0.1 : 0.04) * (x / 1.15) * (x / 1.15);
const w = (x) => {
  const r = Math.sqrt(Math.max(0, 1 - (x / 1.15) * (x / 1.15)));
  return x < 0 ? r : 0.55 + 0.45 * r;
};
const yF = (x) => yN(x) - 0.3 * w(x);
const hull = () => {
  g.beginPath();
  g.moveTo(-1.15, yN(-1.15));
  for (let x = -1.1; x < 1.15; x += 0.1) g.lineTo(x, yN(x));
  g.lineTo(1.15, yN(1.15));
  g.lineTo(1.12, 0);
  g.lineTo(-0.85, 0);
  g.quadraticCurveTo(-1.08, -0.04, -1.15, yN(-1.15));
  g.closePath();
};
g.lineWidth = 0.01 * k;
g.strokeStyle = "rgb(140,160,205)";
for (let n = 0; n < 3; n++) {
  const p = (t / 6.5 + n / 3) % 1;
  A((1 - p) * (1 - p) * 0.22 * (0.4 + S));
  g.beginPath();
  g.ellipse(cx, cy + 0.01 * k, (1.3 + 0.9 * p) * k, (0.18 + 0.13 * p) * k, 0, 0, 6.283);
  g.stroke();
}
g.save();
g.translate(cx, cy);
g.scale(k, k);
g.save();
g.scale(1, -1);
A(0.3);
g.fillStyle = "#070d1a";
hull();
g.fill();
g.restore();
g.strokeStyle = "#1d2b48";
g.lineWidth = 0.02;
for (let j = 0; j < 6; j++) {
  const yy = 0.05 + j * 0.055;
  A(0.5);
  const o = Math.sin(t * 0.8 + j * 1.9) * 0.08 * (0.4 + 1.6 * S);
  g.beginPath();
  g.moveTo(-1.1 + o + 0.2 * Math.sin(j * 3), yy);
  g.lineTo(1.1 + o - 0.2 * Math.cos(j * 2), yy);
  g.stroke();
}
g.rotate(rot);
A(1);
g.fillStyle = "#111a2b";
hull();
g.fill();
const lg = g.createLinearGradient(-1.15, 0, 1.15, 0);
lg.addColorStop(0, "rgba(150,170,215,0)");
lg.addColorStop(1, "rgba(150,170,215,0.09)");
g.fillStyle = lg;
g.fill();
g.strokeStyle = "rgba(4,8,16,0.65)";
g.lineWidth = 0.01;
for (const o of [0.08, 0.15]) {
  g.beginPath();
  g.moveTo(-1.08 + o * 0.6, yN(-1.08) + o);
  for (let x = -1.0 + o * 0.6; x < 1.13; x += 0.1) g.lineTo(x, Math.min(-0.01, yN(x) + o));
  g.stroke();
}
A(0.55);
g.fillStyle = "#4d3036";
g.beginPath();
g.moveTo(-1.1, yN(-1.1) + 0.015);
for (let x = -1.0; x < 1.15; x += 0.1) g.lineTo(x, yN(x) + 0.015);
g.lineTo(1.14, yN(1.14) + 0.015);
g.lineTo(1.14, yN(1.14) + 0.05);
for (let x = 1.1; x > -1.05; x -= 0.1) g.lineTo(x, yN(x) + 0.05);
g.closePath();
g.fill();
A(1);
g.fillStyle = "#090f1d";
g.beginPath();
g.moveTo(-1.15, yN(-1.15));
for (let x = -1.1; x < 1.15; x += 0.05) g.lineTo(x, yN(x));
g.lineTo(1.15, yN(1.15));
g.lineTo(1.15, yF(1.15));
for (let x = 1.1; x > -1.15; x -= 0.05) g.lineTo(x, yF(x));
g.closePath();
g.fill();
A(1);
g.fillStyle = "#0c1629";
g.beginPath();
g.ellipse(0.2, yN(0.2) - 0.13, 0.3, 0.05, 0, 0, 6.283);
g.fill();
A(0.2 + 0.12 * Math.sin(t * 0.7));
g.fillStyle = "rgb(175,195,235)";
g.beginPath();
g.ellipse(0.3 + 0.03 * Math.sin(t * 0.5), yN(0.3) - 0.14, 0.09, 0.012, 0, 0, 6.283);
g.fill();
for (const sx of [-0.25, 0.55]) {
  A(1);
  g.fillStyle = "#1a2335";
  g.beginPath();
  g.moveTo(sx - 0.08, yN(sx) - 0.03);
  g.lineTo(sx + 0.08, yN(sx) - 0.03);
  g.lineTo(sx + 0.08, yF(sx) + 0.02);
  g.lineTo(sx - 0.08, yF(sx) + 0.02);
  g.closePath();
  g.fill();
  A(0.25);
  g.strokeStyle = "rgb(150,172,215)";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(sx + 0.08, yN(sx) - 0.03);
  g.lineTo(sx + 0.08, yF(sx) + 0.02);
  g.stroke();
}
A(1);
g.strokeStyle = "#1c2539";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(1.15, yN(1.15));
g.lineTo(1.15, yF(1.15));
g.stroke();
A(0.4);
g.strokeStyle = "rgb(150,172,215)";
g.lineWidth = 0.018;
g.beginPath();
g.moveTo(-1.15, yN(-1.15));
for (let x = -1.1; x < 1.15; x += 0.05) g.lineTo(x, yF(x));
g.lineTo(1.15, yF(1.15));
g.stroke();
A(1);
g.strokeStyle = "#1b2438";
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(-1.15, yN(-1.15));
for (let x = -1.1; x < 1.15; x += 0.05) g.lineTo(x, yN(x));
g.stroke();
A(0.25);
g.strokeStyle = "rgb(150,172,215)";
g.lineWidth = 0.008;
g.stroke();
A(1);
g.strokeStyle = "#5a5e6a";
g.lineWidth = 0.012;
g.beginPath();
g.arc(-1.06, -0.3, 0.025, 0, 6.283);
g.stroke();
A(0.3);
g.strokeStyle = "rgb(165,185,225)";
g.lineWidth = 0.012;
g.setLineDash([0.18, 0.1, 0.05, 0.12]);
g.lineDashOffset = t * 0.05;
g.beginPath();
g.moveTo(-0.9, 0.003);
g.lineTo(1.12, 0.003);
g.stroke();
g.setLineDash([]);
g.restore();
g.globalAlpha = 1;
