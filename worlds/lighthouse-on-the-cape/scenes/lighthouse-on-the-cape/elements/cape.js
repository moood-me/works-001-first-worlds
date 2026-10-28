var P = [
  [-42, 0.5],
  [-38, -0.6],
  [-35, -1.4],
  [-31, -1.1],
  [-28, -2.8],
  [-25, -2.4],
  [-22, -4.6],
  [-19, -5.2],
  [-16, -7.8],
  [-13, -8.4],
  [-10, -10.6],
  [-7, -11.8],
  [-4.5, -13.2],
  [-2, -14],
  [2, -14.3],
  [7, -14.1],
  [11, -14.2],
  [14, -13.8],
  [17, -15.2],
  [21, -16.4],
  [26, -15.9],
  [31, -17.1],
  [38, -16.6],
  [46, -18.2],
  [57, -17.6],
  [70, -19.2],
  [86, -18.7],
  [105, -20.1],
  [130, -19.6],
  [170, -21],
  [265, -21.5],
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
g.moveTo(-42, 1.5);
for (var i = 0; i < P.length; i++) g.lineTo(P[i][0], P[i][1]);
g.lineTo(265, 1.5);
g.closePath();
var gr = g.createLinearGradient(-40, 0, 120, 0);
gr.addColorStop(0, "#383650");
gr.addColorStop(0.3, "#2a2a3e");
gr.addColorStop(1, "#202232");
g.fillStyle = gr;
g.fill();
g.save();
g.clip();
for (var i = 0; i < P.length - 1; i++) {
  var a = P[i],
    b = P[i + 1];
  if (b[1] < a[1]) {
    var d = 3 + e.rnd() * 5;
    g.fillStyle = "rgba(140,120,140," + (0.1 + e.rnd() * 0.12).toFixed(3) + ")";
    g.beginPath();
    g.moveTo(a[0], a[1]);
    g.lineTo(b[0], b[1]);
    g.lineTo(b[0] - d * 0.5, b[1] + d);
    g.lineTo(a[0] - d * 0.3, a[1] + d * 0.8);
    g.closePath();
    g.fill();
  }
}
g.strokeStyle = "rgba(12,13,22,0.45)";
g.lineWidth = 0.25;
for (var i = 0; i < 60; i++) {
  var x = -38 + e.rnd() * 200,
    y0 = -e.rnd() * 18;
  g.beginPath();
  g.moveTo(x, y0);
  g.lineTo(x + (e.rnd() - 0.5) * 3, y0 + 1 + e.rnd() * 4);
  g.stroke();
}
for (var i = 0; i < 45; i++) {
  var x = -36 + e.rnd() * 180,
    top = hAt(x),
    y = top * (0.15 + e.rnd() * 0.7),
    rx = 0.5 + e.rnd() * 1.6,
    ry = 0.1 + e.rnd() * 0.22;
  g.fillStyle = "rgba(150,156,182," + (0.18 + e.rnd() * 0.25).toFixed(3) + ")";
  g.beginPath();
  g.ellipse(x, y, rx, ry, (e.rnd() - 0.5) * 0.3, 0, 6.283);
  g.fill();
}
var sh = g.createLinearGradient(0, -22, 0, 1);
sh.addColorStop(0, "rgba(10,12,20,0)");
sh.addColorStop(1, "rgba(10,12,20,0.5)");
g.fillStyle = sh;
g.fillRect(-45, -25, 315, 27);
g.restore();
for (var i = 0; i < P.length - 1; i++) {
  var a = P[i],
    b = P[i + 1];
  if (e.rnd() < 0.25) continue;
  var t0 = 0.05 + e.rnd() * 0.2,
    t1 = 0.75 + e.rnd() * 0.25;
  var ax = a[0] + (b[0] - a[0]) * t0,
    ay = a[1] + (b[1] - a[1]) * t0,
    bx = a[0] + (b[0] - a[0]) * t1,
    by = a[1] + (b[1] - a[1]) * t1;
  var th = 0.25 + e.rnd() * 0.5;
  var sl = Math.abs(b[1] - a[1]) / Math.abs(b[0] - a[0] + 0.001);
  if (sl > 1.2) th *= 0.4;
  g.fillStyle = "rgba(176,182,204," + (0.55 + e.rnd() * 0.3).toFixed(3) + ")";
  g.beginPath();
  g.moveTo(ax, ay - 0.08);
  g.quadraticCurveTo((ax + bx) / 2, (ay + by) / 2 - 0.15, bx, by - 0.08);
  g.lineTo(bx - 0.3, by + th * 0.6);
  g.quadraticCurveTo((ax + bx) / 2, (ay + by) / 2 + th, ax + 0.3, ay + th * 0.6);
  g.closePath();
  g.fill();
}
