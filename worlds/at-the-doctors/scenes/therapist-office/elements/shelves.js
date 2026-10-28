var s = e.state || {},
  on = s.lamp == null ? 1 : s.lamp;
g.fillStyle = "#2a1e16";
g.fillRect(-1.2, -2.3, 2.4, 2.3);
g.fillStyle = "#17100b";
g.fillRect(-1.12, -2.22, 2.24, 2.14);
var sh = [-0.1, -0.54, -0.98, -1.42, -1.86];
var cols = ["#5a3a30", "#3e4a45", "#6b5a40", "#4a3a4a", "#7a6a52", "#334048", "#5e4a36", "#8a7a60"];
for (var k = 0; k < 5; k++) {
  var by = sh[k],
    x = -1.1;
  while (x < 1.08) {
    var w = 0.025 + e.rnd() * 0.045,
      h = 0.24 + e.rnd() * 0.14,
      c = e.rnd(),
      gap = e.rnd();
    if (gap < 0.06) {
      x += 0.1 + e.rnd() * 0.14;
      continue;
    }
    if (x + w > 1.1) break;
    if (gap > 0.97 && x < 0.9) {
      g.fillStyle = cols[Math.floor(c * 8)];
      for (var q = 0; q < 4; q++) {
        g.fillRect(x, by - 0.04 * (q + 1), 0.24 - q * 0.02, 0.035);
      }
      x += 0.27;
      continue;
    }
    g.fillStyle = cols[Math.floor(c * 8)];
    g.fillRect(x, by - h, w, h);
    g.fillStyle = "rgba(0,0,0,0.28)";
    g.fillRect(x + w - 0.006, by - h, 0.006, h);
    g.fillStyle = "rgba(220,200,160,0.12)";
    g.fillRect(x + w * 0.3, by - h * 0.8, w * 0.4, 0.012);
    x += w + 0.003;
  }
  g.fillStyle = "#3a2a1e";
  g.fillRect(-1.12, by, 2.24, 0.04);
}
g.fillStyle = "#4a3a2c";
g.fillRect(-1.24, -2.34, 2.48, 0.06);
g.fillStyle = "#6a5e52";
g.beginPath();
g.moveTo(0.55, -2.34);
g.lineTo(0.85, -2.34);
g.lineTo(0.8, -2.52);
g.lineTo(0.6, -2.52);
g.closePath();
g.fill();
g.fillStyle = "#2c3826";
for (var i = 0; i < 12; i++) {
  var lx = 0.7 + (e.rnd() - 0.5) * 0.5,
    ly = -2.5 - e.rnd() * 0.15 + (i % 3 === 0 ? 0.3 + e.rnd() * 0.4 : 0);
  g.beginPath();
  g.ellipse(lx, ly, 0.06, 0.03, e.rnd() * 3, 0, 6.283);
  g.fill();
}
var lg = g.createRadialGradient(1.4, -1.3, 0.1, 1.4, -1.3, 2.6);
lg.addColorStop(0, "rgba(255,180,110," + (0.22 * on).toFixed(3) + ")");
lg.addColorStop(1, "rgba(255,180,110,0)");
g.fillStyle = lg;
g.fillRect(-1.25, -2.55, 2.5, 2.6);
var dg = g.createLinearGradient(-1.25, 0, 0.6, 0);
dg.addColorStop(0, "rgba(10,7,5,0.45)");
dg.addColorStop(1, "rgba(10,7,5,0)");
g.fillStyle = dg;
g.fillRect(-1.25, -2.55, 2.5, 2.6);
