var s = e.state;
g.fillStyle = "#101216";
g.fillRect(-30, -20, 60, 40);
g.fillStyle = "#16181c";
g.fillRect(-30, 9, 60, 11);
g.fillStyle = "#08090b";
g.fillRect(-30, 8.8, 60, 0.2);
g.strokeStyle = "rgba(0,0,0,0.3)";
g.lineWidth = 0.04;
for (var x = -30; x < 30; x += 1.2) {
  g.beginPath();
  g.moveTo(x, 9);
  g.lineTo(x, 20);
  g.stroke();
}
for (var i = 0; i < 14; i++) {
  var px = -20 + e.rnd() * 40,
    py = -15 + e.rnd() * 32,
    pr = 0.8 + e.rnd() * 2.2;
  g.fillStyle = "rgba(42,48,60,0.45)";
  g.beginPath();
  g.ellipse(px, py, pr, pr * 0.6, e.rnd() * 3, 0, 6.283);
  g.fill();
}
var L = s.lamp;
var lg = g.createRadialGradient(-3, 11, 0, -3, 11, 8);
lg.addColorStop(0, "rgba(220,170,105," + 0.2 * L + ")");
lg.addColorStop(1, "rgba(220,170,105,0)");
g.fillStyle = lg;
g.fillRect(-12, 2, 18, 18);
var n = Math.round(50 * s.rain);
for (var j = 0; j < n; j++) {
  var rx = -18 + e.rnd() * 36,
    ry = -10 + e.rnd() * 30,
    off = e.rnd(),
    sp = 0.6 + e.rnd() * 0.7;
  var p = (e.t * sp + off) % 1;
  g.strokeStyle = "rgba(170,175,185," + 0.3 * (1 - p) + ")";
  g.lineWidth = 0.03;
  g.beginPath();
  g.arc(rx, ry, 0.04 + p * 0.3, 0, 6.283);
  g.stroke();
}
