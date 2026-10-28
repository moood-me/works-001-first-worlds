var W = 160,
  Hh = 72;
g.fillStyle = "#d6dbea";
for (var i = 0; i < 70; i++) {
  var x0 = e.rnd() * W,
    y0 = e.rnd() * Hh,
    v = 0.5 + e.rnd() * 0.5,
    ph = e.rnd() * 6.283,
    s = e.rnd();
  var y = ((y0 + e.t * v) % Hh) - 69;
  var x = ((((x0 + e.t * 0.25 + Math.sin(e.t * 0.4 * v + ph) * 1.2) % W) + W) % W) - 80;
  g.globalAlpha = 0.35 + s * 0.4;
  g.beginPath();
  g.arc(x, y, e.px * (0.8 + s * 0.9), 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
