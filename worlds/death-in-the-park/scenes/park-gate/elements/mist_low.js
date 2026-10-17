var S = e.state || {},
  m = S.mist == null ? 0.25 : S.mist,
  t = e.t;
for (var i = 0; i < 7; i++) {
  var y = -0.1 - e.rnd() * 0.6 * (0.5 + m),
    w = 3 + e.rnd() * 5,
    x = -14 + e.rnd() * 28 + Math.sin(t * 0.06 + i * 2.3) * 1.5 + Math.sin(t * 0.023 + i) * 1.2;
  g.save();
  g.translate(x, y);
  g.scale(1, 0.09 + m * 0.05);
  var r = g.createRadialGradient(0, 0, 0, 0, 0, w);
  r.addColorStop(0, "rgba(130,126,146," + (0.05 + 0.32 * m) + ")");
  r.addColorStop(1, "rgba(130,126,146,0)");
  g.fillStyle = r;
  g.beginPath();
  g.arc(0, 0, w, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
