var t = e.t,
  S = 23;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var X0 = -950,
  N = 1900,
  hm = new Array(N + 1),
  i;
for (i = 0; i <= N; i++) {
  var xa = X0 + i;
  hm[i] = 8.5 + 2.2 * Math.sin(xa / 37 + 0.7) + 1.4 * Math.sin(xa / 11.3 + 2.1) + 0.7 * Math.sin(xa / 4.1);
}
function spruce(x, Ht, W, sh) {
  var m = Math.ceil(W);
  for (var d = -m; d <= m; d++) {
    var ii = Math.round(x + d - X0);
    if (ii < 0 || ii > N) continue;
    var q = Math.abs(d) / W;
    if (q > 1) continue;
    var hh = Ht * (1 - Math.pow(q, sh)) * (1 - 0.07 * Math.abs(Math.sin(d * 1.7 + x * 0.3)));
    if (hh > hm[ii]) hm[ii] = hh;
  }
}
function crown(x, Hc, W, ph) {
  var m = Math.ceil(W);
  for (var d = -m; d <= m; d++) {
    var ii = Math.round(x + d - X0);
    if (ii < 0 || ii > N) continue;
    var q = d / W;
    if (Math.abs(q) > 1) continue;
    var hh = Hc * Math.pow(1 - q * q, 0.35) + 0.9 * Math.sin(d * 0.9 + ph);
    if (hh > hm[ii]) hm[ii] = hh;
  }
}
var x = X0;
while (x < 950) {
  var r = R(),
    big = 19 + 6 * Math.sin(x / 140 + 1) + 4 * Math.sin(x / 53 + 0.4),
    Ht = big * (0.7 + R() * 0.55);
  if (r < 0.64) {
    var W1 = Ht * (0.13 + R() * 0.08);
    spruce(x, Ht, W1, 0.75 + R() * 0.35);
    x += W1 * (0.7 + R() * 1.1);
  } else {
    var W2 = Ht * (0.28 + R() * 0.14);
    crown(x, Ht * 0.9, W2, R() * 6);
    x += W2 * (0.8 + R() * 0.9);
  }
}
for (i = 0; i <= N; i++) {
  hm[i] *= 1 - 0.6 * Math.exp(-Math.pow((X0 + i) / 16, 2));
}
spruce(-27, 33, 4.8, 0.9);
spruce(-39, 27, 4, 1);
spruce(23, 24, 4.2, 0.85);
var wg = g.createLinearGradient(0, 0, 0, 46);
wg.addColorStop(0, "#efb27e");
wg.addColorStop(0.47, "#e6a070");
wg.addColorStop(0.88, "#d88a60");
wg.addColorStop(1, "#d4865e");
g.fillStyle = wg;
g.fillRect(-960, 0, 1920, 47);
g.save();
g.globalCompositeOperation = "lighter";
var pg = g.createLinearGradient(-40, 0, 40, 0);
pg.addColorStop(0, "rgba(255,190,130,0)");
pg.addColorStop(0.5, "rgba(255,200,140,0.22)");
pg.addColorStop(1, "rgba(255,190,130,0)");
g.fillStyle = pg;
g.fillRect(-40, 0, 80, 47);
g.restore();
for (i = 0; i < 90; i++) {
  var yy = 0.6 + Math.pow(R(), 1.3) * 45,
    xx = (R() - 0.5) * 1900,
    L = 3 + R() * 8 + yy * 0.3,
    ph = R() * 6.283,
    lt = R() < 0.5;
  g.globalAlpha = 0.12 + 0.08 * Math.sin(t * 0.4 + ph);
  g.fillStyle = lt ? "#fff0d0" : "#9a5a58";
  g.fillRect(xx + Math.sin(t * 0.15 + ph) * 3 - L / 2, yy, L, e.px);
}
g.globalAlpha = 1;
for (var k = 0; k < 19; k++) {
  var y0 = k * 2;
  g.save();
  g.beginPath();
  g.rect(-960, y0, 1920, 2.05);
  g.clip();
  var dx = Math.sin(t * 0.45 + k * 0.8) * (0.4 + k * 0.08) + Math.sin(t * 0.23 + k * 1.7) * 0.5;
  g.translate(dx, 0);
  g.globalAlpha = 0.88 - k * 0.012;
  g.fillStyle = "#302335";
  g.beginPath();
  g.moveTo(X0, 0);
  for (i = 0; i <= N; i += 3) g.lineTo(X0 + i, hm[i]);
  g.lineTo(950, 0);
  g.closePath();
  g.fill();
  g.restore();
}
g.globalAlpha = 1;
for (i = 0; i < 40; i++) {
  var ry = 1 + R() * 34,
    rx = (R() - 0.5) * 1900,
    rl = 15 + R() * 60,
    ph2 = R() * 6.283;
  g.globalAlpha = 0.18 + 0.14 * Math.sin(t * 0.3 + ph2);
  g.fillStyle = "#d99a74";
  g.fillRect(rx + Math.sin(t * 0.12 + ph2) * 6 - rl / 2, ry, rl, e.px * 1.2);
}
g.globalAlpha = 1;
g.save();
g.globalCompositeOperation = "lighter";
for (i = 0; i < 90; i++) {
  var gy = 1.5 + R() * 45,
    hw = 10 + gy * 0.25,
    gx = (R() + R() - 1) * hw,
    gln = 1.2 + R() * 3 + gy * 0.04,
    f = 0.6 + R() * 1.7,
    p = R() * 6.283;
  var w = Math.sin(t * f + p) + 0.5 * Math.sin(t * f * 1.61 + p * 1.7);
  var a = w > 0.55 ? Math.min(1, (w - 0.55) / 0.8) : 0;
  var b = 0.35 + 0.65 * Math.exp(-Math.pow((gy - 33) / 13, 2));
  if (a > 0) {
    g.globalAlpha = a * b;
    g.fillStyle = "#ffe4b4";
    g.fillRect(gx - gln / 2, gy, gln, e.px * 1.1);
  }
}
g.restore();
g.globalAlpha = 1;
for (i = 0; i < 60; i++) {
  var sx0 = X0 + R() * 1900,
    sl = 5 + R() * 40,
    sa = 0.25 + 0.2 * R();
  g.globalAlpha = sa;
  g.fillStyle = "#ffd8a6";
  g.fillRect(sx0, 0.1, sl, e.px * 1.2);
}
g.globalAlpha = 1;
g.beginPath();
g.moveTo(X0, 0.3);
for (i = 0; i <= N; i++) g.lineTo(X0 + i, -hm[i]);
g.lineTo(950, 0.3);
g.closePath();
var fg = g.createLinearGradient(0, -36, 0, 0);
fg.addColorStop(0, "#2a1e2e");
fg.addColorStop(1, "#1f1726");
g.fillStyle = fg;
g.fill();
g.save();
g.clip();
g.globalCompositeOperation = "lighter";
var rg = g.createRadialGradient(0, -28, 0, 0, -28, 130);
rg.addColorStop(0, "rgba(255,140,80,0.35)");
rg.addColorStop(0.4, "rgba(200,90,70,0.12)");
rg.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = rg;
g.fillRect(-140, -50, 280, 52);
g.restore();
var fb = g.createLinearGradient(0, -8, 0, 7);
fb.addColorStop(0, "rgba(246,196,148,0)");
fb.addColorStop(0.55, "rgba(246,196,148,0.26)");
fb.addColorStop(1, "rgba(246,196,148,0)");
g.fillStyle = fb;
g.fillRect(-960, -8, 1920, 15);
for (i = 0; i < 7; i++) {
  var fx = -900 + R() * 1800 + 60 * Math.sin(t * 0.01 * (1 + R()) + R() * 6),
    fy = -2.5 + R() * 3,
    frx = 120 + R() * 220,
    fry = 2 + R() * 3.5,
    fa = 0.1 + R() * 0.08;
  g.globalAlpha = fa;
  g.fillStyle = "#f6c894";
  g.beginPath();
  g.ellipse(fx, fy, frx, fry, 0, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
