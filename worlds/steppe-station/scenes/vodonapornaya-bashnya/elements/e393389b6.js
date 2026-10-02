var A = e.aspect,
  sx = 0.76 * A,
  W = A + 0.9;
for (var i = 0; i < 8; i++) {
  var y = 0.14 + e.rnd() * 0.36,
    len = 0.2 + e.rnd() * 0.5,
    sp = 0.0006 + e.rnd() * 0.001,
    x0 = e.rnd() * W,
    th = 0.005 + e.rnd() * 0.011,
    sd = e.rnd() * 10;
  var cx = ((x0 + e.t * sp) % W) - 0.45;
  var k = (y - 0.14) / 0.36;
  var nr = Math.max(0, 1 - Math.abs(cx - sx) / (A * 0.8));
  var R = Math.round(150 + 95 * k + 10 * nr),
    G = Math.round(80 + 75 * k + 20 * nr),
    B = Math.round(100 - 20 * k);
  var al = 0.28 + 0.3 * k + 0.25 * nr;
  for (var j = 0; j < 7; j++) {
    var u = (j / 6 - 0.5) * len;
    var ox = cx + u,
      oy = y + Math.sin(sd + j * 1.9) * th * 0.7;
    var rw = len * (0.14 + 0.08 * Math.sin(sd * 1.3 + j * 2.1)),
      rh = th * (0.8 + 0.4 * Math.cos(sd * 0.7 + j * 2.7));
    g.save();
    g.translate(ox, oy);
    g.scale(rw, rh);
    var c = g.createRadialGradient(0, 0.3, 0, 0, 0, 1);
    c.addColorStop(0, "rgba(" + R + "," + G + "," + B + "," + (al * 0.8).toFixed(3) + ")");
    c.addColorStop(0.6, "rgba(" + R + "," + G + "," + B + "," + (al * 0.3).toFixed(3) + ")");
    c.addColorStop(1, "rgba(" + R + "," + G + "," + B + ",0)");
    g.fillStyle = c;
    g.beginPath();
    g.arc(0, 0, 1, 0, 6.283);
    g.fill();
    g.restore();
  }
}
var bx = sx - 0.2 + 0.02 * Math.sin(e.t * 0.01);
for (var j = 0; j < 9; j++) {
  var ox = bx + j * 0.05,
    oy = 0.588 + Math.sin(j * 1.3) * 0.002;
  g.save();
  g.translate(ox, oy);
  g.scale(0.06, 0.0035);
  var c2 = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  c2.addColorStop(0, "rgba(150,72,64,0.45)");
  c2.addColorStop(1, "rgba(150,72,64,0)");
  g.fillStyle = c2;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
}
