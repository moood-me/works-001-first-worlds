var w = 7,
  h = 2.8;
g.fillStyle = "#6a5846";
g.fillRect(-w / 2, -h, w, h);
for (var x = -w / 2 + 0.15; x < w / 2; x += 0.3) {
  for (var y = -h + 0.15; y < 0; y += 0.3) {
    g.fillStyle = "rgba(255,230,190,0.05)";
    g.beginPath();
    g.arc(x + (((y * 10) | 0) % 2) * 0.15, y, 0.035, 0, 6.283);
    g.fill();
  }
}
g.fillStyle = "#3a2a20";
g.fillRect(-w / 2, -0.12, w, 0.12);
g.fillStyle = "rgba(0,0,0,0.25)";
g.fillRect(-w / 2, -h, w, 0.06);
var l = g.createRadialGradient(-3.0, -1.6, 0.2, -3.0, -1.6, 5);
l.addColorStop(0, "rgba(255,200,130,0.22)");
l.addColorStop(1, "rgba(0,0,0,0.25)");
g.fillStyle = l;
g.fillRect(-w / 2, -h, w, h);
