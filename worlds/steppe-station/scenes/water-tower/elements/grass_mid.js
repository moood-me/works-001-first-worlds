var A = e.aspect || 1.78,
  t = e.t,
  D0 = 10,
  R0 = 9,
  R1 = 14.4,
  N = 150,
  F = 0.87;
var Lt = (0.1 * A * 15) / F,
  Lp = (0.1 * A * 15.3) / F;
var gust = 0.5 + 0.5 * Math.sin(t * 0.31) * Math.sin(t * 0.17 + 1);
var cols = ["#7d6c48", "#6a5a3c", "#907a52", "#5a4a32", "#84704a", "#9a8456"];
for (var i = 0; i < N; i++) {
  var r = R0 + e.rnd() * (R1 - R0),
    u = e.rnd(),
    n = 2 + Math.floor(e.rnd() * 4),
    h0 = 0.16 + e.rnd() * 0.36,
    ci = Math.floor(e.rnd() * 6),
    ph = e.rnd() * 6.28;
  var half = (A * r) / F / 2 + 1.5;
  var xw = (u - 0.5) * 2 * half;
  var across = (xw - Lp) * 0.24 + (15.3 - r - 5.3) * 0.97;
  if (Math.abs(across) < 1.6) continue;
  var qx = xw - Lt,
    qy = 15 - r;
  var al = -0.47 * qx + 0.88 * qy,
    pp = 0.88 * qx + 0.47 * qy;
  var sh = al > 0 && Math.abs(pp) < 2.3;
  var s = D0 / r,
    yb = 1.7 * s - 1.7,
    xb = xw * s,
    hh = h0 * s;
  g.strokeStyle = sh ? "#3e3324" : cols[ci];
  g.lineWidth = Math.max(e.px * 0.8, 0.016 * s);
  g.beginPath();
  var tips = [];
  for (var k = 0; k < n; k++) {
    var ox = (e.rnd() - 0.5) * 0.22 * s,
      lean = (e.rnd() - 0.3) * 0.3,
      hj = hh * (0.55 + e.rnd() * 0.45);
    var ang = lean + 0.08 + 0.1 * gust + 0.05 * Math.sin(t * 1.2 + ph + k * 0.7);
    var bx = xb + ox,
      tx = bx + Math.sin(ang) * hj,
      ty = yb - Math.cos(ang) * hj;
    g.moveTo(bx, yb);
    g.quadraticCurveTo(bx + Math.sin(ang) * hj * 0.2, yb - hj * 0.6, tx, ty);
    tips.push(tx, ty, bx + Math.sin(ang) * hj * 0.5, yb - Math.cos(ang) * hj * 0.5);
  }
  g.stroke();
  if (!sh) {
    g.strokeStyle = "rgba(255,196,130,0.4)";
    g.lineWidth = e.px;
    g.beginPath();
    for (var k = 0; k < tips.length; k += 4) {
      g.moveTo(tips[k + 2], tips[k + 3]);
      g.lineTo(tips[k], tips[k + 1]);
    }
    g.stroke();
  }
}
