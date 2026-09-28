var t = e.t,
  px = e.px,
  i,
  j,
  k;
function S(a, b, c) {
  return Math.sin(t * a + b) * c;
}
function tube(P) {
  var L = [],
    R = [],
    n = P.length,
    i;
  for (i = 0; i < n; i++) {
    var a = P[i > 0 ? i - 1 : 0],
      b = P[i < n - 1 ? i + 1 : n - 1],
      dx = b[0] - a[0],
      dy = b[1] - a[1],
      l = Math.sqrt(dx * dx + dy * dy) || 1,
      nx = -dy / l,
      ny = dx / l,
      w = P[i][2] / 2;
    L.push([P[i][0] + nx * w, P[i][1] + ny * w]);
    R.push([P[i][0] - nx * w, P[i][1] - ny * w]);
  }
  return { L: L, R: R, P: P };
}
function path(T) {
  var i,
    n = T.P.length;
  g.beginPath();
  g.moveTo(T.L[0][0], T.L[0][1]);
  for (i = 1; i < n; i++) g.lineTo(T.L[i][0], T.L[i][1]);
  for (i = n - 1; i >= 0; i--) g.lineTo(T.R[i][0], T.R[i][1]);
  g.closePath();
}
function edge(A) {
  g.beginPath();
  g.moveTo(A[0][0], A[0][1]);
  for (var i = 1; i < A.length; i++) g.lineTo(A[i][0], A[i][1]);
}
function hump(x0, x1, h, w0, w1, ph) {
  var P = [],
    n = 30,
    k;
  for (k = 0; k <= n; k++) {
    var u = -0.1 + (1.2 * k) / n,
      s = Math.sin(Math.PI * u),
      hh = h * (1 + S(0.15, ph, 0.05) + S(0.067, ph * 2, 0.03)),
      w = w0 + (w1 - w0) * u;
    P.push([x0 + (x1 - x0) * u + S(0.1, ph + u * 3, 0.15), -hh * s, Math.max(0.15, w * (0.85 + 0.15 * s))]);
  }
  return tube(P);
}
function spikes(T, side, from, to, step, len) {
  var A = T[side],
    P = T.P,
    k;
  for (k = from; k <= to; k += step) {
    var a = A[k],
      c = P[k];
    if (a[1] > -0.3) continue;
    var dx = a[0] - c[0],
      dy = a[1] - c[1],
      l = Math.sqrt(dx * dx + dy * dy) || 1;
    dx /= l;
    dy /= l;
    var p0 = P[k - 1],
      p1 = P[k + 1],
      tx = p1[0] - p0[0],
      ty = p1[1] - p0[1],
      tl = Math.sqrt(tx * tx + ty * ty) || 1;
    tx /= tl;
    ty /= tl;
    var L2 = len * (0.7 + 0.3 * Math.sin(k * 1.3));
    g.beginPath();
    g.moveTo(a[0] - tx * L2 * 0.45 - dx * 0.1, a[1] - ty * L2 * 0.45 - dy * 0.1);
    g.lineTo(a[0] + dx * L2 - tx * L2 * 0.5, a[1] + dy * L2 - ty * L2 * 0.5);
    g.lineTo(a[0] + tx * L2 * 0.35 - dx * 0.1, a[1] + ty * L2 * 0.35 - dy * 0.1);
    g.closePath();
    g.fill();
  }
}
var sw = S(0.21, 0, 0.45) + S(0.13, 1.7, 0.3),
  hb = S(0.17, 0.4, 0.35) + S(0.29, 2, 0.12),
  hr = S(0.11, 0.3, 0.04) + S(0.23, 1, 0.02),
  hx = -0.5 + sw,
  hy = -19.5 + hb,
  NP = [];
for (k = 0; k <= 26; k++) {
  var u = k / 26,
    v = 1 - u,
    bx = v * v * v * 1.8 + 3 * v * v * u * 3.8 + 3 * v * u * u * (-3 + sw * 0.6) + u * u * u * hx,
    by = v * v * v * 2.5 + 3 * v * v * u * -8 + 3 * v * u * u * (-14 + hb * 0.5) + u * u * u * hy;
  NP.push([bx, by, 3.5 - 1.4 * u + 0.06 * Math.sin(t * 0.8) * (1 - u)]);
}
var NK = tube(NP),
  TA = hump(-42, -37, 2.2, 0.35, 1.1, 0.7),
  TB = hump(-33, -22, 6, 1.6, 2.5, 2.1),
  TC = hump(-17, -5, 8.5, 2.6, 3.2, 3.9),
  BD = [TA, TB, TC];
