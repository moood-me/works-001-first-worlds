var t = e.t,
  S = 23;
var st = e.state || {},
  s = Math.max(0, Math.min(1, st.sunset || 0)),
  m = Math.max(0, Math.min(1, st.morning || 0));
function P(h) {
  var n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function C(a, b, c, al) {
  var A = P(a),
    B = P(b),
    D = P(c),
    o = [];
  for (var i = 0; i < 3; i++) {
    var v = A[i] + (B[i] - A[i]) * s;
    o.push(Math.round(v + (D[i] - v) * m));
  }
  return al == null ? "rgb(" + o.join(",") + ")" : "rgba(" + o.join(",") + "," + Math.max(0, al).toFixed(3) + ")";
}
var sw = (1 - m) * (1 - 0.55 * s);
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
  var mm = Math.ceil(W);
  for (var d = -mm; d <= mm; d++) {
    var ii = Math.round(x + d - X0);
    if (ii < 0 || ii > N) continue;
    var q = Math.abs(d) / W;
    if (q > 1) continue;
    var hh = Ht * (1 - Math.pow(q, sh)) * (1 - 0.07 * Math.abs(Math.sin(d * 1.7 + x * 0.3)));
    if (hh > hm[ii]) hm[ii] = hh;
  }
}
function crown(x, Hc, W, ph) {
  var mm = Math.ceil(W);
  for (var d = -mm; d <= mm; d++) {
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
wg.addColorStop(0, C("#efb27e", "#9e584e", "#dcd3d8"));
wg.addColorStop(0.47, C("#e6a070", "#8a4c4c", "#d2cad2"));
wg.addColorStop(0.88, C("#d88a60", "#7a4048", "#c8c1cc"));
wg.addColorStop(1, C("#d4865e", "#763e48", "#c4bfcb"));
g.fillStyle = wg;
g.fillRect(-960, 0, 1920, 130);
if (sw > 0.01) {
  g.save();
  g.globalCompositeOperation = "lighter";
  var pg = g.createLinearGradient(-40, 0, 40, 0);
  pg.addColorStop(0, "rgba(255,190,130,0)");
  pg.addColorStop(0.5, "rgba(255,200,140," + (0.22 * sw).toFixed(3) + ")");
  pg.addColorStop(1, "rgba(255,190,130,0)");
  g.fillStyle = pg;
  g.fillRect(-40, 0, 80, 47);
  g.restore();
}
var cL = C("#fff0d0", "#c08070", "#f6f4f6"),
  cD = C("#9a5a58", "#4a2a36", "#8a90a6");
for (i = 0; i < 90; i++) {
  var yy = 0.6 + Math.pow(R(), 1.3) * 45,
    xx = (R() - 0.5) * 1900,
    L = 3 + R() * 8 + yy * 0.3,
    ph = R() * 6.283,
    lt = R() < 0.5;
  g.globalAlpha = 0.1 + 0.06 * Math.sin(t * 0.3 + ph);
  g.fillStyle = lt ? cL : cD;
  g.fillRect(xx + Math.sin(t * 0.1 + ph) * 2 - L / 2, yy, L, e.px);
}
g.globalAlpha = 1;
var cR = C("#302335", "#18122a", "#56607a");
for (var k = 0; k < 19; k++) {
  var y0 = k * 2;
  g.save();
  g.beginPath();
  g.rect(-960, y0, 1920, 2.05);
  g.clip();
  var dx = Math.sin(t * 0.3 + k * 0.8) * (0.2 + k * 0.04) + Math.sin(t * 0.17 + k * 1.7) * 0.25;
  g.translate(dx, 0);
  g.globalAlpha = 0.88 - k * 0.012;
  g.fillStyle = cR;
  g.beginPath();
  g.moveTo(X0, 0);
  for (i = 0; i <= N; i += 3) g.lineTo(X0 + i, hm[i]);
  g.lineTo(950, 0);
  g.closePath();
  g.fill();
  g.restore();
}
g.globalAlpha = 1;
var cP = C("#d99a74", "#7e4650", "#e4dde2");
for (i = 0; i < 40; i++) {
  var ry = 1 + R() * 34,
    rx = (R() - 0.5) * 1900,
    rl = 15 + R() * 60,
    ph2 = R() * 6.283;
  g.globalAlpha = 0.16 + 0.1 * Math.sin(t * 0.2 + ph2);
  g.fillStyle = cP;
  g.fillRect(rx + Math.sin(t * 0.08 + ph2) * 4 - rl / 2, ry, rl, e.px * 1.2);
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
  if (a > 0 && sw > 0.01) {
    g.globalAlpha = a * b * sw;
    g.fillStyle = "#ffe4b4";
    g.fillRect(gx - gln / 2, gy, gln, e.px * 1.1);
  }
}
g.restore();
g.globalAlpha = 1;
var cS = C("#ffd8a6", "#c07a6a", "#f4f0f0");
for (i = 0; i < 60; i++) {
  var sx0 = X0 + R() * 1900,
    sl = 5 + R() * 40,
    sa = 0.25 + 0.2 * R();
  g.globalAlpha = sa * (1 - 0.5 * s);
  g.fillStyle = cS;
  g.fillRect(sx0, 0.1, sl, e.px * 1.2);
}
g.globalAlpha = 1;
g.beginPath();
g.moveTo(X0, 0.3);
for (i = 0; i <= N; i++) g.lineTo(X0 + i, -hm[i]);
g.lineTo(950, 0.3);
g.closePath();
var fg = g.createLinearGradient(0, -36, 0, 0);
fg.addColorStop(0, C("#2a1e2e", "#140e1a", "#3e4860"));
fg.addColorStop(1, C("#1f1726", "#100b15", "#4a5568"));
g.fillStyle = fg;
g.fill();
if (sw > 0.01) {
  g.save();
  g.clip();
  g.globalCompositeOperation = "lighter";
  var rg = g.createRadialGradient(0, -28, 0, 0, -28, 130);
  rg.addColorStop(0, "rgba(255,140,80," + (0.35 * sw).toFixed(3) + ")");
  rg.addColorStop(0.4, "rgba(200,90,70," + (0.12 * sw).toFixed(3) + ")");
  rg.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = rg;
  g.fillRect(-140, -50, 280, 52);
  g.restore();
}
var fa0 = 0.26 * (1 + 1.4 * m),
  fb = g.createLinearGradient(0, -8, 0, 7);
fb.addColorStop(0, C("#f6c494", "#94687a", "#eef0f4", 0));
fb.addColorStop(0.55, C("#f6c494", "#94687a", "#eef0f4", fa0));
fb.addColorStop(1, C("#f6c494", "#94687a", "#eef0f4", 0));
g.fillStyle = fb;
g.fillRect(-960, -8, 1920, 15);
var cF = C("#f6c894", "#94687a", "#f0f2f6");
for (i = 0; i < 7; i++) {
  var fx = -900 + R() * 1800 + 60 * Math.sin(t * 0.01 * (1 + R()) + R() * 6),
    fy = -2.5 + R() * 3,
    frx = 120 + R() * 220,
    fry = 2 + R() * 3.5,
    fa = 0.1 + R() * 0.08;
  g.globalAlpha = Math.min(0.5, fa * (1 + 1.4 * m));
  g.fillStyle = cF;
  g.beginPath();
  g.ellipse(fx, fy, frx, fry, 0, 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
