var w = e.aspect,
  T = Math.PI * 2;
for (var i = 0; i < 5; i++) {
  var y = 0.34 + i * 0.04 + e.rnd() * 0.02,
    len = 0.25 + e.rnd() * 0.45,
    th = 0.005 + e.rnd() * 0.009,
    sp = 0.003 + e.rnd() * 0.004,
    a = 0.12 + e.rnd() * 0.12,
    x = ((e.rnd() * (w + 1) + e.t * sp) % (w + 1)) - 0.5;
  var lg = g.createLinearGradient(x - len / 2, 0, x + len / 2, 0);
  lg.addColorStop(0, "rgba(255,130,205,0)");
  lg.addColorStop(0.5, "rgba(255,150,215,1)");
  lg.addColorStop(1, "rgba(255,130,205,0)");
  g.globalAlpha = a;
  g.fillStyle = lg;
  g.beginPath();
  g.ellipse(x, y, len / 2, th, 0, 0, T);
  g.fill();
  g.beginPath();
  g.ellipse(x + len * 0.12, y - th * 0.8, len * 0.3, th * 0.6, 0, 0, T);
  g.fill();
}
g.globalAlpha = 1;
