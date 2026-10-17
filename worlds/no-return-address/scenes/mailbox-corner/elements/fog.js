for (var i = 0; i < 5; i++) {
  var cx = -50 + ((e.rnd() * 100 + e.t * 0.15 * (1 + i * 0.2)) % 100);
  var r = 12 + e.rnd() * 10;
  var cg = g.createRadialGradient(cx, -8, 0, cx, -8, r);
  cg.addColorStop(0, "rgba(70,74,84,0.22)");
  cg.addColorStop(1, "rgba(70,74,84,0)");
  g.save();
  g.scale(1, 0.25);
  g.fillStyle = cg;
  g.beginPath();
  g.arc(cx, -8, r, 0, 6.283);
  g.fill();
  g.restore();
}
