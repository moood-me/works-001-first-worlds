var T = Math.PI * 2,
  cx = e.aspect * 0.82,
  cy = 0.1,
  r = 0.014;
var gl = g.createRadialGradient(cx, cy, r, cx, cy, r * 5);
gl.addColorStop(0, "rgba(124,255,218,0.28)");
gl.addColorStop(1, "rgba(124,255,218,0)");
g.fillStyle = gl;
g.beginPath();
g.arc(cx, cy, r * 5, 0, T);
g.fill();
g.save();
g.translate(cx, cy);
g.rotate(-0.35);
g.strokeStyle = "rgba(200,255,240,0.55)";
g.lineWidth = r * 0.18;
g.beginPath();
g.ellipse(0, 0, r * 2.1, r * 0.55, 0, Math.PI, 2 * Math.PI);
g.stroke();
var d = g.createRadialGradient(-r * 0.4, -r * 0.4, r * 0.1, 0, 0, r);
d.addColorStop(0, "#d8fff3");
d.addColorStop(1, "#3aa88e");
g.fillStyle = d;
g.beginPath();
g.arc(0, 0, r, 0, T);
g.fill();
g.beginPath();
g.ellipse(0, 0, r * 2.1, r * 0.55, 0, 0, Math.PI);
g.stroke();
g.restore();
