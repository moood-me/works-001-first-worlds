var A = e.aspect,
  H = 0.48,
  t = e.t;
g.globalCompositeOperation = "lighter";
for (var i = 0; i < 160; i++) {
  var k = Math.pow(e.rnd(), 1.6),
    y = H + 0.003 + k * 0.2,
    x = -0.35 + e.rnd() * (A + 0.7),
    ph = e.rnd() * 6.28,
    a = Math.max(0, Math.sin(t * (0.5 + e.rnd()) + ph)) * 0.35 * (1 - k);
  if (a < 0.02) continue;
  g.globalAlpha = a;
  g.fillStyle = e.rnd() < 0.8 ? "#ffcf8f" : "#b9cbff";
  g.fillRect(x, y, 0.006 + k * 0.02, Math.max(e.px, 0.0015));
}
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
