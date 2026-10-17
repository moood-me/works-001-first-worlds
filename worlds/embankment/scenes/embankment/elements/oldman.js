var t = e.t;
g.fillStyle = "#1a1820";
g.beginPath();
g.moveTo(-0.25, -0.5);
g.quadraticCurveTo(-0.32, -1.0, -0.08, -1.15);
g.lineTo(0.12, -1.12);
g.quadraticCurveTo(0.2, -0.8, 0.18, -0.5);
g.closePath();
g.fill();
g.fillRect(-0.05, -0.5, 0.5, 0.1);
g.fillRect(0.38, -0.5, 0.09, 0.5);
g.beginPath();
g.arc(0.03, -1.27, 0.12, 0, 6.283);
g.fill();
g.fillRect(-0.12, -1.4, 0.3, 0.06);
g.fillRect(-0.06, -1.46, 0.18, 0.07);
var th = Math.sin(t * 0.9) * 0.5 + 0.5;
g.strokeStyle = "#1a1820";
g.lineWidth = 0.07;
g.lineCap = "round";
g.beginPath();
g.moveTo(0.05, -0.95);
g.lineTo(0.35, -0.7 - th * 0.12);
g.stroke();
for (var i = 0; i < 6; i++) {
  var px = -1.6 + i * 0.55 + (e.rnd() - 0.5) * 0.2,
    ph = e.rnd() * 6.28,
    pk = Math.max(0, Math.sin(t * 2.2 + ph)) * 0.05;
  g.fillStyle = "#4a4a58";
  g.beginPath();
  g.ellipse(px, -0.1, 0.11, 0.07, 0, 0, 6.283);
  g.fill();
  g.beginPath();
  g.arc(px + 0.1, -0.15 + pk, 0.045, 0, 6.283);
  g.fill();
}
e.at(0.03, -1.3);
