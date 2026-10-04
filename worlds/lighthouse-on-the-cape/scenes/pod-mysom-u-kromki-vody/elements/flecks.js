var t = e.t,
  W = 10,
  Hh = 5.6;
for (var i = 0; i < 14; i++) {
  var x0 = e.rnd() * W,
    y0 = e.rnd() * Hh,
    v = 0.5 + e.rnd() * 0.4,
    ph = e.rnd() * 6.283,
    s = e.rnd();
  var y = ((y0 + t * v * 0.6) % Hh) - 5;
  var x = ((((x0 + t * (1.1 + v) + Math.sin(t * 0.7 + ph) * 0.15) % W) + W) % W) - 5;
  var r = 0.008 + s * 0.012;
  g.globalAlpha = 0.15;
  g.fillStyle = "#e4e8f2";
  g.beginPath();
  g.arc(x, y, r * 2.4, 0, 6.283);
  g.fill();
  g.globalAlpha = 0.5 + s * 0.3;
  g.beginPath();
  g.ellipse(x, y, r * 1.4, r, 0.3, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
