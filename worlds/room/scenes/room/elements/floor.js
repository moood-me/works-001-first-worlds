g.fillStyle = "#5a3a24";
g.fillRect(-4, -3.5, 8, 7);
for (var y = -3.5; y < 3.5; y += 0.18) {
  g.fillStyle = "rgba(0,0,0,0.18)";
  g.fillRect(-4, y, 8, 0.012);
  for (var x = -4 + ((y * 7) % 1.2); x < 4; x += 1.2) {
    g.fillRect(x, y, 0.012, 0.18);
  }
}
g.fillStyle = "#7a2f2a";
g.fillRect(-1.5, -1.6, 3, 2);
g.strokeStyle = "#d8b070";
g.lineWidth = 0.05;
g.strokeRect(-1.4, -1.5, 2.8, 1.8);
var l = g.createRadialGradient(2, -2, 0.1, 2, -2, 5);
l.addColorStop(0, "rgba(255,200,130,0.25)");
l.addColorStop(1, "rgba(0,0,0,0.3)");
g.fillStyle = l;
g.fillRect(-4, -3.5, 8, 7);
