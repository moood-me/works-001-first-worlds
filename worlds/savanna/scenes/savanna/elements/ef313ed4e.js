g.fillStyle = "rgba(60,40,20,0.35)";
g.beginPath();
g.ellipse(1.4, 0.05, 1.9, 0.18, 0, 0, 6.2832);
g.fill();
let gr = g.createLinearGradient(-1, 0, 1, 0);
gr.addColorStop(0, "#c98a55");
gr.addColorStop(0.5, "#a0643a");
gr.addColorStop(1, "#6e4228");
g.fillStyle = gr;
g.save();
g.beginPath();
g.moveTo(-1.1, 0);
g.bezierCurveTo(-0.9, -0.5, -0.7, -0.9, -0.55, -1.3);
g.bezierCurveTo(-0.5, -1.7, -0.3, -2.0, -0.15, -2.4);
g.quadraticCurveTo(-0.05, -2.5, 0.05, -2.35);
g.bezierCurveTo(0.15, -2.0, 0.2, -1.8, 0.3, -1.75);
g.quadraticCurveTo(0.42, -1.95, 0.5, -1.7);
g.bezierCurveTo(0.6, -1.2, 0.8, -0.6, 1.15, 0);
g.closePath();
g.fill();
g.clip();
g.strokeStyle = "rgba(70,40,20,0.35)";
g.lineWidth = 0.03;
for (let i = 0; i < 16; i++) {
  const x = -0.8 + e.rnd() * 1.6,
    y = -e.rnd() * 1.8;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + 0.05, y - 0.2, x + (e.rnd() - 0.5) * 0.1, y - 0.35 - e.rnd() * 0.3);
  g.stroke();
}
g.restore();
g.strokeStyle = "#b89758";
g.lineWidth = 0.02;
g.lineCap = "round";
for (let i = 0; i < 30; i++) {
  const x = -1.3 + e.rnd() * 2.6,
    h = 0.2 + e.rnd() * 0.35;
  g.beginPath();
  g.moveTo(x, 0.02);
  g.quadraticCurveTo(x + 0.03, -h * 0.6, x + (e.rnd() - 0.4) * 0.2, -h);
  g.stroke();
}
