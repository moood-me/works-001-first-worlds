var D = 5.5,
  S = e.state || {};
var aj = Math.max(0, Math.min(1, +S.door_ajar || 0));
var L = S.light_shafts == null ? 0.85 : Math.max(0, Math.min(1, +S.light_shafts));
var cs = S.someone_present === "caretaker-shadow";
var W = 1.7,
  H = 2.45,
  DN = 0.45,
  DX = 0.105,
  DH = 0.25,
  dl = -1.15,
  dr = -0.35,
  dh = 1.9,
  XC = -0.68,
  DC = 6.6;
function P(X, h, d) {
  return [(X * D) / d, -1.7 + ((1.7 - h) * D) / d];
}
function poly(a) {
  g.beginPath();
  for (var i = 0; i < a.length; i++) {
    var p = P(a[i][0], a[i][1], a[i][2]);
    if (i) g.lineTo(p[0], p[1]);
    else g.moveTo(p[0], p[1]);
  }
  g.closePath();
}
function ln(a, b) {
  var p = P(a[0], a[1], a[2]),
    q = P(b[0], b[1], b[2]);
  g.beginPath();
  g.moveTo(p[0], p[1]);
  g.lineTo(q[0], q[1]);
  g.stroke();
}
var FP = [
  [-0.17, 0],
  [-0.03, 0],
  [-0.025, 0.72],
  [0.025, 0.72],
  [0.03, 0],
  [0.17, 0],
  [0.19, 0.82],
  [0.23, 0.9],
  [0.22, 1.42],
  [0.12, 1.5],
  [0.07, 1.53],
  [0.1, 1.6],
  [0.13, 1.68],
  [0.1, 1.71],
  [0.06, 1.79],
  [-0.06, 1.79],
  [-0.1, 1.71],
  [-0.13, 1.68],
  [-0.1, 1.6],
  [-0.07, 1.53],
  [-0.12, 1.5],
  [-0.22, 1.42],
  [-0.23, 0.9],
  [-0.19, 0.82],
];
function blk(x0, h0) {
  if (!cs) return false;
  var xf = x0 - DX * (DC - D) - XC,
    hf = h0 + DH * (DC - D);
  var a = Math.abs(xf);
  if (hf > 1.79 || hf < 0) return false;
  if (hf < 0.82) return a < 0.17 && !(hf < 0.72 && a < 0.027);
  if (hf < 1.45) return a < 0.225;
  if (hf < 1.53) return a < 0.1;
  return a < 0.115;
}
var G = [
  [-1.48, 0.025, 0.15, 2.45],
  [-0.12, 0.03, 0, 2.45],
  [0.22, 0.014, 0.6, 2.45],
  [0.55, 0.04, 0, 1.55],
  [0.9, 0.022, 0, 2.45],
  [1.27, 0.034, 0.3, 2.1],
  [1.52, 0.014, 0, 2.45],
];
var K = [1.06, 1.05, 0.03];
var th = aj * 1.4;
var wg = g.createLinearGradient(-W, 0, W, 0);
wg.addColorStop(0, "#21170f");
wg.addColorStop(0.35, "#2c2017");
wg.addColorStop(1, "#231910");
g.fillStyle = wg;
g.beginPath();
g.rect(-W - 0.05, -H - 0.05, 2 * W + 0.1, H + 0.05);
G.forEach(function (q) {
  g.rect(q[0] - q[1] / 2, -q[3], q[1], q[3] - q[2]);
});
g.rect(dl, -dh, dr - dl, dh);
g.moveTo(K[0] + K[2], -K[1]);
g.arc(K[0], -K[1], K[2], 0, 6.283);
g.fill("evenodd");
g.strokeStyle = "rgba(10,6,4,0.55)";
g.lineWidth = 0.014;
for (var x = -W + 0.15; x < W; x += 0.14 + e.rnd() * 0.08) {
  if (x > dl - 0.03 && x < dr + 0.03) continue;
  g.beginPath();
  g.moveTo(x, -H);
  g.lineTo(x, 0);
  g.stroke();
}
g.strokeStyle = "rgba(96,70,50,0.13)";
g.lineWidth = 0.008;
for (var i = 0; i < 46; i++) {
  var x = -W + e.rnd() * 2 * W,
    y = -0.1 - e.rnd() * 2.2,
    l = 0.2 + e.rnd() * 0.5;
  if (x > dl - 0.08 && x < dr + 0.08) continue;
  g.beginPath();
  g.moveTo(x, y);
  g.bezierCurveTo(x + 0.01, y - l * 0.3, x - 0.01, y - l * 0.6, x + 0.005, y - l);
  g.stroke();
}
g.fillStyle = "rgba(12,8,5,0.5)";
for (var i = 0; i < 6; i++) {
  var x = -W + 0.1 + e.rnd() * 3.2,
    y = -0.2 - e.rnd() * 2;
  if (x > dl - 0.1 && x < dr + 0.1) continue;
  g.beginPath();
  g.ellipse(x, y, 0.025, 0.04, 0, 0, 6.283);
  g.fill();
}
g.globalCompositeOperation = "lighter";
G.forEach(function (q) {
  var c = q[0],
    w = q[1];
  for (var h = q[2]; h < q[3] - 0.001; h += 0.1) {
    var h2 = Math.min(q[3], h + 0.1);
    var b = blk(c, (h + h2) / 2) ? 0.12 : 1;
    g.fillStyle = "rgba(255,196,128," + ((0.3 + 0.55 * L) * b).toFixed(3) + ")";
    g.fillRect(c - w / 2, -h2, w, h2 - h);
  }
  var gg = g.createLinearGradient(c - 0.09, 0, c + 0.09, 0);
  gg.addColorStop(0, "rgba(255,150,80,0)");
  gg.addColorStop(0.5, "rgba(255,160,90," + (0.1 * L + 0.03).toFixed(3) + ")");
  gg.addColorStop(1, "rgba(255,150,80,0)");
  g.fillStyle = gg;
  g.fillRect(c - 0.09, -q[3], 0.18, q[3] - q[2]);
});
g.fillStyle = "rgba(255,212,150," + (0.35 + 0.6 * L).toFixed(3) + ")";
g.beginPath();
g.arc(K[0], -K[1], K[2], 0, 6.283);
g.fill();
var kg = g.createRadialGradient(K[0], -K[1], 0, K[0], -K[1], 0.14);
kg.addColorStop(0, "rgba(255,170,100," + (0.25 * L).toFixed(3) + ")");
kg.addColorStop(1, "rgba(255,150,90,0)");
g.fillStyle = kg;
g.fillRect(K[0] - 0.15, -K[1] - 0.15, 0.3, 0.3);
var og = g.createRadialGradient(-0.75, -1.6, 0, -0.75, -1.6, 1.3);
og.addColorStop(0, "rgba(255,196,128," + ((0.2 + 0.35 * L) * (1 - 0.7 * aj)).toFixed(3) + ")");
og.addColorStop(1, "rgba(255,160,100," + ((0.1 + 0.2 * L) * (1 - 0.7 * aj)).toFixed(3) + ")");
g.fillStyle = og;
g.fillRect(dl, -dh, dr - dl, dh);
g.globalCompositeOperation = "source-over";
g.fillStyle = "#1a120c";
g.fillRect(dl - 0.08, -dh - 0.08, 0.08, dh + 0.08);
g.fillRect(dr, -dh - 0.08, 0.08, dh + 0.08);
g.fillRect(dl - 0.08, -dh - 0.08, dr - dl + 0.16, 0.08);
var lw = 0.78,
  hx = dl + 0.01,
  c1 = Math.cos(th),
  s1 = Math.sin(th);
