g.fillStyle = "#1a161a";
g.fillRect(-7.2, -4.2, 4.8, 5.7);
g.fillStyle = "rgba(70,58,70,0.28)";
for (var r = 0; r < 50; r++) {
  g.fillRect(-7.2, -4.1 + r * 0.077, 4.8, 0.008);
}
var wx = -5.15,
  wy = -3.4,
  ww = 0.75,
  wh = 1.8;
var wg = g.createRadialGradient(wx + ww / 2, wy + wh / 2, 0, wx + ww / 2, wy + wh / 2, 2.4);
wg.addColorStop(0, "rgba(120,128,185,0.22)");
wg.addColorStop(1, "rgba(120,128,185,0)");
g.fillStyle = wg;
g.fillRect(-7.2, -4.2, 4.8, 4.4);
var gl = g.createLinearGradient(0, wy, 0, wy + wh);
gl.addColorStop(0, "#323a66");
gl.addColorStop(0.7, "#6a5670");
gl.addColorStop(1, "#8a6468");
g.fillStyle = gl;
g.fillRect(wx, wy, ww, wh);
g.strokeStyle = "#110e12";
g.lineWidth = 0.06;
g.strokeRect(wx, wy, ww, wh);
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(wx + ww / 2, wy);
g.lineTo(wx + ww / 2, wy + wh);
for (var j = 1; j < 4; j++) {
  g.moveTo(wx, wy + (wh * j) / 4);
  g.lineTo(wx + ww, wy + (wh * j) / 4);
}
g.stroke();
g.fillStyle = "#2a2328";
g.fillRect(wx - 0.08, wy + wh, ww + 0.16, 0.06);
g.fillStyle = "#262025";
g.fillRect(-7.2, -0.04, 4.8, 0.14);
for (var i = 0; i < 9; i++) {
  var y = 0.12 + i * 0.14;
  g.fillStyle = "rgba(46,38,42," + (0.8 - i * 0.08) + ")";
  g.fillRect(-7.2, y, 3.2 - i * 0.22, 0.04);
}
var dk = g.createLinearGradient(0, 0, 0, 1.5);
dk.addColorStop(0, "rgba(8,6,8,0)");
dk.addColorStop(1, "rgba(8,6,8,0.9)");
g.fillStyle = dk;
g.fillRect(-7.2, 0, 4.8, 1.5);
g.lineCap = "round";
g.strokeStyle = "#120d0c";
g.lineWidth = 0.025;
g.beginPath();
for (var b = 0; b < 14; b++) {
  var bx = -4.6 - b * 0.17;
  var top = bx > -4.6 ? -0.95 : -0.95 + (-4.6 - bx) * 0.78;
  g.moveTo(bx, top);
  g.lineTo(bx, top + 0.9);
}
g.moveTo(-3.95, -0.95);
g.lineTo(-3.95, -0.05);
g.moveTo(-4.25, -0.95);
g.lineTo(-4.25, -0.05);
g.stroke();
g.strokeStyle = "#33201a";
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(-3.8, -0.97);
g.lineTo(-4.6, -0.97);
g.lineTo(-7.0, 0.9);
g.stroke();
g.strokeStyle = "rgba(255,175,105,0.22)";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-3.8, -1.0);
g.lineTo(-4.6, -1.0);
g.lineTo(-5.6, -0.22);
g.stroke();
g.fillStyle = "#2c1c15";
g.fillRect(-4.68, -1.08, 0.13, 1.08);
g.fillStyle = "rgba(255,175,105,0.15)";
g.fillRect(-4.57, -1.08, 0.02, 1.08);
