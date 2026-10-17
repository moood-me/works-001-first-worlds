g.globalCompositeOperation = "lighter";
for (var i = 0; i < 46; i++) {
  var v = e.rnd(),
    y = 0.6 + Math.pow(v, 1.2) * 32,
    w = 0.3 + y * 0.07 + e.rnd() * 0.8,
    ph = e.rnd() * 6.283,
    f = 0.35 + e.rnd() * 0.6,
    cx = 0.25 + (e.rnd() - 0.5) * (0.4 + y * 0.06);
  var a = 0.5 + 0.5 * Math.sin(e.t * f + ph) * Math.sin(e.t * f * 0.53 + ph * 1.3);
  var core = Math.exp(-Math.pow((y - 18) / 11, 2));
  a *= 0.1 + 0.35 * core;
  if (a < 0.015) continue;
  g.fillStyle = "rgba(240,160,95," + a.toFixed(3) + ")";
  g.beginPath();
  g.ellipse(cx + Math.sin(e.t * 0.4 + ph) * 0.25 * (1 + y * 0.03), y, w / 2, 0.06 + y * 0.004, 0, 0, 6.283);
  g.fill();
}
g.globalCompositeOperation = "source-over";
