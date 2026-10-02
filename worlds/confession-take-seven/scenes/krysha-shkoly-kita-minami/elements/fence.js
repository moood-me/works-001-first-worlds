g.fillStyle = "#4a3a4c";
g.fillRect(-24, -0.35, 48, 0.36);
g.fillStyle = "rgba(255,180,140,0.35)";
g.fillRect(-24, -0.36, 48, 0.04);
g.strokeStyle = "rgba(60,78,76,0.3)";
g.lineWidth = 0.012;
g.beginPath();
for (let x = -26; x < 24; x += 0.14) {
  g.moveTo(x, -0.35);
  g.lineTo(x + 1.95, -2.3);
  g.moveTo(x + 1.95, -0.35);
  g.lineTo(x, -2.3);
}
g.stroke();
g.fillStyle = "#33404a";
for (let x = -24; x <= 24; x += 2.5) g.fillRect(x - 0.03, -2.35, 0.06, 2.0);
g.fillRect(-24, -2.37, 48, 0.05);
g.fillRect(-24, -1.35, 48, 0.03);
g.fillStyle = "rgba(255,190,140,0.5)";
g.fillRect(-24, -2.38, 48, 0.012);
