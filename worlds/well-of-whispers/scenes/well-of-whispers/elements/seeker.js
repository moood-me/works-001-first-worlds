const s = e.state;
if (!s.seeker_here) return;
const t = e.t,
  p = Math.max(0, Math.min(1, s.seeker_step)),
  d = 7 + 5.3 * p,
  u = (d - 2) / 10,
  a = -1.2 + 2.4 * u + 0.3 * Math.sin(3 * u),
  k = 12.3 / d,
  tx = a * k - 1.3,
  ty = 1.7 * (k - 1);
const gl = s.glow;
const lean = 0.05 + 0.09 * p;
const br = 1 + 0.007 * Math.sin(t * 1.6) + 0.003 * Math.sin(t * 2.7);
g.save();
g.translate(tx, ty);
g.scale(k, k);
g.fillStyle = "rgba(4,6,9,0.5)";
g.beginPath();
g.ellipse(-0.05, 0.02, 0.45, 0.07, 0, 0, Math.PI * 2);
g.fill();
g.save();
g.scale(1, br);
g.translate(0, 0);
const hem = 0.03 * Math.sin(t * 0.9) + 0.02 * Math.sin(t * 1.53 + 1);
const cloak = () => {
  g.beginPath();
  g.moveTo(-0.34 + hem, 0.02);
  g.bezierCurveTo(-0.31, -0.5, -0.27, -1.0, -0.2 + lean * 0.6, -1.3);
  g.bezierCurveTo(-0.17 + lean, -1.64, 0.03 + lean, -1.72, 0.13 + lean, -1.55);
  g.bezierCurveTo(0.18 + lean, -1.46, 0.17 + lean * 0.8, -1.33, 0.15 + lean * 0.6, -1.24);
  g.bezierCurveTo(0.21, -0.9, 0.26, -0.4, 0.3 + hem * 0.6, 0.02);
  g.closePath();
};
cloak();
g.fillStyle = "#0a0e15";
g.fill();
g.save();
cloak();
g.clip();
g.lineWidth = 0.06;
g.strokeStyle = "rgba(90,115,150,0.28)";
g.beginPath();
g.moveTo(-0.34 + hem, 0.02);
g.bezierCurveTo(-0.31, -0.5, -0.27, -1.0, -0.2 + lean * 0.6, -1.3);
g.bezierCurveTo(-0.17 + lean, -1.64, 0.03 + lean, -1.72, 0.13 + lean, -1.55);
g.stroke();
if (s.lantern) {
  g.strokeStyle = "rgba(255,165,85,0.32)";
  g.lineWidth = 0.08;
  g.beginPath();
  g.moveTo(0.15 + lean * 0.6, -1.24);
  g.bezierCurveTo(0.21, -0.9, 0.26, -0.4, 0.3 + hem * 0.6, 0.02);
  g.stroke();
}
g.strokeStyle = "rgba(120,195,255," + 0.3 * gl * p + ")";
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(0.13 + lean, -1.55);
g.bezierCurveTo(0.18 + lean, -1.46, 0.17 + lean * 0.8, -1.33, 0.15 + lean * 0.6, -1.24);
g.bezierCurveTo(0.21, -0.9, 0.26, -0.4, 0.3, 0.02);
g.stroke();
g.restore();
const sc = 0.04 * Math.sin(t * 0.8) + 0.02 * Math.sin(t * 1.9);
g.fillStyle = "#6a2a27";
g.beginPath();
g.moveTo(-0.13 + lean * 0.5, -1.3);
g.bezierCurveTo(-0.28, -1.26 + sc, -0.36, -1.16, -0.44, -1.08 + sc);
g.lineTo(-0.4, -1.04 + sc);
g.bezierCurveTo(-0.32, -1.12, -0.24, -1.18 + sc, -0.1 + lean * 0.5, -1.22);
g.closePath();
g.fill();
const sx = 0.1 + lean * 0.6,
  sy = -1.15,
  hx = 0.44 + lean * 0.4,
  hy = -0.92 + 0.01 * Math.sin(t * 1.2);
g.strokeStyle = "#0a0e15";
g.lineWidth = 0.09;
g.lineCap = "round";
g.beginPath();
g.moveTo(sx, sy);
g.quadraticCurveTo(sx + 0.2, sy + 0.12, hx, hy);
g.stroke();
g.restore();
const hx2 = 0.44 + lean * 0.4,
  hy2 = (-0.92 + 0.01 * Math.sin(t * 1.2)) * br;
const ang = 0.08 * Math.sin(t * 1.1) + 0.035 * Math.sin(t * 1.73 + 2);
const lx = hx2 + Math.sin(ang) * 0.2,
  ly = hy2 + Math.cos(ang) * 0.2;
g.strokeStyle = "#1a1510";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(hx2, hy2);
g.lineTo(lx, ly - 0.06);
g.stroke();
g.save();
g.translate(lx, ly);
g.rotate(-ang);
if (s.lantern) {
  let lg = g.createRadialGradient(0, 0.02, 0, 0, 0.02, 0.09);
  lg.addColorStop(0, "#fff0c8");
  lg.addColorStop(0.5, "#ffb35c");
  lg.addColorStop(1, "#a85a20");
  g.fillStyle = lg;
} else {
  g.fillStyle = "#1c1812";
}
g.fillRect(-0.05, -0.05, 0.1, 0.14);
g.strokeStyle = "#120e0a";
g.lineWidth = 0.015;
g.strokeRect(-0.05, -0.05, 0.1, 0.14);
g.beginPath();
g.moveTo(0, -0.05);
g.lineTo(0, 0.09);
g.stroke();
g.fillStyle = "#120e0a";
g.beginPath();
g.moveTo(-0.06, -0.05);
g.lineTo(0, -0.1);
g.lineTo(0.06, -0.05);
g.closePath();
g.fill();
g.restore();
g.restore();
if (s.lantern) {
  e.light(tx + k * lx, ty + k * (ly + 0.02), 2.2 * k, "#ffb35c", 0.9);
}
e.at(tx + k * (0.03 + lean), ty + k * -1.6);
