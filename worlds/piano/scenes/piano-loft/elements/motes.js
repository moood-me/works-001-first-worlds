var t = e.t;
var Lt = e.state.lights == null ? 1 : e.state.lights;
if (Lt < 0.05) return;
for (var i = 0; i < 34; i++) {
  var bx = (e.rnd() - 0.5) * 3,
    by = -0.5 - e.rnd() * 2.5,
    sp = 0.5 + e.rnd(),
    ph = e.rnd() * 6.28,
    r = 0.006 + e.rnd() * 0.006;
  var x = bx + Math.sin(t * 0.11 * sp + ph) * 0.25 + Math.sin(t * 0.07 + ph * 2) * 0.12;
  var y = by + Math.sin(t * 0.09 * sp + ph * 1.3) * 0.2;
  var a = (0.25 + 0.25 * Math.sin(t * 0.8 * sp + ph)) * Lt;
  g.fillStyle = "rgba(255,215,160," + a + ")";
  g.beginPath();
  g.arc(x, y, r, 0, 6.283);
  g.fill();
}
