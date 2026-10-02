const s = e.state,
  t = e.t;
let L = s.lamp === "погас" ? 0 : 1;
if (s.lamp === "мигает") {
  const n = Math.sin(t * 13.1) * Math.sin(t * 2.7) + Math.sin(t * 0.61);
  L = n > 0.6 ? 0.06 : n > 0.45 ? 0.45 : 1;
}
const mg = s.malGone || 0;
const dx = -4 * mg;
e.at(dx, -1.75);
if (mg > 0.99) return;
g.globalAlpha = 1 - mg;
g.translate(dx, 0);
const sw = Math.sin(t * 0.4) * 0.03 + Math.sin(t * 1.07) * 0.012;
const br = Math.sin(t * 1.9) * 0.007;
const D = "#1e2228";
const S = "rgba(215,215,210," + (0.12 + 0.35 * L) + ")";
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
g.ellipse(-0.1, -0.03, 0.11, 0.04, 0, 0, 7);
g.fill();
g.beginPath();
g.ellipse(0.1, -0.03, 0.11, 0.04, 0, 0, 7);
g.fill();
lb(-0.09, -0.05, -0.08 + sw * 0.3, -0.86, 0.12, D);
lb(0.09, -0.05, 0.08 + sw * 0.3, -0.86, 0.12, D);
for (let k = 0; k < 3; k++) {
  const o = 0.04 + k * 0.016;
  lb(-0.09 - o, -0.1, -0.08 - o + sw * 0.3, -0.8, 0.007, S);
  lb(0.09 + o, -0.1, 0.08 + o + sw * 0.3, -0.8, 0.007, S);
}
g.fillStyle = D;
g.beginPath();
g.moveTo(-0.19, -0.8);
g.quadraticCurveTo(-0.24, -1.1, -0.22 + sw, -1.42 + br);
g.quadraticCurveTo(sw, -1.48 + br, 0.22 + sw, -1.42 + br);
g.quadraticCurveTo(0.24, -1.1, 0.19, -0.8);
g.closePath();
g.fill();
lb(-0.21 + sw, -1.38 + br, -0.2, -1.0, 0.09, D);
lb(0.21 + sw, -1.38 + br, 0.2, -1.0, 0.09, D);
g.strokeStyle = "rgba(0,0,0,0.5)";
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(-0.15, -0.98);
g.lineTo(0.15, -0.98);
g.stroke();
g.fillStyle = "#1a1e24";
g.beginPath();
g.ellipse(sw, -1.57 + br, 0.115, 0.135, 0, 0, 7);
g.fill();
g.fillStyle = "rgba(" + (30 + 70 * L) + "," + (24 + 50 * L) + "," + (20 + 38 * L) + ",1)";
g.beginPath();
g.ellipse(sw + 0.03, -1.55 + br, 0.06, 0.085, 0, 0, 7);
g.fill();
g.strokeStyle = "rgba(235,150,70," + 0.4 * L + ")";
g.lineWidth = 0.018;
g.beginPath();
g.moveTo(-0.22 + sw, -1.4 + br);
g.quadraticCurveTo(-0.24, -1.1, -0.19, -0.82);
g.stroke();
