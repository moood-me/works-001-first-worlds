var T = Math.PI * 2,
  b = (e.t * 118) / 60 + 0.13,
  bo = 0.045 * Math.pow(Math.abs(Math.sin(b * Math.PI)), 1.5),
  sw = 0.07 * Math.sin(b * Math.PI * 0.5) + 0.02 * Math.sin(e.t * 0.63),
  wa = 0.12 * Math.sin(b * Math.PI * 0.5 + 0.8) + 0.04 * Math.sin(e.t * 1.13);
g.fillStyle = "rgba(12,5,22,0.45)";
g.beginPath();
g.ellipse(0, 0, 0.42, 0.06, 0, 0, T);
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
  var hx = sw,
    hy = -0.97 + bo,
    sx = sw * 0.35,
    sy = -1.44 + bo;
  L([hx - 0.09, hy, hx - 0.17, -0.5 + bo * 0.4, -0.19, -0.04], 0.14);
  L([hx + 0.09, hy, hx + 0.18, -0.5 + bo * 0.4, 0.2, -0.04], 0.14);
  L([-0.19, -0.04, -0.3, -0.02], 0.09);
  L([0.2, -0.04, 0.31, -0.02], 0.09);
  g.beginPath();
  g.moveTo(sx - 0.22, sy);
  g.lineTo(sx + 0.22, sy);
  g.lineTo(hx + 0.16, hy + 0.02);
  g.lineTo(hx - 0.16, hy + 0.02);
  g.closePath();
  g.fill();
  L([sx - 0.19, sy + 0.04, sx - 0.4, sy - 0.28 + wa, sx - 0.5 - wa, sy - 0.62], 0.095);
  L([sx + 0.19, sy + 0.04, sx + 0.39, sy - 0.3 - wa, sx + 0.47 + wa, sy - 0.64], 0.095);
  g.fillRect(sx - 0.045, sy - 0.14, 0.09, 0.15);
  g.beginPath();
  g.arc(sx + 0.01 + wa * 0.1, sy - 0.22, 0.115, 0, T);
  g.fill();
  g.beginPath();
  g.arc(sx - 0.03 + wa * 0.1, sy - 0.3, 0.08, 0, T);
  g.arc(sx + 0.07 + wa * 0.1, sy - 0.29, 0.07, 0, T);
  g.fill();
  g.restore();
}
g.globalAlpha = 0.8;
P(0.03, "#4fd8ee");
g.globalAlpha = 1;
P(0, "#170b26");
