var T = Math.PI * 2,
  f = 0.86 + 0.09 * Math.sin(e.t * 2.9 + 1) + 0.05 * Math.sin(e.t * 6.1),
  t0 = 0.06,
  t1 = 0.52,
  w = 0.13,
  m = (t0 + t1) / 2;
g.strokeStyle = "#2a1640";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0, -9.5);
g.lineTo(0, t0);
g.stroke();
g.globalCompositeOperation = "lighter";
var gl = g.createRadialGradient(0, m, 0, 0, m, 0.9);
gl.addColorStop(0, "rgba(41,224,255,0.3)");
gl.addColorStop(1, "rgba(41,224,255,0)");
g.globalAlpha = f;
g.fillStyle = gl;
g.beginPath();
g.arc(0, m, 0.9, 0, T);
g.fill();
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
var bg = g.createLinearGradient(-w, 0, w, 0);
bg.addColorStop(0, "#17738f");
bg.addColorStop(0.4, "#d6fbff");
bg.addColorStop(1, "#146a85");
g.fillStyle = bg;
g.beginPath();
g.moveTo(-w * 0.8, t0 + 0.03);
g.quadraticCurveTo(-w * 1.15, m, -w * 0.8, t1 - 0.03);
g.lineTo(w * 0.8, t1 - 0.03);
g.quadraticCurveTo(w * 1.15, m, w * 0.8, t0 + 0.03);
g.closePath();
g.fill();
g.strokeStyle = "rgba(10,70,90,0.35)";
g.lineWidth = 0.006;
for (var k = -2; k <= 2; k++) {
  var xx = k * w * 0.38;
  g.beginPath();
  g.moveTo(xx * 0.9, t0 + 0.04);
  g.quadraticCurveTo(xx * 1.2, m, xx * 0.9, t1 - 0.04);
  g.stroke();
}
g.fillStyle = "#2a1640";
g.fillRect(-w * 0.9, t0, w * 1.8, 0.035);
g.fillRect(-w * 0.9, t1 - 0.035, w * 1.8, 0.035);
g.strokeStyle = "#1d5f75";
g.lineWidth = 0.006;
for (var k = 0; k < 6; k++) {
  var x0 = -0.04 + k * 0.016;
  g.beginPath();
  g.moveTo(x0, t1);
  g.lineTo(x0 + 0.025 * Math.sin(e.t * 1.1 + k * 0.4), t1 + 0.16 + 0.01 * (k % 3));
  g.stroke();
}
e.light(0, m, 0.7, "#29e0ff", 0.7 * f);
