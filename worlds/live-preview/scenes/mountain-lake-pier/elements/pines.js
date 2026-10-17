var R = e.rnd;
function hill(x) {
  return 3 + 3 * Math.sin(x / 170 + 0.5) + 2.5 * Math.sin(x / 61 + 1.3) + Math.max(0, Math.abs(x) - 450) * 0.012;
}
function pine(x, b, h, w) {
  g.moveTo(x, b - h);
  var n = 6;
  for (var k = 1; k <= n; k++) {
    var yy = b - h + ((h * k) / n) * 0.9,
      ww = (w * k) / n;
    g.lineTo(x + ww, yy);
    g.lineTo(x + ww * 0.4, yy - h * 0.025);
  }
  g.lineTo(x + w * 0.12, b);
  g.lineTo(x - w * 0.12, b);
  for (var k = n; k >= 1; k--) {
    var yy = b - h + ((h * k) / n) * 0.9,
      ww = (w * k) / n;
    g.lineTo(x - ww * 0.4, yy - h * 0.025);
    g.lineTo(x - ww, yy);
  }
  g.closePath();
}
g.fillStyle = "#262b40";
g.beginPath();
g.moveTo(-1250, 3);
for (var x = -1250; x <= 1250; x += 20) g.lineTo(x, -hill(x) + 0.5);
g.lineTo(1250, 3);
g.closePath();
g.fill();
g.fillStyle = "#2a2f45";
g.beginPath();
for (var x = -1250; x < 1250; x += 2 + R() * 4) {
  var h = 8 + R() * 14;
  pine(x, -hill(x) - 1.5, h, h * (0.17 + R() * 0.08));
}
g.fill();
g.fillStyle = "#1c2030";
g.beginPath();
for (var x = -1250; x < 1250; x += 3 + R() * 6) {
  var h = 7 + R() * 16;
  pine(x, -hill(x) + 1.2, h, h * (0.16 + R() * 0.08));
}
g.fill();
