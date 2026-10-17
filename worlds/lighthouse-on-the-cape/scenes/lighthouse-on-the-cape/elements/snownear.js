var W = 16,
  Hh = 8.8;
for (var i = 0; i < 18; i++) {
  var x0 = e.rnd() * W,
    y0 = e.rnd() * Hh,
    v = 0.35 + e.rnd() * 0.25,
    ph = e.rnd() * 6.283,
    s = e.rnd();
  var y = ((y0 + e.t * v) % Hh) - 8;
  var x =
    ((((x0 + e.t * 0.08 + Math.sin(e.t * 0.3 + ph) * 0.25 + Math.sin(e.t * 0.71 + ph * 1.6) * 0.08) % W) + W) % W) - 8;
  var r = 0.01 + s * 0.014;
  g.globalAlpha = 0.18;
  g.fillStyle = "#e4e7f2";
  g.beginPath();
  g.arc(x, y, r * 2.2, 0, 6.283);
  g.fill();
  g.globalAlpha = 0.55 + s * 0.3;
  g.beginPath();
  g.arc(x, y, r, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
