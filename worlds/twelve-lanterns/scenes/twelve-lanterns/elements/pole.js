const sag = (x0, y0, x1, y1, d) => {
  g.beginPath();
  g.moveTo(x0, y0);
  g.quadraticCurveTo((x0 + x1) / 2, (y0 + y1) / 2 + d, x1, y1);
  g.stroke();
};
g.strokeStyle = "rgba(12,8,16,0.95)";
g.lineWidth = 0.035;
for (const [dx, dy] of [
  [-0.9, 0],
  [0, -0.2],
  [0.9, 0],
])
  sag(dx, -8.6 + dy, -70, -10 + dy * 2, 2.6 + dx * 0.3);
g.lineWidth = 0.05;
sag(-0.2, -6.4, -70, -6, 1.8);
g.fillStyle = "#120d18";
g.beginPath();
g.moveTo(-0.17, 0);
g.lineTo(-0.13, -9.4);
g.lineTo(0.13, -9.4);
g.lineTo(0.17, 0);
g.closePath();
g.fill();
g.fillRect(-1.1, -8.7, 2.2, 0.14);
for (const dx of [-0.9, 0.9]) {
  g.fillStyle = "#2a2430";
  g.fillRect(dx - 0.05, -8.85, 0.1, 0.17);
}
g.fillStyle = "#17121e";
g.fillRect(0.12, -7.1, 0.5, 0.8);
g.fillRect(0.14, -7.2, 0.46, 0.08);
g.fillStyle = "rgba(160,170,200,0.25)";
g.fillRect(-0.16, -2.9, 0.32, 0.9);
g.strokeStyle = "rgba(200,140,150,0.15)";
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(0.14, -9.3);
g.lineTo(0.17, 0);
g.stroke();
g.fillStyle = "#120d18";
for (let i = 0; i < 6; i++) g.fillRect(-0.24, -3.6 - i * 0.45, 0.07, 0.04);
