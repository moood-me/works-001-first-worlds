const s = e.state,
  t = e.t;
let L = s.lamp === "погас" ? 0 : 1;
if (s.lamp === "мигает") {
  const n = Math.sin(t * 13.1) * Math.sin(t * 2.7) + Math.sin(t * 0.61);
  L = n > 0.6 ? 0.06 : n > 0.45 ? 0.45 : 1;
}
const br = Math.sin(t * 1.1) * 0.006 + Math.sin(t * 0.43) * 0.004;
const tu = s.vovan === "обернулся" ? 1 : 0;
const D = "#1b2030";
const S = "rgba(215,215,210," + (0.15 + 0.4 * L) + ")";
const R = "rgba(235,150,70," + 0.45 * L + ")";
function lb(a, b, c, d, w, col) {
  g.strokeStyle = col;
  g.lineWidth = w;
  g.lineCap = "round";
  g.beginPath();
  g.moveTo(a, b);
  g.lineTo(c, d);
  g.stroke();
}
g.fillStyle = "#3a2a18";
g.beginPath();
g.moveTo(-0.58, 0);
g.lineTo(-0.58, -0.17);
g.quadraticCurveTo(-0.58, -0.21, -0.555, -0.24);
g.lineTo(-0.555, -0.29);
g.lineTo(-0.525, -0.29);
g.lineTo(-0.525, -0.24);
g.quadraticCurveTo(-0.5, -0.21, -0.5, -0.17);
g.lineTo(-0.5, 0);
g.fill();
g.fillStyle = "rgba(190,170,120," + (0.15 + 0.3 * L) + ")";
g.fillRect(-0.575, -0.13, 0.07, 0.06);
g.fillStyle = "#121318";
g.beginPath();
g.ellipse(-0.27, -0.04, 0.13, 0.05, 0, 0, 7);
g.fill();
g.beginPath();
g.ellipse(0.27, -0.04, 0.13, 0.05, 0, 0, 7);
g.fill();
lb(-0.26, -0.07, -0.33, -0.52, 0.15, D);
lb(0.26, -0.07, 0.33, -0.52, 0.15, D);
lb(-0.33, -0.52, -0.12, -0.36, 0.17, D);
lb(0.33, -0.52, 0.12, -0.36, 0.17, D);
for (let k = 0; k < 3; k++) {
  const o = 0.05 + k * 0.018;
  lb(-0.26 - o, -0.1, -0.33 - o, -0.5, 0.008, S);
  lb(0.26 + o, -0.1, 0.33 + o, -0.5, 0.008, S);
}
g.fillStyle = D;
g.beginPath();
g.moveTo(-0.17, -0.33);
g.quadraticCurveTo(-0.25, -0.62, -0.21, -0.86 + br);
g.quadraticCurveTo(0, -0.93 + br, 0.21, -0.86 + br);
g.quadraticCurveTo(0.25, -0.62, 0.17, -0.33);
g.closePath();
g.fill();
g.strokeStyle = R;
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0.21, -0.85 + br);
g.quadraticCurveTo(0.25, -0.62, 0.17, -0.35);
g.stroke();
lb(0, -0.86 + br, 0, -0.5, 0.006, "rgba(200,200,195," + (0.1 + 0.25 * L) + ")");
lb(-0.2, -0.84 + br, -0.34, -0.57, 0.1, D);
lb(-0.34, -0.57, -0.31, -0.3, 0.09, D);
for (let k = 0; k < 3; k++) {
  const o = 0.04 + k * 0.016;
  lb(-0.2 - o, -0.83 + br, -0.34 - o, -0.58, 0.007, S);
}
g.fillStyle = "#4a362c";
g.beginPath();
g.arc(-0.31, -0.27, 0.045, 0, 7);
g.fill();
const p = Math.max(0, Math.sin(t * 0.31 + 1)) ** 6;
const hx = 0.36 + (0.07 - 0.36) * p,
  hy = -0.3 + (-0.93 + 0.3) * p;
lb(0.2, -0.84 + br, 0.35, -0.57, 0.1, D);
lb(0.35, -0.57, hx, hy, 0.09, D);
for (let k = 0; k < 3; k++) {
  const o = 0.04 + k * 0.016;
  lb(0.2 + o, -0.83 + br, 0.35 + o, -0.58, 0.007, S);
}
g.fillStyle = "#4a362c";
g.beginPath();
g.arc(hx, hy + 0.03, 0.045, 0, 7);
g.fill();
lb(hx + 0.02, hy, hx + 0.07, hy - 0.005, 0.012, "rgba(210,205,195,0.8)");
g.fillStyle = "rgba(255,120,50," + (0.4 + 0.6 * p) + ")";
g.beginPath();
g.arc(hx + 0.075, hy - 0.005, 0.014, 0, 7);
g.fill();
e.light(hx + 0.075, hy - 0.005, 0.35, "#ff7a3a", 0.2 + 0.5 * p);
for (let k = 0; k < 6; k++) {
  const ph = (t * 0.1 + k / 6) % 1;
  const x = 0.2 + Math.sin(ph * 5 + k * 1.3 + t * 0.2) * 0.08 * ph + ph * 0.12;
  const y = -1.0 - ph * 0.9;
  g.fillStyle = "rgba(170,165,160," + 0.07 * (1 - ph) + ")";
  g.beginPath();
  g.arc(x, y, 0.03 + ph * 0.12, 0, 7);
  g.fill();
}
const hx2 = tu * 0.03,
  hy2 = -1.0 + br;
lb(0, -0.88 + br, hx2, -0.95 + br, 0.08, "#3e2e26");
g.fillStyle = "#4a362c";
g.beginPath();
g.ellipse(hx2, hy2, 0.085, 0.105, 0, 0, 7);
g.fill();
g.strokeStyle = R;
g.lineWidth = 0.015;
g.beginPath();
g.arc(hx2, hy2, 0.088, -1.2, 1.0);
g.stroke();
g.fillStyle = "#0f1014";
g.beginPath();
g.ellipse(hx2, hy2 - 0.04, 0.095, 0.075, 0, Math.PI, 0);
g.fill();
g.beginPath();
g.ellipse(hx2 + tu * 0.08, hy2 - 0.035, tu ? 0.08 : 0.11, 0.025, tu ? 0.25 : 0, 0, 7);
g.fill();
e.at(hx2, hy2 - 0.15);
