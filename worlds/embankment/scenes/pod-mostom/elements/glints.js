var A = e.aspect,
  H = 0.5,
  t = e.t,
  d = e.state.dawn || 0;
g.globalCompositeOperation = "lighter";
for (var i = 0; i < 160; i++) {
  var k = Math.pow(e.rnd(), 1.6),
    y = H + 0.003 + k * 0.2,
    x = -0.35 + e.rnd() * (A + 0.7),
    ph = e.rnd() * 6.28,
    sp = 0.5 + e.rnd(),
    warm = e.rnd() < 0.8,
    a = Math.max(0, Math.sin(t * sp + ph)) * 0.35 * (1 - k) * (1 - 0.6 * d);
  if (a < 0.02) continue;
  g.globalAlpha = a;
  g.fillStyle = warm ? "#ffcf8f" : "#b9cbff";
  g.fillRect(x, y, 0.006 + k * 0.02, Math.max(e.px, 0.0015));
}
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
