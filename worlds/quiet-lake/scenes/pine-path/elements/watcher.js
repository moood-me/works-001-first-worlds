var t = e.t,
  st = e.state,
  fp = st.figure_present || 0,
  lf = st.light_fade || 0,
  X = -0.1;
e.at(X, -1.75);
if (fp < 0.01) return;
var br = Math.sin(t * 0.9) * 0.004,
  hm = Math.sin(t * 0.37) * 0.02 + Math.sin(t * 0.83 + 1) * 0.01,
  tl = 0.04 + Math.sin(t * 0.05) * 0.03;
g.globalAlpha = Math.min(1, fp);
g.save();
g.translate(X, 0);
g.fillStyle = "rgba(12,8,16,0.45)";
g.beginPath();
g.ellipse(0.1, 0.02, 0.5, 0.06, 0, 0, 6.283);
g.fill();
g.fillStyle = "#150f1a";
g.beginPath();
g.moveTo(-0.26 + hm, 0.02);
g.bezierCurveTo(-0.22, -0.6, -0.2, -1.2, -0.17, -1.45 - br);
g.bezierCurveTo(-0.15, -1.6, -0.1, -1.66, 0, -1.67);
g.bezierCurveTo(0.1, -1.66, 0.15, -1.6, 0.16, -1.45 - br);
g.bezierCurveTo(0.19, -1.2, 0.21, -0.6, 0.25 + hm * 0.7, 0.02);
g.quadraticCurveTo(0, 0.05, -0.26 + hm, 0.02);
g.closePath();
g.fill();
g.save();
g.translate(0, -1.6 - br);
g.rotate(tl);
g.beginPath();
g.moveTo(-0.13, 0.04);
g.bezierCurveTo(-0.15, -0.12, -0.08, -0.24, 0.01, -0.24);
g.bezierCurveTo(0.1, -0.24, 0.15, -0.12, 0.13, 0.04);
g.closePath();
g.fill();
g.fillStyle = "#0b070e";
g.beginPath();
g.ellipse(0.01, -0.08, 0.065, 0.095, 0, 0, 6.283);
g.fill();
g.restore();
var rl = 0.4 * (1 - lf);
if (rl > 0.01) {
  g.strokeStyle = "rgba(255,165,110," + rl.toFixed(3) + ")";
  g.lineWidth = e.px * 1.2;
  g.beginPath();
  g.moveTo(-0.25 + hm, 0);
  g.bezierCurveTo(-0.21, -0.6, -0.2, -1.2, -0.17, -1.45 - br);
  g.stroke();
}
g.save();
g.translate(0.19, -0.86);
g.rotate(0.3);
g.fillStyle = "rgba(214,204,198,0.75)";
g.beginPath();
g.moveTo(0, -0.09);
g.quadraticCurveTo(0.03, -0.02, 0.005, 0.08);
g.quadraticCurveTo(-0.025, 0, 0, -0.09);
g.fill();
g.restore();
g.restore();
g.globalAlpha = 1;
