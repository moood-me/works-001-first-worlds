var A = e.aspect;
for (var i = 0; i < 46; i++) {
  var x = e.rnd() * (A + 0.7) - 0.35,
    y = -0.35 + Math.pow(e.rnd(), 1.4) * 0.6,
    s = e.rnd(),
    ph = e.rnd() * 6.283,
    fq = 0.3 + e.rnd() * 0.7;
  var dusk = Math.min(1, Math.max(0, (0.18 - y) / 0.4)) * (0.35 + 0.65 * Math.min(1, x / A + 0.3));
  var a = dusk * (0.35 + 0.4 * s) * (0.75 + 0.25 * Math.sin(e.t * fq + ph) * Math.sin(e.t * fq * 0.37 + ph * 2));
  if (a <= 0.02) continue;
  g.globalAlpha = a;
  g.fillStyle = "#dfe3f2";
  g.beginPath();
  g.arc(x, y, e.px * (0.6 + s * 0.9), 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
