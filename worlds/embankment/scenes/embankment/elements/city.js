var x = -3000;
while (x < 3000) {
  var w = 14 + e.rnd() * 36,
    h = 18 + Math.pow(e.rnd(), 2) * 70;
  g.fillStyle = e.rnd() < 0.5 ? "#22253a" : "#1d2033";
  g.fillRect(x, -h, w, h + 2);
  if (e.rnd() < 0.12) {
    g.fillRect(x + w * 0.45, -h - 12, w * 0.1, 12);
  }
  for (var wy = -h + 3; wy < -2; wy += 4.5)
    for (var wx = x + 2; wx < x + w - 3; wx += 4) {
      if (e.rnd() < 0.22) {
        g.fillStyle = e.rnd() < 0.8 ? "rgba(255,214,150,0.85)" : "rgba(190,210,255,0.8)";
        g.fillRect(wx, wy, 1.8, 2.2);
      }
    }
  x += w + e.rnd() * 3;
}
