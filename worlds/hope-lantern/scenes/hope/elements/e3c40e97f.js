var t = e.t,
  lx = -0.72,
  fl = 0.86 + 0.09 * Math.sin(t * 7.3) + 0.05 * Math.sin(t * 12.7);
g.save();
g.translate(lx, 0.45);
g.scale(0.55, 0.6);
var pg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
pg.addColorStop(0, "rgba(255,170,95," + 0.13 * fl + ")");
pg.addColorStop(1, "rgba(255,170,95,0)");
g.fillStyle = pg;
g.fillRect(-1, -1, 2, 2);
g.restore();
for (var i = 0; i < 46; i++) {
  var f = e.rnd(),
    y = 0.03 + Math.pow(f, 1.3) * 1.6,
    ph = e.rnd() * 6.2832,
    sp = 0.5 + e.rnd() * 1.1,
    off = e.rnd() - 0.5,
    lw = e.rnd();
  var spread = 0.08 + y * 0.35;
  var x = lx + off * spread * 2 + Math.sin(t * sp * 0.4 + ph) * 0.04;
  var len = (0.05 + y * 0.3) * (0.4 + lw * 0.9);
  var a = (0.5 + 0.5 * Math.sin(t * sp + ph)) * (1 - Math.abs(off) * 1.6) * (1 - y / 1.75) * 0.75 * fl;
  if (a <= 0.02) continue;
  g.globalAlpha = a;
  g.fillStyle = lw > 0.7 ? "#ffe2b0" : "#ffae62";
  g.fillRect(x - len / 2, y, len, Math.max(e.px * 1.2, 0.012 + y * 0.01));
}
g.globalAlpha = 1;
var xs = [];
for (var j = 0; j < 8; j++) xs.push(-0.12 - j * 1.72 + 0.25 * Math.sin(j * 2.3));
g.lineWidth = 1.4 * e.px;
for (var j = 0; j < xs.length; j++) {
  for (var k = 0; k < 2; k++) {
    var q = (t / (8 + j * 0.7) + k * 0.5 + j * 0.37) % 1;
    var r = 0.12 + q * 0.55;
    var al = (1 - q) * (0.18 - k * 0.04);
    g.strokeStyle = (j == 0 ? "rgba(235,195,155," : "rgba(175,190,222,") + al + ")";
    g.beginPath();
    g.ellipse(xs[j], 0.02, r, r * 0.14, 0, 0, 6.2832);
    g.stroke();
  }
}
