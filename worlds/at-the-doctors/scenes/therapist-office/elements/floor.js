var s = e.state || {},
  on = s.lamp == null ? 1 : s.lamp;
g.fillStyle = "#33251c";
g.fillRect(-13, -6.5, 26, 13);
for (var x = -13; x < 13; x += 0.16) {
  var sh = e.rnd(),
    al = 0.12 + 0.22 * e.rnd();
  g.fillStyle = sh > 0.5 ? "rgba(70,50,36," + al.toFixed(2) + ")" : "rgba(24,17,12," + al.toFixed(2) + ")";
  g.fillRect(x, -6.5, 0.16, 13);
  g.fillStyle = "rgba(10,7,5,0.55)";
  g.fillRect(x, -6.5, 0.008, 13);
  var j = -6.5 + e.rnd() * 1.6;
  while (j < 6.5) {
    g.fillRect(x, j, 0.16, 0.008);
    j += 1.2 + e.rnd() * 1.2;
  }
}
var cg = g.createLinearGradient(0, -0.4, 0, 0.6);
cg.addColorStop(0, "rgba(8,6,4,0.6)");
cg.addColorStop(1, "rgba(8,6,4,0)");
g.fillStyle = cg;
g.fillRect(-13, -0.4, 26, 1);
g.save();
g.translate(-0.5, 3.7);
g.fillStyle = "#4a2c2a";
g.fillRect(-1.7, -1.2, 3.4, 2.4);
g.strokeStyle = "#6e5a3c";
g.lineWidth = 0.06;
g.strokeRect(-1.58, -1.08, 3.16, 2.16);
g.strokeStyle = "#2f4442";
g.lineWidth = 0.12;
g.strokeRect(-1.45, -0.95, 2.9, 1.9);
g.fillStyle = "#3a2322";
g.fillRect(-1.3, -0.8, 2.6, 1.6);
g.fillStyle = "#5a3a2e";
g.beginPath();
g.moveTo(0, -0.6);
g.lineTo(0.8, 0);
g.lineTo(0, 0.6);
g.lineTo(-0.8, 0);
g.closePath();
g.fill();
g.fillStyle = "#2f4442";
g.beginPath();
g.moveTo(0, -0.3);
g.lineTo(0.4, 0);
g.lineTo(0, 0.3);
g.lineTo(-0.4, 0);
g.closePath();
g.fill();
g.fillStyle = "#6e5a3c";
g.beginPath();
g.arc(0, 0, 0.06, 0, 6.283);
g.fill();
g.globalAlpha = 0.5;
g.fillStyle = "#7a6648";
for (var k = -1.65; k < 1.7; k += 0.06) {
  g.fillRect(k, -1.26, 0.015, 0.06);
  g.fillRect(k, 1.2, 0.015, 0.06);
}
g.globalAlpha = 1;
g.restore();
var lp = g.createRadialGradient(2.4, 2.3, 0.05, 2.4, 2.3, 3);
lp.addColorStop(0, "rgba(255,180,110," + (0.32 * on).toFixed(3) + ")");
lp.addColorStop(0.5, "rgba(220,140,80," + (0.1 * on).toFixed(3) + ")");
lp.addColorStop(1, "rgba(220,140,80,0)");
g.fillStyle = lp;
g.fillRect(-2, -1, 9, 8);
var wp = g.createRadialGradient(-2.4, 1.6, 0.05, -2.4, 1.6, 1.4);
wp.addColorStop(0, "rgba(130,150,180,0.08)");
wp.addColorStop(1, "rgba(130,150,180,0)");
g.fillStyle = wp;
g.fillRect(-5, -1, 5, 5);
g.fillStyle = "rgba(8,5,3,0.4)";
[
  [0.95, 3.05, 0.55, 0.35],
  [-1.65, 4.6, 0.6, 0.45],
  [-0.3, 3.55, 0.32, 0.28],
].forEach(function (q) {
  g.beginPath();
  g.ellipse(q[0], q[1], q[2], q[3], 0, 0, 6.283);
  g.fill();
});
var ng = g.createLinearGradient(0, 2, 0, 6.5);
ng.addColorStop(0, "rgba(10,8,6,0)");
ng.addColorStop(1, "rgba(10,8,6,0.6)");
g.fillStyle = ng;
g.fillRect(-13, 2, 26, 4.5);
