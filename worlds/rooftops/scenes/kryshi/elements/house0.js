var h = e.rnd() * 6 + 16,
  w = 10;
g.fillStyle = "#211e30";
g.fillRect(-w / 2, -h, w, h + 0.1);
for (var y = -h + 1; y < -1; y += 2.2)
  for (var x = -w / 2 + 0.8; x < w / 2 - 0.8; x += 1.8) {
    g.fillStyle = e.rnd() < 0.25 ? "rgba(255,196,120,0.75)" : "rgba(8,8,18,0.5)";
    g.fillRect(x, y, 0.9, 1.2);
  }
