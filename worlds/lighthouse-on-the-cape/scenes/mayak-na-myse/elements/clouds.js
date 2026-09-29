var A = e.aspect;
var dr = e.t * 0.0015;
for (var b = 0; b < 8; b++) {
  var cy = 0.22 + e.rnd() * 0.32,
    cx = e.rnd() * (A + 0.8) - 0.4,
    L = 0.3 + e.rnd() * 0.8,
    th = 0.006 + e.rnd() * 0.014,
    sp = 0.6 + e.rnd() * 0.8;
  var x0 = ((cx + dr * sp + 0.6) % (A + 1.2)) - 0.6;
  for (var k = 0; k < 14; k++) {
    var u = k / 13,
      px = x0 + (u - 0.5) * L + (e.rnd() - 0.5) * 0.05,
      py = cy + (e.rnd() - 0.5) * th * 1.5 + Math.sin(u * 3 + b) * th * 0.6,
      rx = L * (0.08 + e.rnd() * 0.1),
      ry = th * (0.6 + e.rnd() * 0.8) * (1 - Math.abs(u - 0.5) * 1.2),
      al = 0.3 + e.rnd() * 0.25;
    if (ry <= 0 || rx <= 0) continue;
    var warm = Math.max(0, 1 - Math.abs(px - 0.22 * A) / (0.8 * A)) * Math.min(1, Math.max(0, (cy - 0.2) / 0.3));
    g.save();
    g.translate(px, py);
    g.scale(1, ry / rx);
    var rg = g.createRadialGradient(0, 0, 0, 0, 0, rx);
    var c =
      "rgba(" + Math.round(58 + warm * 110) + "," + Math.round(58 + warm * 60) + "," + Math.round(84 + warm * 30) + ",";
    rg.addColorStop(0, c + al.toFixed(3) + ")");
    rg.addColorStop(1, c + "0)");
    g.fillStyle = rg;
    g.beginPath();
    g.arc(0, 0, rx, 0, 6.283);
    g.fill();
    g.restore();
  }
}
