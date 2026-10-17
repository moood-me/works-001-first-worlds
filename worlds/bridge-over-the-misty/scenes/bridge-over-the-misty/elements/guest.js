const s = e.state,
  t = e.t;
const xg = s.guest * 21.8,
  X = -20.5 + xg,
  dy = -1.4 * (1 - (X / 23) * (X / 23));
const a = Math.min(1, s.guest / 0.07);
if (a <= 0) return;
g.globalAlpha = a;
const ph = (xg / 0.7) * Math.PI;
const bob = Math.abs(Math.sin(ph)) * 0.03;
const br = Math.sin(t * 1.0 + 1) * 0.007 + Math.sin(t * 0.41) * 0.004;
g.save();
g.translate(xg, dy - bob);
const dark = "#16151f";
g.strokeStyle = dark;
g.lineCap = "round";
g.lineWidth = 0.09;
g.beginPath();
g.moveTo(-0.05, -0.35);
g.lineTo(-0.05 + Math.sin(ph) * 0.18, 0);
g.moveTo(0.05, -0.35);
g.lineTo(0.05 - Math.sin(ph) * 0.18, 0);
g.stroke();
g.fillStyle = dark;
g.beginPath();
g.moveTo(-0.2, -1.5 - br);
g.quadraticCurveTo(-0.32, -0.8, -0.36, -0.25);
g.lineTo(0.32 + Math.sin(t * 0.8) * 0.03, -0.28);
g.quadraticCurveTo(0.24, -0.9, 0.17, -1.5 - br);
g.closePath();
g.fill();
g.beginPath();
g.ellipse(-0.24, -1.15, 0.17, 0.3, 0.1, 0, 7);
g.fill();
if (s.met) {
  g.beginPath();
  g.arc(0.04, -1.64 - br, 0.12, 0, 7);
  g.fill();
  g.beginPath();
  g.moveTo(-0.2, -1.5);
  g.quadraticCurveTo(0, -1.42, 0.18, -1.5);
  g.lineTo(0.12, -1.42);
  g.lineTo(-0.16, -1.42);
  g.fill();
} else {
  g.beginPath();
  g.moveTo(-0.16, -1.48 - br);
  g.quadraticCurveTo(-0.2, -1.75, -0.07, -1.98 - br);
  g.quadraticCurveTo(0.12, -1.8, 0.17, -1.5 - br);
  g.closePath();
  g.fill();
}
g.strokeStyle = dark;
g.lineWidth = 0.08;
g.beginPath();
g.moveTo(0.12, -1.38 - br);
g.lineTo(0.3, -1.0);
g.stroke();
g.strokeStyle = "#26222e";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(0.36 + Math.sin(ph) * 0.06, 0);
g.lineTo(0.27, -1.95);
g.stroke();
g.restore();
const wx = xg + 0.45 * Math.cos(t * 0.6) + 0.12 * Math.sin(t * 1.7),
  wy = dy - 1.75 + 0.25 * Math.sin(t * 0.9) + 0.06 * Math.sin(t * 2.3);
g.globalAlpha = a * (0.7 + 0.3 * Math.sin(t * 3.1));
g.fillStyle = "#d8e6ff";
g.beginPath();
g.arc(wx, wy, 0.035, 0, 7);
g.fill();
g.globalAlpha = 1;
e.light(wx, wy, 1.6, "#9fc0ff", 0.45 * a);
e.at(xg, dy - 2.0);
