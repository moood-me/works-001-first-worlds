var W = e.aspect,
  t = e.t,
  H0 = 0.468,
  sx = W / 2 - 0.463,
  i;
var b = g.createLinearGradient(0, H0 - 0.025, 0, H0 + 0.02);
b.addColorStop(0, "rgba(240,198,166,0)");
b.addColorStop(0.55, "rgba(240,198,166,0.5)");
b.addColorStop(1, "rgba(240,198,166,0)");
g.fillStyle = b;
g.fillRect(-0.35, H0 - 0.025, W + 0.7, 0.045);
for (i = 0; i < 9; i++) {
  var w = 0.25 + e.rnd() * 0.35,
    v = 0.0015 + e.rnd() * 0.002,
    span = W + w * 2,
    x = ((e.rnd() * span + t * v) % span) - w,
    y = H0 + (e.rnd() - 0.5) * 0.012 + 0.002 * Math.sin(t * 0.07 + i),
    hh = 0.004 + e.rnd() * 0.005,
    near = Math.max(0, 1 - Math.abs(x - sx) / 0.5),
    a = 0.16 + 0.08 * Math.sin(t * 0.05 + i * 1.3) + near * 0.15;
  g.save();
  g.translate(x, y);
  g.scale(w, hh);
  var q = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  q.addColorStop(0, "rgba(248,210,178," + a.toFixed(3) + ")");
  q.addColorStop(1, "rgba(248,210,178,0)");
  g.fillStyle = q;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
}
