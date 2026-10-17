g.fillStyle = "#12181c";
g.fillRect(-5, -16.5, 14, 16.8);
g.fillStyle = "#1a2227";
g.fillRect(-5.2, -16.8, 14.2, 0.35);
g.fillStyle = "#0b0f12";
g.fillRect(-4, -3.6, 5, 3.6);
g.strokeStyle = "rgba(60,72,80,0.35)";
g.lineWidth = 0.03;
for (let y = -3.5; y < 0; y += 0.18) {
  g.beginPath();
  g.moveTo(-4, y);
  g.lineTo(1, y);
  g.stroke();
}
for (let fy = -14.5; fy < -4; fy += 3.3)
  for (let fx = -3.6; fx < 8; fx += 2.4) {
    g.fillStyle = e.rnd() > 0.92 ? "rgba(150,170,175,0.35)" : "#0b1013";
    g.fillRect(fx, fy, 1, 1.8);
  }
g.strokeStyle = "#0a0d0f";
g.lineWidth = 0.05;
for (let fy = -13; fy < -4; fy += 3.3) {
  g.beginPath();
  g.moveTo(-1.8, fy);
  g.lineTo(1.6, fy);
  g.stroke();
  g.beginPath();
  g.moveTo(-1.8, fy - 0.8);
  g.lineTo(1.6, fy - 0.8);
  g.stroke();
  for (let x = -1.8; x <= 1.6; x += 0.3) {
    g.beginPath();
    g.moveTo(x, fy);
    g.lineTo(x, fy - 0.8);
    g.stroke();
  }
  g.beginPath();
  g.moveTo(-1.6, fy);
  g.lineTo(1.4, fy + 3.3);
  g.stroke();
}
