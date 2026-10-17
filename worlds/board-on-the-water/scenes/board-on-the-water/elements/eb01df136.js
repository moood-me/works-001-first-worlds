var W = e.aspect,
  t = e.t,
  sx = W / 2 - 0.463,
  i,
  k;
function pf(x, y, rx, ry, c, a) {
  g.save();
  g.translate(x, y);
  g.scale(rx, ry);
  var q = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  q.addColorStop(0, "rgba(" + c + "," + a.toFixed(3) + ")");
  q.addColorStop(0.55, "rgba(" + c + "," + (a * 0.5).toFixed(3) + ")");
  q.addColorStop(1, "rgba(" + c + ",0)");
  g.fillStyle = q;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
}
var S = [
  [sx + 0.04, 0.323, 0.36, 0.0042, 0.00035],
  [sx + 0.6, 0.339, 0.26, 0.0036, 0.0005],
  [sx + 1.12, 0.331, 0.44, 0.0055, 0.0004],
  [sx - 0.34, 0.345, 0.2, 0.0032, 0.0006],
];
for (i = 0; i < S.length; i++) {
  var s = S[i],
    span = W + 1.4,
    cx = ((((s[0] + 0.7 + t * s[4] + 0.03 * Math.sin(t * 0.017 + i * 2)) % span) + span) % span) - 0.7,
    w = s[2],
    hh = s[3],
    n = 9 + Math.floor(e.rnd() * 4),
    lit = Math.max(0, 1 - Math.abs(cx - sx) / 0.6),
    P = [];
  for (k = 0; k < n; k++) {
    var u = (k + 0.5) / n - 0.5;
    P.push([
      cx + u * w + (e.rnd() - 0.5) * 0.02,
      s[1] + Math.sin(u * 4 + i) * hh * 0.8 + (e.rnd() - 0.5) * hh * 0.4,
      w * (0.07 + e.rnd() * 0.06),
      hh * (0.6 + e.rnd() * 0.6) * (1 - Math.abs(u) * 1.1),
    ]);
  }
  for (k = 0; k < n; k++) {
    var p = P[k];
    if (p[3] <= 0) continue;
    pf(p[0], p[1] + p[3] * 0.5, p[2], p[3], "165,118,130", 0.18);
    pf(p[0], p[1], p[2], p[3], "231,179,157", 0.5 + 0.2 * lit);
    if (lit > 0) pf(p[0], p[1] - p[3] * 0.4, p[2] * 0.85, p[3] * 0.6, "255,226,190", 0.6 * lit);
  }
}
