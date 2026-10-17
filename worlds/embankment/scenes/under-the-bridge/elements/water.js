var t = e.t,
  d = e.state.dawn || 0;
for (var i = 0; i < 300; i++) {
  var y = -32 + e.rnd() * 64,
    x = -80 + e.rnd() * 160,
    len = 0.6 + e.rnd() * 2.6,
    ph = e.rnd() * 6.28,
    dist = 40 - y,
    a = 0.05 + 0.1 * Math.max(0, Math.sin(t * 0.6 + ph));
  var dx = Math.sin(t * 0.25 + ph) * 0.5;
  g.fillStyle = "rgba(170,176,214," + a + ")";
  g.fillRect(x + dx, y, len * (1 + dist * 0.03), 0.02 + 0.0006 * dist * dist);
}
for (var j = 0; j < 80; j++) {
  var dd = 12 + Math.pow(e.rnd(), 0.8) * 58,
    yy = 40 - dd,
    xx = 0.21 * dd + (e.rnd() - 0.5) * dd * 0.06,
    p2 = e.rnd() * 6.28,
    sp = 0.7 + e.rnd() * 0.6,
    a2 = Math.max(0, Math.sin(t * sp + p2)) * 0.45 * (1 - 0.5 * d);
  if (a2 < 0.02) continue;
  var ww = 0.3 + dd * 0.03;
  g.fillStyle = "rgba(239,226,196," + a2 + ")";
  g.fillRect(xx - ww / 2, yy, ww, 0.03 + 0.0008 * dd * dd);
}
