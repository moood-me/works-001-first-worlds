var t = e.t;
function sw(i) {
  return (
    0.035 * Math.sin(t * 0.55 + i * 1.37) + 0.02 * Math.sin(t * 0.97 + i * 0.71) + 0.008 * Math.sin(t * 2.13 + i * 2.3)
  );
}
g.fillStyle = "#4a5d33";
g.fillRect(-8, -0.05, 16, 0.95);
var gc = ["#4a5f33", "#5b7140", "#6f8250", "#87925e", "#9fa476", "#42552c"];
for (var i = 0; i < 300; i++) {
  var x = (e.rnd() - 0.5) * 16,
    y = e.rnd() * 0.85,
    h = 0.35 + e.rnd() * 0.75,
    l = (e.rnd() - 0.5) * 0.3,
    w = 0.01 + e.rnd() * 0.012,
    c = gc[(e.rnd() * 6) | 0];
  var s = sw(i) * h * 1.4;
  var tx = x + l * h + s,
    ty = y - h;
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(x - w / 2, y);
  g.quadraticCurveTo(x + (tx - x) * 0.4 - w / 4, y - h * 0.5, tx, ty);
  g.quadraticCurveTo(x + (tx - x) * 0.4 + w / 4, y - h * 0.5, x + w / 2, y);
  g.closePath();
  g.fill();
}
for (var i = 0; i < 26; i++) {
  var x = (e.rnd() - 0.5) * 16,
    y = e.rnd() * 0.6,
    h = 0.7 + e.rnd() * 0.45,
    s = sw(i + 50) * h * 1.6;
  var tx = x + s,
    ty = y - h;
  g.strokeStyle = "#8c8f62";
  g.lineWidth = 0.004;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + s * 0.3, y - h * 0.6, tx, ty);
  g.stroke();
  g.fillStyle = "rgba(176,168,120,0.85)";
  for (var k = 0; k < 7; k++) {
    var u = k / 7;
    var px = tx - s * 0.12 * u + (k % 2 ? 0.012 : -0.012),
      py = ty + u * 0.13;
    g.beginPath();
    g.ellipse(px, py, 0.006, 0.014, k % 2 ? 0.5 : -0.5, 0, 6.2832);
    g.fill();
  }
}
var P = [
  [-3.6, 0.4, 0.85, 0.05],
  [-2.2, 0.6, 0.95, 0.055],
  [-1.1, 0.3, 0.7, 0.045],
  [2.4, 0.5, 0.9, 0.05],
  [3.5, 0.2, 0.75, 0.05],
  [4.3, 0.6, 1.0, 0.055],
];
for (var i = 0; i < P.length; i++) {
  var p = P[i],
    s = sw(i + 80);
  var hx = p[0] + s * p[2],
    hy = p[1] - p[2],
    r = p[3];
  g.strokeStyle = "#5c7140";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(p[0], p[1]);
  g.quadraticCurveTo(p[0], p[1] - p[2] * 0.5, hx, hy);
  g.stroke();
  g.save();
  g.translate(hx, hy);
  g.rotate(s);
  g.fillStyle = "#8f1c16";
  g.beginPath();
  g.ellipse(r * 0.2, -r * 0.5, r * 0.95, r * 0.75, 0, 0, 6.2832);
  g.fill();
  var gr = g.createLinearGradient(-r, 0, r, 0);
  gr.addColorStop(0, "#ff7d4e");
  gr.addColorStop(1, "#a82418");
  g.fillStyle = gr;
  g.beginPath();
  g.moveTo(0, 0);
  g.bezierCurveTo(-r * 1.2, -r * 0.1, -r * 1.1, -r * 0.9, -r * 0.3, -r * 0.8);
  g.quadraticCurveTo(0, -r * 0.6, r * 0.3, -r * 0.8);
  g.bezierCurveTo(r * 1.1, -r * 0.9, r * 1.2, -r * 0.1, 0, 0);
  g.fill();
  g.fillStyle = "#24160f";
  g.beginPath();
  g.ellipse(0, -r * 0.72, r * 0.3, r * 0.09, 0, 0, 6.2832);
  g.fill();
  g.restore();
}
