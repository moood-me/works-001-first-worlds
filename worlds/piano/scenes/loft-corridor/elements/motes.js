var t = e.t;
var L = e.state.sconceLit == null ? 1 : e.state.sconceLit;
if (L < 0.05) return;
for (var i = 0; i < 22; i++) {
  var bx = -0.4 + (e.rnd() - 0.5) * 2.2,
    by = -0.9 - e.rnd() * 1.8,
    sp = 0.5 + e.rnd(),
    ph = e.rnd() * 6.28,
    r = 0.004 + e.rnd() * 0.005;
  var x = bx + Math.sin(t * 0.1 * sp + ph) * 0.2 + Math.sin(t * 0.067 + ph * 2) * 0.1;
  var y = by + Math.sin(t * 0.083 * sp + ph * 1.3) * 0.16;
  var a = (0.2 + 0.2 * Math.sin(t * 0.7 * sp + ph)) * L;
  g.fillStyle = "rgba(255,215,160," + a + ")";
  g.beginPath();
  g.arc(x, y, r, 0, 6.283);
  g.fill();
}
