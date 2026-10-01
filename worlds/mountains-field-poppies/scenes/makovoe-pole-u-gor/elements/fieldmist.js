var t = e.t;
for (var i = 0; i < 18; i++) {
  var bx = (e.rnd() - 0.5) * 800,
    by = -0.3 - e.rnd() * 2.6,
    w = 25 + e.rnd() * 80,
    h = 0.6 + e.rnd() * 1.6,
    sp = (e.rnd() - 0.5) * 0.5,
    a = 0.1 + e.rnd() * 0.16;
  var x = bx + t * sp + Math.sin(t * 0.07 + i * 1.3) * 6;
  g.save();
  g.translate(x, by);
  g.scale(w, h);
  var rg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  rg.addColorStop(0, "rgba(246,234,224," + a + ")");
  rg.addColorStop(1, "rgba(246,234,224,0)");
  g.fillStyle = rg;
  g.fillRect(-1, -1, 2, 2);
  g.restore();
}
