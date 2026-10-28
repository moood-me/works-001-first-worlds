var T = Math.PI * 2,
  f = 0.85 + 0.1 * Math.sin(e.t * 2.3) + 0.05 * Math.sin(e.t * 5.7),
  cy = 0.22,
  rx = 0.19,
  ry = 0.16;
g.strokeStyle = "#2a1640";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0, -9.5);
g.lineTo(0, cy - ry);
g.stroke();
g.globalCompositeOperation = "lighter";
var gl = g.createRadialGradient(0, cy, 0, 0, cy, 0.9);
gl.addColorStop(0, "rgba(255,47,214,0.35)");
gl.addColorStop(1, "rgba(255,47,214,0)");
g.globalAlpha = f;
g.fillStyle = gl;
g.beginPath();
g.arc(0, cy, 0.9, 0, T);
g.fill();
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
var bd = g.createRadialGradient(-0.05, cy - 0.04, 0.01, 0, cy, rx * 1.05);
bd.addColorStop(0, "#ffe0f7");
bd.addColorStop(0.45, "#ff72dc");
bd.addColorStop(1, "#a8158f");
g.fillStyle = bd;
g.beginPath();
g.ellipse(0, cy, rx, ry, 0, 0, T);
g.fill();
g.strokeStyle = "rgba(110,10,95,0.4)";
g.lineWidth = 0.007;
for (var k = 1; k < 7; k++) {
  var yy = cy - ry + (k * ry * 2) / 7,
    q = (yy - cy) / ry,
    hw = rx * Math.sqrt(1 - q * q);
  g.beginPath();
  g.moveTo(-hw, yy);
  g.quadraticCurveTo(0, yy + 0.02, hw, yy);
  g.stroke();
}
g.fillStyle = "#2a1640";
g.fillRect(-0.075, cy - ry - 0.025, 0.15, 0.035);
g.fillRect(-0.06, cy + ry - 0.012, 0.12, 0.03);
e.light(0, cy, 0.7, "#ff2fd6", 0.7 * f);
