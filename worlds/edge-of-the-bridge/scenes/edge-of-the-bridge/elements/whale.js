const s = e.state;
if (!s.whale) return;
const A = e.aspect,
  t = e.t,
  x = (s.whaleX ?? -0.25) * A,
  y = 0.36 + Math.sin(t * 0.15) * 0.012;
const n = s.night ?? 0.3;
g.save();
g.translate(x, y);
g.scale(0.06, 0.06);
g.globalAlpha = 0.3 + 0.15 * n;
g.fillStyle = n > 0.6 ? "#2a2c46" : "#4e4866";
const u = Math.sin(t * 0.55) * 0.15 + Math.sin(t * 0.21) * 0.07;
g.beginPath();
g.moveTo(2, 0);
g.bezierCurveTo(1.6, -0.7, -0.5, -0.8, -1.6, -0.25);
g.quadraticCurveTo(-2.3, -0.1 + u * 0.5, -2.8, -0.55 + u);
g.lineTo(-2.55, 0.02 + u * 0.6);
g.lineTo(-2.9, 0.45 + u);
g.quadraticCurveTo(-2.2, 0.15 + u * 0.4, -1.6, 0.2);
g.bezierCurveTo(-0.5, 0.55, 1.4, 0.6, 2, 0);
g.fill();
g.beginPath();
g.moveTo(0.6, 0.35);
g.quadraticCurveTo(0.2, 1.0 + u, -0.5, 1.3 + u);
g.quadraticCurveTo(0, 0.8, 0.1, 0.4);
g.fill();
g.globalAlpha *= 0.5;
g.strokeStyle = "#c9b8c8";
g.lineWidth = 0.03;
for (let i = 0; i < 4; i++) {
  g.beginPath();
  g.moveTo(1.6 - i * 0.1, 0.25 + i * 0.05);
  g.quadraticCurveTo(0.5, 0.48 + i * 0.04, -0.6, 0.36 + i * 0.03);
  g.stroke();
}
g.restore();
