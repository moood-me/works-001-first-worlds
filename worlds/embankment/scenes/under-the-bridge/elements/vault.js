var L = e.state.lamp ? 1 : 0;
g.fillStyle = "#1c1a22";
g.fillRect(-6, -3.05, 12, 6.1);
g.strokeStyle = "rgba(10,9,13,0.6)";
g.lineWidth = 0.025;
var j = 0;
for (var x = -6; x < 6; x += 0.3) {
  g.beginPath();
  g.moveTo(x, -3.05);
  g.lineTo(x, 3.05);
  g.stroke();
  var off = j++ % 2 ? 0.3 : 0;
  for (var y = -3.05 + off; y < 3.05; y += 0.6) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + 0.3, y);
    g.stroke();
  }
}
for (var i = 0; i < 6; i++) {
  var px = -5 + e.rnd() * 10,
    py = -2.8 + e.rnd() * 5.6,
    r = 0.4 + e.rnd() * 1.2;
  var sg = g.createRadialGradient(px, py, 0, px, py, r);
  sg.addColorStop(0, "rgba(6,6,10,0.45)");
  sg.addColorStop(1, "rgba(6,6,10,0)");
  g.fillStyle = sg;
  g.fillRect(px - r, py - r, 2 * r, 2 * r);
}
if (L) {
  var p = g.createRadialGradient(-0.5, -1.65, 0, -0.5, -1.65, 3);
  p.addColorStop(0, "rgba(255,200,140,0.3)");
  p.addColorStop(1, "rgba(255,200,140,0)");
  g.fillStyle = p;
  g.fillRect(-3.5, -3.05, 6, 6.1);
}
var nr = g.createLinearGradient(0, 0, 0, 3.05);
nr.addColorStop(0, "rgba(6,6,10,0)");
nr.addColorStop(1, "rgba(6,6,10,0.6)");
g.fillStyle = nr;
g.fillRect(-6, 0, 12, 3.05);
