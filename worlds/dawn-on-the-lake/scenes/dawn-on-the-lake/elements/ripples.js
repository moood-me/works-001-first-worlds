var A = e.aspect,
  H = 0.56,
  t = e.t;
for (var i = 0; i < 90; i++) {
  var k = Math.pow(e.rnd(), 1.8),
    y = H + 0.004 + k * 0.62,
    x = -0.35 + e.rnd() * (A + 0.7),
    len = (0.01 + k * 0.09) * (0.5 + e.rnd()),
    ph = e.rnd() * 6.28,
    f = 0.3 + e.rnd() * 0.6;
  var a = Math.max(0, Math.sin(t * f + ph)) * (0.16 - k * 0.08);
  if (a < 0.01) continue;
  var near = Math.abs(x - 0.66 * A) < 0.08 + k * 0.2;
  g.globalAlpha = near ? a * 2.2 : a;
  g.fillStyle = near ? "#ffd9b8" : "#c9c4d6";
  g.fillRect(x + Math.sin(t * 0.2 + ph) * 0.01, y, len, Math.max(e.px, 0.0015 + k * 0.002));
}
g.globalAlpha = 1;
