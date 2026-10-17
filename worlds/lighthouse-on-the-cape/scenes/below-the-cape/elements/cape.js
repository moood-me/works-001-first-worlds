var P = [
  [-48, 0.5],
  [-44, -0.8],
  [-40, -1.6],
  [-36, -1.2],
  [-32, -2.4],
  [-29, -2.0],
  [-27, -3.5],
  [-25.5, -6],
  [-24, -9.5],
  [-22.5, -12],
  [-20, -14.5],
  [-17, -16.2],
  [-13, -17.8],
  [-8, -19],
  [-2, -19.6],
  [4, -20.1],
  [9, -20.3],
  [17, -20.4],
  [24, -20.9],
  [32, -21.6],
  [42, -21.3],
  [55, -22.6],
  [70, -22.2],
  [90, -23.5],
  [115, -23.1],
  [150, -24.2],
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
var W = e.state.path_wetness || 0;
g.beginPath();
g.moveTo(-48, 1.5);
for (var i = 0; i < P.length; i++) g.lineTo(P[i][0], P[i][1]);
g.lineTo(150, 1.5);
g.closePath();
var gr = g.createLinearGradient(-30, 0, 60, 0);
gr.addColorStop(0, "#34405a");
gr.addColorStop(0.3, "#222a3e");
gr.addColorStop(1, "#151b2a");
g.fillStyle = gr;
g.fill();
g.save();
g.clip();
g.strokeStyle = "rgba(8,10,18,0.5)";
g.lineWidth = 0.3;
for (var i = 0; i < 26; i++) {
  var y0 = -e.rnd() * 22,
    x0 = -30 + e.rnd() * 120,
    L = 4 + e.rnd() * 14;
  g.beginPath();
  g.moveTo(x0, y0);
  g.lineTo(x0 + L, y0 + L * 0.18 + (e.rnd() - 0.5));
  g.stroke();
}
for (var i = 0; i < 34; i++) {
  var x = -28 + e.rnd() * 24,
    y = -e.rnd() * 18,
    w = 0.8 + e.rnd() * 2.2,
    h = 1 + e.rnd() * 3;
  g.fillStyle = "rgba(140,160,195," + (0.02 + e.rnd() * 0.04).toFixed(3) + ")";
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + w, y + h * 0.2);
  g.lineTo(x + w * 0.7, y + h);
  g.lineTo(x - w * 0.2, y + h * 0.8);
  g.closePath();
  g.fill();
}
g.strokeStyle = "rgba(6,8,15,0.55)";
g.lineWidth = 0.22;
for (var i = 0; i < 50; i++) {
  var x = -26 + e.rnd() * 150,
    y0 = hAt(x) * (0.05 + e.rnd() * 0.9);
  g.beginPath();
  g.moveTo(x, y0);
  g.lineTo(x + (e.rnd() - 0.5) * 1.5, y0 + 1 + e.rnd() * 4);
  g.stroke();
}
for (var i = 0; i < 40; i++) {
  var x = -30 + e.rnd() * 70,
    y = -e.rnd() * 6,
    h = 0.6 + e.rnd() * 2.5,
    w = 0.15 + e.rnd() * 0.2,
    a = (0.04 + e.rnd() * 0.08) * (0.4 + W);
  g.fillStyle = "rgba(150,170,205," + a.toFixed(3) + ")";
  g.fillRect(x, y - h, w, h);
}
var lg = g.createRadialGradient(13, -21, 0, 13, -21, 15);
lg.addColorStop(0, "rgba(255,170,100,0.16)");
lg.addColorStop(1, "rgba(255,170,100,0)");
g.fillStyle = lg;
g.fillRect(-5, -37, 36, 32);
var sh = g.createLinearGradient(0, -24, 0, 1);
sh.addColorStop(0, "rgba(8,10,18,0)");
sh.addColorStop(1, "rgba(8,10,18,0.45)");
g.fillStyle = sh;
g.fillRect(-50, -26, 200, 28);
g.restore();
g.lineCap = "round";
for (var i = 5; i < P.length - 1; i++) {
  var a = P[i],
    b = P[i + 1];
  var t0 = e.rnd() * 0.2,
    t1 = 0.75 + e.rnd() * 0.25,
    al = 0.35 + e.rnd() * 0.4,
    lw = 0.15 + e.rnd() * 0.25;
  g.strokeStyle = "rgba(170,184,212," + al.toFixed(3) + ")";
  g.lineWidth = lw;
  g.beginPath();
  g.moveTo(a[0] + (b[0] - a[0]) * t0, a[1] + (b[1] - a[1]) * t0 + 0.05);
  g.lineTo(a[0] + (b[0] - a[0]) * t1, a[1] + (b[1] - a[1]) * t1 + 0.05);
  g.stroke();
}
g.strokeStyle = "rgba(160,175,205,0.3)";
g.lineWidth = e.px * 1.2;
g.beginPath();
g.moveTo(P[0][0], P[0][1]);
for (var i = 1; i < P.length; i++) g.lineTo(P[i][0], P[i][1]);
g.stroke();
