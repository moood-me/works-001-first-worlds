var W = e.aspect,
  t = e.t;
for (var i = 0; i < 6; i++) {
  var cy = 0.06 + e.rnd() * 0.38,
    cx = e.rnd(),
    len = 0.22 + e.rnd() * 0.5,
    th = 0.007 + e.rnd() * 0.016,
    sp = 0.0005 + e.rnd() * 0.0009,
    n = 4 + Math.floor(e.rnd() * 5);
  var span = W + len * 2;
  var x0 = ((cx * span + t * sp) % span) - len;
  var low = Math.min(1, Math.max(0, (cy - 0.2) / 0.25));
  var col = low > 0.5 ? "150,132,160" : "70,76,112";
  var al = 0.22 + low * 0.12;
  for (var k = 0; k < n; k++) {
    var ox = x0 + (e.rnd() - 0.5) * len,
      oy = cy + (e.rnd() - 0.5) * th * 1.6,
      rx = len * (0.16 + e.rnd() * 0.3),
      ry = th * (0.5 + e.rnd() * 0.9);
    g.save();
    g.translate(ox, oy);
    g.scale(rx, ry);
    var gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
    gr.addColorStop(0, "rgba(" + col + "," + al + ")");
    gr.addColorStop(0.6, "rgba(" + col + "," + al * 0.4 + ")");
    gr.addColorStop(1, "rgba(" + col + ",0)");
    g.fillStyle = gr;
    g.fillRect(-1, -1, 2, 2);
    g.restore();
  }
}
