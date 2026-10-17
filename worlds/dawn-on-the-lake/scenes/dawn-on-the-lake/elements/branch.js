var t = e.t;
g.strokeStyle = "#1c1820";
g.lineCap = "round";
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(-1.4, -0.3);
g.quadraticCurveTo(-0.3, -0.32, 1.1, -0.05);
g.stroke();
for (var i = 0; i < 22; i++) {
  var u = e.rnd(),
    bx = -1.3 + u * 2.3,
    by = -0.31 + u * u * 0.24,
    len = 0.2 + e.rnd() * 0.6,
    ph = e.rnd() * 6.28,
    sw = Math.sin(t * 0.5 + ph) * 0.06 * len;
  g.strokeStyle = "rgba(30,28,36,0.85)";
  g.lineWidth = 0.006;
  g.beginPath();
  g.moveTo(bx, by);
  g.quadraticCurveTo(bx + 0.01, by + len * 0.5, bx + sw, by + len);
  g.stroke();
  var n = 4 + Math.floor(len * 8);
  for (var k = 0; k < n; k++) {
    var q = (k + 0.6) / n,
      lx = bx + sw * q * q,
      ly = by + len * q,
      sd = k % 2 ? 1 : -1;
    g.fillStyle = "rgba(36,34,44,0.92)";
    g.beginPath();
    g.ellipse(lx + sd * 0.012, ly, 0.008, 0.035, sd * 0.35, 0, 6.283);
    g.fill();
  }
}
