var cols = ["#1e1a2a", "#231d2e", "#1a1724"];
for (var i = 0; i < 70; i++) {
  var x = -600 + e.rnd() * 1200,
    w = 12 + e.rnd() * 30,
    h = 12 + Math.pow(e.rnd(), 1.6) * 80;
  g.fillStyle = cols[i % 3];
  g.fillRect(x, -h, w, h + 10);
  if (e.rnd() < 0.3) {
    g.fillRect(x + w * 0.4, -h - 6, 1.2, 6);
  }
  g.fillStyle = "#ffc27a";
  for (var yy = -h + 3; yy < -2; yy += 3.2) {
    for (var xx = x + 2; xx < x + w - 2; xx += 2.6) {
      if (e.rnd() < 0.22) {
        g.globalAlpha = 0.35 + e.rnd() * 0.55;
        g.fillRect(xx, yy, 1.3, 1.6);
      }
    }
  }
  g.globalAlpha = 1;
}
