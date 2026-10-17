var s = e.state;
var n = Math.round(260 * s.rain);
g.lineWidth = 0.012;
for (var i = 0; i < n; i++) {
  var x0 = -10 + e.rnd() * 20,
    sp = 7 + e.rnd() * 4,
    off = e.rnd() * 8,
    len = 0.25 + e.rnd() * 0.25;
  var y = ((e.t * sp + off) % 8) - 8;
  var x = x0 + y * 0.08;
  g.strokeStyle = "rgba(190,195,205,0.18)";
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x - len * 0.08, y + len);
  g.stroke();
}
