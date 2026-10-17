g.fillStyle = "#141419";
g.fillRect(0, -10, 18, 10.3);
g.fillStyle = "#0d0d11";
g.fillRect(-0.2, -10.3, 18.2, 0.4);
g.fillRect(0, -10, 0.35, 10.3);
for (let fl = 0; fl < 2; fl++)
  for (let c = 0; c < 4; c++) {
    g.fillStyle = "#09090d";
    g.fillRect(1.6 + c * 3.8, -9 + fl * 3.2, 1.3, 2);
  }
g.fillStyle = "#101014";
g.fillRect(1.2, -3.4, 6, 3.4);
g.strokeStyle = "rgba(60,60,70,0.25)";
g.lineWidth = 0.05;
for (let y = -3.3; y < 0; y += 0.18) {
  g.beginPath();
  g.moveTo(1.2, y);
  g.lineTo(7.2, y);
  g.stroke();
}
