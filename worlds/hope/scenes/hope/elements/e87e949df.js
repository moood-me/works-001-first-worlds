var A = e.aspect,
  W = A + 1.2,
  mx = 0.8 * A,
  my = 0.2;
for (var c = 0; c < 7; c++) {
  var cy = -0.2 + e.rnd() * 0.55;
  var cw = 0.25 + e.rnd() * 0.55;
  var sp = 0.0006 + e.rnd() * 0.001;
  var x0 = e.rnd() * W;
  var cx = ((x0 + e.t * sp) % W) - 0.6;
  var th = 0.008 + e.rnd() * 0.018;
  var n = 4 + Math.floor(e.rnd() * 4);
  var dm = Math.sqrt((cx - mx) * (cx - mx) + (cy - my) * (cy - my));
  var lit = Math.max(0, 1 - dm / 0.45);
  var r = Math.round(58 + 70 * lit),
    gg = Math.round(66 + 68 * lit),
    b = Math.round(84 + 62 * lit);
  for (var j = 0; j < n; j++) {
    var px = cx + (j / (n - 1) - 0.5) * cw * 0.8 + (e.rnd() - 0.5) * cw * 0.2;
    var py = cy + (e.rnd() - 0.5) * th * 1.2;
    var rx = cw * (0.18 + e.rnd() * 0.22);
    var ry = th * (0.6 + e.rnd() * 0.8);
    var a = (0.22 + e.rnd() * 0.18) * (0.8 + 0.2 * Math.sin(e.t * 0.03 + j * 1.7 + c));
    g.save();
    g.translate(px, py);
    g.scale(rx, ry);
    var rg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
    rg.addColorStop(0, "rgba(" + r + "," + gg + "," + b + "," + a.toFixed(3) + ")");
    rg.addColorStop(0.6, "rgba(" + r + "," + gg + "," + b + "," + (a * 0.5).toFixed(3) + ")");
    rg.addColorStop(1, "rgba(" + r + "," + gg + "," + b + ",0)");
    g.fillStyle = rg;
    g.beginPath();
    g.arc(0, 0, 1, 0, 6.283);
    g.fill();
    g.restore();
  }
}
