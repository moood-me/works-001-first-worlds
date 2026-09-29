var W = 52,
  Hh = 23.5;
g.fillStyle = "#dde1ee";
for (var i = 0; i < 46; i++) {
  var x0 = e.rnd() * W,
    y0 = e.rnd() * Hh,
    v = 0.55 + e.rnd() * 0.3,
    ph = e.rnd() * 6.283,
    s = e.rnd();
  var y = ((y0 + e.t * v) % Hh) - 22;
  var x =
    ((((x0 + e.t * 0.2 + Math.sin(e.t * 0.35 * v + ph) * 0.6 + Math.sin(e.t * 0.13 + ph * 2) * 0.4) % W) + W) % W) - 26;
  g.globalAlpha = 0.45 + s * 0.35;
  g.beginPath();
  g.arc(x, y, e.px * (1.1 + s * 1.3), 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
