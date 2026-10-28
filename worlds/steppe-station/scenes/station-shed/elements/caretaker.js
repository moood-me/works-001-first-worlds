var S = e.state || {},
  t = e.t;
if (S.someone_present !== "caretaker-shadow") return;
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
var b = 1 + 0.005 * Math.sin(t * 1.6) + 0.003 * Math.sin(t * 0.71);
var sw = 0.01 * Math.sin(t * 0.23) + 0.006 * Math.sin(t * 0.61 + 1);
var hg = g.createRadialGradient(sw, -1.5, 0, sw, -1.5, 0.9);
hg.addColorStop(0, "rgba(255,190,120,0.16)");
hg.addColorStop(1, "rgba(255,170,110,0)");
g.fillStyle = hg;
g.fillRect(-0.4, -1.95, 0.8, 2);
g.beginPath();
FP.forEach(function (p, i) {
  var x = p[0] + sw * p[1] * 0.4,
    y = -p[1] * (p[1] > 0.8 ? b : 1);
  i ? g.lineTo(x, y) : g.moveTo(x, y);
});
g.closePath();
g.fillStyle = "#1b1310";
g.fill();
g.strokeStyle = "rgba(255,196,128,0.5)";
g.lineWidth = e.px * 1.6;
g.stroke();
g.fillStyle = "#1b1310";
g.beginPath();
g.ellipse(-0.07 + sw * 0.7, -1.7 * b, 0.085, 0.012, 0, 0, 6.283);
g.fill();
g.strokeStyle = "rgba(60,44,34,0.5)";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0.21 + sw * 0.35, -0.9);
g.lineTo(0.17 + sw * 0.3, -0.86);
g.stroke();
e.at(sw * 0.7, -1.8);
