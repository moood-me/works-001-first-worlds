var w = 8,
  h = 2.8;
g.fillStyle = "#6b5a48";
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
var l = g.createRadialGradient(2.0, -1.6, 0.2, 2.0, -1.6, 5);
l.addColorStop(0, "rgba(255,200,130,0.22)");
l.addColorStop(1, "rgba(0,0,0,0.25)");
g.fillStyle = l;
g.fillRect(-w / 2, -h, w, h);

g.save();
g.globalCompositeOperation = "destination-out";
g.fillRect(-0.7, -2.2, 1.4, 1.3);
g.restore();
g.fillStyle = "#2a1e16";
g.fillRect(-0.78, -2.28, 1.56, 0.08);
g.fillRect(-0.78, -0.98, 1.56, 0.1);
g.fillRect(-0.78, -2.28, 0.08, 1.38);
g.fillRect(0.7, -2.28, 0.08, 1.38);
g.fillRect(-0.03, -2.2, 0.06, 1.3);
g.fillRect(-0.7, -1.6, 1.4, 0.05);
g.fillStyle = "#5a2a2a";
g.fillRect(-1.15, -2.45, 0.35, 1.75);
g.fillRect(0.8, -2.45, 0.35, 1.75);
