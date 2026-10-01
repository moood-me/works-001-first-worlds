var t = e.t,
  R = e.rnd;
var P = [
  [-5.2, -0.9],
  [-3.6, -0.86],
  [-2.4, -0.62],
  [-1.2, -0.4],
  [-0.6, -0.18],
  [0, 0.06],
  [0.5, 0.7],
];
function top(x) {
  for (var i = 0; i < P.length - 1; i++) {
    if (x <= P[i + 1][0]) {
      var u = (x - P[i][0]) / (P[i + 1][0] - P[i][0]);
      return P[i][1] + (P[i + 1][1] - P[i][1]) * u;
    }
  }
  return 0.7;
}
g.fillStyle = "#14171f";
g.beginPath();
g.moveTo(-5.2, 0.8);
g.lineTo(-5.2, -0.9);
g.bezierCurveTo(-4.2, -1.0, -3.4, -0.75, -2.4, -0.62);
g.bezierCurveTo(-1.6, -0.52, -1.0, -0.38, -0.6, -0.18);
g.bezierCurveTo(-0.2, -0.02, 0.25, 0.25, 0.5, 0.8);
g.closePath();
g.fill();
g.fillStyle = "rgba(130,128,160,0.10)";
g.beginPath();
g.moveTo(-2.3, -0.6);
g.bezierCurveTo(-1.6, -0.5, -1.0, -0.36, -0.62, -0.17);
g.lineTo(-0.75, -0.1);
g.bezierCurveTo(-1.2, -0.3, -1.7, -0.42, -2.3, -0.55);
g.closePath();
g.fill();
g.lineCap = "round";
for (var i = 0; i < 90; i++) {
  var x = -5.1 + R() * 4.9;
  var b = top(x) + 0.03;
  var h = 0.12 + R() * 0.38;
  var lean = (R() - 0.3) * 0.12;
  var s = Math.sin(t * 0.8 + x * 1.3) * 0.035 + Math.sin(t * 1.7 + i * 0.9) * 0.012;
  g.strokeStyle = R() < 0.15 ? "#2a2a30" : "#1a1e26";
  g.lineWidth = 0.01 + R() * 0.01;
  g.beginPath();
  g.moveTo(x, b);
  g.quadraticCurveTo(x + lean * 0.5, b - h * 0.6, x + lean + s, b - h);
  g.stroke();
}
