var t = e.t,
  P = 53,
  ph = ((t + 20) % P) / P;
if (ph > 0.55) return;
var u = ph / 0.55,
  y = -2.9 + u * 2.88,
  x = -1.1 + u * 1.0 + Math.sin(u * 8.5) * 0.28,
  rot = Math.sin(u * 8.5 + 1.2) * 1.0 + 0.4;
g.globalAlpha = Math.min(1, u * 10, (1 - u) * 5) * 0.85;
g.save();
g.translate(x, y);
g.rotate(rot);
g.fillStyle = "#d4c8c2";
g.beginPath();
g.moveTo(0, -0.075);
g.quadraticCurveTo(0.03, -0.01, 0.006, 0.07);
g.quadraticCurveTo(-0.026, 0, 0, -0.075);
g.fill();
g.strokeStyle = "rgba(250,240,230,0.7)";
g.lineWidth = e.px;
g.beginPath();
g.moveTo(0, -0.075);
g.lineTo(0.004, 0.085);
g.stroke();
g.restore();
g.globalAlpha = 1;
