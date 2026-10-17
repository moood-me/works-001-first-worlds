var g0 = g.createLinearGradient(0, -24, 0, 2);
g0.addColorStop(0, "rgba(232,170,120,0)");
g0.addColorStop(0.7, "rgba(236,178,128,0.2)");
g0.addColorStop(1, "rgba(236,178,128,0.08)");
g.fillStyle = g0;
g.fillRect(-1700, -24, 3400, 26);
for (var i = 0; i < 10; i++) {
  var x0 = e.rnd() * 3400,
    w = 180 + e.rnd() * 420,
    h = 2.5 + e.rnd() * 5,
    yy = -3.5 - e.rnd() * 9,
    sp = 1.2 + e.rnd() * 2.2;
  var x = ((x0 + e.t * sp) % 3400) - 1700;
  g.save();
  g.translate(x, yy);
  g.scale(w, h);
  var f = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  f.addColorStop(0, "rgba(240,186,138,0.22)");
  f.addColorStop(1, "rgba(240,186,138,0)");
  g.fillStyle = f;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
}
