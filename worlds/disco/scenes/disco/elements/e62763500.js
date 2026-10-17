var T = Math.PI * 2,
  b = (e.t * 118) / 60 + 0.37,
  bo = 0.03 * Math.pow(Math.abs(Math.sin(b * Math.PI)), 1.5),
  sw = 0.09 * Math.sin(b * Math.PI * 0.5 + 1.2) + 0.02 * Math.sin(e.t * 0.51),
  tw = Math.sin(b * Math.PI * 0.5 + 1.9),
  ar = 0.5 + 0.5 * Math.sin(b * Math.PI + 0.4),
  pt = 0.1 * Math.sin(b * Math.PI * 0.5 + 2.4) + 0.02 * Math.sin(e.t * 1.7),
  hx = sw,
  wy = -1.02 + bo,
  sx = sw * 0.4,
  sy = -1.4 + bo;
g.fillStyle = "rgba(12,5,22,0.45)";
g.beginPath();
g.ellipse(0, 0, 0.38, 0.055, 0, 0, T);
g.fill();
function L(p, w) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(p[0], p[1]);
  for (var i = 2; i < p.length; i += 2) g.lineTo(p[i], p[i + 1]);
  g.stroke();
}
function P(o, c) {
  g.save();
  g.translate(o, -Math.abs(o) * 0.2);
  g.fillStyle = c;
  g.strokeStyle = c;
  g.lineCap = "round";
  g.lineJoin = "round";
  L([hx - 0.07, -0.6, -0.1 + 0.03 * tw, -0.28, -0.12, -0.03], 0.085);
  L([hx + 0.07, -0.6, 0.11, -0.3, 0.1, -0.03], 0.085);
  L([-0.12, -0.03, -0.2, -0.02], 0.06);
  L([0.1, -0.03, 0.19, -0.02], 0.06);
  g.beginPath();
  g.moveTo(hx - 0.12, wy);
  g.lineTo(hx + 0.12, wy);
  g.quadraticCurveTo(hx + 0.27 + 0.05 * tw, -0.78, hx + 0.34 + 0.08 * tw, -0.52);
  g.quadraticCurveTo(hx + 0.1 * tw, -0.45 + 0.02 * Math.sin(e.t * 2.1), hx - 0.33 + 0.08 * tw, -0.53);
  g.quadraticCurveTo(hx - 0.27 + 0.05 * tw, -0.78, hx - 0.12, wy);
  g.closePath();
  g.fill();
  g.beginPath();
  g.moveTo(sx - 0.17, sy);
  g.lineTo(sx + 0.17, sy);
  g.lineTo(hx + 0.12, wy + 0.01);
  g.lineTo(hx - 0.12, wy + 0.01);
  g.closePath();
  g.fill();
  L([sx - 0.15, sy + 0.04, sx - 0.31, sy + 0.27, hx - 0.13, wy - 0.03], 0.07);
  L([sx + 0.15, sy + 0.03, sx + 0.31, sy - 0.17, sx + 0.3 + 0.14 * ar, sy - 0.5 + 0.04 * ar], 0.07);
  g.fillRect(sx - 0.035, sy - 0.13, 0.07, 0.14);
  g.beginPath();
  g.arc(sx, sy - 0.21, 0.1, 0, T);
  g.fill();
  g.beginPath();
  g.moveTo(sx - 0.05, sy - 0.29);
  g.quadraticCurveTo(sx - 0.2 + pt, sy - 0.3, sx - 0.19 + pt * 1.6, sy - 0.05);
  g.lineTo(sx - 0.14 + pt * 1.3, sy - 0.07);
  g.quadraticCurveTo(sx - 0.12 + pt, sy - 0.22, sx - 0.02, sy - 0.23);
  g.closePath();
  g.fill();
  g.restore();
}
g.globalAlpha = 0.8;
P(0.028, "#ff6fd8");
g.globalAlpha = 1;
P(0, "#170b26");
g.fillStyle = "#b8665e";
g.beginPath();
g.moveTo(sx - 0.06, sy - 0.08);
g.lineTo(sx + 0.06, sy - 0.08);
g.lineTo(sx + 0.01, sy + 0.02);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(sx + 0.01, sy - 0.02);
g.quadraticCurveTo(sx + 0.1, sy + 0.04, sx + 0.13 + 0.03 * Math.sin(e.t * 2.7), sy + 0.15);
g.lineTo(sx + 0.09 + 0.03 * Math.sin(e.t * 2.7 + 0.5), sy + 0.16);
g.quadraticCurveTo(sx + 0.06, sy + 0.06, sx - 0.01, sy + 0.01);
g.closePath();
g.fill();
