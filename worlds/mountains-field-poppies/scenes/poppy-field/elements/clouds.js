var A = e.aspect;
for (var i = 0; i < 11; i++) {
  var bx = e.rnd() * (A + 0.8) - 0.4,
    by = 0.06 + e.rnd() * 0.3,
    w = 0.12 + e.rnd() * 0.3,
    sp = 0.0008 + e.rnd() * 0.0012,
    a = 0.16 + e.rnd() * 0.2;
  var cx = ((bx + e.t * sp + 0.4) % (A + 0.8)) - 0.4;
  var warm = Math.max(0, 1 - cx / A);
  var c = warm > 0.45 ? "255,214,196" : "236,226,236";
  for (var j = 0; j < 9; j++) {
    var ox = (e.rnd() - 0.5) * w,
      oy = (e.rnd() - 0.5) * 0.014,
      rr = 0.006 + e.rnd() * 0.014,
      sx = 5 + e.rnd() * 6;
    g.save();
    g.translate(cx + ox, by + oy);
    g.scale(sx, 1);
    var rg = g.createRadialGradient(0, 0, 0, 0, 0, rr);
    rg.addColorStop(0, "rgba(" + c + "," + a + ")");
    rg.addColorStop(1, "rgba(" + c + ",0)");
    g.fillStyle = rg;
    g.beginPath();
    g.arc(0, 0, rr, 0, 6.2832);
    g.fill();
    g.restore();
  }
}
