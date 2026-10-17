var s = e.state || {},
  n = s.tissues == null ? 1 : s.tissues;
g.fillStyle = "#857b6b";
g.fillRect(-0.12, -0.1, 0.24, 0.1);
g.fillStyle = "#a49a86";
g.beginPath();
g.moveTo(-0.12, -0.1);
g.lineTo(0.12, -0.1);
g.lineTo(0.1, -0.14);
g.lineTo(-0.1, -0.14);
g.closePath();
g.fill();
g.fillStyle = "rgba(55,75,72,0.45)";
for (var i = 0; i < 6; i++) {
  g.fillRect(-0.105 + i * 0.04, -0.085, 0.012, 0.07);
}
g.fillStyle = "rgba(0,0,0,0.28)";
g.fillRect(-0.12, -0.1, 0.035, 0.1);
g.fillStyle = "rgba(255,200,150,0.15)";
g.fillRect(0.09, -0.1, 0.03, 0.1);
g.fillStyle = "#4a443a";
g.beginPath();
g.ellipse(0, -0.12, 0.05, 0.008, 0, 0, 6.283);
g.fill();
if (n > 0) {
  g.fillStyle = "#e6dfd2";
  g.beginPath();
  g.moveTo(-0.035, -0.12);
  g.quadraticCurveTo(-0.03, -0.2, 0.0, -0.215);
  g.quadraticCurveTo(0.02, -0.19, 0.045, -0.205);
  g.quadraticCurveTo(0.04, -0.15, 0.035, -0.12);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(110,100,92,0.3)";
  g.beginPath();
  g.moveTo(-0.035, -0.12);
  g.quadraticCurveTo(-0.03, -0.2, 0.0, -0.215);
  g.lineTo(-0.005, -0.12);
  g.closePath();
  g.fill();
}
