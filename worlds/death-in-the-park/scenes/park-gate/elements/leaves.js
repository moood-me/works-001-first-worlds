var t = e.t,
  cols = ["#8a5a26", "#a0682c", "#6e2e1e", "#7a4a22"];
for (var i = 0; i < 11; i++) {
  var r1 = e.rnd(),
    r2 = e.rnd(),
    r3 = e.rnd(),
    r4 = e.rnd();
  var sp = 0.22 + r2 * 0.18;
  var T = ((t * sp) / 6.5 + r1) % 1;
  var y = -6.6 + T * 6.62;
  var x = -9.5 + r3 * 19 + Math.sin(t * (0.5 + r4 * 0.4) + i) * 0.7 + T * 1.6;
  var rot = t * (0.8 + r4 * 1.3) + i * 2;
  g.save();
  g.translate(x, y);
  g.rotate(Math.sin(rot * 0.7) * 1.2);
  g.scale(1, Math.max(0.15, Math.abs(Math.cos(rot))));
  g.globalAlpha = Math.min(1, (1 - T) * 10) * 0.8;
  g.fillStyle = cols[i % 4];
  g.beginPath();
  g.ellipse(0, 0, 0.07, 0.04, 0, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
