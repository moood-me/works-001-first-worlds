var S = e.state,
  gl = Math.max(0, Math.min(1, S.lamp_glow == null ? 0.75 : S.lamp_glow)),
  dop = Math.max(0, Math.min(1, S.door_open == null ? 1 : S.door_open));
var kO = 3.2 / 3.7;
function arch(cx, hb, hs, r, n) {
  var a = [
    [cx - r, hb],
    [cx - r, hs],
  ];
  for (var i = 1; i < n; i++) {
    var th = Math.PI - (Math.PI * i) / n;
    a.push([cx + r * Math.cos(th), hs + r * Math.sin(th)]);
  }
  a.push([cx + r, hs]);
  a.push([cx + r, hb]);
  return a;
}
function path(a) {
  g.moveTo(a[0][0], a[0][1]);
  for (var i = 1; i < a.length; i++) g.lineTo(a[i][0], a[i][1]);
  g.closePath();
}
function quad(a, b, c, d, col) {
  g.beginPath();
  g.moveTo(a[0], a[1]);
  g.lineTo(b[0], b[1]);
  g.lineTo(c[0], c[1]);
  g.lineTo(d[0], d[1]);
  g.closePath();
  g.fillStyle = col;
  g.fill();
  g.strokeStyle = col;
  g.lineWidth = e.px;
  g.stroke();
}
var dI = arch(0, 0, 1.85, 0.65, 18).map(function (p) {
  return [p[0], -p[1]];
});
var dO = dI.map(function (p) {
  return [p[0] * kO, -1.7 + (1.7 + p[1]) * kO];
});
var wx = -2.55,
  wy = -1.58;
