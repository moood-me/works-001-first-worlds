var t = e.t,
  C = 2090,
  Z0 = 180,
  Z1 = 4000,
  HW = 4500,
  Q = 1.03,
  FD = 0,
  NR = 200,
  NG = 120,
  PX = 0.0011,
  i,
  z,
  z2,
  d,
  S = [
    [0, 230, 184, 156],
    [0.0312, 207, 159, 147],
    [0.117, 161, 127, 140],
    [0.273, 122, 97, 121],
    [0.507, 84, 67, 94],
    [0.78, 52, 40, 65],
  ];
function col(d) {
  var j = 1;
  while (j < 5 && d > S[j][0]) j++;
  var a = S[j - 1],
    b = S[j],
    f = Math.max(0, Math.min(1, (d - a[0]) / (b[0] - a[0])));
  return (
    "rgb(" +
    Math.round(a[1] + (b[1] - a[1]) * f) +
    "," +
    Math.round(a[2] + (b[2] - a[2]) * f) +
    "," +
    Math.round(a[3] + (b[3] - a[3]) * f) +
    ")"
  );
}
function fa(z) {
  return FD > 0 ? Math.max(0, Math.min(1, (Z1 - z) / FD)) : 1;
}
function A3(r, a0, a1, r1) {
  return r < r1 ? a0 + ((a1 - a0) * r) / r1 : r < 1 ? (a1 * (1 - r)) / (1 - r1) : 0;
}
function band(cx, hw, dv, y, h, rgb, a0, a1, r1) {
  var q = g.createLinearGradient(cx - hw, 0, cx + hw, 0),
    p;
  for (p = 0; p <= 6; p++) {
    var f = Math.abs(p / 3 - 1),
      r = Math.sqrt(f * f * (1 - dv * dv) + dv * dv);
    q.addColorStop(p / 6, "rgba(" + rgb + "," + A3(r, a0, a1, r1).toFixed(3) + ")");
  }
  g.fillStyle = q;
  g.fillRect(cx - hw, y, hw * 2, h);
}
for (z = Z0; z < Z1; z = z2) {
  z2 = Math.min(Z1, z * Q);
  var zm = Math.sqrt(z * z2),
    y = C - z2,
    h = (z2 - z) * 1.04 + 0.005,
    al = fa(zm);
  d = 1.7 / zm;
  g.globalAlpha = al;
  g.fillStyle = col(d);
  g.fillRect(-HW, y, HW * 2, h);
  var dv = d / 0.34;
  if (dv < 1) band(-0.463 * zm, 0.1 * Math.sqrt(1 - dv * dv) * zm, dv, y, h, "255,216,180", 0.5, 0.16, 0.4);
  if (zm > 680) {
    g.globalAlpha = al * 0.75;
    band(-0.463 * zm, 0.07 * zm, 0, y, h, "255,240,215", 1, 0.5, 0.5);
  }
}
var ZI = FD > 0 ? Z1 - FD * 0.5 : Z1;
function isl(x0, x1, amp, f, ph, c, a) {
  var n = 60,
    P = [],
    k,
    u;
  for (k = 0; k <= n; k++) {
    u = k / n;
    var hh =
      0.95 *
      amp *
      Math.pow(Math.max(0, Math.sin(Math.PI * u)), 0.5) *
      (0.62 + 0.22 * Math.sin(u * f + ph) + 0.1 * Math.sin(u * f * 2.7 + ph * 1.3) + 0.04 * Math.sin(u * f * 7.1));
    P.push([x0 + (x1 - x0) * u, hh > 1e-6 ? Math.max(Z0, Math.min(ZI, 1.7 / hh)) : ZI]);
  }
  g.beginPath();
  for (k = 0; k <= n; k++) g.lineTo(P[k][0] * P[k][1], C - P[k][1]);
  for (k = n; k >= 0; k--) g.lineTo(P[k][0] * ZI, C - ZI);
  g.closePath();
  g.globalAlpha = a;
  g.fillStyle = c;
  g.fill();
}
isl(0.08, 1.39, 0.035, 7, 0.8, "#9a7684", 0.35);
isl(0.35, 0.95, 0.018, 5, 2.1, "#7f6378", 0.4);
isl(-0.72, -0.56, 0.009, 4, 0.3, "#977583", 0.35);
for (i = 0; i < NR; i++) {
  d = 0.002 + 0.78 * Math.pow(e.rnd(), 2.1);
  var xs = e.rnd() * 2.2 - 1.1,
    Lf = 0.25 + e.rnd() * 0.5,
    ph = e.rnd() * 6.283,
    w = 0.25 + e.rnd() * 0.5,
    lt = e.rnd() < 0.55;
  z = 1.7 / d;
  if (z < Z0 || z > Z1) continue;
  var L = (0.008 + d * Lf) * z,
    x = (xs + Math.sin(t * 0.05 * w + ph) * 0.02 * (0.3 + d * 3)) * z,
    th = (PX * (0.8 + d * 7) * z * z) / 1.7;
  g.globalAlpha = (0.5 + 0.5 * Math.sin(t * w + ph * 1.3)) * (lt ? 0.22 : 0.3) * fa(z);
  g.fillStyle = lt ? (d < 0.12 ? "#f2cdb2" : "#b48d9a") : "#3a2c45";
  g.fillRect(x - L / 2, C - z - th / 2, L, th);
}
for (i = 0; i < NG; i++) {
  d = 0.002 + Math.pow(e.rnd(), 1.7) * 0.32;
  var sp = 0.004 + d * 0.33,
    o = e.rnd() + e.rnd() - 1,
    lf = 0.3 + e.rnd(),
    w2 = 0.5 + e.rnd() * 1.3,
    p2 = e.rnd() * 6.283;
  z = 1.7 / d;
  if (z < Z0 || z > Z1) continue;
  var fl = Math.sin(t * w2 + p2) * 0.6 + Math.sin(t * w2 * 1.73 + p2 * 0.7) * 0.4;
  if (fl <= 0.1) continue;
  var L2 = (0.003 + d * 0.1 * lf) * z,
    th2 = (PX * (1 + d * 9) * z * z) / 1.7,
    x2 = (-0.463 + o * sp) * z;
  g.globalAlpha = Math.min(1, fl * fl * 1.3) * (1 - d * 2.2) * fa(z);
  g.fillStyle = d < 0.03 ? "#fff3dc" : "#ffdcb4";
  g.fillRect(x2 - L2 / 2, C - z - th2 / 2, L2, th2);
}
g.globalAlpha = 1;
