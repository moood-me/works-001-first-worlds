var W = e.aspect,
  t = e.t,
  mx = 0.74 * W;
for (var i = 0; i < 180; i++) {
  var x = e.rnd() * (W + 0.7) - 0.35,
    y = -0.35 + Math.pow(e.rnd(), 1.3) * 0.8,
    s = e.rnd(),
    ph = e.rnd() * 6.2832,
    f = 0.25 + e.rnd() * 1.1,
    warm = e.rnd();
  var fade = Math.min(1, Math.max(0, (0.44 - y) / 0.22));
  var tw = 0.7 + 0.2 * Math.sin(t * f + ph) + 0.1 * Math.sin(t * f * 2.37 + ph * 1.7);
  var dx = x - mx,
    dy = y - 0.3,
    dm = Math.sqrt(dx * dx + dy * dy);
  var a = fade * tw * (0.2 + 0.65 * s * s) * Math.min(1, dm / 0.18);
  if (a < 0.02) continue;
  g.globalAlpha = a;
  g.fillStyle = warm < 0.12 ? "#f1e2c8" : warm > 0.9 ? "#c9d4f5" : "#dfe3f2";
  var r = (0.5 + s * s * 1.4) * e.px;
  g.beginPath();
  g.arc(x, y, r, 0, 6.2832);
  g.fill();
  if (s > 0.965) {
    var h = g.createRadialGradient(x, y, 0, x, y, r * 6);
    h.addColorStop(0, "rgba(220,226,245,0.35)");
    h.addColorStop(1, "rgba(220,226,245,0)");
    g.fillStyle = h;
    g.fillRect(x - r * 6, y - r * 6, r * 12, r * 12);
  }
}
g.globalAlpha = 1;
