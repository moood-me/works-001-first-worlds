var t = e.t;
g.fillStyle = "#0f0d14";
g.beginPath();
g.ellipse(0, -0.14, 0.14, 0.15, 0, 0, 6.283);
g.fill();
g.beginPath();
g.arc(0.02, -0.32, 0.08, 0, 6.283);
g.fill();
g.beginPath();
g.moveTo(-0.04, -0.37);
g.lineTo(-0.03, -0.46);
g.lineTo(0.02, -0.39);
g.moveTo(0.05, -0.38);
g.lineTo(0.08, -0.46);
g.lineTo(0.1, -0.37);
g.fill();
g.strokeStyle = "#0f0d14";
g.lineWidth = 0.035;
g.lineCap = "round";
g.beginPath();
g.moveTo(0.12, -0.04);
g.quadraticCurveTo(0.35, 0.05, 0.38 + Math.sin(t * 1.3) * 0.06, 0.25);
g.stroke();
if (t % 4 > 0.2) {
  g.fillStyle = "#e8d070";
  g.fillRect(-0.02, -0.34, 0.025, 0.015);
  g.fillRect(0.04, -0.34, 0.025, 0.015);
}
e.at(0.02, -0.35);
