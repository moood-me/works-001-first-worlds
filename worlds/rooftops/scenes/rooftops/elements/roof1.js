var w = 6,
  h = 12.8,
  c = "#2a2534";
g.fillStyle = c;
g.fillRect(-w / 2, -h, w, h + 0.05);
g.fillStyle = "rgba(0,0,0,0.25)";
g.fillRect(-w / 2, -h, 0.12, h);
g.fillStyle = "#14121c";
g.fillRect(-w / 2 - 0.08, -h - 0.1, w + 0.16, 0.14);
for (var y = -h + 0.7; y < -0.4; y += 1.1)
  for (var x = -w / 2 + 0.5; x < w / 2 - 0.5; x += 1.0) {
    var lit = e.rnd() < 0.3;
    g.fillStyle = lit ? "rgba(255,206,130,0.85)" : "rgba(10,10,20,0.6)";
    g.fillRect(x, y, 0.45, 0.6);
  }
g.fillStyle = "#1e1a24";
g.fillRect(1.5 - 0.25, -h - 0.9, 0.5, 0.9);
g.fillRect(1.5 - 0.32, -h - 1.0, 0.64, 0.12);
