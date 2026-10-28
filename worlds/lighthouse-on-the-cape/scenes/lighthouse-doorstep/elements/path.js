var t = e.t,
  S = e.state,
  w = S.wind_strength == null ? 0.6 : S.wind_strength;
function P(X, Z, h) {
  var k = 18 / Z;
  return [X * k, -6.7 + (1.7 - h) * k];
}
var SL = [
  [4.8, -0.35],
  [6, -0.8],
  [10, -2.4],
  [14, -4],
  [20, -6.2],
  [27, -8.7],
  [34, -10.8],
  [40, -12.2],
  [46, -13.5],
  [48, -14],
];
function hS(Z) {
  for (var i = 0; i < SL.length - 1; i++) {
    if (Z <= SL[i + 1][0]) {
      var u = Math.max(0, (Z - SL[i][0]) / (SL[i + 1][0] - SL[i][0]));
      return SL[i][1] + (SL[i + 1][1] - SL[i][1]) * u;
    }
  }
  return -14;
}
g.beginPath();
g.moveTo(-70, 2.6);
for (var x = -70; x <= 70; x += 2.5)
  g.lineTo(x, -0.86 + 0.05 * Math.sin(x * 0.37 + 1) + 0.04 * Math.sin(x * 0.9) + 0.03 * Math.sin(x * 2.1));
g.lineTo(70, 2.6);
g.closePath();
var sg = g.createLinearGradient(0, -0.9, 0, 1.2);
sg.addColorStop(0, "#2c2d40");
sg.addColorStop(0.5, "#222334");
sg.addColorStop(1, "#1a1b29");
g.fillStyle = sg;
g.fill();
g.save();
g.clip();
for (var i = 0; i < 80; i++) {
  var X = (e.rnd() - 0.5) * 30,
    Z = 6 + Math.pow(e.rnd(), 0.8) * 40,
    sz = 0.4 + e.rnd() * 1.6,
    kind = e.rnd(),
    al = e.rnd();
  var h = hS(Z),
    p = P(X, Z, h),
    k = 18 / Z,
    fz = (1.7 - h) / Z,
    rx = sz * k,
    ry = Math.max(0.01, sz * k * fz * 0.9);
  if (kind < 0.45) {
    g.fillStyle = "rgba(150,156,184," + (0.04 + al * 0.08).toFixed(3) + ")";
    g.beginPath();
    g.ellipse(p[0], p[1], rx * 0.6, ry * 0.6, 0, 0, 6.283);
    g.fill();
  } else if (kind < 0.7) {
    g.fillStyle = "#17182a";
    g.beginPath();
    g.ellipse(p[0], p[1] - rx * 0.2, rx * 0.45, rx * 0.3, 0, 0, 6.283);
    g.fill();
    g.fillStyle = "rgba(160,148,170,0.2)";
    g.beginPath();
    g.ellipse(p[0] - rx * 0.08, p[1] - rx * 0.42, rx * 0.28, rx * 0.08, 0, 0, 6.283);
    g.fill();
  } else {
    g.fillStyle = "rgba(12,12,22," + (0.18 + al * 0.2).toFixed(3) + ")";
    g.beginPath();
    g.ellipse(p[0], p[1], rx * 0.8, ry * 1.5, 0, 0, 6.283);
    g.fill();
  }
}
var PT = [
  [0, 4.7, -0.2],
  [0.4, 6, -0.8],
  [1.6, 8.5, -1.9],
  [0.2, 11, -3.0],
  [-1.6, 14, -4.1],
  [0.5, 18, -5.6],
  [2.4, 22, -7.0],
  [0.6, 27, -8.7],
  [-2.0, 32, -10.3],
  [-2.8, 37, -11.6],
  [-2.6, 42, -12.7],
  [-2.4, 46.5, -13.6],
];
for (var i = PT.length - 2; i >= 0; i--) {
  var a = PT[i],
    b = PT[i + 1],
    dx = b[0] - a[0],
    dz = b[1] - a[1],
    dl = Math.sqrt(dx * dx + dz * dz),
    px = (-dz / dl) * 0.38,
    pz = (dx / dl) * 0.38;
  var A1 = P(a[0] + px, a[1] + pz, a[2]),
    A2 = P(a[0] - px, a[1] - pz, a[2]),
    B1 = P(b[0] + px, b[1] + pz, b[2]),
    B2 = P(b[0] - px, b[1] - pz, b[2]);
  g.fillStyle = "rgba(120,118,146,0.5)";
  g.beginPath();
  g.moveTo(A1[0], A1[1]);
  g.lineTo(B1[0], B1[1]);
  g.lineTo(B2[0], B2[1]);
  g.lineTo(A2[0], A2[1]);
  g.closePath();
  g.fill();
}
g.strokeStyle = "rgba(175,176,200,0.22)";
g.lineWidth = 0.03;
g.beginPath();
for (var i = 0; i < PT.length; i++) {
  var q = P(PT[i][0], PT[i][1], PT[i][2]);
  if (i == 0) g.moveTo(q[0], q[1]);
  else g.lineTo(q[0], q[1]);
}
g.stroke();
g.restore();
var nf = [];
for (var X = -5; X <= 5.01; X += 0.25)
  nf.push([X, 4.85 + 0.12 * Math.sin(X * 2.3) + 0.06 * Math.sin(X * 5.1), -0.32 - 0.05 * Math.sin(X * 3.3)]);
