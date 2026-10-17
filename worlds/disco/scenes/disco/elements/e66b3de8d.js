var T = Math.PI * 2,
  b = (e.t * 118) / 60 + 0.52,
  pp = 0.5 + 0.5 * Math.sin(b * Math.PI * 0.25 + 0.3),
  kb = 0.06 * Math.abs(Math.sin(b * Math.PI * 0.5)),
  sw = 0.07 * (pp - 0.5) * 2 + 0.015 * Math.sin(b * Math.PI),
  hx = sw,
  hy = -0.98 + kb * 0.4,
  sx = sw * 0.5 + 0.02 * (pp - 0.5),
  sy = -1.46 + kb * 0.4,
  nd = 0.02 * Math.sin(b * Math.PI);
g.fillStyle = "rgba(12,5,22,0.45)";
g.beginPath();
g.ellipse(0, 0, 0.4, 0.06, 0, 0, T);
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
  L([hx - 0.09, hy, -0.14, -0.5, -0.17, -0.03], 0.14);
  L([hx + 0.09, hy, 0.12 - kb * 2, -0.5 + kb * 0.3, 0.18, -0.03 - kb * 0.5], 0.14);
  L([-0.17, -0.03, -0.29, -0.01], 0.09);
  L([0.18, -0.03 - kb * 0.5, 0.3, -0.01 - kb * 0.3], 0.09);
  g.beginPath();
  g.moveTo(sx - 0.23, sy);
  g.lineTo(sx + 0.23, sy);
  g.lineTo(hx + 0.18, hy + 0.03);
  g.lineTo(hx - 0.18, hy + 0.03);
  g.closePath();
  g.fill();
  L([sx - 0.19, sy + 0.04, sx - 0.36, sy + 0.26, hx - 0.15, hy - 0.05], 0.095);
  L([sx + 0.19, sy + 0.04, sx + 0.2 + 0.15 * pp, sy + 0.05 - 0.25 * pp, sx - 0.28 + 0.86 * pp, sy + 0.45 - pp], 0.095);
  g.fillRect(sx - 0.045, sy - 0.14, 0.09, 0.15);
  g.beginPath();
  g.arc(sx + 0.01, sy - 0.22 + nd, 0.105, 0, T);
  g.fill();
  g.beginPath();
  g.arc(sx + 0.01, sy - 0.24 + nd, 0.112, Math.PI, 0);
  g.fill();
  g.fillRect(sx + 0.01, sy - 0.25 + nd, 0.19, 0.035);
  g.restore();
}
g.globalAlpha = 0.8;
P(-0.028, "#ffe45a");
g.globalAlpha = 1;
P(0, "#170b26");
