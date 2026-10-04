var v = e.state.tram;
if (typeof v != "number" || v < 0 || v > 1) return;
var X = 175 - v * 350,
  t = e.t,
  d = e.state.dawn || 0,
  k = 1 - 0.5 * d;
g.save();
g.translate(X, 0);
g.fillStyle = "#1a1c28";
g.beginPath();
g.moveTo(-18.5, -2.4);
g.quadraticCurveTo(-17, 0.2, -14, 0.3);
g.lineTo(15, 0.3);
g.lineTo(16, -2.4);
g.closePath();
g.fill();
g.fillStyle = "#262838";
g.fillRect(-18, -2.6, 34, 0.25);
g.fillStyle = "#1d1f2c";
g.fillRect(-13, -4.8, 26, 2.3);
g.fillRect(-14, -5.15, 28, 0.35);
g.fillRect(-11, -6.7, 4, 1.6);
g.fillRect(-9.15, -9.2, 0.3, 2.6);
for (var u = -13; u <= 13; u += 1.3) {
  g.fillRect(u, -6, 0.1, 0.85);
}
g.fillRect(-13, -6.05, 26, 0.12);
for (var i = 0; i < 14; i++) {
  var wx = -12.4 + i * 1.8,
    a = (0.7 + 0.12 * Math.sin(t * 0.9 + i * 1.7)) * k;
  if (i == 4 || i == 10) a *= 0.35;
  g.fillStyle = "rgba(255,212,150," + a + ")";
  g.fillRect(wx, -4.4, 1.2, 1.1);
}
g.fillStyle = "rgba(255,224,170," + 0.75 * k + ")";
g.fillRect(-10.6, -6.4, 3.2, 0.8);
for (var b = 0; b < 16; b++) {
  var f = b / 15,
    bx = -9 + f * 24,
    by = -9.2 + f * 4.0 + Math.sin(f * 3.14) * 0.6;
  g.fillStyle = b % 3 ? "rgba(255,214,150," + 0.85 * k + ")" : "rgba(220,230,255," + 0.75 * k + ")";
  g.beginPath();
  g.arc(bx, by, 0.16, 0, 6.283);
  g.fill();
}
for (var b2 = 0; b2 < 8; b2++) {
  var f2 = b2 / 7,
    bx2 = -9 - f2 * 9.3,
    by2 = -9.2 + f2 * 6.6;
  g.fillStyle = "rgba(255,214,150," + 0.8 * k + ")";
  g.beginPath();
  g.arc(bx2, by2, 0.16, 0, 6.283);
  g.fill();
}
g.fillStyle = "#ffffff";
g.beginPath();
g.arc(-9, -9.4, 0.2, 0, 6.283);
g.fill();
g.fillStyle = "rgba(90,230,140,0.9)";
g.beginPath();
g.arc(-17.2, -2.9, 0.2, 0, 6.283);
g.fill();
g.fillStyle = "rgba(200,206,232,0.22)";
for (var w = 0; w < 6; w++) {
  g.fillRect(16 + w * 3.2, 0.15 + w * 0.05, 2.4 - w * 0.25, 0.12);
}
g.restore();
e.light(X, -4, 26, "#ffcf8f", 0.35 * (1 - d));
e.at(X - 9, -6.8);
