var x = -1500;
while (x < 1500) {
  var w = 12 + e.rnd() * 30,
    h = 20 + Math.pow(e.rnd(), 2) * 55;
  g.fillStyle = "#1b1a33";
  g.fillRect(x, -h, w, h + 40);
  for (var wy = -h + 3; wy < 0; wy += 5)
    for (var wx = x + 2; wx < x + w - 2; wx += 4)
      if (e.rnd() < 0.15) {
        g.fillStyle = "rgba(255,200,130,0.7)";
        g.fillRect(wx, wy, 1.6, 2);
      }
  x += w + 1;
}
