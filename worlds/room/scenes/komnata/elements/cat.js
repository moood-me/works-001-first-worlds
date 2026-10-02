var t = e.t;
g.fillStyle = "#1c1612";
g.beginPath();
g.ellipse(0, -0.13, 0.18, 0.13, 0, 0, 6.283);
g.fill();
g.beginPath();
g.arc(-0.13, -0.24, 0.08, 0, 6.283);
g.fill();
g.beginPath();
g.moveTo(-0.19, -0.29);
g.lineTo(-0.18, -0.38);
g.lineTo(-0.13, -0.31);
g.moveTo(-0.1, -0.31);
g.lineTo(-0.07, -0.38);
g.lineTo(-0.06, -0.29);
g.fill();
g.strokeStyle = "#1c1612";
g.lineWidth = 0.035;
g.lineCap = "round";
g.beginPath();
g.moveTo(0.16, -0.06);
g.quadraticCurveTo(0.35, 0, 0.38 + Math.sin(t * 1.2) * 0.05, -0.12);
g.stroke();
if (t % 4 > 0.2) {
  g.fillStyle = "#d8c060";
  g.fillRect(-0.17, -0.26, 0.025, 0.015);
  g.fillRect(-0.12, -0.26, 0.025, 0.015);
}
e.at(-0.13, -0.3);