var bg = g.createLinearGradient(-44, -22, 8, 3);
bg.addColorStop(0, "#4d3746");
bg.addColorStop(0.45, "#35283a");
bg.addColorStop(1, "#221a27");
var wet = g.createLinearGradient(0, -4, 0, 0);
wet.addColorStop(0, "rgba(22,15,26,0)");
wet.addColorStop(1, "rgba(22,15,26,0.55)");
g.save();
g.beginPath();
g.rect(-60, -40, 90, 40.02);
g.clip();
g.lineJoin = "round";
g.lineCap = "round";
for (i = 0; i < 3; i++) {
  var T = BD[i];
  g.fillStyle = "#261c2a";
  spikes(T, "R", 3, 27, 3, 0.5 + i * 0.35);
  path(T);
  g.fillStyle = bg;
  g.fill();
  g.fillStyle = wet;
  g.fill();
  g.strokeStyle = "#f4b88e";
  g.globalAlpha = 0.5;
  g.lineWidth = 2 * px;
  edge(T.R);
  g.stroke();
  g.globalAlpha = 1;
}
g.fillStyle = "#261c2a";
spikes(NK, "L", 4, 24, 2, 0.9);
path(NK);
g.fillStyle = bg;
g.fill();
g.fillStyle = wet;
g.fill();
g.strokeStyle = "rgba(240,180,140,0.14)";
g.lineWidth = 1.5 * px;
for (k = 2; k <= 24; k += 2) {
  var r0 = NK.R[k],
    c0 = NK.P[k];
  g.beginPath();
  g.moveTo(r0[0], r0[1]);
  g.lineTo(r0[0] + (c0[0] - r0[0]) * 0.6, r0[1] + (c0[1] - r0[1]) * 0.6);
  g.stroke();
}
g.strokeStyle = "#f4b88e";
g.globalAlpha = 0.55;
g.lineWidth = 2 * px;
edge(NK.R);
g.stroke();
g.globalAlpha = 1;
g.save();
g.translate(hx, hy);
g.rotate(hr);
var hg = g.createLinearGradient(-6, -2, 2, 2);
hg.addColorStop(0, "#553c49");
hg.addColorStop(0.5, "#3a2b3d");
hg.addColorStop(1, "#241b29");
g.fillStyle = "#1f1723";
g.beginPath();
g.moveTo(0.7, -1.3);
g.quadraticCurveTo(3, -2.3, 5.4, -2.4);
g.quadraticCurveTo(3, -1.5, 1.5, -0.6);
g.closePath();
g.fill();
var jw = S(0.19, 0.5, 0.08);
g.beginPath();
g.moveTo(1.9, -1.1);
g.quadraticCurveTo(0.2, -2.1, -2.4, -1.35);
g.quadraticCurveTo(-4.5, -0.95, -6.1, -0.45);
g.quadraticCurveTo(-6.9, -0.15, -6.4, 0.3);
g.lineTo(-3.4, 0.55);
g.lineTo(-5.5, 1.05 + jw);
g.quadraticCurveTo(-3, 1.85, -0.3, 1.95);
g.quadraticCurveTo(1.6, 1.7, 2.1, 0.3);
g.closePath();
g.fillStyle = hg;
g.fill();
g.beginPath();
g.moveTo(0.2, -1.55);
g.quadraticCurveTo(2.5, -3.3, 4.9, -3.9);
g.quadraticCurveTo(2.7, -2.5, 1.3, -0.85);
g.closePath();
g.fill();
g.strokeStyle = "#f4b88e";
g.globalAlpha = 0.6;
g.lineWidth = 2 * px;
g.beginPath();
g.moveTo(1.9, -1.1);
g.quadraticCurveTo(0.2, -2.1, -2.4, -1.35);
g.quadraticCurveTo(-4.5, -0.95, -6.1, -0.45);
g.quadraticCurveTo(-6.9, -0.15, -6.4, 0.3);
g.stroke();
g.globalAlpha = 0.45;
g.beginPath();
g.moveTo(0.2, -1.55);
g.quadraticCurveTo(2.5, -3.3, 4.9, -3.9);
g.stroke();
g.globalAlpha = 1;
g.fillStyle = "#231a27";
g.beginPath();
g.ellipse(-2.3, -1.05, 0.7, 0.22, -0.15, 0, 6.283);
g.fill();
var bl = t % 13 < 0.25 ? 0.15 : 1;
g.fillStyle = "#e9a66a";
g.globalAlpha = 0.8;
g.beginPath();
g.ellipse(-2.35, -0.85, 0.33, 0.15 * bl, -0.1, 0, 6.283);
g.fill();
g.globalAlpha = 1;
g.fillStyle = "#1a131e";
g.beginPath();
g.arc(-5.9, -0.25, 0.09, 0, 6.283);
g.fill();
g.strokeStyle = "#2a1f2d";
g.lineWidth = 0.12;
g.beginPath();
g.moveTo(-4.2, 1.5);
g.quadraticCurveTo(-4.9 + S(0.3, 1, 0.2), 3, -4.3 + S(0.23, 2, 0.35), 4.6);
g.stroke();
g.lineWidth = 0.09;
g.beginPath();
g.moveTo(-6, 0.1);
g.quadraticCurveTo(-7.2, 0.9, -7.4 + S(0.27, 0.6, 0.3), 2.2 + S(0.19, 1.4, 0.15));
g.stroke();
g.restore();
g.restore();
var c = Math.cos(hr),
  s = Math.sin(hr),
  ex = hx + c * -2.35 - s * -0.85,
  ey = hy + s * -2.35 + c * -0.85,
  jx = hx + c * -5.8 - s * 1.1,
  jy = hy + s * -5.8 + c * 1.1;
