g.fillStyle = "#262e3a";
g.beginPath();
g.moveTo(-800, 2);
for (var gx = -800; gx <= 800; gx += 16) {
  g.lineTo(gx, -0.9 - 0.9 * Math.sin(gx * 0.011 + 1) - 0.5 * Math.sin(gx * 0.037 + 2));
}
g.lineTo(800, 2);
g.closePath();
g.fill();
var x = -800;
while (x < 800) {
  x += 1 + e.rnd() * 4;
  var dn = 0.55 + 0.35 * Math.sin(x * 0.008 + 2) + 0.25 * Math.sin(x * 0.029 + 0.5);
  var r1 = e.rnd(),
    r2 = e.rnd(),
    r3 = e.rnd(),
    r4 = e.rnd(),
    r5 = e.rnd();
  if (dn < 0.12 + r5 * 0.2) continue;
  var h = (5 + r1 * 9) * (0.55 + dn * 0.55);
  var b = -0.6 - 0.9 * Math.sin(x * 0.011 + 1) - 0.5 * Math.sin(x * 0.037 + 2);
  var v = Math.round((r2 - 0.5) * 10);
  g.fillStyle = "rgb(" + (40 + v) + "," + (48 + v) + "," + (60 + v) + ")";
  var n, k, hw, yy;
  if (r3 < 0.5) {
    n = 5 + Math.floor(r4 * 6);
    var w = h * (0.2 + r2 * 0.12);
    g.beginPath();
    g.moveTo(x, b - h);
    for (k = 1; k <= n; k++) {
      yy = b - h + (h * 0.95 * k) / n;
      hw = ((w * k) / n) * (0.75 + 0.5 * ((k * 7.3 + r4 * 10) % 1));
      g.lineTo(x + hw, yy);
      if (k < n) g.lineTo(x + hw * 0.35, yy - h * 0.03);
    }
    g.lineTo(x + w * 0.12, b);
    g.lineTo(x - w * 0.12, b);
    for (k = n; k >= 1; k--) {
      yy = b - h + (h * 0.95 * k) / n;
      hw = ((w * k) / n) * (0.75 + 0.5 * ((k * 5.1 + r2 * 10) % 1));
      if (k < n) g.lineTo(x - hw * 0.35, yy - h * 0.03);
      g.lineTo(x - hw, yy);
    }
    g.closePath();
    g.fill();
  } else if (r3 < 0.75) {
    g.fillRect(x - 0.1, b - h * 0.35, 0.2, h * 0.35);
    g.beginPath();
    var cn = 3 + Math.floor(r4 * 3);
    for (k = 0; k < cn; k++) {
      var ex = x + (((k * 3.7 + r4 * 5) % 1) - 0.5) * h * 0.07;
      var ey = b - h * (0.4 + (0.45 * (k + 0.5)) / cn);
      var ew = h * (0.07 + 0.04 * ((k * 2.3 + r2 * 7) % 1));
      g.moveTo(ex + ew, ey);
      g.ellipse(ex, ey, ew, ew * 2.2, 0, 0, 6.283);
    }
    g.fill();
  } else {
    g.fillRect(x - 0.15, b - h * 0.5, 0.3, h * 0.5);
    g.beginPath();
    var bn = 4 + Math.floor(r4 * 4);
    for (k = 0; k < bn; k++) {
      var ang = (k / bn) * 6.283 + r1 * 3;
      var rr = h * (0.17 + 0.08 * ((k * 4.1 + r2 * 9) % 1));
      var bx = x + Math.cos(ang) * h * 0.16;
      var by = b - h * 0.68 + Math.sin(ang) * h * 0.14;
      g.moveTo(bx + rr, by);
      g.arc(bx, by, rr, 0, 6.283);
    }
    g.fill();
  }
}
