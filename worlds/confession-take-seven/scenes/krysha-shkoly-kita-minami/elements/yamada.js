const s = e.state,
  t = e.t,
  P = 1 - Math.max(0, Math.min(1, s.petals ?? 1));
const sw = Math.sin(t * 1.6) * 0.5 + Math.sin(t * 0.6) * 0.2;
g.fillStyle = "rgba(40,22,40,0.3)";
g.beginPath();
g.ellipse(0.05, 0.15, 0.4, 0.14, 0.2, 0, 7);
g.fill();
const pr = 0.12 + 0.4 * P;
g.fillStyle = "#e7a9b8";
g.beginPath();
g.ellipse(-0.95, 0, pr, 0.04 + 0.1 * P, 0, Math.PI, 0);
g.fill();
g.fillStyle = "#c98aa0";
for (let i = 0; i < 14; i++) {
  const a = e.rnd() * Math.PI,
    r = e.rnd();
  g.fillRect(-0.95 + Math.cos(a) * pr * r - 0.01, -Math.sin(a) * (0.04 + 0.1 * P) * r, 0.025, 0.012);
}
g.fillStyle = "#3a3440";
g.beginPath();
g.moveTo(-0.12, 0);
g.lineTo(-0.08, -0.7);
g.lineTo(0.12, -0.7);
g.lineTo(0.14, 0);
g.lineTo(0.06, 0);
g.lineTo(0.02, -0.5);
g.lineTo(-0.04, 0);
g.closePath();
g.fill();
const b = Math.sin(t * 1.6) * 0.02;
g.fillStyle = "#8a8290";
g.beginPath();
g.moveTo(-0.1, -0.7);
g.lineTo(0.14, -0.7);
g.quadraticCurveTo(0.16, -1.15, -0.05 + b, -1.28);
g.quadraticCurveTo(-0.22 + b, -1.2, -0.18, -0.95);
g.closePath();
g.fill();
g.fillStyle = "#5a6a7a";
g.beginPath();
g.moveTo(-0.14, -0.95);
g.lineTo(-0.12, -0.62);
g.lineTo(0.08, -0.62);
g.lineTo(0.06, -0.95);
g.fill();
g.fillStyle = "#e8c9a8";
g.beginPath();
g.arc(-0.14 + b, -1.33, 0.085, 0, 7);
g.fill();
g.fillStyle = "#4a5a6e";
g.beginPath();
g.arc(-0.13 + b, -1.36, 0.09, Math.PI, 0);
g.fill();
g.fillRect(-0.27 + b, -1.37, 0.08, 0.02);
g.fillStyle = "#ecece4";
g.fillRect(-0.16 + b, -1.25, 0.16, 0.04);
const bx = -0.7 + sw * 0.25,
  by = 0.0;
const hx = -0.12 + b,
  hy = -0.95;
g.strokeStyle = "#a08050";
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(hx + 0.12, hy - 0.3);
g.lineTo(bx, by - 0.2);
g.stroke();
g.strokeStyle = "#b89a60";
g.lineWidth = 0.012;
g.beginPath();
for (let k = 0; k < 9; k++) {
  g.moveTo(bx, by - 0.2);
  g.lineTo(bx - 0.18 + k * 0.045 + sw * 0.03, by);
}
g.stroke();
g.strokeStyle = "#8a8290";
g.lineWidth = 0.06;
g.lineCap = "round";
g.beginPath();
g.moveTo(-0.05 + b, -1.2);
g.lineTo(hx + 0.02, hy - 0.2);
g.moveTo(0.05, -1.15);
g.lineTo(hx - 0.06 + (bx - hx) * 0.2, hy + (by - hy) * 0.25);
g.stroke();
g.strokeStyle = "rgba(255,176,130,0.5)";
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(-0.05 + b, -1.28);
g.quadraticCurveTo(-0.22 + b, -1.2, -0.18, -0.95);
g.stroke();
e.at(-0.14, -1.5);
