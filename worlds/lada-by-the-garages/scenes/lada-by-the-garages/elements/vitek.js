const s = e.state,
  t = e.t,
  d = s.dusk || 0;
const C = "#1c1c22";
const br = Math.sin(t * 1.3) * 0.006 + Math.sin(t * 0.47) * 0.004;
const cy = (t / 4.3) % 1;
let hx, hy;
if (cy < 0.2) {
  const k = cy / 0.2;
  hx = 0.34 - 0.16 * k;
  hy = -0.42 - 0.48 * k;
} else if (cy < 0.38) {
  hx = 0.18;
  hy = -0.9 + Math.sin(t * 20) * 0.005;
} else if (cy < 0.6) {
  const k = (cy - 0.38) / 0.22;
  hx = 0.18 + 0.16 * k;
  hy = -0.9 + 0.48 * k;
} else {
  hx = 0.34;
  hy = -0.42;
}
const lift = (-0.42 - hy) / 0.48;
const n = Math.floor(20 + (s.shells || 0) * 170);
for (let i = 0; i < n; i++) {
  const x = 0.35 + e.rnd() * 0.75 * (0.4 + 0.6 * e.rnd()),
    y = -0.015 + e.rnd() * 0.09;
  g.fillStyle = e.rnd() < 0.55 ? "rgba(25,24,28,0.9)" : "rgba(130,125,118,0.8)";
  g.fillRect(x, y, 0.022, 0.011);
}
g.fillStyle = "rgba(10,8,12,0.45)";
g.beginPath();
g.ellipse(0.05, 0.01, 0.42, 0.05, 0, 0, 7);
g.fill();
g.lineCap = "round";
g.lineJoin = "round";
g.fillStyle = "#b8b4ac";
g.beginPath();
g.ellipse(0.06, -0.04, 0.11, 0.045, 0, 0, 7);
g.fill();
g.strokeStyle = "#15151a";
g.lineWidth = 0.14;
g.beginPath();
g.moveTo(-0.12, -0.3);
g.lineTo(0.17, -0.5);
g.lineTo(0.05, -0.08);
g.stroke();
g.fillStyle = C;
g.beginPath();
g.moveTo(-0.22, -0.26);
g.quadraticCurveTo(-0.28, -0.65, -0.06, -0.86 + br);
g.lineTo(0.12, -0.84 + br);
g.quadraticCurveTo(0.15, -0.6, 0.08, -0.3);
g.closePath();
g.fill();
g.fillStyle = "#e2ded6";
g.beginPath();
g.ellipse(0.16, -0.04, 0.12, 0.045, 0, 0, 7);
g.fill();
g.strokeStyle = C;
g.lineWidth = 0.15;
g.beginPath();
g.moveTo(-0.1, -0.28);
g.lineTo(0.24, -0.5);
g.lineTo(0.13, -0.08);
g.stroke();
g.strokeStyle = "rgba(240,240,240,0.85)";
g.lineWidth = 0.011;
g.beginPath();
for (const o of [-0.025, 0, 0.025]) {
  g.moveTo(-0.07, -0.29 + o);
  g.lineTo(0.2, -0.47 + o);
  g.moveTo(0.25 + o, -0.47);
  g.lineTo(0.15 + o, -0.11);
}
g.stroke();
const ex = 0.26 + 0.06 * lift,
  ey = -0.55 - 0.18 * lift;
g.strokeStyle = C;
g.lineWidth = 0.1;
g.beginPath();
g.moveTo(0.02, -0.8 + br);
g.lineTo(ex, ey);
g.lineTo(hx, hy);
g.stroke();
g.strokeStyle = "rgba(240,240,240,0.8)";
g.lineWidth = 0.01;
g.beginPath();
for (const o of [-0.02, 0, 0.02]) {
  g.moveTo(0.02, -0.8 + br + o);
  g.lineTo(ex, ey + o);
}
g.stroke();
g.fillStyle = "#b38a76";
g.beginPath();
g.arc(hx, hy, 0.035, 0, 7);
g.fill();
const hdy = -0.97 + br;
g.beginPath();
g.arc(0.09, hdy, 0.095, 0, 7);
g.fill();
g.fillStyle = "#2a2a30";
g.beginPath();
g.ellipse(0.07, hdy - 0.05, 0.12, 0.06, -0.1, 0, 7);
g.fill();
g.beginPath();
g.ellipse(0.18, hdy - 0.03, 0.08, 0.02, 0.05, 0, 7);
g.fill();
g.strokeStyle = "rgba(255,170,110," + 0.35 * (1 - d) + ")";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-0.06, -0.85 + br);
g.quadraticCurveTo(-0.28, -0.65, -0.22, -0.28);
g.stroke();
if (cy > 0.42 && cy < 0.72) {
  const k = (cy - 0.42) / 0.3;
  const px = 0.2 + k * 0.6,
    py = -0.92 - 0.35 * k + 1.25 * k * k;
  g.fillStyle = "rgba(30,28,30,0.95)";
  g.save();
  g.translate(px, py);
  g.rotate(t * 12);
  g.fillRect(-0.015, -0.006, 0.03, 0.012);
  g.restore();
}
e.at(0.09, -1.08);
