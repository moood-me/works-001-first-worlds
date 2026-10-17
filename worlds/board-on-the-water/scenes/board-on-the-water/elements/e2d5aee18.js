var W = e.aspect,
  t = e.t,
  sx = W / 2 - 0.463,
  i,
  k,
  p;
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
var C = [
  [0.12, 0.165, 0.44, 0.032],
  [0.66, 0.205, 0.3, 0.022],
  [1.08, 0.135, 0.52, 0.036],
  [1.58, 0.19, 0.27, 0.02],
];
for (i = 0; i < C.length; i++) {
  var c = C[i],
    v = 0.0009 + e.rnd() * 0.0006,
    span = W + 1.2,
    cx = (((((c[0] * W) / 1.78 + 0.6 + t * v) % span) + span) % span) - 0.6,
    cy = c[1],
    w = c[2],
    hh = c[3],
    n = 7 + Math.floor(e.rnd() * 4),
    P = [];
  for (k = 0; k < n; k++) {
    var u = (k + 0.5) / n - 0.5 + (e.rnd() - 0.5) * 0.08;
    P.push([
      cx + u * w,
      cy + (e.rnd() - 0.5) * hh * 0.5 - hh * 0.35 * Math.cos(u * 3.1),
      w * (0.13 + e.rnd() * 0.12) * (1 + 0.05 * Math.sin(t * 0.04 + k * 1.7 + i)),
      hh * (0.55 + e.rnd() * 0.4) * (1 - Math.abs(u) * 0.8),
    ]);
  }
  var dx = cx - sx,
    lit = Math.max(0.25, 1 - Math.abs(dx) / 1.2);
  for (k = 0; k < n; k++) {
    p = P[k];
    pf(p[0] - dx * 0.01, p[1] + p[3] * 0.45, p[2] * 1.05, p[3] * 0.8, "245,190,160", 0.45 * lit);
  }
  for (k = 0; k < n; k++) {
    p = P[k];
    pf(p[0], p[1], p[2], p[3], "200,146,149", 0.55);
  }
  for (k = 0; k < n; k++) {
    p = P[k];
    pf(p[0] + p[2] * 0.1, p[1] - p[3] * 0.3, p[2] * 0.7, p[3] * 0.5, "140,104,132", 0.22);
  }
}
