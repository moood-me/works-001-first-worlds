var t = e.t,
  i;
for (i = 0; i < 22; i++) {
  var x0 = e.rnd() * 11.6,
    y0 = -4.3 + e.rnd() * 4.4,
    v = 0.02 + e.rnd() * 0.04,
    p1 = e.rnd() * 6.283,
    p2 = e.rnd() * 6.283,
    w = 0.3 + e.rnd() * 0.6,
    r = 0.006 + e.rnd() * 0.01,
    x = ((((x0 + t * v + 0.12 * Math.sin(t * 0.07 + p1)) % 11.6) + 11.6) % 11.6) - 5.8,
    y = y0 + 0.1 * Math.sin(t * 0.05 + p2) + 0.04 * Math.sin(t * 0.13 + p1),
    s = Math.max(0, Math.sin(t * w + p1)),
    a = 0.1 + 0.5 * s * s * s,
    q = g.createRadialGradient(x, y, 0, x, y, r * 3);
  q.addColorStop(0, "rgba(255,228,190," + a.toFixed(3) + ")");
  q.addColorStop(0.35, "rgba(255,224,184," + (a * 0.4).toFixed(3) + ")");
  q.addColorStop(1, "rgba(255,224,184,0)");
  g.fillStyle = q;
  g.beginPath();
  g.arc(x, y, r * 3, 0, 6.283);
  g.fill();
}
