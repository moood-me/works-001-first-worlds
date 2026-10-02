const s = e.state,
  t = e.t;
let L = s.lamp === "погас" ? 0 : 1;
if (s.lamp === "мигает") {
  const n = Math.sin(t * 13.1) * Math.sin(t * 2.7) + Math.sin(t * 0.61);
  L = n > 0.6 ? 0.06 : n > 0.45 ? 0.45 : 1;
}
const br = Math.sin(t * 1.3) * 0.006 + Math.sin(t * 0.57) * 0.004;
const fr = s.shnyr === "замер";
const eat = !fr && s.seeds > 0;
const D = "#24252a";
const S = "rgba(215,215,210," + (0.15 + 0.4 * L) + ")";
const R = "rgba(235,150,70," + 0.45 * L + ")";
const SK = "#4e3a30";
function lb(a, b, c, d, w, col) {
  g.strokeStyle = col;
  g.lineWidth = w;
  g.lineCap = "round";
  g.beginPath();
  g.moveTo(a, b);
  g.lineTo(c, d);
  g.stroke();
}
g.fillStyle = "#121318";
g.beginPath();
g.ellipse(-0.22, -0.04, 0.12, 0.045, 0, 0, 7);
g.fill();
g.beginPath();
g.ellipse(0.22, -0.04, 0.12, 0.045, 0, 0, 7);
g.fill();
lb(-0.21, -0.07, -0.28, -0.5, 0.12, D);
lb(0.21, -0.07, 0.28, -0.5, 0.12, D);
lb(-0.28, -0.5, -0.1, -0.34, 0.14, D);
lb(0.28, -0.5, 0.1, -0.34, 0.14, D);
for (let k = 0; k < 3; k++) {
  const o = 0.04 + k * 0.016;
  lb(-0.21 - o, -0.1, -0.28 - o, -0.48, 0.007, S);
  lb(0.21 + o, -0.1, 0.28 + o, -0.48, 0.007, S);
}
g.fillStyle = D;
g.beginPath();
g.moveTo(-0.14, -0.32);
g.quadraticCurveTo(-0.2, -0.6, -0.17, -0.83 + br);
g.quadraticCurveTo(0, -0.89 + br, 0.17, -0.83 + br);
g.quadraticCurveTo(0.2, -0.6, 0.14, -0.32);
g.closePath();
g.fill();
g.strokeStyle = R;
g.lineWidth = 0.018;
g.beginPath();
g.moveTo(0.17, -0.82 + br);
g.quadraticCurveTo(0.2, -0.6, 0.14, -0.34);
g.stroke();
const lpx = -0.05,
  lpy = -0.6;
if (fr) {
  lb(-0.17, -0.81 + br, -0.27, -0.55, 0.08, D);
  lb(-0.27, -0.55, -0.25, -0.3, 0.075, D);
  g.fillStyle = SK;
  g.beginPath();
  g.arc(-0.25, -0.27, 0.035, 0, 7);
  g.fill();
} else {
  lb(-0.17, -0.81 + br, -0.27, -0.56, 0.08, D);
  lb(-0.27, -0.56, lpx, lpy, 0.075, D);
  g.fillStyle = SK;
  g.beginPath();
  g.ellipse(lpx, lpy, 0.05, 0.025, 0, 0, 7);
  g.fill();
  if (s.seeds > 0) {
    g.fillStyle = "#0c0c0e";
    for (let i = 0; i < 5; i++) {
      g.beginPath();
      g.ellipse(lpx - 0.03 + i * 0.015, lpy - 0.02, 0.01, 0.006, i, 0, 7);
      g.fill();
    }
  }
}
const cy = eat ? Math.max(0, Math.sin(t * 2.4)) ** 3 : 0;
const hx = fr ? 0.25 : lpx + 0.06 + (0.03 - lpx - 0.06) * cy,
  hy = fr ? -0.3 : lpy - 0.02 + (-0.9 - lpy + 0.02) * cy;
lb(0.17, -0.81 + br, 0.27, -0.56, 0.08, D);
lb(0.27, -0.56, hx, hy, 0.075, D);
for (let k = 0; k < 3; k++) {
  const o = 0.035 + k * 0.014;
  lb(0.17 + o, -0.8 + br, 0.27 + o, -0.57, 0.006, S);
  lb(-0.17 - o, -0.8 + br, -0.27 - o, -0.57, 0.006, S);
}
g.fillStyle = SK;
g.beginPath();
g.arc(hx, hy, 0.035, 0, 7);
g.fill();
if (eat) {
  for (let k = 0; k < 6; k++) {
    const ph = (t * 0.7 + k / 6) % 1;
    const x = 0.04 + Math.sin(k * 2.1) * 0.05 + ph * 0.04 * Math.sin(k * 3.3);
    const y = -0.9 + ph * 0.9;
    g.fillStyle = "rgba(14,14,16," + (0.9 - 0.4 * ph) + ")";
    g.beginPath();
    g.ellipse(x, y, 0.012, 0.006, ph * 9 + k, 0, 7);
    g.fill();
  }
}
const tu = fr ? 0.035 : 0;
const hx2 = tu,
  hy2 = -0.97 + br;
lb(0, -0.86 + br, hx2, -0.92 + br, 0.06, "#3e2e26");
g.fillStyle = SK;
g.beginPath();
g.ellipse(hx2, hy2, 0.075, 0.095, 0, 0, 7);
g.fill();
g.fillStyle = "#2b3850";
g.beginPath();
g.moveTo(hx2 - 0.085, hy2 - 0.02);
g.quadraticCurveTo(hx2 - 0.08, hy2 - 0.14, hx2 + 0.02, hy2 - 0.22);
g.quadraticCurveTo(hx2 + 0.07, hy2 - 0.12, hx2 + 0.085, hy2 - 0.02);
g.closePath();
g.fill();
g.fillStyle = "rgba(205,205,200," + (0.15 + 0.3 * L) + ")";
g.fillRect(hx2 - 0.083, hy2 - 0.06, 0.166, 0.02);
g.strokeStyle = R;
g.lineWidth = 0.014;
g.beginPath();
g.arc(hx2, hy2, 0.078, -1.0, 1.0);
g.stroke();
e.at(hx2, hy2 - 0.2);