function LP(u, h) {
  return [hx + u * c1, h, D - u * s1];
}
poly([LP(0, 0.02), LP(lw, 0.02), LP(lw, 1.88), LP(0, 1.88)]);
g.fillStyle = "#2b2017";
g.fill();
g.strokeStyle = "rgba(8,5,3,0.6)";
g.lineWidth = 0.012;
for (var u = 0.15; u < lw - 0.02; u += 0.155) ln(LP(u, 0.02), LP(u, 1.88));
g.fillStyle = "#35271c";
poly([LP(0.03, 0.3), LP(lw - 0.03, 0.3), LP(lw - 0.03, 0.42), LP(0.03, 0.42)]);
g.fill();
poly([LP(0.03, 1.5), LP(lw - 0.03, 1.5), LP(lw - 0.03, 1.62), LP(0.03, 1.62)]);
g.fill();
poly([LP(0.03, 0.42), LP(0.14, 0.42), LP(lw - 0.03, 1.4), LP(lw - 0.03, 1.5), LP(lw - 0.14, 1.5), LP(0.03, 0.52)]);
g.fill();
g.fillStyle = "#1a1410";
poly([LP(lw - 0.13, 0.98), LP(lw - 0.05, 0.98), LP(lw - 0.05, 1.04), LP(lw - 0.13, 1.04)]);
g.fill();
if (th > 0.03) {
  g.strokeStyle = "rgba(255,190,120," + (0.5 * L + 0.1).toFixed(3) + ")";
  g.lineWidth = e.px * 1.5;
  ln(LP(lw, 0.02), LP(lw, 1.88));
}
if (cs && th < 0.05) {
  g.fillStyle = "rgba(18,12,9,0.9)";
  for (var k = 0; k < 19; k++) {
    var hm = k * 0.1 + 0.05;
    if (blk(dl + 0.005, hm)) g.fillRect(dl, -(k + 1) * 0.1, 0.011, 0.1);
    if (blk(dr - 0.005, hm)) g.fillRect(dr - 0.011, -(k + 1) * 0.1, 0.011, 0.1);
  }
  for (var x = dl; x < dr; x += 0.04) {
    if (blk(x + 0.02, 0.01)) g.fillRect(x, -0.021, 0.04, 0.021);
  }
}
g.strokeStyle = "#3a2a1f";
g.lineWidth = 0.025;
g.beginPath();
g.arc(-0.75, -2.1, 0.05, 0.2, Math.PI - 0.2);
g.stroke();
poly([
  [-W, 0, D],
  [-W, H, D],
  [-W, H, DN],
  [-W, 0, DN],
]);
g.fillStyle = "#1c140e";
g.fill();
g.save();
g.clip();
var lp = P(-W, 0.9, 5.0);
var lgl = g.createRadialGradient(lp[0], lp[1], 0, lp[0], lp[1], 3);
lgl.addColorStop(0, "rgba(120,76,46," + (0.12 + 0.2 * aj * L).toFixed(3) + ")");
lgl.addColorStop(1, "rgba(120,76,46,0)");
g.fillStyle = lgl;
g.fillRect(-12, -8, 10, 12);
g.restore();
poly([
  [W, 0, D],
  [W, H, D],
  [W, H, DN],
  [W, 0, DN],
]);
g.fillStyle = "#1f160f";
g.fill();
g.strokeStyle = "rgba(8,5,3,0.5)";
for (var d = D - 0.12; d > DN + 0.1; d -= 0.15 + e.rnd() * 0.06) {
  g.lineWidth = Math.max(e.px, (0.012 * D) / d);
  ln([-W, 0, d], [-W, H, d]);
  ln([W, 0, d], [W, H, d]);
}
g.globalCompositeOperation = "lighter";
g.strokeStyle = "rgba(255,170,100," + (0.12 + 0.3 * L).toFixed(3) + ")";
g.lineWidth = Math.max(e.px, (0.008 * D) / 4.6);
ln([W, 0.5, 4.6], [W, 1.9, 4.6]);
g.lineWidth = Math.max(e.px, (0.008 * D) / 3.05);
ln([W, 0.2, 3.05], [W, 1.4, 3.05]);
g.strokeStyle = "rgba(255,160,95," + (0.1 + 0.2 * L).toFixed(3) + ")";
g.lineWidth = Math.max(e.px, (0.007 * D) / 3.6);
ln([-W, 0.8, 3.6], [-W, 2.2, 3.6]);
g.globalCompositeOperation = "source-over";
poly([
  [-W, H, D],
  [W, H, D],
  [W, H, DN],
  [-W, H, DN],
]);
g.fillStyle = "#160f0b";
g.fill();
g.strokeStyle = "rgba(0,0,0,0.45)";
g.lineWidth = 0.02;
for (var X = -1.5; X < W; X += 0.2 + e.rnd() * 0.05) ln([X, H, D], [X, H, DN + 0.2]);
g.fillStyle = "rgba(120,104,150,0.55)";
poly([
  [0.55, H, 2.3],
  [0.68, H, 2.33],
  [0.66, H, 2.2],
  [0.56, H, 2.18],
]);
g.fill();
g.fillStyle = "#1a120c";
g.fillRect(-W, -H, 0.12, H);
g.fillRect(W - 0.12, -H, 0.12, H);
[4.9, 3.8, 2.7, 1.6].forEach(function (d) {
  poly([
    [-W, 2.1, d],
    [W, 2.1, d],
    [W, 2.1, d + 0.12],
    [-W, 2.1, d + 0.12],
  ]);
  g.fillStyle = "#2b2016";
  g.fill();
  poly([
    [-W, 2.1, d],
    [W, 2.1, d],
    [W, 2.24, d],
    [-W, 2.24, d],
  ]);
  g.fillStyle = "#19110c";
  g.fill();
});
var cp = P(-1.25, 2.1, 3.8),
  ck = D / 3.8;
