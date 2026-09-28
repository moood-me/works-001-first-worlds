var T = Math.PI * 2,
  cols = ["#ff5fd0", "#4fd8ee", "#ffe45a", "#b58cff", "#ff9a6a"];
for (var i = 0; i < 70; i++) {
  var x0 = -6 + e.rnd() * 12,
    v = 0.12 + e.rnd() * 0.22,
    off = e.rnd() * 8,
    ph = e.rnd() * T,
    rs = 1 + e.rnd() * 2.5,
    sz = 0.03 + e.rnd() * 0.03,
    ci = Math.floor(e.rnd() * 5),
    dr = 0.2 + e.rnd() * 0.4;
  var y = -7.6 + ((e.t * v + off) % 7.7),
    x = x0 + dr * Math.sin(e.t * 0.4 + ph) + 0.1 * Math.sin(e.t * 1.3 + ph * 2),
    fl = Math.cos(e.t * rs + ph);
  g.save();
  g.translate(x, y);
  g.rotate(ph + e.t * 0.3 * (i % 2 ? 1 : -1));
  g.scale(1, Math.max(0.08, Math.abs(fl)));
  g.globalAlpha = 0.3 + 0.4 * (fl > 0 ? 1 : 0.5);
  g.fillStyle = cols[ci];
  g.fillRect(-sz, -sz * 0.6, sz * 2, sz * 1.2);
  g.restore();
}
g.globalAlpha = 1;
