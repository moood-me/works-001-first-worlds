var P = [
  [-3.5, -1.1],
  [-2.6, -1.2],
  [-1.9, -1.28],
  [-1.5, -1.17],
  [-1.05, -1.22],
  [-0.6, -1.02],
  [-0.25, -0.97],
  [0.15, -0.81],
  [0.5, -0.76],
  [0.9, -0.59],
  [1.35, -0.52],
  [1.8, -0.37],
  [2.3, -0.3],
  [2.8, -0.13],
  [3.2, 0.3],
];
function hAt(x) {
  for (var i = 0; i < P.length - 1; i++) {
    if (x >= P[i][0] && x <= P[i + 1][0]) {
      var u = (x - P[i][0]) / (P[i + 1][0] - P[i][0]);
      return P[i][1] + (P[i + 1][1] - P[i][1]) * u;
    }
  }
  return 0;
}
g.beginPath();
g.moveTo(-3.5, 0.6);
for (var i = 0; i < P.length; i++) g.lineTo(P[i][0], P[i][1]);
g.lineTo(3.2, 0.6);
g.closePath();
var rg = g.createLinearGradient(0, -1.3, 0, 0.3);
rg.addColorStop(0, "#272a3e");
rg.addColorStop(0.5, "#1a1c2b");
rg.addColorStop(1, "#10121b");
g.fillStyle = rg;
g.fill();
g.save();
g.clip();
for (var i = 0; i < P.length - 2; i++) {
  var a = P[i],
    b = P[i + 1];
  var d = 0.12 + e.rnd() * 0.25;
  var lit = b[1] > a[1] ? 1 : 0.4;
  g.fillStyle = "rgba(150,138,168," + ((0.05 + e.rnd() * 0.07) * lit).toFixed(3) + ")";
  g.beginPath();
  g.moveTo(a[0], a[1]);
  g.lineTo(b[0], b[1]);
  g.lineTo(b[0] - 0.05, b[1] + d);
  g.lineTo(a[0] + 0.1, a[1] + d * 0.7);
  g.closePath();
  g.fill();
}
g.strokeStyle = "rgba(8,9,16,0.55)";
g.lineWidth = e.px * 1.3;
for (var i = 0; i < 9; i++) {
  var x = -1.6 + e.rnd() * 3.6,
    y = hAt(x) + 0.02;
  g.beginPath();
  g.moveTo(x, y);
  for (var k = 0; k < 3; k++) {
    x += (e.rnd() - 0.5) * 0.12;
    y += 0.06 + e.rnd() * 0.14;
    g.lineTo(x, y);
  }
  g.stroke();
}
for (var i = 0; i < 10; i++) {
  var x = -1.5 + e.rnd() * 3.4,
    y = hAt(x) + 0.08 + e.rnd() * 0.35,
    w = 0.04 + e.rnd() * 0.1,
    h = 0.012 + e.rnd() * 0.02;
  g.fillStyle = "rgba(150,156,184," + (0.25 + e.rnd() * 0.25).toFixed(3) + ")";
  g.beginPath();
  g.moveTo(x - w, y);
  g.lineTo(x - w * 0.3, y - h);
  g.lineTo(x + w * 0.6, y - h * 0.7);
  g.lineTo(x + w, y + h * 0.2);
  g.lineTo(x, y + h * 0.5);
  g.closePath();
  g.fill();
}
g.restore();
for (var i = 0; i < P.length - 2; i++) {
  var a = P[i],
    b = P[i + 1];
  if (e.rnd() < 0.2) continue;
  var t0 = e.rnd() * 0.15,
    t1 = 0.8 + e.rnd() * 0.2;
  var ax = a[0] + (b[0] - a[0]) * t0,
    ay = a[1] + (b[1] - a[1]) * t0,
    bx = a[0] + (b[0] - a[0]) * t1,
    by = a[1] + (b[1] - a[1]) * t1;
  var th = 0.015 + e.rnd() * 0.035;
  var mx = (ax + bx) / 2,
    my = (ay + by) / 2,
    jit = (e.rnd() - 0.5) * 0.1;
  g.fillStyle = "rgba(172,178,204,0.8)";
  g.beginPath();
  g.moveTo(ax, ay - 0.006);
  g.lineTo(mx, my - 0.012);
  g.lineTo(bx, by - 0.006);
  g.lineTo(bx - 0.03, by + th * 0.4);
  g.lineTo(mx + jit, my + th);
  g.lineTo(ax + 0.03, ay + th * 0.5);
  g.closePath();
  g.fill();
}
g.strokeStyle = "rgba(205,160,150,0.18)";
g.lineWidth = e.px * 1.2;
g.beginPath();
g.moveTo(P[0][0], P[0][1] - 0.012);
for (var i = 1; i < 10; i++) g.lineTo(P[i][0], P[i][1] - 0.012);
g.stroke();
var T = [-0.95, -0.4, 0.62, 1.1];
g.lineCap = "round";
for (var j = 0; j < T.length; j++) {
  var bx = T[j],
    by = hAt(bx) + 0.01,
    n = 5 + Math.floor(e.rnd() * 4);
  for (var k = 0; k < n; k++) {
    var h = 0.16 + e.rnd() * 0.26,
      ang = (e.rnd() - 0.5) * 0.7 + 0.08,
      ph = e.rnd() * 6.283,
      cr = Math.round(100 + e.rnd() * 30),
      cg = Math.round(84 + e.rnd() * 20),
      lw = 0.005 + e.rnd() * 0.004,
      off = (e.rnd() - 0.5) * 0.03;
    var sw =
      Math.sin(e.t * 0.8 + ph + j) * 0.035 +
      Math.sin(e.t * 0.33 + ph * 1.7) * 0.03 +
      Math.sin(e.t * 1.9 + ph * 0.4) * 0.008;
    var a2 = ang + sw;
    var tx = bx + off + Math.sin(a2) * h,
      ty = by - Math.cos(a2) * h;
    var cx = bx + off + Math.sin(ang * 0.4) * h * 0.5,
      cy = by - h * 0.55;
    g.strokeStyle = "rgba(" + cr + "," + cg + ",66,0.9)";
    g.lineWidth = lw;
    g.beginPath();
    g.moveTo(bx + off, by);
    g.quadraticCurveTo(cx, cy, tx, ty);
    g.stroke();
  }
}