g.save();
g.translate(cp[0], cp[1]);
g.scale(ck, ck);
g.strokeStyle = "#2a1d15";
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(0, 0);
g.lineTo(0, 0.13);
g.stroke();
g.strokeStyle = "#241913";
g.lineWidth = 0.08;
g.beginPath();
g.ellipse(0, 0.4, 0.19, 0.27, 0.08, 0, 6.283);
g.stroke();
g.strokeStyle = "#33251b";
g.lineWidth = 0.03;
g.beginPath();
g.ellipse(0, 0.4, 0.15, 0.23, 0.08, 0, 6.283);
g.stroke();
g.strokeStyle = "rgba(255,170,100,0.18)";
g.lineWidth = (e.px * 1.4) / ck;
g.beginPath();
g.ellipse(0, 0.4, 0.23, 0.31, 0.08, 3.6, 5.4);
g.stroke();
g.restore();
poly([
  [-W, 0, D],
  [W, 0, D],
  [W, 0, DN],
  [-W, 0, DN],
]);
g.fillStyle = "#211810";
g.fill();
g.save();
g.clip();
g.globalCompositeOperation = "lighter";
var fp = P(-0.75, 0, D);
var fg = g.createRadialGradient(fp[0], fp[1], 0, fp[0], fp[1], 5);
fg.addColorStop(0, "rgba(130,84,50," + (0.1 + 0.22 * aj).toFixed(3) + ")");
fg.addColorStop(1, "rgba(130,84,50,0)");
g.fillStyle = fg;
g.fillRect(-12, -2, 24, 6);
g.globalCompositeOperation = "source-over";
g.lineCap = "round";
for (var i = 0; i < 170; i++) {
  var X = -1.65 + e.rnd() * 3.3,
    d = 2.6 + e.rnd() * 2.85,
    a = e.rnd() * 3.14,
    l = 0.06 + e.rnd() * 0.14,
    c = e.rnd();
  g.strokeStyle = c < 0.6 ? "rgba(112,88,56,0.35)" : "rgba(150,120,78,0.3)";
  g.lineWidth = Math.max(e.px * 0.8, (0.007 * D) / d);
  ln([X, 0, d], [X + Math.cos(a) * l, 0, d + Math.sin(a) * l]);
}
g.strokeStyle = "rgba(140,110,76,0.13)";
for (var k = 0; k < 7; k++) {
  var r = 0.45 + k * 0.07;
  g.lineWidth = Math.max(e.px, 0.016);
  g.beginPath();
  for (var j = 0; j <= 12; j++) {
    var a = 2.1 + j * 0.11;
    var p = P(0.95 + r * Math.cos(a), 0, 3.95 + r * Math.sin(a));
    j ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]);
  }
  g.stroke();
}
for (var i = 0; i < 9; i++) {
  var u = i / 8;
  var X = -0.75 + u * 1.25 + (i % 2 ? 0.07 : -0.07),
    d = 5.2 - u * 1.6;
  g.fillStyle = "rgba(14,9,6,0.3)";
  g.beginPath();
  for (var j = 0; j < 10; j++) {
    var a = (j / 10) * 6.283;
    var p = P(X + 0.045 * Math.cos(a), 0, d + 0.11 * Math.sin(a));
    j ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]);
  }
  g.closePath();
  g.fill();
}
g.globalCompositeOperation = "lighter";
G.forEach(function (q) {
  var s1 = q[2] / DH,
    s2 = Math.min(q[3] / DH, D - DN);
  if (s2 <= s1) return;
  var c = q[0],
    w = q[1] * 1.2;
  poly([
    [c - w / 2 + DX * s1, 0, D - s1],
    [c + w / 2 + DX * s1, 0, D - s1],
    [c + w / 2 + DX * s2, 0, D - s2],
    [c - w / 2 + DX * s2, 0, D - s2],
  ]);
  g.fillStyle = "rgba(255,186,112," + (0.5 * L).toFixed(3) + ")";
  g.fill();
});
if (aj > 0.02) {
  var xa = Math.max(dl, dl + 0.8 * (Math.cos(th) - DX * Math.sin(th)));
  if (dr > xa + 0.004) {
    var sm = Math.min(dh / DH, D - DN);
    poly([
      [xa, 0, D],
      [dr, 0, D],
      [dr + DX * sm, 0, D - sm],
      [xa + DX * sm, 0, D - sm],
    ]);
    var pg = g.createLinearGradient(0, 0, 0, P(0, 0, 2.6)[1]);
    pg.addColorStop(0, "rgba(255,172,98," + (0.46 * L).toFixed(3) + ")");
    pg.addColorStop(1, "rgba(255,150,86," + (0.26 * L).toFixed(3) + ")");
    g.fillStyle = pg;
    g.fill();
    if (cs) {
      g.save();
      g.clip();
      g.globalCompositeOperation = "source-over";
      g.beginPath();
      FP.forEach(function (p, i) {
        var s = Math.min(p[1] / DH, DC - 0.35);
        var q = P(XC + p[0] + DX * s, 0, DC - s);
        i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1]);
      });
      g.closePath();
      g.fillStyle = "rgba(30,21,14,0.88)";
      g.fill();
      g.restore();
    }
  }
}
g.restore();
g.globalCompositeOperation = "source-over";