e.light(ex, ey, 0.7, "#ffb070", 0.25);
var CR = [],
  AL = [TA, TB, TC, NK];
for (i = 0; i < AL.length; i++) {
  var P = AL[i].P;
  for (k = 1; k < P.length; k++) if (P[k - 1][1] > 0 != P[k][1] > 0) CR.push([P[k][0], P[k][2]]);
}
for (i = 0; i < CR.length; i++) {
  var x = CR[i][0],
    w = CR[i][1];
  for (j = 0; j < 3; j++) {
    var p = (t * 0.06 + j / 3 + i * 0.37) % 1,
      rx = w * 0.6 + p * w * 3.5;
    g.globalAlpha = (1 - p) * (1 - p) * 0.4;
    g.strokeStyle = "#f3c9a6";
    g.lineWidth = 1.3 * px;
    g.beginPath();
    g.ellipse(x, 0.05, rx, rx * 0.025 + 0.03, 0, 0, 6.283);
    g.stroke();
  }
  g.globalAlpha = 0.35 + 0.2 * Math.sin(t * 0.7 + i * 1.9);
  g.strokeStyle = "#ffe0c2";
  g.lineWidth = 2 * px;
  g.beginPath();
  g.moveTo(x - w * 0.6, 0);
  g.lineTo(x + w * 0.6, 0);
  g.stroke();
}
for (j = 0; j < 3; j++) {
  var per = 6 + j * 1.9,
    tt = (t + j * 2.7) % per,
    Tf = Math.sqrt((2 * Math.max(0.1, -jy)) / 9.8),
    dxj = jx + j * 0.15;
  if (tt < Tf) {
    g.globalAlpha = 0.7;
    g.fillStyle = "#ffe4c4";
    g.beginPath();
    g.arc(dxj, jy + 4.9 * tt * tt, 1.6 * px, 0, 6.283);
    g.fill();
  } else if (tt < Tf + 4) {
    var q = (tt - Tf) / 4,
      rq = 0.2 + q * 2.2;
    g.globalAlpha = (1 - q) * 0.4;
    g.strokeStyle = "#f3c9a6";
    g.lineWidth = 1.2 * px;
    g.beginPath();
    g.ellipse(dxj, 0.05, rq, rq * 0.03 + 0.02, 0, 0, 6.283);
    g.stroke();
  }
}
g.globalAlpha = 1;
