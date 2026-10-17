var T = Math.PI * 2,
  b = (e.t * 118) / 60 + 0.71,
  ph = (b / 2) % 1,
  j = ph < 0.4 ? Math.sin((ph / 0.4) * Math.PI) * 0.13 : 0,
  cr = 0.08 * Math.pow(Math.max(0, Math.cos(ph * T)), 8) + 0.06 * Math.exp(-Math.pow(ph - 0.42, 2) / 0.002),
  pu = Math.sin(b * Math.PI),
  hy = -0.96 + cr - j,
  sy = -1.43 + cr - j,
  sx = 0.01 * Math.sin(e.t * 0.8);
g.fillStyle = "rgba(12,5,22,0.45)";
g.beginPath();
g.ellipse(0, 0, Math.max(0.2, 0.4 - j * 1.2), 0.055, 0, 0, T);
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
  L([-0.1, hy, -0.17 - cr * 1.5, (hy - j) / 2 + 0.02, -0.17, -j - 0.03], 0.15);
  L([0.1, hy, 0.18 + cr * 1.5, (hy - j) / 2 + 0.02, 0.17, -j - 0.03], 0.15);
  L([-0.17, -j - 0.03, -0.29, -j - 0.01], 0.1);
  L([0.17, -j - 0.03, 0.3, -j - 0.01], 0.1);
  g.beginPath();
  g.moveTo(sx - 0.24, sy);
  g.lineTo(sx + 0.24, sy);
  g.lineTo(0.17, hy + 0.02);
  g.lineTo(-0.17, hy + 0.02);
  g.closePath();
  g.fill();
  L([sx + 0.21, sy + 0.04, sx + 0.33, sy - 0.08 - 0.2 * pu, sx + 0.3, sy - 0.3 - 0.32 * pu], 0.1);
  L([sx - 0.21, sy + 0.04, sx - 0.33, sy - 0.08 + 0.2 * pu, sx - 0.3, sy - 0.3 + 0.32 * pu], 0.1);
  g.beginPath();
  g.arc(sx + 0.3, sy - 0.3 - 0.32 * pu, 0.055, 0, T);
  g.fill();
  g.beginPath();
  g.arc(sx - 0.3, sy - 0.3 + 0.32 * pu, 0.055, 0, T);
  g.fill();
  g.fillRect(sx - 0.05, sy - 0.13, 0.1, 0.14);
  g.beginPath();
  g.arc(sx, sy - 0.22, 0.115, 0, T);
  g.fill();
  g.beginPath();
  for (var k = 0; k < 5; k++) {
    var a = -Math.PI * 0.85 + k * Math.PI * 0.175;
    g.moveTo(sx + Math.cos(a - 0.2) * 0.1, sy - 0.22 + Math.sin(a - 0.2) * 0.1);
    g.lineTo(sx + Math.cos(a) * 0.19, sy - 0.22 + Math.sin(a) * 0.19);
    g.lineTo(sx + Math.cos(a + 0.2) * 0.1, sy - 0.22 + Math.sin(a + 0.2) * 0.1);
  }
  g.fill();
  g.restore();
}
g.globalAlpha = 0.8;
P(-0.028, "#ff6fd8");
g.globalAlpha = 1;
P(0, "#170b26");
