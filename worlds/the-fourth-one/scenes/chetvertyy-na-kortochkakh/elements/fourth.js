const s = e.state,
  t = e.t;
let L = s.lamp === "погас" ? 0 : 1;
if (s.lamp === "мигает") {
  const n = Math.sin(t * 13.1) * Math.sin(t * 2.7) + Math.sin(t * 0.61);
  L = n > 0.6 ? 0.06 : n > 0.45 ? 0.45 : 1;
}
const f = s.fourth || 0;
const dx = -2.6 * f;
const lit = L * Math.max(0, 1 - Math.abs(dx + 2.8) / 3.6);
const mix = (a, b) => Math.round(a + (b - a) * lit);
const D = "rgb(" + mix(14, 58) + "," + mix(15, 62) + "," + mix(19, 66) + ")";
const S = "rgba(200,205,195," + (0.05 + 0.3 * lit) + ")";
const P = "rgb(" + mix(28, 150) + "," + mix(28, 146) + "," + mix(30, 132) + ")";
const tl = 0.32 + Math.sin(t * 0.17) * 0.08 + Math.sin(t * 0.051) * 0.05;
const tw = Math.max(0, Math.sin(t * 0.9)) ** 12 * 0.03;
const dk = 1 - L;
e.at(dx + 0.05, -1.45);
function lb(a, b, c, d, w, col) {
  g.strokeStyle = col;
  g.lineWidth = w;
  g.lineCap = "round";
  g.beginPath();
  g.moveTo(a, b);
  g.lineTo(c, d);
  g.stroke();
}
g.translate(dx, 0);
g.fillStyle = "#0f1013";
g.beginPath();
g.ellipse(-0.32, -0.04, 0.13, 0.045, 0, 0, 7);
g.fill();
g.beginPath();
g.ellipse(0.32, -0.04, 0.13, 0.045, 0, 0, 7);
g.fill();
lb(-0.3, -0.06, -0.43, -0.8, 0.13, D);
lb(0.3, -0.06, 0.43, -0.8, 0.13, D);
lb(-0.43, -0.8, -0.13, -0.46, 0.15, D);
lb(0.43, -0.8, 0.13, -0.46, 0.15, D);
for (let k = 0; k < 2; k++) {
  const o = 0.05 + k * 0.018;
  lb(-0.3 - o, -0.1, -0.43 - o, -0.76, 0.008, S);
  lb(0.3 + o, -0.1, 0.43 + o, -0.76, 0.008, S);
}
g.fillStyle = D;
g.beginPath();
g.moveTo(-0.15, -0.44);
g.quadraticCurveTo(-0.22, -0.8, -0.2, -1.1);
g.quadraticCurveTo(0, -1.15, 0.2, -1.1);
g.quadraticCurveTo(0.22, -0.8, 0.15, -0.44);
g.closePath();
g.fill();
lb(-0.2, -1.08, -0.47, -0.82, 0.08, D);
lb(-0.47, -0.82, -0.44, -0.05, 0.07, D);
lb(0.2, -1.08, 0.47, -0.82, 0.08, D);
lb(0.47, -0.82, 0.44 + tw, -0.05, 0.07, D);
for (let i = 0; i < 4; i++) {
  lb(-0.44, -0.05, -0.44 + (i - 1.5) * 0.035, 0.0, 0.012, P);
  lb(0.44 + tw, -0.05, 0.44 + tw + (i - 1.5) * 0.035, 0.0, 0.012, P);
}
lb(0, -1.1, 0.04, -1.2, 0.05, P);
g.save();
g.translate(0.05, -1.28);
g.rotate(tl);
g.fillStyle = P;
g.beginPath();
g.ellipse(0, 0, 0.08, 0.115, 0, 0, 7);
g.fill();
g.fillStyle = "rgba(10,10,12," + (0.25 + 0.45 * lit) + ")";
g.beginPath();
g.ellipse(-0.03, -0.01, 0.018, 0.012, 0, 0, 7);
g.fill();
g.beginPath();
g.ellipse(0.03, -0.01, 0.018, 0.012, 0, 0, 7);
g.fill();
g.fillStyle = "#0c0c0e";
g.beginPath();
g.ellipse(0, -0.05, 0.085, 0.075, 0, Math.PI, 0);
g.fill();
if (dk > 0.3) {
  g.fillStyle = "rgba(225,230,195," + 0.9 * dk + ")";
  g.fillRect(-0.035, -0.015, 0.012, 0.01);
  g.fillRect(0.025, -0.015, 0.012, 0.01);
}
g.restore();
if (dk > 0.3) e.light(dx + 0.05, -1.29, 0.15, "#e0e4c8", 0.35 * dk);
g.strokeStyle = "rgba(235,150,70," + 0.45 * lit + ")";
g.lineWidth = 0.018;
g.beginPath();
g.moveTo(-0.2, -1.08);
g.quadraticCurveTo(-0.22, -0.8, -0.15, -0.46);
g.stroke();
