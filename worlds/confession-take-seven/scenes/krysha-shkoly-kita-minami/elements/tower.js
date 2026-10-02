const c = "#3a2c40";
g.strokeStyle = c;
g.lineWidth = 0.09;
g.beginPath();
for (const x of [-1.1, 1.1]) {
  g.moveTo(x, 0);
  g.lineTo(x * 0.9, -3.2);
}
g.moveTo(-1.05, -0.2);
g.lineTo(0.95, -3.0);
g.moveTo(1.05, -0.2);
g.lineTo(-0.95, -3.0);
g.moveTo(-1.05, -1.6);
g.lineTo(1.05, -1.6);
g.stroke();
g.fillStyle = c;
g.fillRect(-1.5, -3.32, 3, 0.12);
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-1.5, -3.75);
g.lineTo(1.5, -3.75);
for (let x = -1.5; x <= 1.5; x += 0.5) {
  g.moveTo(x, -3.3);
  g.lineTo(x, -3.75);
}
g.stroke();
const gr = g.createLinearGradient(-1.3, 0, 1.3, 0);
gr.addColorStop(0, "#3a2c42");
gr.addColorStop(0.7, "#5c4258");
gr.addColorStop(0.94, "#d98f78");
gr.addColorStop(1, "#6a4a5a");
g.fillStyle = gr;
g.fillRect(-1.3, -6.1, 2.6, 2.8);
g.fillStyle = "rgba(30,20,34,0.35)";
g.fillRect(-1.3, -5.2, 2.6, 0.06);
g.fillRect(-1.3, -4.2, 2.6, 0.06);
g.fillStyle = "#33263a";
g.beginPath();
g.moveTo(-1.42, -6.08);
g.lineTo(0, -6.75);
g.lineTo(1.42, -6.08);
g.closePath();
g.fill();
g.strokeStyle = "rgba(255,170,130,0.6)";
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(0, -6.75);
g.lineTo(1.42, -6.08);
g.stroke();
g.fillStyle = "rgba(240,220,215,0.45)";
g.font = "bold 0.7px serif";
g.textAlign = "center";
g.textBaseline = "middle";
g.fillText("水", -0.2, -4.7);
g.strokeStyle = c;
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(1.0, -3.3);
g.lineTo(1.0, -6.1);
g.moveTo(1.22, -3.3);
g.lineTo(1.22, -6.1);
for (let y = -3.5; y > -6.1; y -= 0.3) {
  g.moveTo(1.0, y);
  g.lineTo(1.22, y);
}
g.stroke();