var wI = arch(wx, 1.2, 1.72, 0.27, 12).map(function (p) {
  return [p[0], -p[1]];
});
var wO = wI.map(function (p) {
  return [wx + 0.03 + (p[0] - wx) * 0.6, wy + 0.02 + (p[1] - wy) * 0.6];
});
g.fillStyle = "#262230";
g.fillRect(-14, 0, 28, 3);
g.beginPath();
g.rect(-14, -7, 28, 7);
path(dI);
path(wI);
var vg = g.createLinearGradient(0, -7, 0, 0);
vg.addColorStop(0, "#111223");
vg.addColorStop(0.5, "#222237");
vg.addColorStop(0.78, "#333149");
vg.addColorStop(1, "#2a283a");
g.fillStyle = vg;
g.fill("evenodd");
g.save();
g.clip("evenodd");
for (var i = 0; i < 70; i++) {
  var x = -12 + e.rnd() * 24,
    y = -5.5 + e.rnd() * 5.6,
    r = 0.25 + e.rnd() * 1.1,
    a = 0.03 + e.rnd() * 0.06,
    dk = e.rnd() < 0.55;
  var rg = g.createRadialGradient(x, y, 0, x, y, r);
  rg.addColorStop(0, dk ? "rgba(14,13,24," + a.toFixed(3) + ")" : "rgba(125,118,142," + a.toFixed(3) + ")");
  rg.addColorStop(1, dk ? "rgba(14,13,24,0)" : "rgba(125,118,142,0)");
  g.fillStyle = rg;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
for (var i = 0; i < 10; i++) {
  var cx = -9 + e.rnd() * 18,
    cy = -0.5 - e.rnd() * 2.9,
    rw = 0.3 + e.rnd() * 0.55,
    rh = 0.2 + e.rnd() * 0.3,
    pts = [];
  for (var j = 0; j < 8; j++) {
    var an = (j / 8) * 6.283,
      rr = 0.7 + e.rnd() * 0.5;
    pts.push([cx + Math.cos(an) * rw * rr, cy + Math.sin(an) * rh * rr]);
  }
  if (Math.abs(cx) < 1.3 && cy > -3) continue;
  if (Math.abs(cx - wx) < 0.9) continue;
  if (cx > 0.6 && cx < 1.8 && cy < -1.2 && cy > -2.5) continue;
  g.save();
  g.beginPath();
  path(pts);
  g.fillStyle = "rgba(20,18,30,0.4)";
  g.fill();
  g.clip();
  g.strokeStyle = "rgba(10,9,18,0.55)";
  g.lineWidth = 0.012;
  g.beginPath();
  for (var yy = cy - rh * 1.3, row = 0; yy < cy + rh * 1.3; yy += 0.17, row++) {
    g.moveTo(cx - rw * 1.3, yy);
    g.lineTo(cx + rw * 1.3, yy);
    for (var xx = cx - rw * 1.3 + (row % 2) * 0.14; xx < cx + rw * 1.3; xx += 0.28) {
      g.moveTo(xx, yy);
      g.lineTo(xx, yy + 0.17);
    }
  }
  g.stroke();
  g.restore();
  g.beginPath();
  path(pts);
  g.strokeStyle = "rgba(150,140,162,0.16)";
  g.lineWidth = 0.015;
  g.stroke();
}
g.strokeStyle = "rgba(10,9,18,0.5)";
g.lineWidth = 0.007;
for (var i = 0; i < 7; i++) {
  var x = -8 + e.rnd() * 16,
    y = -0.2 - e.rnd() * 3.2;
  g.beginPath();
  g.moveTo(x, y);
  for (var k = 0; k < 6; k++) {
    x += (e.rnd() - 0.5) * 0.16;
    y += (e.rnd() - 0.3) * 0.14;
    g.lineTo(x, y);
  }
  g.stroke();
}
var bg2 = g.createLinearGradient(0, -0.7, 0, 0);
bg2.addColorStop(0, "rgba(10,9,18,0)");
bg2.addColorStop(1, "rgba(10,9,18,0.4)");
g.fillStyle = bg2;
g.fillRect(-14, -0.7, 28, 0.7);
var cg = g.createLinearGradient(0, -4.2, 0, -2.9);
cg.addColorStop(0, "rgba(8,8,16,0.75)");
cg.addColorStop(1, "rgba(8,8,16,0)");
g.fillStyle = cg;
g.fillRect(-14, -7, 28, 4.1);
var hg = g.createLinearGradient(-8, 0, 8, 0);
hg.addColorStop(0, "rgba(9,9,18,0.7)");
hg.addColorStop(0.3, "rgba(9,9,18,0.12)");
hg.addColorStop(0.5, "rgba(9,9,18,0)");
hg.addColorStop(0.72, "rgba(9,9,18,0.1)");
hg.addColorStop(1, "rgba(9,9,18,0.7)");
g.fillStyle = hg;
g.fillRect(-14, -7, 28, 7);
g.globalCompositeOperation = "lighter";
var lp = g.createRadialGradient(1.15, -1.8, 0, 1.15, -1.8, 3.4);
lp.addColorStop(0, "rgba(235,150,90," + (0.36 * gl).toFixed(3) + ")");
lp.addColorStop(0.3, "rgba(205,120,78," + (0.15 * gl).toFixed(3) + ")");
lp.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = lp;
g.fillRect(-3, -6, 8.5, 6);
var cp = g.createRadialGradient(-2.55, -1.55, 0, -2.55, -1.55, 1.1);
cp.addColorStop(0, "rgba(90,100,150,0.12)");
cp.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = cp;
g.fillRect(-4, -3, 3, 3);
g.globalCompositeOperation = "source-over";
g.restore();
var n = dI.length;
for (var i = 0; i < n; i++) {
  var j = (i + 1) % n,
    a = dI[i],
    b = dI[j],
    mx = (a[0] + b[0]) / 2,
    my = (a[1] + b[1]) / 2,
    col;
  if (Math.abs(a[1]) < 0.001 && Math.abs(b[1]) < 0.001) col = "#4b4759";
  else if (my < -1.86) col = "#232235";
  else if (mx < 0)
    col = "rgb(" + Math.round(62 + 40 * gl) + "," + Math.round(58 + 22 * gl) + "," + Math.round(78 + 6 * gl) + ")";
  else col = "#2c2a3d";
  quad(a, b, dO[j], dO[i], col);
}
var s1 = dI[n - 1],
  s2 = dI[0];
var sg = g.createLinearGradient(0, dO[0][1], 0, 0);
sg.addColorStop(0, "rgba(150,160,205,0.28)");
sg.addColorStop(1, "rgba(150,160,205,0.04)");
g.beginPath();
g.moveTo(s2[0], s2[1]);
g.lineTo(s1[0], s1[1]);
g.lineTo(dO[n - 1][0], dO[n - 1][1]);
g.lineTo(dO[0][0], dO[0][1]);
g.closePath();
g.fillStyle = sg;
g.fill();
g.strokeStyle = "rgba(175,165,180,0.35)";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-0.65, -0.004);
g.lineTo(0.65, -0.004);
g.stroke();
for (var i = 0; i < 18; i++) {
  var sx = (e.rnd() - 0.5) * 1.1,
    sy = dO[0][1] * e.rnd(),
    sr = 0.004 + e.rnd() * 0.008;
  g.fillStyle = "rgba(214,220,236," + (0.6 * dop).toFixed(3) + ")";
  g.beginPath();
  g.arc(sx, sy, sr, 0, 6.283);
  g.fill();
}
g.beginPath();
path(dO);
g.strokeStyle = "rgba(150,162,210,0.3)";
g.lineWidth = 0.012;
g.stroke();
g.fillStyle = "#16141e";
g.fillRect(-0.68, -0.4, 0.04, 0.07);
g.fillRect(-0.68, -1.62, 0.04, 0.07);
var m = wI.length;
for (var i = 0; i < m; i++) {
  var j = (i + 1) % m,
    a = wI[i],
    b = wI[j],
    mx = (a[0] + b[0]) / 2,
    my = (a[1] + b[1]) / 2,
    col;
  if (Math.abs(a[1] - b[1]) < 0.001 && my > -1.25) col = "#48455d";
  else if (my < -1.73) col = "#29283b";
  else if (mx < wx) col = "#3c3a52";
  else col = "#302e43";
  quad(a, b, wO[j], wO[i], col);
}
g.beginPath();
path(wO);
g.strokeStyle = "rgba(150,162,210,0.35)";
g.lineWidth = 0.01;
g.stroke();
g.fillStyle = "rgba(150,160,205,0.06)";
g.fill();
var ys = wO.map(function (p) {
    return p[1];
  }),
  xs = wO.map(function (p) {
    return p[0];
  });
g.strokeStyle = "#191824";
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(wx + 0.03, Math.min.apply(null, ys));
g.lineTo(wx + 0.03, Math.max.apply(null, ys));
g.moveTo(Math.min.apply(null, xs), wy + 0.02);
g.lineTo(Math.max.apply(null, xs), wy + 0.02);
g.stroke();
