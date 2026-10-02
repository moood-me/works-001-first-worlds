var T = Math.PI * 2;
var P = [
  [-3.0, 0.22],
  [-2.75, 0.15],
  [-2.45, 0.3],
  [-0.35, 0.18],
  [-0.1, 0.27],
  [0.2, 0.14],
  [2.3, 0.2],
  [2.6, 0.32],
  [2.95, 0.16],
];
for (var i = 0; i < P.length; i++) {
  var x = P[i][0],
    h = P[i][1];
  var p = 0.7 + 0.3 * Math.sin(e.t * 1.3 + i * 1.7);
  g.strokeStyle = "#cfe9e2";
  g.lineWidth = 0.03;
  g.beginPath();
  g.moveTo(x, 0);
  g.quadraticCurveTo(x + 0.02, -h * 0.5, x, -h);
  g.stroke();
  var gr = g.createRadialGradient(x, -h, 0, x, -h, 0.16);
  gr.addColorStop(0, "rgba(190,255,240," + p + ")");
  gr.addColorStop(1, "rgba(90,200,190," + 0.5 * p + ")");
  g.fillStyle = gr;
  g.beginPath();
  g.ellipse(x, -h + 0.01, 0.13, 0.085, 0, Math.PI, T);
  g.fill();
  e.light(x, -h, 0.6, "#7ff0dc", 0.55 * p);
}
