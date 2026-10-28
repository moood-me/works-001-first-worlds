var S = e.state || {},
  m = S.mist == null ? 0.25 : S.mist,
  t = e.t;
var b = g.createLinearGradient(0, -2.2, 0, 0.3);
b.addColorStop(0, "rgba(120,116,138,0)");
b.addColorStop(1, "rgba(120,116,138," + (0.15 + 0.45 * m) + ")");
g.fillStyle = b;
g.fillRect(-50, -2.2, 100, 2.5);
for (var i = 0; i < 8; i++) {
  var y = -0.3 - e.rnd() * 2.4,
    w = 8 + e.rnd() * 14,
    x = -40 + e.rnd() * 80 + Math.sin(t * 0.04 + i * 1.7) * 4 + Math.sin(t * 0.017 + i) * 3;
  g.save();
  g.translate(x, y);
  g.scale(1, 0.1);
  var r = g.createRadialGradient(0, 0, 0, 0, 0, w);
  r.addColorStop(0, "rgba(140,136,156," + (0.1 + 0.4 * m) + ")");
  r.addColorStop(1, "rgba(140,136,156,0)");
  g.fillStyle = r;
  g.beginPath();
  g.arc(0, 0, w, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
