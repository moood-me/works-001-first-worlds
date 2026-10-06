var S = e.state || {},
  w = e.lib.slow(e);
var L = S.lamp == null ? 0.75 : S.lamp;
var cols = ["#9a6a2a", "#7a4a22", "#a8742e", "#6e3a20"];
for (var i = 0; i < 9; i++) {
  var x0 = (e.rnd() - 0.5) * 6.4,
    sp = 0.16 + e.rnd() * 0.12,
    off = e.rnd() * 40,
    sz = 0.045 + e.rnd() * 0.025,
    ph = e.rnd() * 6;
  var fall = 5 / sp,
    cyc = fall + 8,
    tt = (w + off) % cyc,
    y = -5 + tt * sp,
    a = 1;
  if (y > -0.02) {
    y = -0.02;
    a = Math.max(0, 1 - (tt - fall) / 8);
  }
  var air = y < -0.03;
  var xx =
      x0 +
      (air
        ? Math.sin(w * 0.7 + ph) * 0.35 + Math.sin(w * 0.31 + ph * 2) * 0.2
        : Math.sin(fall * 0.7 + ph) * 0.35 + Math.sin(fall * 0.31 + ph * 2) * 0.2),
    rot = air ? Math.sin(w * 1.1 + ph) * 1.3 : ph;
  var gl = Math.max(0, 1 - Math.hypot(xx + 0.73, y + 2.2) / 1.8) * L;
  g.save();
  g.translate(xx, y);
  g.rotate(rot);
  g.scale(1, air ? 0.55 + 0.45 * Math.sin(w * 1.7 + ph) : 0.5);
  g.globalAlpha = a * 0.9;
  g.fillStyle = cols[i % 4];
  g.beginPath();
  g.ellipse(0, 0, sz, sz * 0.55, 0, 0, Math.PI * 2);
  g.fill();
  if (gl > 0.01) {
    g.fillStyle = "rgba(255,205,140," + gl * 0.7 + ")";
    g.fill();
  }
  g.restore();
}
g.globalAlpha = 1;
