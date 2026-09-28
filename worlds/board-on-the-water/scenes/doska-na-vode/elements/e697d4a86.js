var j = 2,
  za = 7,
  zb = 9,
  D = 9,
  E = 1.7,
  x0 = -7,
  c = 2,
  i,
  k,
  n;
function P(x, z) {
  return [(x * D) / z, (E * D) / z - E];
}
function Qd(a, b, q, d) {
  g.beginPath();
  g.moveTo(a[0], a[1]);
  g.lineTo(b[0], b[1]);
  g.lineTo(q[0], q[1]);
  g.lineTo(d[0], d[1]);
  g.closePath();
}
var zf = j == 7 ? zb : zb + 0.04;
g.fillStyle = "#2e1f22";
Qd(P(-7.4, za), P(-7, za), P(-7, zf), P(-7.4, zf));
g.fill();
Qd(P(9, za), P(9.4, za), P(9.4, zf), P(9, zf));
g.fill();
if (j == 7) {
  Qd(P(-7.4, zb), P(9.4, zb), P(9.4, zb + 0.4), P(-7.4, zb + 0.4));
  g.fill();
  g.strokeStyle = "rgba(255,210,160,0.35)";
  g.lineWidth = 1.5 * e.px;
  var r1 = P(-7.4, zb + 0.4),
    r2 = P(9.4, zb + 0.4);
  g.beginPath();
  g.moveTo(r1[0], r1[1]);
  g.lineTo(r2[0], r2[1]);
  g.stroke();
}
for (i = 0; i < 8; i++) {
  var xa = x0 + i * c,
    xb = xa + c,
    dk = (i + j) % 2 == 0;
  Qd(P(xa, za), P(xb, za), P(xb, zf), P(xa, zf));
  g.fillStyle = dk ? "#4b322d" : "#e3caa6";
  g.fill();
  g.fillStyle = "rgba(60,30,25," + (e.rnd() * 0.09).toFixed(3) + ")";
  g.fill();
  if (j < 4) {
    g.strokeStyle = dk ? "rgba(15,8,8,0.2)" : "rgba(130,85,55,0.14)";
    g.lineWidth = 1.5 * e.px;
    for (k = 0; k < 8; k++) {
      var zz = za + ((k + e.rnd()) / 8) * c,
        w = (e.rnd() - 0.5) * 0.12,
        p1 = P(xa + 0.04, zz),
        p2 = P(xb - 0.04, zz + w);
      g.beginPath();
      g.moveTo(p1[0], p1[1]);
      g.lineTo(p2[0], p2[1]);
      g.stroke();
    }
  }
}
Qd(P(-7, za), P(9, za), P(9, zf), P(-7, zf));
g.fillStyle = "rgba(240,194,156," + (0.04 + (0.2 * j) / 7).toFixed(3) + ")";
g.fill();
g.save();
Qd(P(-7.4, za), P(9.4, za), P(9.4, zf), P(-7.4, zf));
g.clip();
g.save();
g.translate(-0.463 * D, 0.17 * D - E);
g.scale(0.45, 1);
var rg = g.createRadialGradient(0, 0, 0, 0, 0, 0.3 * D);
rg.addColorStop(0, "rgba(255,224,176,0.6)");
rg.addColorStop(0.35, "rgba(255,198,142,0.22)");
rg.addColorStop(1, "rgba(255,180,130,0)");
g.fillStyle = rg;
g.fillRect(-0.3 * D, -0.3 * D, 0.6 * D, 0.6 * D);
g.restore();
var T = [
  [-4, 16, 3.4, [0.78, 0.54, 0.34, 0.27, 0.26, 0.41, 0.1]],
  [4, 14, 3, [0.72, 0.51, 0.3, 0.24, 0.21, 0.39, 0.15]],
  [-2, 12, 1.6, [0.48, 0.32, 0.18, 0.14, 0.16, 0.24, 0]],
  [6, 18, 2.5, [0.65, 0.48, 0.25, 0.2, 0.2, 0.27, 0]],
  [2, 8, 2.3, [0.69, 0.46, 0.44, 0.39, 0.46, 0.46, 0.07]],
  [-2, 8, 1.6, [0.48, 0.32, 0.18, 0.14, 0.16, 0.24, 0]],
  [-4, 6, 1.9, [0.57, 0.38, 0.3, 0.29, 0.29, 0.38, 0.38]],
  [4, 6, 2.5, [0.65, 0.48, 0.25, 0.2, 0.2, 0.27, 0]],
  [1.2, 12.5, 1.75, [0.15, 0.14, 0.22, 0.24, 0.2, 0.13, 0.1]],
];
for (n = 0; n < T.length; n++) {
  var q = T[n];
  if (q[1] < za - 0.6) continue;
  var smax = (q[1] - 2.3) / 0.91,
    L = 6 * q[2];
  for (var ps = 0; ps < 3; ps++) {
    var m = [1.35, 1.15, 1][ps],
      A = [0.1, 0.14, 0.2][ps],
      Lp = [],
      Rp = [];
    for (k = 0; k <= 6; k++) {
      var s = Math.min((k / 6) * L, smax),
        ww = q[3][k] * m * (1 + (0.3 * k) / 6),
        gx = q[0] + 0.42 * s,
        gz = q[1] - 0.91 * s;
      Lp.push(P(gx - 0.91 * ww, gz - 0.42 * ww));
      Rp.push(P(gx + 0.91 * ww, gz + 0.42 * ww));
      if (s >= smax) break;
    }
    g.beginPath();
    g.moveTo(Lp[0][0], Lp[0][1]);
    for (k = 1; k < Lp.length; k++) g.lineTo(Lp[k][0], Lp[k][1]);
    for (k = Rp.length - 1; k >= 0; k--) g.lineTo(Rp[k][0], Rp[k][1]);
    g.closePath();
    g.fillStyle = "rgba(38,24,46," + A + ")";
    g.fill();
  }
}
g.restore();
