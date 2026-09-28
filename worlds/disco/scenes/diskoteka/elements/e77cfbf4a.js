var T = Math.PI * 2,
  sq = 0.3 + 0.7 * Math.abs(Math.cos(e.t * 0.35)),
  cy = 0.34,
  f = 0.88 + 0.08 * Math.sin(e.t * 1.9) + 0.04 * Math.sin(e.t * 4.3);
g.strokeStyle = "#2a1640";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0, -9.5);
g.lineTo(0, cy - 0.28);
g.stroke();
g.globalCompositeOperation = "lighter";
var gl = g.createRadialGradient(0, cy, 0, 0, cy, 1);
gl.addColorStop(0, "rgba(255,242,61,0.32)");
gl.addColorStop(1, "rgba(255,242,61,0)");
g.globalAlpha = f;
g.fillStyle = gl;
g.beginPath();
g.arc(0, cy, 1, 0, T);
g.fill();
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
g.beginPath();
for (var k = 0; k < 16; k++) {
  var a = -Math.PI / 2 + (k / 16) * T,
    r = k % 2 ? 0.12 : 0.28;
  var px = Math.cos(a) * r * sq,
    py = cy + Math.sin(a) * r;
  if (k == 0) g.moveTo(px, py);
  else g.lineTo(px, py);
}
g.closePath();
var sg = g.createRadialGradient(0, cy, 0.01, 0, cy, 0.28);
sg.addColorStop(0, "#fffbe0");
sg.addColorStop(0.5, "#ffe95a");
sg.addColorStop(1, "#c9a21a");
g.fillStyle = sg;
g.fill();
g.strokeStyle = "rgba(120,90,10,0.5)";
g.lineWidth = 0.008;
g.stroke();
g.strokeStyle = "#2a1640";
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(0, cy + 0.28);
g.lineTo(0.02 * Math.sin(e.t * 1.3), cy + 0.5);
g.stroke();
e.light(0, cy, 0.75, "#fff23d", 0.7 * f);