g.beginPath();
var q = P(-5, 3.6, -0.15);
g.moveTo(q[0], q[1]);
for (var i = 0; i < nf.length; i++) {
  q = P(nf[i][0], nf[i][1], nf[i][2]);
  g.lineTo(q[0], q[1]);
}
q = P(5, 3.6, -0.15);
g.lineTo(q[0], q[1]);
g.closePath();
var ng = g.createLinearGradient(0, 0.8, 0, 2.2);
ng.addColorStop(0, "#2a2b3e");
ng.addColorStop(1, "#1d1e2c");
g.fillStyle = ng;
g.fill();
for (var i = 0; i < 50; i++) {
  var X = (e.rnd() - 0.5) * 6,
    Z = 3.7 + e.rnd() * 1.1,
    s = e.rnd();
  var q2 = P(X, Z, -0.2);
  g.fillStyle = "rgba(170,176,204," + (0.15 + s * 0.3).toFixed(3) + ")";
  g.beginPath();
  g.ellipse(q2[0], q2[1], ((0.03 + s * 0.12) * 18) / Z, ((0.01 + s * 0.03) * 18) / Z, 0, 0, 6.283);
  g.fill();
}
var s1 = P(-0.85, 3.7, -0.08),
  s2 = P(0.85, 3.7, -0.08),
  s3 = P(0.85, 4.42, -0.08),
  s4 = P(-0.85, 4.42, -0.08);
g.beginPath();
g.moveTo(s1[0], s1[1]);
g.lineTo(s2[0], s2[1]);
g.lineTo(s3[0], s3[1]);
g.lineTo(s4[0], s4[1]);
g.closePath();
var stg = g.createLinearGradient(0, s3[1], 0, s1[1]);
stg.addColorStop(0, "#55536a");
stg.addColorStop(1, "#3e3c50");
g.fillStyle = stg;
g.fill();
g.strokeStyle = "rgba(165,170,200,0.35)";
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(s4[0], s4[1]);
g.lineTo(s3[0], s3[1]);
g.stroke();
var j1 = P(0.1, 3.7, -0.08),
  j2 = P(0.05, 4.42, -0.08);
g.strokeStyle = "rgba(15,14,24,0.6)";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(j1[0], j1[1]);
g.lineTo(j2[0], j2[1]);
g.stroke();
g.lineCap = "round";
for (var i = 0; i < 34; i++) {
  var X = -4.5 + e.rnd() * 9,
    ph = e.rnd() * 6.283,
    nb = 3 + Math.floor(e.rnd() * 3);
  var Zb = 4.85 + 0.12 * Math.sin(X * 2.3) + 0.06 * Math.sin(X * 5.1) - 0.05,
    hb = -0.32 - 0.05 * Math.sin(X * 3.3),
    k = 18 / Zb,
    bp = P(X, Zb, hb);
  for (var m = 0; m < nb; m++) {
    var L = (0.14 + e.rnd() * 0.26) * k,
      off = (e.rnd() - 0.5) * 0.06 * k,
      sh = e.rnd();
    if (Math.abs(X) < 0.95) continue;
    var ln =
      0.2 +
      0.65 * w +
      Math.sin(t * (1.1 + sh * 0.6) + ph + m) * 0.18 * (0.4 + w) +
      Math.sin(t * 3.3 + ph * 2 + m) * 0.05 * w;
    var tx = bp[0] + off + Math.sin(ln) * L,
      ty = bp[1] - Math.cos(ln) * L;
    g.strokeStyle = sh < 0.5 ? "rgba(132,116,108,0.75)" : "rgba(70,62,72,0.85)";
    g.lineWidth = 0.012 * k;
    g.beginPath();
    g.moveTo(bp[0] + off, bp[1]);
    g.quadraticCurveTo(bp[0] + off + Math.sin(ln * 0.4) * L * 0.5, bp[1] - L * 0.55, tx, ty);
    g.stroke();
  }
}
