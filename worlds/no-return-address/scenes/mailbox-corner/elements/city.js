var s = e.state;
var xs = -90;
var i = 0;
while (xs < 90) {
  var w = 6 + e.rnd() * 10;
  var h = 10 + e.rnd() * 22;
  g.fillStyle = i % 2 ? "#151920" : "#191d25";
  g.fillRect(xs, -h, w + 0.3, h);
  for (var wy = -h + 2; wy < -2; wy += 2.4) {
    for (var wx = xs + 1; wx < xs + w - 1; wx += 1.8) {
      if (e.rnd() > 0.93) {
        g.fillStyle = "rgba(214,170,100," + (0.3 + 0.3 * e.rnd()) + ")";
        g.fillRect(wx, wy, 0.8, 1.1);
      }
    }
  }
  xs += w;
  i++;
}
if (s.car) {
  var k = 0.7 + 0.3 * Math.sin(e.t * 0.7);
  e.light(-3, -0.8, 3, "#f3e2b0", 0.7 * k);
  e.light(-1.4, -0.8, 3, "#f3e2b0", 0.7 * k);
}
