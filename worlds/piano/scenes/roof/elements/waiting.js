var s = e.state.someoneWaiting || 0;
if (s < 0.01) return;
var t = e.t,
  w = e.state.wind == null ? 0.4 : e.state.wind;
var gw = w * (0.6 + 0.4 * Math.sin(t * 0.53) * Math.sin(t * 0.21 + 0.7)) + 0.04 * Math.sin(t * 0.9);
g.globalAlpha = Math.min(1, s);
var br = 0.008 * Math.sin(t * 1.1) + 0.003 * Math.sin(t * 0.47);
var hx = 0.015 * Math.sin(t * 0.13) + 0.01 * Math.sin(t * 0.071 + 1);
var hy = -1.2 - br;
g.fillStyle = "#1e2032";
g.beginPath();
g.moveTo(-0.24, -0.42);
g.quadraticCurveTo(-0.25, -0.75, -0.21, -0.95 - br);
g.quadraticCurveTo(-0.17, -1.04 - br, -0.06, -1.06 - br);
g.lineTo(0.06, -1.06 - br);
g.quadraticCurveTo(0.17, -1.04 - br, 0.21, -0.95 - br);
g.quadraticCurveTo(0.25, -0.75, 0.24, -0.42);
g.quadraticCurveTo(0, -0.39, -0.24, -0.42);
g.fill();
g.fillStyle = "rgba(8,8,18,0.35)";
g.beginPath();
g.moveTo(0.02, -1.0 - br);
g.quadraticCurveTo(0.08, -0.7, 0.05, -0.42);
g.lineTo(0.24, -0.42);
g.quadraticCurveTo(0.25, -0.75, 0.21, -0.95 - br);
g.closePath();
g.fill();
g.fillStyle = "#16161f";
g.beginPath();
g.ellipse(hx, hy, 0.092, 0.11, 0, 0, 6.283);
g.fill();
g.beginPath();
g.arc(hx + 0.005, hy - 0.1, 0.04, 0, 6.283);
g.fill();
g.strokeStyle = "#16161f";
g.lineWidth = 0.008;
g.beginPath();
for (var k = 0; k < 3; k++) {
  var a = hy - 0.06 + k * 0.03;
  g.moveTo(hx + 0.08, a);
  g.quadraticCurveTo(
    hx + 0.12 + gw * 0.06,
    a - 0.02 + 0.01 * Math.sin(t * 3 + k),
    hx + 0.1 + gw * 0.14 + 0.02 * Math.sin(t * 2.3 + k * 2),
    a + 0.01,
  );
}
g.stroke();
g.fillStyle = "#74423f";
g.beginPath();
g.ellipse(hx * 0.5, -1.04 - br, 0.12, 0.045, 0, 0, 6.283);
g.fill();
var fl = Math.sin(t * 2.2) * 0.03 * w + Math.sin(t * 3.7 + 1) * 0.015 * w;
var ex = 0.12 + 0.32 * gw,
  ey = -0.72 - 0.3 * gw + fl;
g.beginPath();
g.moveTo(0.06, -1.06 - br);
g.bezierCurveTo(0.14 + 0.1 * gw, -1.0 + fl, ex - 0.08, ey - 0.08 + fl, ex, ey);
g.lineTo(ex - 0.05, ey + 0.05);
g.bezierCurveTo(ex - 0.12, ey - 0.03, 0.1 + 0.08 * gw, -0.94, 0.03, -1.0 - br);
g.closePath();
g.fill();
g.strokeStyle = "rgba(200,175,200,0.3)";
g.lineWidth = 0.01;
g.beginPath();
g.arc(hx, hy, 0.092, 3.6, 5.4);
g.stroke();
g.beginPath();
g.moveTo(-0.21, -0.95 - br);
g.quadraticCurveTo(-0.17, -1.04 - br, -0.06, -1.06 - br);
g.stroke();
e.at(hx, hy - 0.12);
g.globalAlpha = 1;
