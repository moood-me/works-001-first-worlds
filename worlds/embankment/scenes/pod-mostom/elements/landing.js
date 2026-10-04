var L = e.state.lamp ? 1 : 0,
  d = e.state.dawn || 0;
g.fillStyle = "#2c2a33";
g.fillRect(-8, -4.15, 16, 8.3);
var o = g.createLinearGradient(0, -1.6, 0, -4.15);
o.addColorStop(0, "rgba(100,106,146,0)");
o.addColorStop(1, "rgba(110,116,156," + (0.35 + 0.25 * d) + ")");
g.fillStyle = o;
g.fillRect(-8, -4.15, 16, 2.6);
g.strokeStyle = "rgba(16,14,20,0.55)";
g.lineWidth = 0.025;
var j = 0;
for (var y = -3.75; y < 4.2; y += 0.8) {
  g.beginPath();
  g.moveTo(-8, y);
  g.lineTo(8, y);
  g.stroke();
  var off = j++ % 2 ? 0.6 : 0;
  for (var x = -8 + off; x < 8; x += 1.2) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x, y + 0.8);
    g.stroke();
  }
}
g.fillStyle = "#3a3843";
g.fillRect(-8, -4.15, 16, 0.4);
g.fillStyle = "rgba(150,155,190,0.12)";
g.fillRect(-8, -4.15, 16, 0.05);
for (x = -8; x < 8; x += 1.6) {
  g.fillStyle = "rgba(15,14,20,0.6)";
  g.fillRect(x, -4.15, 0.03, 0.4);
}
for (var i = 0; i < 8; i++) {
  var px = -6 + e.rnd() * 12,
    py = -3.3 + e.rnd() * 6.5,
    rw = 0.3 + e.rnd() * 0.9,
    rh = 0.12 + e.rnd() * 0.3;
  g.fillStyle = "rgba(125,132,175,0.13)";
  g.beginPath();
  g.ellipse(px, py, rw, rh, 0, 0, 6.283);
  g.fill();
}
if (L) {
  var p = g.createRadialGradient(-0.5, -0.5, 0, -0.5, -0.5, 3.8);
  p.addColorStop(0, "rgba(255,205,140,0.36)");
  p.addColorStop(0.4, "rgba(255,190,120,0.13)");
  p.addColorStop(1, "rgba(255,190,120,0)");
  g.fillStyle = p;
  g.fillRect(-4.4, -4.15, 8, 8.3);
}
var sh = g.createLinearGradient(-8, 0, 8, 0);
sh.addColorStop(0, "rgba(10,9,14,0.75)");
sh.addColorStop(0.3, "rgba(10,9,14,0)");
sh.addColorStop(0.7, "rgba(10,9,14,0)");
sh.addColorStop(1, "rgba(10,9,14,0.75)");
g.fillStyle = sh;
g.fillRect(-8, -1.9, 16, 6.1);
var nr = g.createLinearGradient(0, 1.5, 0, 4.15);
nr.addColorStop(0, "rgba(10,9,14,0)");
nr.addColorStop(1, "rgba(10,9,14,0.6)");
g.fillStyle = nr;
g.fillRect(-8, 1.5, 16, 2.65);
