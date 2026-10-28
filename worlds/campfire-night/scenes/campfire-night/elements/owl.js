var t = e.t,
  blink = t % 5 < 0.15;
g.fillStyle = "#1a1612";
g.fillRect(-1.6, 0, 3.2, 0.12);
g.beginPath();
g.ellipse(0, -0.2, 0.16, 0.22, 0, 0, 6.283);
g.fill();
g.beginPath();
g.moveTo(-0.13, -0.36);
g.lineTo(-0.1, -0.48);
g.lineTo(-0.03, -0.38);
g.moveTo(0.13, -0.36);
g.lineTo(0.1, -0.48);
g.lineTo(0.03, -0.38);
g.fill();
if (!blink) {
  g.fillStyle = "#e8c46a";
  g.beginPath();
  g.arc(-0.06, -0.3, 0.035, 0, 6.283);
  g.arc(0.06, -0.3, 0.035, 0, 6.283);
  g.fill();
}
e.at(0, -0.35);
