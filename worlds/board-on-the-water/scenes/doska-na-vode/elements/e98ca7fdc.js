var W = e.aspect,
  t = e.t,
  i;
for (i = 0; i < 34; i++) {
  var x = e.rnd() * W,
    y = -0.35 + Math.pow(e.rnd(), 1.4) * 0.52,
    r = (0.5 + e.rnd() * 1.1) * e.px,
    w = 0.15 + e.rnd() * 0.5,
    ph = e.rnd() * 6.283,
    b = 0.3 + e.rnd() * 0.6,
    f = Math.max(0, Math.min(1, (0.17 - y) / 0.25));
  var a = b * f * (0.7 + 0.3 * Math.sin(t * w + ph) * Math.sin(t * w * 0.37 + ph * 2));
  if (a < 0.02) continue;
  g.globalAlpha = a;
  g.fillStyle = "#f5e9ff";
  g.beginPath();
  g.arc(x, y, r, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
