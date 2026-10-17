var cols = ["#2c3551", "#2f3854", "#323b59", "#29314c"];
g.fillStyle = "#2b3350";
g.fillRect(-900, -2.2, 1800, 4.2);
var x = -900;
while (x < 900) {
  var r = e.rnd(),
    t = e.rnd(),
    hv = e.rnd(),
    cv = e.rnd(),
    a1 = e.rnd(),
    a2 = e.rnd(),
    a3 = e.rnd(),
    lean = (e.rnd() - 0.5) * 0.6;
  var grove = 0.55 + 0.45 * Math.sin(x * 0.011 + 1.3) * Math.sin(x * 0.0043 + 0.4);
  if (r < 0.06) {
    x += 5 + a1 * 16;
    continue;
  }
  var h = (5 + hv * 15) * (0.45 + grove * 0.75),
    w;
  g.fillStyle = cols[Math.floor(cv * 4)];
  g.beginPath();
  var b = -1.5;
  if (t < 0.5) {
    w = h * (0.26 + a1 * 0.14);
    var n = 5 + Math.floor(a2 * 4),
      hw = w / 2;
    g.moveTo(x - hw * 0.3, b);
    for (var k = 0; k < n; k++) {
      var q = 1 - k / n,
        j = 0.8 + 0.4 * Math.sin(k * 2.1 + a3 * 9);
      g.lineTo(x - hw * q * j + (lean * k) / n, b - h * (k / n + 0.04));
      g.lineTo(x - hw * q * 0.4 + (lean * (k + 0.7)) / n, b - (h * (k + 0.7)) / n);
    }
    g.lineTo(x + lean, b - h);
    for (var k = n - 1; k >= 0; k--) {
      var q = 1 - k / n,
        j = 0.8 + 0.4 * Math.sin(k * 1.7 + a3 * 7);
      g.lineTo(x + hw * q * 0.4 + (lean * (k + 0.7)) / n, b - (h * (k + 0.7)) / n);
      g.lineTo(x + hw * q * j + (lean * k) / n, b - h * (k / n + 0.02));
    }
    g.lineTo(x + hw * 0.3, b);
    g.fill();
  } else if (t < 0.72) {
    w = h * (0.45 + a1 * 0.3);
    g.rect(x - 0.25, b - h * 0.4, 0.5, h * 0.4);
    g.fill();
    g.beginPath();
    var cx = x + lean * 2,
      cy = b - h * 0.64;
    g.ellipse(cx, cy, w * 0.5, h * (0.3 + a2 * 0.08), (a3 - 0.5) * 0.3, 0, 6.2832);
    g.ellipse(cx + w * (a3 - 0.5) * 0.5, cy + h * 0.14, w * 0.4, h * 0.17, 0, 0, 6.2832);
    g.fill();
  } else if (t < 0.92) {
    w = h * (0.6 + a1 * 0.3);
    var cx = x + lean,
      cy = b - h * 0.58,
      m = 3 + Math.floor(a2 * 3);
    g.rect(x - 0.2, b - h * 0.3, 0.4, h * 0.3);
    for (var k = 0; k < m; k++) {
      var ang = (k / m) * 6.2832 + a3 * 6,
        rr = w * (0.3 + 0.1 * Math.sin(k * 2.7 + a1 * 5));
      g.moveTo(cx + Math.cos(ang) * w * 0.2 + rr, cy + Math.sin(ang) * h * 0.14);
      g.arc(cx + Math.cos(ang) * w * 0.2, cy + Math.sin(ang) * h * 0.14, rr, 0, 6.2832);
    }
    g.fill();
  } else {
    w = h * 0.14;
    g.moveTo(x - w / 2, b);
    g.quadraticCurveTo(x - w * 0.7 + lean, b - h * 0.6, x + lean * 1.5, b - h * 1.1);
    g.quadraticCurveTo(x + w * 0.7 + lean, b - h * 0.6, x + w / 2, b);
    g.fill();
  }
  x += Math.max(0.8, w * (0.35 + a2 * 0.55));
}
