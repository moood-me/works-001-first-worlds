var t = e.t,
  S = e.state.surf_height || 0;
for (var i = 0; i < 5; i++) {
  var x = ((e.rnd() * 40 + t * (0.8 + e.rnd() * 0.6)) % 40) - 22,
    y = -1 - e.rnd() * 3,
    rx = 3 + e.rnd() * 5,
    ry = 0.8 + e.rnd() * 1.2;
  g.save();
  g.translate(x, y);
  g.scale(1, ry / rx);
  var r = g.createRadialGradient(0, 0, 0, 0, 0, rx);
  r.addColorStop(0, "rgba(170,184,210," + (0.05 + 0.09 * S).toFixed(3) + ")");
  r.addColorStop(1, "rgba(170,184,210,0)");
  g.fillStyle = r;
  g.beginPath();
  g.arc(0, 0, rx, 0, 6.283);
  g.fill();
  g.restore();
}
var W = 28,
  Hh = 11;
g.fillStyle = "#dde3f0";
for (var i = 0; i < 60; i++) {
  var x0 = e.rnd() * W,
    y0 = e.rnd() * Hh,
    v = 0.6 + e.rnd() * 0.6,
    ph = e.rnd() * 6.283,
    s = e.rnd();
  var y = ((y0 + t * v * 0.8) % Hh) - 10;
  var x = ((((x0 + t * (2.2 + v * 1.5) + Math.sin(t * 0.9 * v + ph) * 0.5) % W) + W) % W) - 14;
  g.globalAlpha = 0.3 + s * 0.4;
  g.beginPath();
  g.ellipse(x, y, e.px * (1.4 + s * 2.2), e.px * (0.9 + s * 1.2), 0.3, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
