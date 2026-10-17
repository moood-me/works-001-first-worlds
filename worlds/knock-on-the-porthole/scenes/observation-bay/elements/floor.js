g.fillStyle = "#0a0c10";
g.fillRect(-8, -3, 16, 6);
let c = g.createRadialGradient(-0.3, -3, 0, -0.3, -3, 4.5);
c.addColorStop(0, "rgba(140,38,34,0.22)");
c.addColorStop(1, "rgba(140,38,34,0)");
g.fillStyle = c;
g.fillRect(-8, -3, 16, 6);
c = g.createRadialGradient(-2.4, -1, 0, -2.4, -1, 1.6);
c.addColorStop(0, "rgba(110,170,230,0.16)");
c.addColorStop(1, "rgba(110,170,230,0)");
g.fillStyle = c;
g.fillRect(-5, -3, 5, 5);
c = g.createRadialGradient(2.1, -1, 0, 2.1, -1, 1.3);
c.addColorStop(0, "rgba(255,150,70,0.12)");
c.addColorStop(1, "rgba(255,150,70,0)");
g.fillStyle = c;
g.fillRect(0, -3, 4.5, 4.5);
g.strokeStyle = "rgba(55,62,75,0.22)";
g.lineWidth = 0.015;
for (let x = -8; x <= 8; x += 0.2) {
  g.beginPath();
  g.moveTo(x, -3);
  g.lineTo(x, 3);
  g.stroke();
}
for (let y = -3; y <= 3; y += 0.2) {
  g.beginPath();
  g.moveTo(-8, y);
  g.lineTo(8, y);
  g.stroke();
}
g.strokeStyle = "rgba(0,0,0,0.75)";
g.lineWidth = 0.06;
for (let x = -8; x <= 8; x += 1.6) {
  g.beginPath();
  g.moveTo(x, -3);
  g.lineTo(x, 3);
  g.stroke();
}
g.strokeStyle = "rgba(200,170,60,0.1)";
g.lineWidth = 0.1;
g.setLineDash([0.3, 0.3]);
g.beginPath();
g.moveTo(-6, -2.7);
g.lineTo(6, -2.7);
g.stroke();
g.setLineDash([]);
