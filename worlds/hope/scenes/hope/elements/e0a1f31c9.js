var t = e.t;
for (var i = 0; i < 18; i++) {
  var bx = (e.rnd() - 0.5) * 12;
  var by = -0.4 - e.rnd() * 3.2;
  var ph = e.rnd() * 6.283;
  var f1 = 0.05 + e.rnd() * 0.08,
    f2 = 0.07 + e.rnd() * 0.09;
  var rs = 0.8 + e.rnd() * 0.9;
  var x = bx + Math.sin(t * f1 + ph) * 0.6 + t * 0.012;
  x = ((((x + 7) % 14) + 14) % 14) - 7;
  var y = by + Math.sin(t * f2 + ph * 1.3) * 0.25;
  var a = 0.12 + 0.12 * Math.sin(t * f2 * 4 + ph);
  if (a < 0.02) continue;
  g.globalAlpha = a;
  g.fillStyle = "#c8ccd6";
  g.beginPath();
  g.arc(x, y, rs * e.px, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
