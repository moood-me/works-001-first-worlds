var t = e.t;
var b = g.createLinearGradient(0, -60, 0, 10);
b.addColorStop(0, "rgba(228,226,234,0)");
b.addColorStop(1, "rgba(232,228,232,0.55)");
g.fillStyle = b;
g.fillRect(-7000, -60, 14000, 80);
for (var i = 0; i < 16; i++) {
  var bx = (e.rnd() - 0.5) * 14000,
    by = -10 - e.rnd() * 55,
    w = 600 + e.rnd() * 1600,
    h = 10 + e.rnd() * 26,
    sp = (e.rnd() - 0.5) * 6,
    a = 0.18 + e.rnd() * 0.22;
  var x = bx + t * sp + Math.sin(t * 0.05 + i) * 80;
  g.save();
  g.translate(x, by);
  g.scale(w, h);
  var rg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  rg.addColorStop(0, "rgba(240,232,232," + a + ")");
  rg.addColorStop(1, "rgba(240,232,232,0)");
  g.fillStyle = rg;
  g.fillRect(-1, -1, 2, 2);
  g.restore();
}
