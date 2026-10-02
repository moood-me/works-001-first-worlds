var L = e.state.sconceLit == null ? 1 : e.state.sconceLit;
var sx = -0.4,
  sy = -1.95;
g.fillStyle = "#3a2c1e";
g.beginPath();
g.ellipse(sx, sy, 0.045, 0.075, 0, 0, 6.283);
g.fill();
g.fillStyle = "rgba(220,170,100," + (0.2 + 0.4 * L) + ")";
g.beginPath();
g.ellipse(sx, sy - 0.02, 0.018, 0.03, 0, 0, 6.283);
g.fill();
g.strokeStyle = "#4a3826";
g.lineWidth = 0.018;
g.lineCap = "round";
g.beginPath();
g.moveTo(sx, sy + 0.04);
g.bezierCurveTo(sx + 0.06, sy + 0.1, sx + 0.05, sy - 0.02, sx, sy - 0.07);
g.stroke();
g.fillStyle = "#4a4036";
g.beginPath();
g.moveTo(sx - 0.03, sy - 0.07);
g.quadraticCurveTo(sx - 0.12, sy - 0.12, sx - 0.11, sy - 0.22);
g.lineTo(sx + 0.11, sy - 0.22);
g.quadraticCurveTo(sx + 0.12, sy - 0.12, sx + 0.03, sy - 0.07);
g.closePath();
g.fill();
var sg = g.createRadialGradient(sx, sy - 0.15, 0, sx, sy - 0.15, 0.13);
sg.addColorStop(0, "rgba(255,228,180," + 0.9 * L + ")");
sg.addColorStop(1, "rgba(230,150,80," + 0.6 * L + ")");
g.fillStyle = sg;
g.fill();
g.strokeStyle = "rgba(120,80,50,0.35)";
g.lineWidth = 0.005;
g.beginPath();
for (var i = -2; i <= 2; i++) {
  g.moveTo(sx + i * 0.008, sy - 0.08);
  g.quadraticCurveTo(sx + i * 0.04, sy - 0.15, sx + i * 0.05, sy - 0.215);
}
g.stroke();
g.fillStyle = "rgba(255,240,205," + (0.12 + 0.8 * L) + ")";
g.beginPath();
g.ellipse(sx, sy - 0.22, 0.11, 0.016, 0, 0, 6.283);
g.fill();
if (L > 0.01) {
  e.light(sx, sy - 0.16, 3.0, "#ffad5c", 0.8 * L);
}
