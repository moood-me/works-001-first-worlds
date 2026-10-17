var A = e.aspect;
var dr = e.t * 0.005;
for (var b = 0; b < 9; b++) {
  var cy = 0.12 + e.rnd() * 0.38,
    cx = e.rnd() * (A + 0.8) - 0.4,
    L = 0.3 + e.rnd() * 0.9,
    th = 0.005 + e.rnd() * 0.016,
    sp = 0.6 + e.rnd() * 0.8;
  var x0 = ((cx + dr * sp + 0.6) % (A + 1.2)) - 0.6;
  for (var k = 0; k < 14; k++) {
    var u = k / 13,
      px = x0 + (u - 0.5) * L + (e.rnd() - 0.5) * 0.06,
      py = cy + (e.rnd() - 0.5) * th * 1.5 + Math.sin(u * 3 + b) * th * 0.6 - u * th * 1.2,
      rx = L * (0.07 + e.rnd() * 0.1),
      ry = th * (0.6 + e.rnd() * 0.8) * (1 - Math.abs(u - 0.5) * 1.2),
      al = 0.28 + e.rnd() * 0.25;
    if (ry <= 0 || rx <= 0) continue;
    var warm = Math.max(0, 1 - Math.abs(px - 0.08 * A) / (0.7 * A)) * Math.min(1, Math.max(0, (cy - 0.25) / 0.25));
    g.save();
    g.translate(px, py);
    g.scale(1, ry / rx);
    var rg = g.createRadialGradient(0, 0, 0, 0, 0, rx);
    var c =
      "rgba(" + Math.round(50 + warm * 80) + "," + Math.round(62 + warm * 40) + "," + Math.round(92 + warm * 20) + ",";
    rg.addColorStop(0, c + al.toFixed(3) + ")");
    rg.addColorStop(1, c + "0)");
    g.fillStyle = rg;
    g.beginPath();
    g.arc(0, 0, rx, 0, 6.283);
    g.fill();
    g.restore();
  }
}
