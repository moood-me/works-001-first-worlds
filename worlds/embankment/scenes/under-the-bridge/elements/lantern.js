var L = e.state.lamp ? 1 : 0;
g.strokeStyle = "#15141a";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(0, -1.3);
g.lineTo(0, -0.3);
g.stroke();
for (var c = -1.25; c < -0.3; c += 0.07) {
  g.beginPath();
  g.ellipse(0, c, 0.012, 0.03, 0, 0, 6.283);
  g.stroke();
}
if (L) {
  var gl = g.createRadialGradient(0, 0.02, 0.02, 0, 0.02, 0.75);
  gl.addColorStop(0, "rgba(255,226,170,0.55)");
  gl.addColorStop(1, "rgba(255,200,130,0)");
  g.fillStyle = gl;
  g.fillRect(-0.75, -0.73, 1.5, 1.5);
}
g.fillStyle = L ? "#ffd99e" : "#2a2833";
g.beginPath();
g.moveTo(-0.13, -0.18);
g.lineTo(0.13, -0.18);
g.lineTo(0.1, 0.22);
g.lineTo(-0.1, 0.22);
g.closePath();
g.fill();
if (L) {
  var cg = g.createRadialGradient(0, 0.03, 0, 0, 0.03, 0.12);
  cg.addColorStop(0, "rgba(255,250,230,0.95)");
  cg.addColorStop(1, "rgba(255,220,160,0)");
  g.fillStyle = cg;
  g.fillRect(-0.12, -0.1, 0.24, 0.26);
}
g.fillStyle = "#17161c";
g.beginPath();
g.moveTo(-0.2, -0.18);
g.lineTo(0.2, -0.18);
g.lineTo(0.06, -0.32);
g.lineTo(-0.06, -0.32);
g.closePath();
g.fill();
g.fillRect(-0.12, 0.22, 0.24, 0.04);
g.beginPath();
g.moveTo(-0.05, 0.26);
g.lineTo(0.05, 0.26);
g.lineTo(0, 0.36);
g.closePath();
g.fill();
g.fillRect(-0.135, -0.18, 0.025, 0.4);
g.fillRect(0.11, -0.18, 0.025, 0.4);
g.fillRect(-0.012, -0.18, 0.024, 0.4);
g.fillRect(-0.12, 0.02, 0.24, 0.02);
if (L) e.light(0, 0.03, 6, "#ffd49a", 0.6);
